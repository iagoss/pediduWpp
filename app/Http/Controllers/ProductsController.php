<?php

namespace App\Http\Controllers;

use App\ProductsModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Facades\JWTAuth;

class ProductsController extends Controller
{
    public static function Categories(){
        return ProductsModel::Categories();
    }

    public static function Products(Request $request){
        if(isset($request->all()['category']) && $request->all()['category'] != 'all'){
            return ProductsModel::Products($request->all()['category']);
        }

        return ProductsModel::Products();
    }

    public static function  Product(Request $request){
        if(isset($request->all()['id']) && $request->all()['id'] != 'all'){
            return ProductsModel::Product($request->all()['id']);
        }

        return json_encode(array('error' => array('message' => 'Algo de errado não está certo!')));
    }

    public static function Coupon(Request $request) {
        if(!isset($request->all()['cupom']) || !isset($request->all()['price'])){
            return array('error' => array('message' => 'Preencha o campo corretamente!'));
        }

        // user informations
        $token = JWTAuth::getToken();
        $user = JWTAuth::setToken($token)->toUser();

        // coupon infomations
        $coupon = DB::table('discount_coupon')
            ->where('name', $request->all()['cupom'])
            ->where('status', 'active')
            ->orderByDesc('id')
            ->get();

        // coupon not exist
        if(count($coupon) < 1) {
            return array('error' => array('message' => 'Cupom não encontrado!'));
        }

        $coupon = $coupon[0];

        // min order price not enough
        if($coupon->price_min > $request->all()['price']) {
            return array('error' => array('message' => 'O valor minimo de compra para utiliza esse cupom é R$' . $coupon->price_min));
        }

        // check availability
        $availability = DB::table('discount_coupon_usage')
            ->where('coupon_id', $coupon->id)
            ->get();

        if($coupon->usage_max != 0 && count($availability) >= $coupon->usage_max) {
            return array('error' => array('message' => 'Esse cupom não está mais disponível!!!'));
        }

        // check multiple usage
        if($coupon->multiple_usage == 'yes') {
            $UserUsages = DB::table('discount_coupon_usage')
                ->where('coupon_id', $coupon->id)
                ->where('user_id', $user->id)
                ->get();

            if(count($UserUsages) > 0) {
                return array('error' => array('message' => 'Você não pode mais usar cupom!'));
            }
        }

        // check availability date
        if($coupon->initial_date != null && $coupon->initial_date != 0 && strtotime($coupon->initial_date) > time()) {
            return array('error' => array('message' => 'Esse cupom ainda não está disponível!'));
        }

        if($coupon->final_date != null && $coupon->final_date != 0 && time() > strtotime($coupon->final_date)) {
            return array('error' => array('message' => 'Esse cupom não está mais disponível!!'));
        }

        //coupon available for use)
        session()->put('cupom', $coupon->id);
        session()->save();

        if($coupon->discount_type == 'money') {
            $discount = "R$ " . $coupon->discount;
        }else{
            $discount = $coupon->discount.'%';
        }

        return array(
            'success' => array(
                'message' => "Cupom adicionado com sucesso! Você receberá ". $discount . " de descontos.",
                'coupon' => array(
                    'type' => $coupon->discount_type,
                    'value' => $coupon->discount,
                    'name' => $coupon->name,
                    'id' => session()->get('cupom'),
                )
            )
        );
    }

