<?php

include_once("../../lib/config.php");
include_once("../../lib/functions.php");

if($_POST['form'] == 'form') {
    $name = $core->clear($_POST['name']);
    $description = $core->clear($_POST['description']);
    $hight_price = isset($_POST['hight_price']) ? $core->clear($_POST['hight_price']) : 'no';
    $type = $core->clear($_POST['type']);
    $min = $core->clear($_POST['min']);
    $max = $core->clear($_POST['max']);

    $prosseguir = true;

    if(empty($name) || empty($description)) {
        die(json_encode(array('error' => array('message' => 'Preencha todos os campos'))));
        $prosseguir = false;
    }

    if($prosseguir) {
        $insert_data['name'] = $name;
        $insert_data['description'] = $description;
        $insert_data['hight_price'] = $hight_price;
        $insert_data['type'] = $type;
        $insert_data['min'] = $min;
        $insert_data['max'] = $max;
        $insert_data['additional'] = json_encode($_POST['complemento']);

        $insert_data['author'] = $core->autor;

        $insert = $sqlActions->insert('products_additional', $insert_data);

        if($insert) {
            $core->logger("O usuário adicionou um novo complemento.", "acao");

            die(json_encode(array('success' => array('message' => 'add'))));
        }else{
            die(json_encode(array('error' => array('message' => "Ocorreu um erro ao executar a ação. Código de erro: {$sqlActions->error}"))));
        }
    }
}
