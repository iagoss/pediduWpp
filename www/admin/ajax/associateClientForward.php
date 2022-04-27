<?php

include_once("../lib/config.php");
include_once("../lib/functions.php");

if(isset($_POST['client'])){
    $id = (int)preg_replace("/[^0-9]/", "", $_POST['orderId']);
    
    $count = $conn->query("SELECT * FROM payments WHERE order_id = {$id}")->fetchAll();
    if(count($count) > 0) {
        $sql = $conn->prepare('UPDATE payments SET cliente_id = ? WHERE order_id = ?');
        $sql->bindValue(1, $_POST['client']);
        $sql->bindValue(2, $_POST['orderId']);
        $sql->execute();
    } else {
        $ver = $conn->query("SELECT product_price FROM orders WHERE id = {$id}")->fetch();
        $sql = $conn->prepare("INSERT INTO payments (cliente_id, order_id, valor) VALUES (?, ?, ?)");
        $sql->bindValue(1, $_POST['client']);
        $sql->bindValue(2, $id);
        $sql->bindValue(3, $ver['product_price']*(-1));
        $sql->execute();
    }

    if($sql){
        echo json_encode(array('success' => array('message' => 'Cliente associado com sucesso!')));
    }else{
        echo json_encode(array('error' => array('message' => 'Erro 008, procure o supervisor do sistema!')));
    }
}
