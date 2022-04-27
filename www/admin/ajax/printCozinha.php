<?php
include_once("../lib/config.php");
include_once("../lib/functions.php");

if(isset($_POST['id'])){
    $query = $conn->prepare("SELECT * FROM orders WHERE id= ?");
    $query->bindValue(1, $_POST['id']);
    $query->execute();

    $useRaw = false;
    $orderHtml = "";
    $orderRaw = "";
    $dataArray = array();
    $methodos = array('1' => 'Delivery', '2' => 'Retirar na loja', '3' => 'Drive-in', '4' => 'Consumir no local');

    while($row = $query->fetch()):
        //client data
        $user = $conn->query("SELECT * FROM users WHERE id='$row[id_user]' LIMIT 1")->fetch();
        $region = $conn->query("SELECT * FROM delivery_regions WHERE id='$user[address_region_id]' LIMIT 1")->fetch();

        $dataArray['client']['name'] = $user['name'];
        $dataArray['client']['phone'] = $user['phone'];
        $dataArray['client']['address_name'] = $user['address_name'];
        $dataArray['client']['address_number'] = $user['address_number'];
        $dataArray['client']['address_region'] = $region['name'];
        $dataArray['client']['address_reference'] = $user['address_reference'];

        //order data
        $dataArray['order']['id'] = $row['id'];
        $dataArray['order']['date'] = date('d/m/Y à\s H:i', strtotime($row['created_at']));
        if ($row['payment_option'] == 'money') {
            $dataArray['order']['payment_methodo'] = 'Dinheiro';
        } else if ($row['payment_option'] == 'pix') {
            $dataArray['order']['payment_methodo'] = 'Pix';
        } else {
            $dataArray['order']['payment_methodo'] = 'Cartão de crédito';
        }
        $dataArray['order']['payment_moneyback'] = $row['payment_moneyback'];
        $dataArray['order']['car_board'] = $row['car_board'];
        $dataArray['order']['table_number'] = $row['table_number'];
        $dataArray['order']['delivery_methodo'] = $methodos[$row['delivery_option']];
        $dataArray['order']['payment_cashback'] = $row['payment_cashback'];
        $dataArray['order']['delivery_methodo'] = $row['delivery_option'] == 1 ? 'Delivery' : 'Retirar na loja';
        $dataArray['order']['price_subtotal'] = $row['product_price'];
        $dataArray['order']['price_delivery'] = $region['price'] != 0 && $row['delivery_option'] == 1 ? 'R$ '.$region['price'] : 'Grátis';

        if($row['payment_card_id'] != 0){
            $paymentCardInfo = $conn->query("SELECT * FROM delivery_cards WHERE id='$row[payment_card_id]'")->fetch();
        }

        if($row['payment_coupon_id'] != 0){
            $coupon = $conn->query("SELECT * FROM discount_coupon WHERE id='$row[payment_coupon_id]' LIMIT 1")->fetch();

            if($coupon['discount_type'] == 'money'){
                $dataArray['order']['price_coupon'] = 'R$' . $coupon['discount'];
                $dataArray['order']['price_total'] = ($row['product_price'] - $coupon['discount']) + ($row['delivery_option'] == 1 ? $region['price'] : 0);
            }else{
                $dataArray['order']['price_coupon'] = $coupon['discount'].'%';
                $dataArray['order']['price_total'] = ($row['product_price'] - (($row['product_price']*$coupon['discount'])/100)) + ($row['delivery_option'] == 1 ? $region['price'] : 0);
            }
        }else{
            $dataArray['order']['price_coupon'] = 'R$ --.--';
            $dataArray['order']['price_total'] = $row['product_price'] + ($row['delivery_option'] == 1 ? $region['price'] : 0);
        }

        //composer printer data HTML
        $orderHtml .= "<div style='text-transform: uppercase; font-family: Tahome, Helvetica, Arial, sans-serif; padding: 0 6px;'><div><center><h2>//// Pedido Nº {$dataArray['order']['id']} ////</h2></center></div>";
        $orderHtml .= "<div><center>Data {$dataArray['order']['date']}</div></center><br/>";

        //composer printer data RAW
        $orderRaw .= "Pedido Nº {$dataArray['order']['id']}\n"; // TODO: Center
        $orderRaw .= "Data {$dataArray['order']['date']}\n"; // TODO: Center



        $orderHtml .="<div>CLIENTE: {$dataArray['client']['name']}</div>";
        $orderRaw .= "CLIENTE: {$dataArray['client']['name']}\n";

        $orderHtml .= "<p>---------------------------------------------</p>";
        $orderRaw .= "---------------------------------------------\n";

        // products data
        $purchases = json_decode($row['purchase']);
        foreach ($purchases as $purchase){
            $product = $conn->query("SELECT * FROM products WHERE id='$purchase->product_id' LIMIT 1")->fetch();

            $prices = [];
            $isHight = false;
            foreach ($purchase->additional as $additional) {
                array_push($prices, $additional->price);

                if($additional->hight_price == 'yes'){
                    $isHight = true;
                }
            }

            usort($prices, function($a, $b) {
                return $a < $b ? 1 : -1;
            });

            $price = $prices[0] * $purchase->product_quantity;

            $orderHtml .= "($purchase->product_quantity) {$product['name']} </br>";
            $orderRaw .= "($purchase->product_quantity) {$product['name']} \n";

            foreach ($purchase->additional as $additional){
                $orderHtml .= "  - x{$additional->qty} $additional->name </br>";
                $orderRaw .= "  - x{$additional->qty} $additional->name\n";
            }

            $orderHtml .= ($purchase->product_optional ? "<b>OBS: $purchase->product_optional </br></b>" : "") . "</br>";

            $orderRaw .= ($purchase->product_optional ? "OBS: $purchase->product_optional \n" : "") . "\n";
        }

    endwhile;

    $orderRaw .= "\n\n\n\n\n\n\n\n\n";

    echo json_encode(array('success' => array('message' => 'Aprovada com sucesso!', 'data' => $useRaw ? $orderRaw : $orderHtml, 'type' => $useRaw ? 'plain' : 'html')));
}
