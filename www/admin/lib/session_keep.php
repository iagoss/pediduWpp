<?php

/**
 * ColdHabbo
 * by Henrique Arthur <eu@henriquearthur.me>
 * Não use sem autorização.
 */

session_start();
session_write_close();

include "config.php";
include "functions.php";

if(isset($_SESSION['login'])) {
    /**
     * Usuários online
     */

    $query = "SELECT * FROM acp_online WHERE id_usuario='".$dados['id']."'";
    $rows = $core->getRows($query);

    if($rows > 0) {
        $on_up_data['tempo'] = $timestamp;
        $on_up_data['url'] = $core->url_unica;
        $on_wh_data['id_usuario'] = $dados['id'];

        $sql12 = $sqlActions->update("acp_online", $on_up_data, $on_wh_data);
        unset($on_up_data);
        unset($on_wh_data);
    } else {
        $id_usuario = $dados['id'];

        if($id_usuario > 0) {
            $on_in_data['id_usuario'] = $id_usuario;
            $on_in_data['tempo'] = $timestamp;
            $on_in_data['url'] = $core->url_unica;

            $sql12 = $sqlActions->insert("acp_online", $on_in_data);
            unset($on_in_data);
        }
    }
    
    $acp_id = $_SESSION['acp_id']; 
	$login = $_SESSION['login']; 
	$acp_senha = $_SESSION['acp_senha']; 
	$acp_acesso_data = $_SESSION['acp_acesso_data']; 
	$acp_acesso_ip = $_SESSION['acp_acesso_ip'];
	
	session_destroy();
	session_start();
	
	$_SESSION['acp_id'] = $acp_id; 
	$_SESSION['login'] = $login; 
	$_SESSION['acp_senha'] = $acp_senha; 
	$_SESSION['acp_acesso_data'] = $acp_acesso_data; 
	$_SESSION['acp_acesso_ip'] = $acp_acesso_ip;

    $horario_limite = time() - 180; // 3 min
    $sql13 = $conn->query("DELETE FROM acp_online WHERE tempo < $horario_limite");
}