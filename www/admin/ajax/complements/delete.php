<?php
include_once("../../lib/config.php");
include_once("../../lib/functions.php");

if($_POST['id']) {
    $id = $_POST['id'];

    $inativar = $conn->prepare("UPDATE products_additional SET status = 'inactive' WHERE id = ?");
    $inativar->bindValue(1, $id);
    $inativar->execute();

    $core->logger("O usuário deletou o registro [#$id - complementos]", "acao");

    die(json_encode(array('success' => array('message' => 'Deletado com sucesso!'))));
}
