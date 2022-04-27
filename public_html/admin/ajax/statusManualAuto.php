<?php

include_once("../lib/config.php");
include_once("../lib/functions.php");

if(isset($_POST['auto'])){

    $update = $conn->prepare("UPDATE configurations SET time_manual = ? WHERE id='1'");
    $update->bindValue(1, '00/00/00 00:00');
    $update->execute();

    if($update){
        echo json_encode(array('success' => array('message' => 'Modo automático ativado com sucesso!')));
    }else{
        echo json_encode(array('error' => array('message' => 'Erro 005, procure o supervisor do sistema!')));
    }
}
