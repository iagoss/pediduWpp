<?php 
    header('Content-Type: application/json;charset=utf-8');
    header("Access-Control-Allow-Origin: *");

    require_once '../classes/conn.php';
    require_once '../classes/user.php';

    $e = new User;


    echo $e->getWaiter();
    