    public static function Buy(Request $request) {
        if(!isset($request->all()['delivery_option']) || !isset($request->all()['payment_option']) || !isset($request->all()['purchase'])){
            return array('error' => array('message' => 'Selecione corretamente todos os campos'));
        }

        //is opened shop
        $configurations = DB::table('configurations')
            ->select('opened', 'min_price')
            ->first();

        if($configurations->opened == 'no'){
            return array('error' => array('message' => 'A loja encontra-se fechada para pedidos no momento.'));
        }

        //check region
        if($request->all()['delivery_option'] === 1){
            if(isset($request->all()['address_region_id'])){
                $checkRegion = DB::table('delivery_regions')
                    ->where('id', $request->all()['address_region_id'])
                    ->get();

                if(count($checkRegion) === 0){
                    return array('error' => array('message' => 'Informe uma região de entrega válida!'));
                }
            }else{
                return array('error' => array('message' => 'Informe uma região de entrega válida!'));
            }
        }


        // user informations
        $token = JWTAuth::getToken();
        $user = JWTAuth::setToken($token)->toUser();

        //check last order date
        $lastUserOrder = DB::table('orders')
            ->where('id_user', $user->id)
            ->orderByDesc('id')
            ->limit(1)
            ->get();

        if(count($lastUserOrder) > 0 && strtotime($lastUserOrder[0]->created_at) > time() - 20) {
            return array('error' => array('message' => 'Aguarde um momento para realizar um novo pedido!'));
        }

        //update user delivery infomations
        if($request->all()['delivery_option'] === 1 || isset($request->all()['name'])){
            if($request->all()['delivery_option'] !== 1){
                $update = DB::table('users')
                    ->where('id', $user->id)
                    ->update([
                        'name' => isset($request->all()['name']) ? $request->all()['name'] : $user->name,
                    ]);
            }else{
                $update = DB::table('users')
                    ->where('id', $user->id)
                    ->update([
                        'name' => isset($request->all()['name']) ? $request->all()['name'] : $user->name,
                        'address_name' => $request->all()['address_name'],
                        'address_number' => $request->all()['address_number'],
                        'address_reference' => $request->all()['address_reference'],
                        'address_region_id' => $request->all()['address_region_id']
                    ]);

                $delivery_region = DB::table('delivery_regions')
                    ->where('id', $request->all()['address_region_id'])
                    ->first();

                $delivery_price = $delivery_region->price;
            }
        }

        //buyed
        $purchases = ($request->all()['purchase']);
        $price = 0;

        $purchaseObject = array();
        $index = 0;

        foreach ($purchases as $purchase) {
            $product = DB::table('products')
                ->where('id', $purchase['product_id'])
                ->first();

            $internalIndex = 0;
            $purchaseObject[$index]['product_id'] = $purchase['product_id'];
            $purchaseObject[$index]['product_optional'] = $purchase['client_optional'];
            $purchaseObject[$index]['product_quantity'] = $purchase['product_quantity'];

            $price = $price + ($product->price * $purchase['product_quantity']);

            foreach ($purchase['client_additional'] as $client_additional) {
                if($client_additional['hight_price'] == 'no'){
                    foreach ($client_additional['selecteds'] as $additional) {
                        $purchaseObject[$index]['additional'][$internalIndex]['name'] = $additional['name'];
                        $purchaseObject[$index]['additional'][$internalIndex]['price'] = $additional['price'];
                        $purchaseObject[$index]['additional'][$internalIndex]['qty'] = $additional['qty'];
                        $purchaseObject[$index]['additional'][$internalIndex]['hight_price'] = $client_additional['hight_price'];

                        $price = $price + (($additional['price'] * $additional['qty']) * $purchase['product_quantity']);
                        $internalIndex++;
                    }
                }else{
                    $prices = array();

                    foreach ($client_additional['selecteds'] as $additional) {
                        $purchaseObject[$index]['additional'][$internalIndex]['name'] = $additional['name'];
                        $purchaseObject[$index]['additional'][$internalIndex]['price'] = $additional['price'];
                        $purchaseObject[$index]['additional'][$internalIndex]['qty'] = $additional['qty'];
                        $purchaseObject[$index]['additional'][$internalIndex]['hight_price'] = $client_additional['hight_price'];

                        array_push($prices, $additional['price']);
                        $internalIndex++;
                    }

                    usort($prices, function($a, $b) {
                        return $a < $b ? 1 : -1;
                    });

                    $price = $price + ($prices[0] * $purchase['product_quantity']);
                }
            }

            $index++;
        }

        //check minimum price
        if($configurations->min_price > $price){
            return array('error' => array('message' => 'O valor minímo para realizar um pedido é de R$ ' . $configurations->min_price));
        }

        //check coupon
        $hasCoupon = session()->has('cupom');

        //create order
        $uniqueOrderId = time();
        $uniqueOrderPin = substr(uniqid(), -6);
        $delivery_price = isset($delivery_price) ? $delivery_price : 0;

        $orderId = DB::table('orders')->insertGetId([
            'id_user' => $user->id,
            'id_order' => $uniqueOrderId,
            'pin_order' => $uniqueOrderPin,
            'purchase' => json_encode($purchaseObject),
            'product_price' => $price,
            'delivery_price' => $delivery_price,
            'delivery_option' => $request->all()['delivery_option'],
            'payment_option' => $request->all()['payment_option'],
            'payment_card_id' => isset($request->all()['payment_card_flags']) ? $request->all()['payment_card_flags'] : 0,
            'payment_coupon_id' => $hasCoupon ? session()->get('cupom') : 0,
            'payment_moneyback' => isset($request->all()['payment_moneyback']) ? $request->all()['payment_moneyback'] : 0,
            'car_board' => isset($request->all()['car_board']) ? $request->all()['car_board'] : 0,
            'table_number' => isset($request->all()['table_number']) ? $request->all()['table_number'] : 0,
        ]);

        if($hasCoupon){
            $couponConsumer = DB::table('discount_coupon_usage')->insert([
                'coupon_id' => session()->get('cupom'),
                'order_id' => $orderId,
                'user_id' => $user->id
            ]);

            session()->pull('cupom');
        }

        $orderData = DB::table('orders')->where('id', $orderId)->get();
        foreach ($orderData as $order) {
            unset($order->purchase);

            if($order->payment_coupon_id != 0) {
                $coupon = DB::table('discount_coupon')
                    ->select('discount_type', 'discount')
                    ->where('id', $order->payment_coupon_id)
                    ->first();

                $order->coupon = $coupon;
            }
        }

        return array('success' => array('message' => 'Compra criada com sucesso!', 'data' => $orderData[0]));
    }

