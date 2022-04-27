<?php
include_once("../../lib/config.php");
include_once("../../lib/functions.php");

if($_POST['id']) {
    $id = $_POST['id'];

    $_ex = $conn->prepare("SELECT * FROM products_additional WHERE id = ? LIMIT 1");
    $_ex->bindValue(1, $id);
    $_ex->execute();
    $ex = $_ex->fetch();

    echo json_encode($ex);
}
