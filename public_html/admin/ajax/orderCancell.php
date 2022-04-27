<?php

include_once("../lib/config.php");
include_once("../lib/functions.php");

if(isset($_POST['id'])){
    $update = $conn->prepare("UPDATE orders SET status='cancelled' WHERE id= ?");
    $update->bindValue(1, $_POST['id']);
    $update->execute();

    if($update){
        echo json_encode(array('success' => array('message' => 'Cancelado com sucesso!')));
    }else{
        echo json_encode(array('error' => array('message' => 'Erro 001, procure o supervisor do sistema!')));
    }
}
