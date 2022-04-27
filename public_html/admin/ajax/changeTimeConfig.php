<?php

include_once("../lib/config.php");
include_once("../lib/functions.php");

if(isset($_POST)){

    $update = $conn->prepare("UPDATE configurations SET delivery_time= ?, withdraw_time= ? WHERE id='1'");
    $update->bindValue(1, $_POST['delivery_time']);
    $update->bindValue(2, $_POST['withdraw_time']);
    $update->execute();

    if($update){
        echo json_encode(array('success' => array('message' => 'Status alterado com sucesso!')));
    }else{
        echo json_encode(array('error' => array('message' => 'Erro 005, procure o supervisor do sistema!')));
    }
}