    public static function Order(Request $request) {
        // user informations
        $token = JWTAuth::getToken();
        $user = JWTAuth::setToken($token)->toUser();

        //order
        $orderData = DB::table('orders')
            ->where('id', $request->all()['id'])
            ->where('id_user', $user->id)
            ->get();

        foreach ($orderData as $order) {
            unset($order->purchase);

            if($order->payment_coupon_id != 0) {
                $coupon = DB::table('discount_coupon')
                    ->select('discount_type', 'discount')
                    ->where('id', $order->payment_coupon_id)
                    ->first();

                $order->coupon = $coupon;
            }
        }

        return response()->json($orderData[0]);
    }

    public static function OrderList(){
        // user informations
        $token = JWTAuth::getToken();
        $user = JWTAuth::setToken($token)->toUser();

        //order
        $orderData = DB::table('orders')
            ->where('id_user', $user->id)
            ->orderByDesc('id')
            ->get();

        foreach ($orderData as $order) {
            unset($order->purchase);
            $order->created_at = date('d/m/y à\s H:i', strtotime($order->created_at));

            if($order->payment_coupon_id != 0) {
                $coupon = DB::table('discount_coupon')
                    ->select('discount_type', 'discount')
                    ->where('id', $order->payment_coupon_id)
                    ->first();

                $order->coupon = $coupon;
            }
        }

        return response()->json($orderData);
    }

