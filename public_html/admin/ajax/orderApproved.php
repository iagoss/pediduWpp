<?php
include_once("../lib/config.php");
include_once("../lib/functions.php");

if (isset($_POST['id'])) {
    $update = $conn->prepare("UPDATE orders SET status='preparation' WHERE id= ?");
    $update->bindValue(1, $_POST['id']);
    $update->execute();

    if ($update) {
        $query = $conn->prepare("SELECT * FROM orders WHERE id= ?");
        $query->bindValue(1, $_POST['id']);
        $query->execute();

        $useRaw = false;
        $orderHtml = "";
        $orderRaw = "";
        $dataArray = array();
        $methodos = array('1' => 'Delivery', '2' => 'Retirar na loja', '3' => 'Drive-in', '4' => 'Consumir no local');

        // ARRAY FORMAS DE PAGAMENTO 
        $arrayPayments = array('money' => 'Dinheiro', 'card' => 'Cartão (Maquineta)', 'pix' => 'PIX');

        while ($row = $query->fetch()) :
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
              // ALTERAR A LINHA DO $dataArray['order']['payment_methodo'] PARA ESSA DE  BAIXO
        $dataArray['order']['payment_methodo'] = $arrayPayments[$row['payment_option']];
            $dataArray['order']['payment_moneyback'] = $row['payment_moneyback'];
            $dataArray['order']['car_board'] = $row['car_board'];
            $dataArray['order']['table_number'] = $row['table_number'];
            $dataArray['order']['delivery_methodo'] = $methodos[$row['delivery_option']];
            $dataArray['order']['payment_cashback'] = $row['payment_cashback'];
            $dataArray['order']['delivery_methodo'] = $row['delivery_option'] == 1 ? 'Delivery' : 'Retirar na loja';
            $dataArray['order']['price_subtotal'] = $row['product_price'];
            $dataArray['order']['price_delivery'] = $region['price'] != 0 && $row['delivery_option'] == 1 ? 'R$ ' . $region['price'] : 'Grátis';

            if ($row['payment_card_id'] != 0) {
                $paymentCardInfo = $conn->query("SELECT * FROM delivery_cards WHERE id='$row[payment_card_id]'")->fetch();
            }

            if ($row['payment_coupon_id'] != 0) {
                $coupon = $conn->query("SELECT * FROM discount_coupon WHERE id='$row[payment_coupon_id]' LIMIT 1")->fetch();

                if ($coupon['discount_type'] == 'money') {
                    $dataArray['order']['price_coupon'] = 'R$' . $coupon['discount'];
                    $dataArray['order']['price_total'] = ($row['product_price'] - $coupon['discount']) + ($row['delivery_option'] == 1 ? $region['price'] : 0);
                } else {
                    $dataArray['order']['price_coupon'] = $coupon['discount'] . '%';
                    $dataArray['order']['price_total'] = ($row['product_price'] - (($row['product_price'] * $coupon['discount']) / 100)) + ($row['delivery_option'] == 1 ? $region['price'] : 0);
                }
            } else {
                $dataArray['order']['price_coupon'] = 'R$ --.--';
                $dataArray['order']['price_total'] = $row['product_price'] + ($row['delivery_option'] == 1 ? $region['price'] : 0);
            }

            //composer printer data HTML
            $orderHtml .= "<div style='text-transform: uppercase; font-family: Tahome, Helvetica, Arial, sans-serif; padding: 0 6px;'>
            
            <center><div><h2>//// Pedido Nº {$dataArray['order']['id']} ////</h2></div></center>";
            $orderHtml .= "<center><div>Data {$dataArray['order']['date']}</div></center><br/>";

            //composer printer data RAW
            $orderRaw .= "Pedido Nº {$dataArray['order']['id']}\n"; // TODO: Center
            $orderRaw .= "Data {$dataArray['order']['date']}\n"; // TODO: Center



            $orderHtml .= "<div>CLIENTE: {$dataArray['client']['name']}</div>";
            $orderRaw .= "CLIENTE: {$dataArray['client']['name']}\n";
            $orderHtml .= "<div>TELEFONE: {$dataArray['client']['phone']}</div>";
            $orderRaw .= "TELEFONE: {$dataArray['client']['phone']}\n";

            if ($row['delivery_option'] == 1) {
                $orderHtml .= "<div>RUA: {$dataArray['client']['address_name']}</div>";
                $orderHtml .= "<div>NUMERO: {$dataArray['client']['address_number']}</div>";
                $orderHtml .= "<div>REGIAO: {$dataArray['client']['address_region']}</div>";
                $orderHtml .= "<div>REFERENCIA: {$dataArray['client']['address_reference']}</div>";

                $orderRaw .= "RUA: {$dataArray['client']['address_name']}\n";
                $orderRaw .= "NUMERO: {$dataArray['client']['address_number']}\n";
                $orderRaw .= "REGIAO: {$dataArray['client']['address_region']}\n";
                $orderRaw .= "REFERENCIA: {$dataArray['client']['address_reference']}\n";
            }

            $orderHtml .= "<p>---------------------------------------------</p>";

            $orderRaw .= "---------------------------------------------\n";

            // products data
            $purchases = json_decode($row['purchase']);
            foreach ($purchases as $purchase) {
                $product = $conn->query("SELECT * FROM products WHERE id='$purchase->product_id' LIMIT 1")->fetch();

                $prices = [];
                $isHight = false;
                foreach ($purchase->additional as $additional) {
                    array_push($prices, $additional->price);

                    if ($additional->hight_price == 'yes') {
                        $isHight = true;
                    }
                }

                usort($prices, function ($a, $b) {
                    return $a < $b ? 1 : -1;
                });

                $price = $prices[0] * $purchase->product_quantity;

                $orderHtml .= "($purchase->product_quantity) {$product['name']}   R$ " . number_format($isHight ? $price : $product['price'], 2, '.', ',') . "</br>";
                $orderRaw .= "($purchase->product_quantity) {$product['name']}   R$ " . number_format($isHight ? $price : $product['price'], 2, '.', ',') . "\n";

                foreach ($purchase->additional as $additional) {
                    $orderHtml .= "  - x{$additional->qty} $additional->name " . ($additional->price != 0 && $additional->hight_price != "yes" ? "R$ " . number_format(($additional->price * $additional->qty), 2, '.', ',') . "" : "") . "</br>";
                    $orderRaw .= "  - x{$additional->qty} $additional->name " . ($additional->price != 0 && $additional->hight_price != "yes" ? "R$ " . number_format(($additional->price * $additional->qty), 2, '.', ',') . "" : "") . "\n";
                }

                $orderHtml .= ($purchase->product_optional ? "<b>OBS: $purchase->product_optional </br></b>" : "") . "</br>";

                $orderRaw .= ($purchase->product_optional ? "OBS: $purchase->product_optional \n" : "") . "\n";
            }

            $orderHtml .= "<div>---------------------------------------------</div>";

            $orderRaw .= "---------------------------------------------\n";

            $orderHtml .= "<div>Subtotal: R$ {$dataArray['order']['price_subtotal']}</div>";
            $orderHtml .= "<div>Desconto: {$dataArray['order']['price_coupon']}</div>";
            $orderHtml .= "<div>Entrega: {$dataArray['order']['price_delivery']}</div>";

            $orderRaw .= "Subtotal: R$ {$dataArray['order']['price_subtotal']}\n";
            $orderRaw .= "Desconto: {$dataArray['order']['price_coupon']}\n";
            $orderRaw .= "Entrega: {$dataArray['order']['price_delivery']}\n";

            $orderHtml .= "<p>---------------------------------------------</p>";
            $orderRaw .= "---------------------------------------------\n";

            $orderHtml .= "<center><div><h2>";
            $orderHtml .= "Total: R$ " . number_format($dataArray['order']['price_total'], 2, '.', ',');
            $orderHtml .= "</h2></div></center>";

            $orderRaw .= "Total: R$ " . number_format($dataArray['order']['price_total'], 2, '.', ',') . "\n"; // TODO: h2 and center

            $orderHtml .= "<p>---------------------------------------------</p>";
            $orderRaw .= "---------------------------------------------\n";

            $orderHtml .= "<div>Forma de pagamento: {$dataArray['order']['payment_methodo']} </div>";
            $orderHtml .= $row['payment_card_id'] != 0 ? "<div>Bandeira do cartão: {$paymentCardInfo['name']} </div>" : "";
            $orderHtml .= $dataArray['order']['payment_moneyback'] != 0 ? "<div>Troco para: R$ " . number_format($dataArray['order']['payment_moneyback'], 2, '.', ',') . "</div>" : "";
            $orderHtml .= $dataArray['order']['payment_moneyback'] != 0 ? "<div><b>Troco:</b> R$ " . number_format(($dataArray['order']['payment_moneyback'] - $dataArray['order']['price_total']), 2, '.', ',') . "</div>" : "";
            $orderHtml .= $dataArray['order']['table_number'] != 0 ? "<div>Número da mesa: {$dataArray['order']['table_number']} </div>" : "";
            $orderHtml .= $dataArray['order']['car_board'] != 0 ? "<div>Placa do carro: {$dataArray['order']['car_board']} </div>" : "";
            $orderHtml .= "<div>Forma de entrega: {$dataArray['order']['delivery_methodo']} </div><br/></div>";

            $orderRaw .= "Forma de pagamento: {$dataArray['order']['payment_methodo']} \n";
            $orderRaw .= $row['payment_card_id'] != 0 ? "Bandeira do cartão: {$paymentCardInfo['name']} \n " : "";
            $orderRaw .= $dataArray['order']['payment_moneyback'] != 0 ? "Troco para: R$ " . number_format($dataArray['order']['payment_moneyback'], 2, '.', ',') . "\n " : "";
            $orderRaw .= $dataArray['order']['payment_moneyback'] != 0 ? "Troco: R$ " . number_format(($dataArray['order']['payment_moneyback'] - $dataArray['order']['price_total']), 2, '.', ',') . "\n " : "";
            $orderRaw .= $dataArray['order']['table_number'] != 0 ? "Número da mesa: {$dataArray['order']['table_number']} \n " : "";
            $orderRaw .= $dataArray['order']['car_board'] != 0 ? "Placa do carro: {$dataArray['order']['car_board']} \n " : "";
            $orderRaw .= "Forma de entrega: {$dataArray['order']['delivery_methodo']} \n";
        endwhile;

        $orderRaw .= "\n\n\n\n\n\n\n\n\n";

        echo json_encode(array('success' => array('message' => 'Aprovada com sucesso!', 'data' => $useRaw ? $orderRaw : $orderHtml, 'type' => $useRaw ? 'plain' : 'html')));
    } else {
        echo json_encode(array('error' => array('message' => 'Erro 002, procure o supervisor do sistema!')));
    }
}
