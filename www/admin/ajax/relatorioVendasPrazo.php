<?php

include_once("../lib/config.php");
include_once("../lib/functions.php");

if(isset($_POST['client'])){
    $id = (int)preg_replace("/[^0-9]/", "", $_POST['client']);
?>

<div class="box size-60">
    <h1>Extrato do cliente</h1>
    <div class="table">
    <table>
        <?php
        if ($id > 0) {
            $query = 'WHERE cliente_id='.$id;
            $cliente = $conn->query("SELECT * FROM clients_forward WHERE id = {$id}")->fetch();
            $tel = preg_match('/^([0-9]{2})([0-9]{4,5})([0-9]{4})$/', $cliente['telefone'], $matches);
            $tel = '('.$matches[1].') '.$matches[2].'-'.$matches[3];
            $count = 0;
        }
            $sql = $conn->query("SELECT * FROM payments ".$query);
            while($row = $sql->fetch()):
                $count++;
                $sum = $sum + $row['valor'];
                $status = $row['valor'] < 0 ? 'negative' : 'positive';
                if($row['order_id'] > 0){
                    $description = "Pedido: #".$row['order_id'];
                } else if($row['valor'] < 0) {
                    $description = 'Lançamento manual';
                } else {
                    $description = 'Pagamento recebido';
                }
                $valor = $row['valor'] < 0 ? "- R$".number_format($row['valor']*(-1), 2, ',', '') : "+ R$".number_format($row['valor'], 2, ',', '');
        ?>
        <tr class=<?php echo $status; ?>>
            <td><?php echo date('d/m/Y', strtotime($row['data'])); ?></td>
            <td><?php echo  $description; ?></td>
            <td><?php echo $valor; ?></td>
        </tr>
        <?php 
            endwhile; 
            $saldo = $sum < 0 ? "- R$".number_format($sum*(-1), 2, ',', '') : "+ R$".number_format($sum, 2, ',', '');
        ?>
    </table>
    </div>
    <?php 
        if($count > 0){
            echo '<div class="total">Saldo: '.$saldo.'</div>';
            echo '<div class="printExtrato">Imprimir extrato</div>';
        } else {
            echo aviso_red("Nada para ver aqui");
        }
    ?>
</div>
<div class="box">
    <h1><?php echo $cliente ? $cliente['nome'] : 'Todos os registros' ?></h1>
    <?php 
        if($cliente){
            echo '<p>Telefone: <b>'.$tel.'</b></p><p>Data de cadastro: <b>'.date('d/m/Y', strtotime($cliente["created_at"])).'</b></p>';
        }
    ?>
    <br>
    <p><b>Inserir Valor:</b></p>
    <form id="insertPayment">
        <input type="hidden" name="id" value="<?=$id?>">
        <input type="number" name="money" placeholder="EX: 25.50" value="0" step="0.05">
        <input type="submit" value="inserir valor">
    </form>
</div>
<?php } ?>











