<?php if($_GET['a'] == 1) {
	if($_POST['form'] == 'form') {
		$nick = $core->clear($_POST['nick']);
		$_senha = $core->clear($_POST['pass']);
		$senha_real = md5($_senha);
		$prosseguir = true;

		if(empty($nick)) {
			$form_return .= aviso_red("Preencha todos os campos.");
			$prosseguir = false;
		}

		$sql5 = $conn->prepare("SELECT count(*) FROM acp_usuarios WHERE nick = ?");
		$sql5->bindValue(1, $nick);
		$sql5->execute();
		$rows = $sql5->fetchColumn();

		if($rows > 0) {
			$form_return .= aviso_red("Este usuário já existe.");
			$prosseguir = false;
		}

		$cargos = '';

		$sql3 = $conn->query("SELECT * FROM acp_cargos WHERE status='ativo' ORDER BY id ASC");
		while($sql4 = $sql3->fetch()) {
			// Caso o $_SESSION['nick'] tenha o cargo atual
			if($core->hasCargo($sql4['id'], $dados['id']) || $core->allAccess()) {
				$check_name = 'c-' . $sql4['id'];

				if($_POST[$check_name] == 'on') { $cargos .= $sql4['id'] . '|'; }
			}
		}

		if($prosseguir) {
			$insert_data['nick'] = $nick;
			$insert_data['senha'] = $senha_real;
			$insert_data['cargos'] = $cargos;
			$insert_data['autor'] = $autor;
			$insert_data['data'] = $timestamp;

			$insert = $sqlActions->insert($mdl_tabela, $insert_data);

			if($insert) {
				$core->logger("O usuário adicionou um novo usuário no painel.", "acao");
				$core->sendNtf("Novo membro na equipe ($nick)", "success");

				$form_return .= aviso_green("Usuário adicionado com sucesso! Senha: <b>$_senha</b><br>O usuário pode alterar a senha após logar no painel.");
				foreach($_POST as $nome_campo => $valor){ $_POST[$nome_campo] = '';}
			} else {
				$form_return .= aviso_red("Ocorreu um erro ao executar a ação. Código de erro: {$sqlActions->error}");
			}
		}
	}
?>
<div class="box-content">
	<div class="title-section"><?=$mdl['nome'];?></div>

	<?php echo $form_return;

	$form = new Form('form-submit', '');
	$form->createInput('Usuário', 'text', 'nick');
    $form->createInput('Senha', 'text', 'pass');
	$form->mostraAviso(well("Você deve selecionar o cargo do usuário e <b>todos os outros cargos que este usuário gerencia.</b>"));
	$form->mostraAviso(well("Se você tiver alguma dúvida sobre isso, não adicione nenhum usuário. Peça ajuda."));

	$sql3 = $conn->query("SELECT * FROM acp_cargos WHERE status='ativo' ORDER BY nome ASC");
	while($sql4 = $sql3->fetch()) {
		// Caso o $_SESSION['nick'] tenha o cargo atual
		if($core->hasCargo($sql4['id'], $dados['id']) || $core->allAccess()) {
			$check_name = 'c-' . $sql4['id'];
			$form->createCheckbox($sql4['nome'], $check_name, '', 'check-side');
		}
	}

	$form->generateForm();
	echo $form->form; ?>
</div>
<?php } ?>

