<?php


include_once("../lib/config.php");
include_once("../lib/functions.php");
include_once("../mdl/pedidos/functions/orderDatail.php");

if(isset($_POST['view'])) {
    orderDatail('finished');
}
?>
