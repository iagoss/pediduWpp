<?php

include_once("../lib/config.php");
include_once("../lib/functions.php");

if(isset($_POST['change'])){
    $configurations = $conn->query("SELECT opened FROM configurations")->fetch();

    $update = $conn->prepare("UPDATE configurations SET opened= ?, time_manual = ? WHERE id='1'");
    $update->bindValue(1, $configurations['opened'] == 'yes' ? 'no' : 'yes');
    $update->bindValue(2, date('Y-m-d H:i'));
    $update->execute();

    if($update){
        echo json_encode(array('success' => array('message' => 'Status alterado com sucesso!')));
    }else{
        echo json_encode(array('error' => array('message' => 'Erro 005, procure o supervisor do sistema!')));
    }
}