<?php if($_GET['a'] == 2) {
	$id = $_GET['id'];

	if($_POST['form'] == 'form') {
		$nick = $core->clear($_POST['nick']);
		$advert = $core->clear($_POST['advert']);
		$_senha = $core->clear($_POST['senha']);
		$senha_real = md5($_senha);
		$prosseguir = true;

		if(empty($nick)) {
			$form_return .= aviso_red("Preencha todos os campos.");
			$prosseguir = false;
		}

		if(!empty($_senha) && strlen($_senha) <= 6 || $_senha == '1234567' || $_senha == '12345678' || $_senha == '123456789' || $_senha == $dados['nick'] || $_senha == 'brigadista') {
			$form_return .= aviso_red("Esta senha é muito fraca. Por favor, utilize outra.");
			$prosseguir = false;
		}

		if($prosseguir && !empty($_senha)) {
			$up_data['senha'] = $senha_real;

			$wh_data['id'] = $id;

			$update = $sqlActions->update($mdl_tabela, $up_data, $wh_data);
			$core->logger("O usuário editou a senha do usuário do painel [#$id]", "acao");
		}

		$_ex = $conn->prepare("SELECT * FROM $mdl_tabela WHERE id = ? LIMIT 1");
		$_ex->bindValue(1, $id);
		$_ex->execute();
		$ex = $_ex->fetch();

		if($prosseguir && $nick != $ex['nick']) {
			$update_data['nick'] = $nick;

			$form_return .= aviso_yellow("O usuário foi trocado com sucesso.");
		}

		if($prosseguir) {
			$cargos = '';

			$sql3 = $conn->query("SELECT * FROM acp_cargos WHERE status='ativo' ORDER BY id ASC");
			while($sql4 = $sql3->fetch()) {
			    // Caso o $_SESSION['nick'] tenha o cargo atual
				if($core->hasCargo($sql4['id'], $dados['id']) || $core->allAccess()) {
					$check_name = 'c-' . $sql4['id'];
					if($_POST[$check_name] == 'on') { $cargos .= $sql4['id'] . '|'; }
				}
			}

			$update_data['advert'] = $advert;
			$update_data['cargos'] = $cargos;

			$where_data['id'] = $id;
			$update = $sqlActions->update($mdl_tabela, $update_data, $where_data);

			if($update) {
				$core->logger("O usuário editou o usuário do painel [#$id].", "acao");

				$form_return .= aviso_green("Sucesso!");
				foreach($_POST as $nome_campo => $valor){ $_POST[$nome_campo] = '';}
			} else {
				$form_return .= aviso_red("Ocorreu um erro ao executar a ação. Código de erro: {$sqlActions->error}");
			}
		}
	}

	$_ex = $conn->prepare("SELECT * FROM $mdl_tabela WHERE id = ? LIMIT 1");
	$_ex->bindValue(1, $id);
	$_ex->execute();
	$ex = $_ex->fetch();

	if(!$ex) {
		$script_js .= register404();
	}
?>
<div class="box-content">
	<div class="title-section"><?=$mdl['nome'];?></div>

	<a href="?p=<?=$core->getMdlId('Logs');?>&nick=<?=$ex['nick'];?>"><button class="btn btn-success">Ver logs</button></a>
	<button class="btn btn-warning" onclick="adverter(this);" rel="?p=<?=$p;?>&a=5&id=<?=$id;?>">Dar advertência</button>
	<button class="btn btn-primary" onclick="alertar(this);" rel="?p=<?=$p;?>&a=6&id=<?=$id;?>">Enviar alerta</button>
	<?php if($ex['ativado'] == 's') { ?><button class="btn btn-info" onclick="inativarConta(this);" rel="?p=<?=$p;?>&a=7&id=<?=$id;?>">Inativar conta</button><?php } ?>
	<?php if($ex['ativado'] == 'n') { ?><button class="btn btn-info" onclick="ativarConta(this);" rel="?p=<?=$p;?>&a=8&id=<?=$id;?>">Ativar conta</button><?php } ?>
	<?php if($core->hasCargo($ex['id'], $dados['id'])) { ?><button class="btn btn-danger" onclick="deletar(this, 1);" rel="?p=<?=$p;?>&a=3&id=<?=$id;?>">Inativar</button><br><br><?php } ?>

	<?php if($ex['ativado'] == 'n') {
		echo aviso_red("Esta conta foi inativada por ".$ex['ativado_autor']." em " . date('d/m/Y H:i', $ex['ativado_data']));
	} ?>

	<div class="well">
		O último acesso deste usuário ao painel de gerenciamento foi em <b><?=date('d/m/Y H:i:s', $ex['acesso_data']);?></b> utilizando o IP <b><?=$ex['acesso_ip'];?></b>.<br>
		O usuário possui <b><?=$ex['advert'];?></b> advertências.<br>
		Conta criada por <b><?=$ex['autor'];?></b> em <b><?=date('d/m/Y H:i:s', $ex['data']);?></b>.
	</div>

	<hr>

	<?php echo $form_return;

	$form = new Form('form-submit', '');

	$form->mostraAviso(well("Se você mudar o nick do usuário, tudo o que ele fez no painel e no site continuará com seu nick antigo e apenas o que ele fizer a partir da mudança ficará com o nick novo."));

	$form->createInput('Usuário', 'text', 'nick', $ex['nick']);
	$form->createInput('Advertências', 'text', 'advert', $ex['advert'], 'w-sm');
	$form->createInput('Nova senha', 'password', 'senha', '', '','', 'Digite caso queira trocar a atual.');

	$form->mostraAviso(well("Você deve selecionar o cargo do usuário e todos os outros cargos que este usuário gerencia.<br>Exemplo: se ele for um Coordenador de Conteúdo, então selecione: Coordenador de Conteúdo, Jornalista, Promotor de Eventos, Colunista, etc. Tudo o que for relacionado ao conteúdo."));
	$form->mostraAviso(well("Se você tiver alguma dúvida sobre isso, não adicione nenhum usuário. Peça ajuda."));

	$sql3 = $conn->query("SELECT * FROM acp_cargos WHERE status='ativo' ORDER BY id ASC");
	while($sql4 = $sql3->fetch()) {
		// Caso o $_SESSION['nick'] tenha o cargo atual
		if($core->hasCargo($sql4['id'], $dados['id']) || $core->allAccess()) {
			$check_name = 'c-' . $sql4['id'];
			if($core->hasCargo($sql4['id'], $ex['id'])) { $checked = true; } else { $checked = false; }

			$form->createCheckbox($sql4['nome'], $check_name, $checked, 'check-side');
		}
	}

	$form->generateForm();
	echo $form->form; ?>
</div>

<div class="box-content">
	<div class="title-section">Alertas emitidos</div>

	<?php
	$sql7 = $conn->prepare("SELECT count(id) FROM acp_usuarios_alertas WHERE id_usuario = ? ORDER BY id DESC");
	$sql7->bindValue(1, $id);
	$sql7->execute();
	$rows = $sql7->fetchColumn();

	if($rows > 0) {
		$sql6 = $conn->prepare("SELECT * FROM acp_usuarios_alertas WHERE id_usuario = ? ORDER BY id DESC");
		$sql6->bindValue(1, $id);
		$sql6->execute();

		while($sql8 = $sql6->fetch()) {
			$alerta = $core->clear($sql8['alerta']) . '<br><br>Enviado por <b>'.$sql8['autor'].'</b> em <b>'.date("d/m/Y H:i", $sql8["data"]).'</b>.<br>';

			if($sql8['lido'] == 's') {
				$alerta .= '<div class="label label-success m-top-o">Este alerta foi lido pelo usuário.</div>';
			} else {
				$alerta .= '<div class="label label-danger m-top-o">Este alerta ainda não foi lido pelo usário.</div>';
			}

			echo well($alerta);
		}

	} else {
		echo aviso_blue("Nenhum alerta foi emitido para este usuário.");
	}
	?>
</div>
<?php } ?>

