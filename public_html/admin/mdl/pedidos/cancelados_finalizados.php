<div class="order-container">
    <div class="box">
        <div class="header-box" style="background: #FD4263">
            <h1>Pedidos Cancelados</h1>
        </div>

        <div class="items delivery-orders">
            <?php
            $query = $conn->query("SELECT * FROM orders WHERE status='cancelled' ORDER BY id DESC");

            if($query->rowCount() < 1){
                echo '<div class="items"><div class="clean">Nada aqui</div></div>';
            }

            while($row = $query->fetch()):
                $client = $conn->query("SELECT * FROM users WHERE id='$row[id_user]' LIMIT 1")->fetch();
                $region = $conn->query("SELECT * FROM delivery_regions WHERE id='$client[address_region_id]'")->fetch();

                $products = json_decode($row['purchase']);

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
                        <p>Nome: <b><?php echo $client['name']; ?></b></p>
                        <p>Telefone: <b><?php echo $client['phone']; ?></b></p>
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
                            <b><?php echo $row['payment_option'] == 'money' ? 'Dinheiro' : 'Cartão'; ?></b></p>
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
                                    <span>- <?php echo $additional->name; ?></span>
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
                </div>
            <?php
            endwhile;
            ?>
        </div>
    </div>

    <div class="box">
        <div class="header-box" style="background: #4396FC">
            <h1>Pedidos Finalizados</h1>
        </div>

        <div class="items finish-orders">
            <?php
            $query = $conn->query("SELECT * FROM orders WHERE status='ended' ORDER BY id DESC");

            if($query->rowCount() < 1){
                echo '<div class="items"><div class="clean">Nada aqui</div></div>';
            }

            while($row = $query->fetch()):
                $client = $conn->query("SELECT * FROM users WHERE id='$row[id_user]' LIMIT 1")->fetch();
                $region = $conn->query("SELECT * FROM delivery_regions WHERE id='$client[address_region_id]'")->fetch();

                $products = json_decode($row['purchase']);

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
                        <p>Nome: <b><?php echo $client['name']; ?></b></p>
                        <p>Telefone: <b><?php echo $client['phone']; ?></b></p>
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
                            <b><?php echo $row['payment_option'] == 'money' ? 'Dinheiro' : 'Cartão'; ?></b></p>
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
                                    <span>- <?php echo $additional->name; ?></span>
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
                </div>
            <?php
            endwhile;
            ?>
        </div>
    </div>

</div>

<style>
    .header-buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
    }

    .header-buttons .btn {
        border-radius: 6px;
        margin: 10px;
        color: rgba(0, 0, 0, 0.5);
        font-weight: bolder;
        border: rgba(0, 0, 0, 0.2);
    }

    .header-buttons .btn p {
        font-weight: normal;
    }

    .header-buttons .btn.green {
        background: #42FD75;
    }

    .header-buttons .btn.red {
        background: #FD4263;
    }

    .order-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }

    .order-container .box {
        background: white;
        border-radius: 4px;
        overflow: hidden;
    }

    .order-container .box .header-box {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        border-bottom: 1.2px solid rgba(0, 0, 0, 0.08);
    }

    .order-container .box .header-box h1 {
        width: 100%;
        font-size: 18px;
        margin: 0;
        text-align: center;
        font-weight: bold;
        color:rgba(0, 0, 0, 0.5);
    }

    .order-container .box .items {
        margin: 10px
    }

    .order-container .box .items .clean {
        border: 1.2px solid rgba(0, 0, 0, 0.10);
        text-align: center;
        padding: 10px 0;
        font-size: 17px;
        text-transform: uppercase;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.40);
        border-radius: 4px;
    }

    .order-container .box .items .item {
        background: rgba(0, 0, 0, 0.10);
        border-radius: 6px;
        padding: 8px;
        margin-top: 10px;
    }

    .order-container .box .items .item .header-item {
        display: flex;
        justify-content: space-between;
        margin-top: 4px;
        margin-bottom: -6px;
    }

    .order-container .box .items .item .info {
        border: 1px solid rgba(0, 0, 0, 0.10);
        border-radius: 6px;
        padding: 10px;
        margin-top: 6px;
        background: rgba(250, 250, 250, 0.8);
    }

    .order-container .box .items .item .info h1 {
        font-size: 16px;
        margin: 0;
        color: rgba(0, 0, 0, 0.90);
        padding-bottom: 5px;
        margin-bottom: 5px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.10);
    }

    .order-container .box .items .item .info p {
        margin: 0;
    }

    .order-container .box .items .item .buttons {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 8px;
        margin-top: 6px;
    }

    .order-container .box .items .item .buttons .btn {
        padding: 8px;
        text-align: center;
        border: 0;
        font-size: 11px;
        border-radius: 6px;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.5);
    }

    .order-container .box .items .item .buttons .btn.green {
        background: #42FD75;
    }

    .order-container .box .items .item .buttons .btn.red {
        background: #FD4263;
    }

    .order-container .box .items .item .buttons .btn.grey {
        background: darkgrey;
    }

    .order-container .box .items .item .buttons .btn.blue {
        background: #4396FC;
    }

    .order-container .box .items .item .order {
        display: flex;
        flex-direction: column;
        background: rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(0, 0, 0, 0.06);
        border-radius: 5px;
        margin-top: 6px;
        padding: 6px;
    }

    .order-container .box .items .item .order p {
        font-weight: bold;
        background: rgba(250, 250, 250, 0.9);
        padding: 6px;
        border-radius: 4px;
        font-size: 13px;
    }
</style>
