<?php
include_once("../../lib/config.php");
include_once("../../lib/functions.php");

if($_POST['id']) {
    $id = $_POST['id'];
    $copy = $conn->query("INSERT INTO products_additional (name, description, min, max, hight_price, additional, author) SELECT name, description, min, max, hight_price, additional, author FROM products_additional WHERE id ='$id'");
    $core->logger("O usuário duplou o registro [#$id - complementos]", "acao");

    die(json_encode(array('success' => array('message' => 'Duplicado com sucesso!'))));
}
