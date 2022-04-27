<?php 
    header('Content-Type: application/json;charset=utf-8');
    header("Access-Control-Allow-Origin: *");

    require_once '../classes/conn.php';
    require_once '../classes/mesa.php';

    $e = new Mesas;

    
    echo $e->alterStatus($_GET['id'], $_GET['status']);