<?php


include_once("../lib/config.php");
include_once("../lib/functions.php");

if(isset($_POST['view']))
{
    $status = $conn->query("SELECT opened FROM configurations")->fetch();
    echo $status['opened'];
}
?>
