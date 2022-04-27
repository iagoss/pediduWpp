<?php

function orderDatail($type) {
    global $conn;
    global $core;

    $query = $conn->query("SELECT * FROM orders WHERE status='$type' ORDER BY id DESC");

    if($query->rowCount() < 1){
        echo '<div class="items"><div class="clean">Nada aqui</div></div>';
    }

    while($row = $query->fetch()):
        $client = $conn->query("SELECT * FROM users WHERE id='$row[id_user]' LIMIT 1")->fetch();
        $region = $conn->query("SELECT * FROM delivery_regions WHERE id='$client[address_region_id]'")->fetch();
        $num_pedidos = count($conn->query("SELECT * FROM orders WHERE id_user='$row[id_user]'")->fetchAll());

        $products = json_decode($row['purchase']);

        if($row['payment_card_id'] != 0){
            $paymentCardInfo = $conn->query("SELECT * FROM delivery_cards WHERE id='$row[payment_card_id]'")->fetch();
        }

        if($row['payment_coupon_id'] != 0) {
            $coupon = $conn->query("SELECT * FROM discount_coupon WHERE id='$row[payment_coupon_id]'")->fetch();
            if($coupon['discount_type'] == 'money'){
                $price = $row['product_price'] - $coupon['discount'];
            }else{
                $price = $row['product_price'] - (($row['product_price']*$coupon['discount'])/100);
            }
        }else{
            $price = $row['product_price'];
        }
        ?>
        <div class="item" data-order-id="<?php echo $row['id']; ?>">
            <div class="header-item">
                <p>#<?php echo $row['id']; ?></p>
                <p><?php echo $core->dTime(strtotime($row['created_at']), time()); ?></p>
            </div>
            <div class="info">
                <h1>Dados do cliente</h1>
                <p>Nome: <b><?php echo $client['name']; ?></b> <span style="color: Goldenrod"><?php echo $num_pedidos <= 1 ? '<button class="btn btn-warning btn-novo btn-xsm f-right">NOVO!</button>' : ''?></span></p>
                <?php echo $num_pedidos > 1 ? '<p>Total de pedidos: <b>'.$num_pedidos.'</b></p>' : '' ?>
                <p>
                    Telefone: <b><?php echo $client['phone']; ?></b> 
                    <a class="whats-button" target="_blank" href="https://api.whatsapp.com/send?phone=55<?php echo $client['phone']; ?>"><i class="fab fa-whatsapp"></i></a>
                    <?php if($type == 'preparation'): ?>
                        <a 
                            class="message-button" 
                            target="_blank" 
                            href="https://api.whatsapp.com/send?phone=55<?php echo $client['phone']; ?>&text=*Pedido*:%20<?= $row['id']; ?>%20%0A%0A*Ol%C3%A1*%20*<?= $client['name']; ?>*.%20Recebemos%20seu%20pedido%20e%20j%C3%A1%20iniciamos%20o%20preparo,%20tudo%20feito%20no%20capricho%20com%20muito%20carinho%20e%20amor%20por%20nossa%20equipe!%20%F0%9F%98%83%0A%0AVoc%C3%AA%20pode%20acompanhar%20seu%20pedido%20em%20tempo%20real%20pela%20plataforma,%20no%20Menu%20Conta%20%3E%20Voc%C3%AA%20clica%20no%20seu%20ultimo%20pedido.%20%0A%0A%20Muito%20obrigado%20pela%20prefer%C3%AAncia,%20gostou%20de%20pedir%20*online?*%20%F0%9F%92%93"
                        >
                                <i class="fas fa-bell"></i> NOTIFICAR
                        </a>
                    <?php endif; ?>
                </p>
                <?php if($row['delivery_option'] == 1): ?>
                    <p>Bairro: <b><?php echo $region['name']; ?></b></p>
                    <p>Endereço: <b><?php echo $client['address_name']; ?></b></p>
                    <p>Numero: <b><?php echo $client['address_number']; ?></b></p>
                    <p>Referencia: <b><?php echo $client['address_reference']; ?></b></p>
                <?php endif; ?>
            </div>

            <div class="info">
                <h1>Dados do pedido</h1>
                <p>Valor total: <b>R$ <?php echo number_format(($price + ($row['delivery_option'] == 1 ? $region['price'] : 0)),  2, '.', ','); ?></b></p>
                <p>Metodo de pagamento:
                    <b><?php 
                        if($row['payment_option'] == 'money') {
                            echo 'Dinheiro';
                        } else if ($row['payment_option'] == 'card') {
                            echo 'Cartão';
                        } else {
                            echo 'Pix';
                        }
                    ?></b></p>

                <?php if($row['payment_card_id'] != 0): ?>
                    <p>Bandeira do cartão: <b><?php echo $paymentCardInfo['name']; ?></b></p>
                <?php endif; ?>

                <p>Metodo de entrega:
                    <b><?php $methodos = array('1' => 'Delivery', '2' => 'Retirar na loja', '3' => 'Drive-in', '4' => 'Consumir no local'); echo $methodos[$row['delivery_option']]; ?></b></p>

                <?php if($row['payment_moneyback'] != 0): ?>
                    <p>Troco para: <b>R$ <?php echo number_format($row['payment_moneyback'],  2, '.', ','); ?></b></p>
                <?php endif; ?>

                <?php if($row['payment_moneyback'] != 0): ?>
                    <p>Troco: <b>R$ <?php echo number_format(($row['payment_moneyback'] - ($price + ($row['delivery_option'] == 1 ? $region['price'] : 0))), 2, '.', ','); ?></b></p>
                <?php endif; ?>

                <?php if($row['car_board'] != 0): ?>
                    <p>Placa do carro: <b><?php echo $row['car_board']; ?></b></p>
                <?php endif; ?>

                <?php if($row['table_number'] != 0): ?>
                    <p>Número da mesa: <b><?php echo $row['table_number']; ?></b></p>
                <?php endif; ?>

                <?php
                foreach ($products as $product):
                    $queryProduct = $conn->query("SELECT * FROM products WHERE id='$product->product_id'")->fetch();
                    ?>
                    <div class="order">
                        <p>[<?php echo $product->product_quantity; ?>x] <?php echo $queryProduct['name']; ?></p>
                        <?php
                        foreach ($product->additional as $additional):
                            ?>
                            <span>- x<?php echo isset($additional->qty) ? $additional->qty : '1'; ?> <?php echo $additional->name; ?></span>
                        <?php
                        endforeach;;
                        ?>

                        <?php
                        if ($product->product_optional):
                            ?>
                            <span>OBS: <?php echo $product->product_optional; ?></span>
                        <?php
                        endif;
                        ?>
                    </div>
                <?php
                endforeach;
                ?>
            </div>

            <?php if($type == 'new'): ?>
                <div class="buttons">
                    <div class="btn green" id="printer" order-id="<?php echo $row['id']; ?>">Confirmar e imprimir</div>
                    <div class="btn red" id="cancellOrder" order-id="<?php echo $row['id']; ?>">Cancelar</div>
                </div>
            <?php elseif($type == 'preparation'): ?>
                <div class="buttons">
                    <div class="btn grey print-order" print-type="viaNormal"  order-id="<?php echo $row['id']; ?>">Imprimir</div>
                    <div class="btn grey print-order" print-type="viaCozinha" order-id="<?php echo $row['id']; ?>">Imprimir via cozinha</div>
                    <div class="btn grey print-order" print-type="viaMotoboy" order-id="<?php echo $row['id']; ?>">Imprimir via motoboy</div>
                    <div class="btn grey" id="associateOrder" order-id="<?php echo $row['id']; ?>" motoboy-id="<?php echo $row['delivery_motoboy_id']; ?>">Associar ao entregador</div>
                    <div class="btn blue" id="printAndroidOrder" order-id="<?php echo $row['id']; ?>">Imprimir (Android)</div>
                    <div class="btn red" id="cancellOrder" order-id="<?php echo $row['id']; ?>">Cancelar</div>
                    <div class="btn green" id="delivery" order-id="<?php echo $row['id']; ?>">Marcar como pronto</div>
                </div>
            <?php elseif($type == 'delivery'): ?>
                <div class="buttons">
                    <div class="btn grey print-order" print-type="viaNormal" order-id="<?php echo $row['id']; ?>">Imprimir</div>
                    <div class="btn grey" id="associateOrder" order-id="<?php echo $row['id']; ?>" motoboy-id="<?php echo $row['delivery_motoboy_id']; ?>">Associar ao entregador</div>
                    <div class="btn blue" id="printAndroidOrder" order-id="<?php echo $row['id']; ?>">Imprimir (Android)</div>
                    <div class="btn red" id="cancellOrder" order-id="<?php echo $row['id']; ?>">Cancelar</div>
                    <div class="btn green" id="finish" order-id="<?php echo $row['id']; ?>">Marcar como entregue</div>
                </div>
            <?php elseif($type == 'finished'): ?>
                <div class="buttons">
                    <div class="btn green" id="ended" order-id="<?php echo $row['id']; ?>">Dar baixa</div>
                </div>
            <?php endif; ?>
        </div>
    <?php
    endwhile;
}

?>
