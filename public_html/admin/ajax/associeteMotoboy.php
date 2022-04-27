<?php

include_once("../lib/config.php");
include_once("../lib/functions.php");

if(isset($_POST['motoboy'])){

    $update = $conn->prepare("UPDATE orders SET delivery_motoboy_id= ? WHERE id= ?");
    $update->bindValue(1, $_POST['motoboy']);
    $update->bindValue(2, $_POST['orderId']);
    $update->execute();

    if($update){
        echo json_encode(array('success' => array('message' => 'Entregador associado com sucesso!')));
    }else{
        echo json_encode(array('error' => array('message' => 'Erro 008, procure o supervisor do sistema!')));
    }
}
