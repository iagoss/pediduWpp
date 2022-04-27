<?php

namespace App\Http\Controllers;

use App\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use phpDocumentor\Reflection\Types\Self_;

class OrderController extends Controller
{
    public function show($id)
    {
        $order = Order::find($id);
        $purchase = json_decode($order->purchase);

        $products = [];

        foreach ($purchase as $item) {
            $products[] = $item->product_id;
        }

        $products = ProductController::show($products);
        $user = UserController::getUser($order->id_user);
        $pix = DB::table('pix')->first();
        $store = DB::table('configurations')
            ->select('name', 'whatsapp')
            ->first();

        $data = (object) [
            'order' => $order,
            'user' => $user,
            'products' => $products,
            'store' => $store,
            'pix' => $pix
        ];

        $orderPad = self::generateOrderPad($data);
        return json_encode($orderPad);
    }

    public static function generateOrderPad($data)
    {
        $response = '🍽 *' . strtoupper($data->store->name) . '* 🍽%0A';
        $response .= 'PEDIDO Nº' . $data->order->num_order . '%0A';
        $response .= '🗓 *REALIZADO EM:* ' . date('d/m/Y à\s H:i', strtotime($data->order->created_at)) . '%0A%0A';
        $response .= 'Meu nome é *' . $data->user->name . '* %0A';
        $response .= '*CONTATO:* ' . preg_replace('~(\d{2})(\d{5})(\d{4})~', '($1) $2-$3', $data->user->phone) . "%0A";
        $response .= '-------------------------------------%0A%0A';

        foreach (json_decode($data->order->purchase) as $item) {
            $prices = [];
            $noHightPrice = 0;
            $responseAdd = '';
            if (isset($item->additional)) {
                foreach ($item->additional as $additional) {
                    if ($additional->hight_price === 'yes') {
                        array_push($prices, $additional->price);
                        $priceAdditional = 0;
                    } else {
                        $noHightPrice = $additional->price * $additional->qty;
                        $priceAdditional = $noHightPrice;
                    }
                    $responseAdd .= $additional->name . ($priceAdditional > 0 ? '-' . self::toReal($priceAdditional) : '') . '%0A';
                }
            }
            rsort($prices);
            $price = empty($prices) ? $data->products[$item->product_id]->price : $prices[0] * $item->product_quantity;
            $price = $price + $noHightPrice;
            $response .= '*' . $item->product_quantity . 'x* ' . $data->products[$item->product_id]->name . ' - *(' . self::toReal($price) . ')*%0A';
            $response .= $responseAdd;
            if ($item->product_optional !== null) {
                $response .= 'OBS:' . $item->product_optional . '_%0A';
            }
            $response .= '%0A';
        }

        $response .= '-------------------------------------%0A%0A';
        $response .= '*SUBTOTAL:* ' . self::toReal($data->order->product_price) . '%0A';

        $total = $data->order->product_price;
        $address = '*ENDEREÇO DE ENTREGA* 🛵💨%0A';

        if ($data->order->delivery_option === 1) {
            $response .= '*VALOR DA ENTREGA:* ' . self::toReal($data->order->delivery_price) . '%0A';
            $total += $data->order->delivery_price;

            $address .= '*RUA*: ' . $data->user->address_name . '%0A';
            $address .= '*NÚMERO*: ' . $data->user->address_number . '%0A';
            $address .= '*BAIRRO*: ' . $data->user->address_region . '%0A';
            $address .= '*COMPLEMENTO*: ' . $data->user->address_reference . '%0A';
        }

        if ($data->order->payment_coupon_id > 0) {
            $discount = self::checkDescount($data->order->payment_coupon_id, $data->order->product_price);
            $response .= '*DESCONTOS:* ' . self::toReal($discount) . '%0A%0A';
            $total -= $discount;
        }

        $response .= '*TOTAL:* ' . self::toReal($total) . '%0A%0A';

        if ($data->order->deliveryOption === 1) {
            $response .= '-------------------------------------%0A%0A';

            $response .= $address;
        }

        $response .= '-------------------------------------%0A%0A';

        $response .= '*FORMA DE PAGAMENTO*: ' . self::translatePaymentMethods($data->order->payment_option) . '%0A%0A';

        if ($data->order->payment_option === 'pix'){
            $response .= '🚨 *ENVIE O COMPROVANTE PIX AQUI* 🚨 %0A';
            $response .= '*CHAVE:* ' . $data->pix->pix . '%0A';
            $response .= '*TIPO:* ' . $data->pix->type . '%0A%0A';
        }

        $response .= '✅ *PEDIDO ENVIADO* ✅ %0A%0A';

        $response .= 'Acompanhe seu pedido pelo %0A';
        $response .= 'http://' . $_SERVER['HTTP_HOST'] . '/carry/' . $data->order->id . '/';

        return $data->store->whatsapp . '&text=' . $response;
    }

    public static function checkDescount($couponId, $price)
    {
        $coupon = DB::table('discount_coupon')->find($couponId);
        if ($coupon->discount_type == 'percent') {
            $discount = ($price * $coupon->discount / 100);
        } else {
            $discount =  $coupon->discount;
        }
        return $discount;
    }

    public static function toReal($value = 0)
    {
        return 'R$' . number_format($value, 2, ',', '.');
    }

    public static function translatePaymentMethods($method)
    {
        switch ($method) {
            case 'money':
                return 'Dinheiro 💵';
                break;
            case 'card':
                return 'Cartão (Maquineta) 💳';
                break;
            case 'pix':
                return 'PIX';
                break;
        }
    }
}