<?php if($_GET['a'] == 339955) {
	$id = $_GET['id'];

	$ids = explode(',', $id);
	$ids = array_filter($ids);

	if(count($ids) > 0) {
		$delete = $conn->prepare("DELETE FROM $mdl_tabela WHERE id = ? LIMIT 1");
		$delete->bindParam(1, $id_atual);

		foreach ($ids as $id_atual) {
			$delete->execute();

			$core->logger("O usuário deletou o registro [#$id_atual - $mdl_tabela]", "acao");
		}
	} else {
		$delete_where['id'] = $id;
		$delete = $sqlActions->delete($mdl_tabela, $delete_where);

		$core->logger("O usuário deletou o registro [#$id_atual - $mdl_tabela]", "acao");
	}
} ?>

<?php if($_GET['a'] == 3) {
	$id = $_GET['id'];

	$ids = explode(',', $id);
	$ids = array_filter($ids);

	if(count($ids) > 0) {
		$delete = $conn->prepare("UPDATE $mdl_tabela SET status = 'inativo' WHERE id = ? LIMIT 1");
		$delete->bindParam(1, $id_atual);

		foreach ($ids as $id_atual) {
			$delete->execute();

			$core->logger("O usuário deletou o usuário do painel [#$id_atual]", "acao");
		}
	} else {
		$delete_where['id'] = $id;
		$delete = $conn->prepare("UPDATE $mdl_tabela SET status = 'inativo' WHERE id = ? LIMIT 1");
		$delete->bindValue(1, $id);
		$delete->execute();

		$core->logger("O usuário deletou o usuário do painel [#$id]", "acao");
	}

	$id = $_GET['id'];

	$up['ativado'] = 'n';
	$up['ativado_autor'] = $autor;
	$up['ativado_data'] = $timestamp;
	$wh['id'] = $id;

	$update = $sqlActions->update($mdl_tabela, $up, $wh);
	$core->logger("O usuário inativou um painel #$id", "acao");
} ?>

