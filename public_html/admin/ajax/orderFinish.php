<?php

include_once("../lib/config.php");
include_once("../lib/functions.php");

if(isset($_POST['id'])){
    $update = $conn->prepare("UPDATE orders SET status='finished' WHERE id= ?");
    $update->bindValue(1, $_POST['id']);
    $update->execute();

    //get order infos
    $order = $conn->prepare("SELECT * FROM orders WHERE id= ?");
    $order->bindValue(1, $_POST['id']);
    $order->execute();

    $orderInfo = $order->fetch();

    //get fidelity config
    $fidelityConfig = $conn->query("SELECT * FROM fidelity_configs")->fetch();

    //fidelity add point
    if($orderInfo['product_price'] >= $fidelityConfig['min_price']){
        $addPoint = $conn->query("INSERT INTO fidelity_points SET user_id='$orderInfo[id_user]'");
    }


    if($update){
        echo json_encode(array('success' => array('message' => 'Status atualizado com sucesso!')));
    }else{
        echo json_encode(array('error' => array('message' => 'Erro 003, procure o supervisor do sistema!')));
    }
}
