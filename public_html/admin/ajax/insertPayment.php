<?php

include_once("../lib/config.php");
include_once("../lib/functions.php");

if(isset($_POST['client'])){
    $id = (int)preg_replace("/[^0-9]/", "", $_POST['client']);
    $sql = $conn->prepare("INSERT INTO payments (cliente_id, order_id, valor) VALUES (?, 0, ?)");
    $sql->bindValue(1, $id);
    $sql->bindValue(2, $_POST['valor']);
    $insert = $sql->execute();
    
    if($insert) {
        echo json_encode(array('success' => 'Valor adicionado com sucesso'));
    } else{
        echo json_encode(array('erro'=>'Deu erro'));
    }
}







