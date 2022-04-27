<?php
if($_POST['form'] == 'form') {
	$senha = $_senha = $core->clear($_POST['senha']);
	$prosseguir = true;

	if(!empty($_senha) && strlen($_senha) <= 6 || $_senha == '1234567' || $_senha == '12345678' || $_senha == '123456789' || $_senha == $dados['nick'] || $_senha == 'coldhabbo') {
		$form_return .= aviso_red("Sua senha é muito fraca. Por favor, utilize outra.");
		$prosseguir = false;
	}

	if($prosseguir && !empty($_senha)) {

		$update_data['senha'] = md5($senha);

		$where_data['nick'] = $dados['nick'];
		$update = $sqlActions->update($mdl_tabela, $update_data, $where_data);

		if($update) {
			$core->logger("O usuário editou sua senha.", "acao");

			$form_return .= aviso_yellow("Senha editada com sucesso. Você precisará relogar no painel de gerenciamento.");
		} else {
			$form_return .= aviso_red("Ocorreu um erro ao executar a ação. Código de erro: {$sqlActions->error}");
		}
	}

	if($prosseguir) {
		$up_name = 'imagem';

		$up_gallery = $core->clear($_POST["gl-$up_name"]);
		$up_file = $_FILES["fl-$up_name"];
		$up_url = $core->clear($_POST["url-$up_name"]);

		$upload = new Upload($conn, $up_gallery, $up_file, $up_url, 'acp-profile-', true);

		if(!$upload->erro) {
			$caminho_img = $upload->caminho;
		} else {
			$form_return .= aviso_red($upload->erro);
			$prosseguir = false;
		}
	}

	if($prosseguir) {
		$update_data['avatar'] = $caminho_img;

		$where_data['nick'] = $dados['nick'];
		$update = $sqlActions->update($mdl_tabela, $update_data, $where_data);

		if($update) {
			$core->logger("O usuário editou suas informações.", "acao");

			$form_return .= aviso_green("Sucesso!");
			foreach($_POST as $nome_campo => $valor){ $_POST[$nome_campo] = '';}
		} else {
			$form_return .= aviso_red("Ocorreu um erro ao executar a ação. Código de erro: {$sqlActions->error}");
		}
	}
}

    $_ex = $conn->prepare("SELECT * FROM $mdl_tabela WHERE nick = ? LIMIT 1");
    $_ex->bindValue(1, $autor);
    $_ex->execute();
    $dados = $_ex->fetch();
?>
<div class="box-content">
	<div class="title-section"><?=$mdl['nome'];?></div>

	<?php echo $form_return;
	$form = new Form('form-submit', '');

	$form->createInput('Usuário', 'text', 'nick', $dados['nick'], '', true);
	$form->createInput('Nova senha', 'password', 'senha', '', '','', 'Digite caso queira trocar a atual.');
	$form->createUpload('Imagem', 'imagem', $dados['avatar']);

	$form->generateForm();
	echo $form->form; ?>

	<?php $a = explode('|', $dados['cargos_e']);
	$cargos_e = '';
	$i = 0;
	foreach($a as $atual) {
		$i++;

		if($a[$i] == '') {
			$cargos_e .= $atual . '.';
		} else {
			$cargos_e .= $atual . ', ';
		}
	}

	$cargos_e = str_replace('.', '', $cargos_e); ?>

	<br>

	<div class="well">
		Você possui <b><?=$dados['advert'];?></b> advertências.<br>
		Último login ao painel de controle: <b><?=date('d/m/y H:i:s', $_SESSION['acp_acesso_data']);?></b>.
	</div>
</div>
