<?php
session_start();

include "lib/config.php";
include "lib/functions.php";

if(isset($_SESSION['login'])) {
	$core->logger('O usuário entrou no painel de controle. (sessão já aberta)', 'acesso', $_SESSION['login']);
	header("Location: admin.php");
}

/**
 * Buscando configurações da revenda
 */
$consultaConfigRevenda = $conn->prepare("SELECT dashboard_login_logo as logo, name, title_site FROM resale_config");
$consultaConfigRevenda->execute();
$configRevenda = $consultaConfigRevenda->fetch();

if(!empty($_POST)) {
	$usuario = $core->clear($_POST['usuario']);
	$senha = $core->clear($_POST['senha']);
	$prosseguir = true;

	if(empty($usuario) || empty($senha)) {
		$form_return = 'Preencha todos os campos.';
		$prosseguir = false;
	}

	if($prosseguir) {
		$sql = $conn->prepare("SELECT * FROM acp_usuarios WHERE nick = ?");
		$sql->bindValue(1, $usuario);
		$sql->execute();
		$sql2 = $sql->fetch();

		if(!$sql2) {
			$form_return = 'Conta não encontrada.';
			$prosseguir = false;
		} else {
			if(md5($senha) != $sql2['senha']) {
				$form_return = 'Nome ou senha inválidos.';
				$prosseguir = false;
			}

			if($sql2['ativado'] == 'n') {
				$form_return = 'Conta desativada.';
				$prosseguir = false;
			}
		}
	}

	if($prosseguir) {
		$_SESSION['acp_id'] = $sql2['id'];
		$_SESSION['login'] = $core->clear($sql2['nick']);
		$_SESSION['acp_senha'] = $sql2['senha'];
		$_SESSION['acp_acesso_data'] = $sql2['acesso_data'];
		$_SESSION['acp_acesso_ip'] = $sql2['acesso_ip'];

		$core->logger('O usuário entrou no painel de controle.', 'acesso', $sql2['nick']);
		$sql3 = $conn->query("UPDATE acp_usuarios SET acesso_data='$timestamp', acesso_ip='$ip' WHERE id='".$sql2['id']."' LIMIT 1");

		header("Location: admin.php");
	}
}

/*
$senha = "";
echo $hash = crypt($senha, '$2a$' . $core->crypt_custo . '$' . $core->crypt_salt . '$');
*/

?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
	<meta name="language" content="pt-br">
	<meta name="robots" content="noindex, nofollow">

	<title><?= $configRevenda['title_site'] ?></title>

	<link rel="shortcut icon" href="https://pedidu.com.br/favicon.png">
	<link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="/admin/assets/css/login.css?<?= filemtime("assets/css/login.css"); ?>">
</head>

<body>
    <div class="center">
        <img id="logo" src="<?= $configRevenda['logo'] ?>" alt="<?= $configRevenda['name'] ?>" />    
        
        <div class="page">
            <div class="title">Olá, cliente!</div>
            <div class="desc">Faça login para acessar o sistema</div>
            
    		<form action="<?=$_SERVER['REQUEST_URI'];?>" method="post">
    			<div id="box-login">
    				<?=((!empty($form_return))) ? "<div class='form-status'>$form_return</div>" : "";?>
    				<div class="input-group">
    				    <input type="text" name="usuario"<?=((empty($_SESSION['nick']))) ? ' autofocus' : '';?> class="input user" value="<?=$_SESSION['nick'];?>">
    				    
    				    <label>Usuário</label>
    				</div>
    				
    				<div class="input-group">
    				    <input type="password" name="senha"<?=((!empty($_SESSION['nick']))) ? ' autofocus' : '';?> class="input pass">
    				    
    				    <label>Senha</label>
    				</div>
    			</div>

    			<button type="submit" id="submit">Entrar</button>
    		</form>
    	</div>
    </div>
    
    <script>
        const inputs = document.querySelectorAll('.input')
        inputs.forEach(item => {
            item.addEventListener("keyup", () => {
                if(item.value == '') {
                item.classList.remove("fill")
                } else {
                    item.classList.add("fill")
                }
            })
        })
    </script>
</body>
</html>