    public static function OrderCancell(Request $request) {
        // user informations
        $token = JWTAuth::getToken();
        $user = JWTAuth::setToken($token)->toUser();

        //get order
        $order = DB::table('orders')
            ->where('id', $request->all()['id'])
            ->get();

        if(count($order) < 1){
            return array('error' => array('message' => 'Pedido não encontrado!'));
        }

        $order = $order[0];

        if($order->status != 'new') {
            return array('error' => array('message' => 'Pedidos aprovados não podem ser cancelados!'));
        }

        if(time() - 300 >= strtotime($order->created_at)) {
            return array('error' => array('message' => 'Seu pedido só pode ser cancelado 5 minutos antes de ser aceito!'));
        }

        $update = DB::table('orders')
            ->where('id', $request->all()['id'])
            ->update(['status' => 'cancelled']);

        $order = DB::table('orders')
            ->where('id', $request->all()['id'])
            ->first();

        return array('success' => array('message' => 'Pedido cancelado com sucesso!', 'data' => $order));
    }

    public static function BuyPDV(Request $request) {
        if(!isset($request->all()['delivery_option']) || !isset($request->all()['payment_option']) || !isset($request->all()['purchase'])){
            return array('error' => array('message' => 'Selecione corretamente todos os campos'));
        }

        //is opened shop
        $configurations = DB::table('configurations')
            ->select('opened', 'min_price')
            ->first();

        if($configurations->opened == 'no'){
            return array('error' => array('message' => 'A loja encontra-se fechada para pedidos no momento.'));
        }

        //check region
        if($request->all()['delivery_option'] === 1){
            if(isset($request->all()['address_region_id'])){
                $checkRegion = DB::table('delivery_regions')
                    ->where('id', $request->all()['address_region_id'])
                    ->get();

                if(count($checkRegion) === 0){
                    return array('error' => array('message' => 'Informe uma região de entrega válida!'));
                }
            }else{
                return array('error' => array('message' => 'Informe uma região de entrega válida!'));
            }
        }


        // user informations
        $phone = preg_replace('/[^0-9]/', '', $request->all()['phone']);
        $user = DB::table('users')->where('phone', $phone)->get();


        if(count($user) < 1){
            if($request->all()['delivery_option'] !== 1) {
                $create = DB::table('users')->insert([
                    'name' => $request->all()['name'],
                    'phone' => $phone,
                ]);
            }else{
                $create = DB::table('users')->insert([
                    'name' => $request->all()['name'],
                    'phone' => $phone,
                    'address_region_id' => $request->all()['address_region_id'],
                    'address_number' => $request->all()['address_number'],
                    'address_name' => $request->all()['address_name'],
                    'address_reference' => $request->all()['address_reference'],
                ]);
            }

            $user = DB::table('users')->where('phone', $phone)->get();
        }

        $user = $user[0];

        //check last order date
        $lastUserOrder = DB::table('orders')
            ->where('id_user', $user->id)
            ->orderByDesc('id')
            ->limit(1)
            ->get();

        if(count($lastUserOrder) > 0 && strtotime($lastUserOrder[0]->created_at) > time() - 20) {
            return array('error' => array('message' => 'Aguarde um momento para realizar um novo pedido!'));
        }

        //update user delivery infomations
        if($request->all()['delivery_option'] === 1 || isset($request->all()['name'])){
            if($request->all()['delivery_option'] !== 1){
                $update = DB::table('users')
                    ->where('id', $user->id)
                    ->update([
                        'name' => isset($request->all()['name']) ? $request->all()['name'] : $user->name,
                    ]);
            }else{
                $update = DB::table('users')
                    ->where('id', $user->id)
                    ->update([
                        'name' => isset($request->all()['name']) ? $request->all()['name'] : $user->name,
                        'address_name' => $request->all()['address_name'],
                        'address_number' => $request->all()['address_number'],
                        'address_reference' => $request->all()['address_reference'],
                        'address_region_id' => $request->all()['address_region_id']
                    ]);

                $delivery_region = DB::table('delivery_regions')
                    ->where('id', $request->all()['address_region_id'])
                    ->first();

                $delivery_price = $delivery_region->price;
            }
        }

        //buyed
        $purchases = ($request->all()['purchase']);
        $price = 0;

        $purchaseObject = array();
        $index = 0;

        foreach ($purchases as $purchase) {
            $product = DB::table('products')
                ->where('id', $purchase['product_id'])
                ->first();

            $internalIndex = 0;
            $purchaseObject[$index]['product_id'] = $purchase['product_id'];
            $purchaseObject[$index]['product_optional'] = $purchase['client_optional'];
            $purchaseObject[$index]['product_quantity'] = $purchase['product_quantity'];

            $price = $price + ($product->price * $purchase['product_quantity']);

            foreach ($purchase['client_additional'] as $client_additional) {
                if($client_additional['hight_price'] == 'no'){
                    foreach ($client_additional['selecteds'] as $additional) {
                        $purchaseObject[$index]['additional'][$internalIndex]['name'] = $additional['name'];
                        $purchaseObject[$index]['additional'][$internalIndex]['price'] = $additional['price'];
                        $purchaseObject[$index]['additional'][$internalIndex]['qty'] = $additional['qty'];
                        $purchaseObject[$index]['additional'][$internalIndex]['hight_price'] = $client_additional['hight_price'];

                        $price = $price + (($additional['price'] * $additional['qty']) * $purchase['product_quantity']);
                        $internalIndex++;
                    }
                }else{
                    $prices = [];

                    foreach ($client_additional['selecteds'] as $additional) {
                        $purchaseObject[$index]['additional'][$internalIndex]['name'] = $additional['name'];
                        $purchaseObject[$index]['additional'][$internalIndex]['price'] = $additional['price'];
                        $purchaseObject[$index]['additional'][$internalIndex]['qty'] = $additional['qty'];
                        $purchaseObject[$index]['additional'][$internalIndex]['hight_price'] = $client_additional['hight_price'];

                        array_push($prices, $additional['price']);
                        $internalIndex++;
                    }

                    usort($prices, function($a, $b) {
                        return $a < $b ? 1 : -1;
                    });

                    $price = $price + ($prices[0] * $purchase['product_quantity']);
                }
            }

            $index++;
        }

        //check minimum price
        if($configurations->min_price > $price){
            return array('error' => array('message' => 'O valor minímo para realizar um pedido é de R$ ' . $configurations->min_price));
        }

        //create order
        $uniqueOrderId = time();
        $uniqueOrderPin = substr(uniqid(), -6);
        $delivery_price = isset($delivery_price) ? $delivery_price : 0;

        $orderId = DB::table('orders')->insertGetId([
            'id_user' => $user->id,
            'id_order' => $uniqueOrderId,
            'pin_order' => $uniqueOrderPin,
            'purchase' => json_encode($purchaseObject),
            'product_price' => $price,
            'delivery_price' => $delivery_price,
            'delivery_option' => $request->all()['delivery_option'],
            'payment_option' => $request->all()['payment_option'],
            'payment_coupon_id' => 0,
            'payment_moneyback' => isset($request->all()['payment_moneyback']) ? $request->all()['payment_moneyback'] : 0,
            'car_board' => isset($request->all()['car_board']) ? $request->all()['car_board'] : 0,
            'table_number' => isset($request->all()['table_number']) ? $request->all()['table_number'] : 0,
        ]);

        $orderData = DB::table('orders')->where('id', $orderId)->get();
        foreach ($orderData as $order) {
            unset($order->purchase);

            if($order->payment_coupon_id != 0) {
                $coupon = DB::table('discount_coupon')
                    ->select('discount_type', 'discount')
                    ->where('id', $order->payment_coupon_id)
                    ->first();

                $order->coupon = $coupon;
            }
        }

        return array('success' => array('message' => 'Compra criada com sucesso!', 'data' => $orderData[0]));
    }
}
