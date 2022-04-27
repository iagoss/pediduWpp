<?php

include_once("../../lib/config.php");
include_once("../../lib/functions.php");

if($_POST['form'] == 'form') {
    $id = $_POST['id'];

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
        $update_data['name'] = $name;
        $update_data['description'] = $description;
        $update_data['hight_price'] = $hight_price;
        $update_data['type'] = $type;
        $update_data['min'] = $min;
        $update_data['max'] = $max;
        $update_data['additional'] = json_encode($_POST['complemento']);

        $where_data['id'] = $id;

        $update = $sqlActions->update('products_additional', $update_data, $where_data);

        if($update) {
            $core->logger("O usuário editou um complemento. [#$id]", "acao");

            die(json_encode(array('success' => array('message' => 'edited'))));
        }else{
            die(json_encode(array('error' => array('message' => "Ocorreu um erro ao executar a ação. Código de erro: {$sqlActions->error}"))));
        }
    }
}
