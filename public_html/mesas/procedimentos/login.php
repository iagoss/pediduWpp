<?php 
    session_start();

    require_once '../classes/conn.php';
    require_once '../classes/user.php';

    $e = new User;
    $senha = $_POST['pass'];
    $login = $_POST['login'];
    $veriify = $e->login($login, $senha);

    if($veriify == '1'){
        header("Location: ../view/index.php");
        echo $veriify;
    }else{
        
        echo '<script type="text/javascript">
                alert("Ops! Não encontramos este usuário, por favor, verifique com seu gerente!")
                window.location.href = "../view/index.php";
            </script>';
    }