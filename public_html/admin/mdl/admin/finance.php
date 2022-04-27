<?php
if (isset($_POST)) {
    $initial_timestamp = $_POST['initial_date'] . ' ' . $_POST['initial_time'];
    $final_timestamp = $_POST['final_date'] . ' ' . $_POST['final_time'];
} else {
    $initial_timestamp = date('Y-m-d H:i', strtotime("-1 days"));
    $final_timestamp = date('Y-m-d H:i', time());
}
?>
<div class="box-content">
    <div class="title-section"><?php echo $mdl['nome']; ?></div>

    <form action="/admin/admin.php?p=<?php echo $_GET['p']; ?>" method="post" class="filter">
        <div class="group">
            <span>De</span>
            <input type="date" name="initial_date" value="<?php echo !$_POST['initial_date'] ? date('Y-m-d', strtotime("-1 days")) : $_POST['initial_date']; ?>">
            <input type="time" name="initial_time" value="<?php echo !$_POST['initial_time'] ? date('H:i', strtotime("-1 days")) : $_POST['initial_time']; ?>">
        </div>

        <div class="group">
            <span>Até</span>
            <input type="date" name="final_date" value="<?php echo !$_POST['final_date'] ? date('Y-m-d', time()) : $_POST['final_date']; ?>">
            <input type="time" name="final_time" value="<?php echo !$_POST['final_time'] ? date('H:i', time()) : $_POST['final_time']; ?>">
        </div>

        <button type="submit">Filtrar</button>
    </form>

    <div class="boxes finance">
        <?php
        $delivery_methodos = $conn->query("SELECT * FROM delivery_methodos WHERE status='active' ORDER BY id ASC");
        while ($row = $delivery_methodos->fetch()) {
            $orders = $conn->prepare("SELECT * FROM orders WHERE delivery_option= ? AND created_at >= '$initial_timestamp' AND created_at <= '$final_timestamp'");
            $orders->bindValue(1, $row['id']);
            $orders->execute();

            $moneyValue = 0;
            $cardValue = 0;
            $deliveryValue = 0;
            $ordersValue = 0;

            while ($order = $orders->fetch()) {
                if ($order['payment_option'] == 'money') {
                    $moneyValue = $moneyValue + $order['product_price'];
                } else if ($order['payment_option'] == 'pix') {
                    $pixValue = $moneyValue + $order['product_price'];
                } else {
                    $cardValue = $cardValue + $order['product_price'];
                }

                if ($order['delivery_option'] == 1) {
                    $deliveryValue = $deliveryValue + $order['delivery_price'];
                }

                $ordersValue++;
            }

        ?>
            <div class="box">
                <div class="box-title"><?php echo $row['name']; ?></div>
                <li>
                    <span>Número de pedidos:</span>
                    <b><?php echo $ordersValue; ?></b>
                </li>

                <li>
                    <span>Cartão:</span>
                    <b>R$ <?php echo number_format($cardValue, 2, '.', ','); ?></b>
                </li>

                <li>
                    <span>Dinheiro:</span>
                    <b>R$ <?php echo number_format($moneyValue, 2, '.', ','); ?></b>
                </li>

                <li>
                    <span>PIX:</span>
                    <b>R$ <?php echo number_format($pixValue, 2, '.', ','); ?></b>
                </li>

                <?php if ($deliveryValue != 0) { ?>
                    <li>
                        <span>Taxa de entrega:</span>
                        <b>R$ <?php echo number_format($deliveryValue, 2, '.', ',');; ?></b>
                    </li>
                <?php } ?>

                <li>
                    <span><b>Total:</b></span>
                    <b>R$ <?php echo number_format(($cardValue + $moneyValue + $deliveryValue), 2, '.', ','); ?></b>
                </li>
            </div>
        <?php } ?>

        <div class="box">
            <div class="box-title">ENTREGADORES</div>
            <?php
            $query = $conn->query("SELECT *, sum(delivery_price) as value, count(delivery_motoboy_id) as delivery FROM orders WHERE status='finished' OR status='ended' AND created_at > '$initial_timestamp' AND created_at < '$final_timestamp' GROUP BY delivery_motoboy_id ORDER BY count(delivery_motoboy_id) DESC LIMIT 20");
            while ($row = $query->fetch()) {
                $user = $conn->query("SELECT name FROM delivery_motoboy WHERE id='$row[delivery_motoboy_id]'")->fetch();

                if ($row['delivery'] != 0) {
            ?>
                    <li>
                        <span><?php echo $user['name']; ?> - <?php echo $row['delivery']; ?> Entregas</span>
                        <b>R$ <?php echo number_format($row['value'], 2, ',', '.'); ?></b>
                    </li>
            <?php }
            } ?>
        </div>
    </div>

    <div class="title-section" style="margin-top: 40px">Dados</div>

    <div class="boxes">
        <div class="box">
            <div class="box-title">Clientes que mais compram</div>
            <?php
            $query = $conn->query("SELECT *, count(id_user) as orders FROM orders WHERE status='finished' OR status='ended' GROUP BY id_user ORDER BY count(id_user) DESC LIMIT 20");
            while ($row = $query->fetch()) {
                $user = $conn->query("SELECT name FROM users WHERE id='$row[id_user]'")->fetch();
            ?>
                <li>
                    <span><?php echo $user['name']; ?></span>
                    <b><?php echo $row['orders']; ?></b>
                </li>
            <?php } ?>
        </div>

        <div class="box">
            <div class="box-title">Clientes que mais gastam</div>
            <?php
            $query = $conn->query("SELECT *, sum(product_price) as value FROM orders WHERE status='finished' OR status='ended' GROUP BY id_user ORDER BY sum(product_price) DESC LIMIT 20");
            while ($row = $query->fetch()) {
                $user = $conn->query("SELECT name FROM users WHERE id='$row[id_user]'")->fetch();
            ?>
                <li>
                    <span><?php echo $user['name']; ?></span>
                    <b>R$ <?php echo number_format($row['value'], 2, ',', '.'); ?></b>
                </li>
            <?php } ?>
        </div>
    </div>
</div>

<style>
    .boxes {
        display: grid;
        gap: 15px;
        grid-template-columns: repeat(2, 1fr);
    }

    .boxes .box {
        border-radius: 6px;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
        border: 1px solid rgba(0, 0, 0, 0.05);
        padding: 12px;
    }

    .boxes .box .box-title {
        font-weight: bold;
        font-size: 18px;
    }

    .boxes .box li {
        display: flex;
        list-style: none;
        margin-top: 8px;
        padding-bottom: 4px;
        justify-content: space-between;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }

    .boxes.finance .box li:last-child {
        border-bottom: none;
        padding: 4px;
        color: black;
        background: rgba(0, 0, 0, 0.1);
    }

    .filter {
        display: flex;
        align-items: center;
        margin-bottom: 14px;
        padding: 16px;
        border: 1px solid rgba(0, 0, 0, 0.05);
        border-radius: 4px;
        background: rgba(0, 0, 0, 0.03);
    }

    .filter .group {
        margin-right: 14px;
    }

    .filter .group input {
        outline: none;
        border: none;
        border-radius: 4px;
        padding: 8px;
        background: #FFF;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
        border: 1px solid rgba(0, 0, 0, 0.05);
    }

    .filter .group span {
        font-weight: bold;
        font-size: 16px;
    }

    .filter button {
        padding: 12px;
        border: 0;
        outline: none;
        border-radius: 4px;
        font-weight: bold;
        background: #2e9ad0;
        color: white;
    }
</style>