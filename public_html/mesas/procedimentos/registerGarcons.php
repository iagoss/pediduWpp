<?php
include_once '../classes/conn.php';

function register($login, $senha){
    $c = new conectar();
    $conect = $c->conexao();

        $sql = "INSERT INTO garcons (user, pass )
        
        VALUES ('$login', '$senha')";

    return   mysqli_query($conect, $sql);
}

register($_POST['login'],$_POST['pass'] );


?>