<?php if($_GET['a'] == 4) {
	$id = $_GET['id'];

	$reset = $conn->query("ALTER TABLE $mdl_tabela AUTO_INCREMENT = 1;");
	$core->logger("O usuário resetou o AI de $mdl_tabela", "acao");

	echo "<script>location.replace('?p=$p');</script>";
} ?>

<?php if($_GET['a'] == 9) {
	$id = $_GET['id'];

	$ativar = $conn->prepare("UPDATE $mdl_tabela SET status = 'ativo' WHERE id = ?");
	$ativar->bindValue(1, $id);
	$ativar->execute();

	$core->logger("O usuário ativou o registro [#$id - $mdl_tabela]", "acao");

	$id = $_GET['id'];

	$up['ativado'] = 's';
	$up['ativado_autor'] = $autor;
	$up['ativado_data'] = $timestamp;
	$wh['id'] = $id;

	$update = $sqlActions->update($mdl_tabela, $up, $wh);
	$core->logger("O usuário ativou um painel #$id", "acao");
} ?>

<?php if($_GET['a'] == 5) {
	$id = $_GET['id'];

	$sql = $conn->prepare("SELECT advert FROM $mdl_tabela WHERE id = ? LIMIT 1");
	$sql->bindValue(1, $id);
	$sql->execute();
	$sql2 = $sql->fetch();

	$new = $sql2['advert']+1;

	$up_data['advert'] = $new;
	$wh_data['id'] = $id;

	$update = $sqlActions->update($mdl_tabela, $up_data, $wh_data);
	$core->logger("O usuário deu advertência ao usuário #$id", "acao");
} ?>

<?php if($_GET['a'] == 6) {
	$id = $_GET['id'];
	$alerta = $core->clear($_POST['alerta']);

	$in_data['id_usuario'] = $id;
	$in_data['alerta'] = $alerta;
	$in_data['autor'] = $autor;
	$in_data['data'] = $timestamp;

	$update = $sqlActions->insert("acp_usuarios_alertas", $in_data);
	$core->logger("O usuário enviou um alerta para o membro da equipe #$id", "acao");
} ?>

<?php if($_GET['a'] == 7) {
	$id = $_GET['id'];

	$up['ativado'] = 'n';
	$up['ativado_autor'] = $autor;
	$up['ativado_data'] = $timestamp;
	$wh['id'] = $id;

	$update = $sqlActions->update($mdl_tabela, $up, $wh);
	$core->logger("O usuário inativou um painel #$id", "acao");
} ?>

