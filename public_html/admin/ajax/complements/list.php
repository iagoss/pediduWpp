<?php

include_once("../../lib/config.php");
include_once("../../lib/functions.php");

$sql = $conn->query("SELECT id, name, author, date, status FROM products_additional WHERE status='active' ORDER BY id DESC");
$data = array();
while($row = $sql->fetch()):
    $row['date'] = date('d/m/Y H:i', strtotime($row['date']));
    array_push($data, $row);
endwhile;

echo json_encode($data);