<?php if($_GET['a'] == 8) {
	$id = $_GET['id'];

	$up['ativado'] = 's';
	$up['ativado_autor'] = $autor;
	$up['ativado_data'] = $timestamp;
	$wh['id'] = $id;

	$update = $sqlActions->update($mdl_tabela, $up, $wh);
	$core->logger("O usuário ativou um painel #$id", "acao");
} ?>

<?php if($_GET['a'] == '') { ?>
<div class="box-content">
	<div class="title-section"><?=$mdl['nome'];?></div>
	<a href="?p=<?=$_GET['p'];?>&a=1"><button class="btn btn-primary">Adicionar</button></a>
	<?php if($core->allAccess()) { ?><a href="?p=<?=$_GET['p'];?>&a=4"><button class="btn btn-danger">Resetar AI [DEV]</button></a><?php } ?>
	<button class="btn btn-info" onclick="searchShow();">Pesquisar</button>
	<?php if($_POST['search'] == 'search') { ?><a href="?p=<?=$_GET['p'];?>"><button class="btn btn-warning">Limpar busca</button></a><?php } ?>
	<br><br>

	<?php

	$search = getSearchForm();
	echo $search;

	?>

	<?php
	$table = new Table('', true, $core->allAccess(), true);
	$table->head(array('#', 'Nick', 'Último acesso', 'Criador da conta', 'Ações'));

	$table->startBody();

	$limite = 15;
	$pagina = $_GET['pag'];
	((!$pagina)) ? $pagina = 1 : '';
	$inicio = ($pagina * $limite) - $limite;

	$query = "$mdl_tabela ORDER BY id DESC";

	if($_POST['search'] == 'search') {
		$busca = $core->clear($_POST['busca']);
		$limite = 5000;

		$campo = "nick";

		$query = "$mdl_tabela WHERE $campo LIKE ? ORDER BY id DESC";
		$sql = $conn->prepare("SELECT * FROM $query LIMIT $inicio,$limite");
		$sql->bindValue(1, '%'.$busca.'%');
		$sql->execute();

		$_rows = $conn->prepare("SELECT count(id) FROM $query");
		$_rows->bindValue(1, '%'.$busca.'%');
		$_rows->execute();
		$total_registros = $_rows->fetchColumn();

		echo '<div class="searching">Pesquisando por: <b>'.$busca.'</b></div>';
	} else {
		$sql = $conn->query("SELECT * FROM $query LIMIT $inicio,$limite");
		$total_registros = $core->getRows("SELECT * FROM $query");
	}

	while($sql2 = $sql->fetch()) {
		$table->insertBody(array($sql2['id'], $core->clear($sql2['nick']), $core->clear(date('d/m/Y H:i', $sql2['acesso_data'])), $core->clear($sql2['autor']), 'actions'), $sql2['status']);
	}

	$table->closeTable();
	echo $table->table;

	if($total_registros == 0) {
		echo aviso_red("Nenhum registro encontrado.");
	} else {
		echo '<ul class="pagination">';

		$total_paginas = ceil($total_registros / $limite);

		$links_laterais = ceil($limite / 2);

		$inicio = $pagina - $links_laterais;
		$limite = $pagina + $links_laterais;

		for ($i = $inicio; $i <= $limite; $i++){
			if ($i == $pagina) {
				echo '<li class="active"><a href="#">'.$i.'</a></li>';
			} else {
				if ($i >= 1 && $i <= $total_paginas){
					$link = '?' . $_SERVER["QUERY_STRING"];
					$link = preg_replace('/(\\?|&)pag=.*?(&|$)/','',$link);
					echo '<li><a href="'.$link.'&pag='.$i.'">'.$i.'</a></li>';
				}
			}
		}

		echo '</ul>';
	} ?>

	<?php

	if($total_registros > 0) {
		$marked = getMarkedSelect($p, 3);
		echo $marked;
	}

	?>
</div>
<?php } ?>
