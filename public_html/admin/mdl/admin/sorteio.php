<?php if($_GET['a'] == 1) {
	if($_POST['form'] == 'form') {
        $usuarios = $core->clear($_POST['usuarios']);
		$prosseguir = true;

		if($prosseguir) {
            $rand = rand(1, $core->getRows("SELECT * FROM users"));

			$insert_data['user_id'] = $rand;

			$insert = $sqlActions->insert($mdl_tabela, $insert_data);

			if($insert) {
                $core->logger("O usuário fez um novo sorteio.", "acao");
                
                $winner = $conn->query("SELECT name, id, phone FROM users WHERE id='".$rand."' LIMIT 1");
                $winName = $winner->fetch();

				$form_return .= aviso_green("O usuário ganhador é: <a href='?p=146&a=2&id={$winName['id']}'>{$winName['name']}</a>, telefone {$winName['phone']}");
			} else {
				$form_return .= aviso_red("Ocorreu um erro ao executar a ação. Código de erro: {$sqlActions->error}");
			}
		}
	}
?>
<div class="box-content">
	<div class="title-section"><?=$mdl['nome'];?></div>

    <?php echo $form_return;
    
    $count = $core->getRows("SELECT * FROM users");

    echo aviso_red("Clicando em enviar o sorteio será realizado em seguida.");
    
    
    $form = new Form('form-submit', '');
    $form->createInput('Quantidade de usuários', 'text', 'usuarios', $count, '', 'readonly');

	$form->generateForm();
	echo $form->form; ?>
</div>
<?php } ?>

<?php if($_GET['a'] == '') { ?>
<div class="box-content">
	<div class="title-section"><?=$mdl['nome'];?></div>
	<a href="?p=<?=$_GET['p'];?>&a=1"><button class="btn btn-primary">Fazer sorteio</button></a>
	<?php if($core->allAccess()) { ?><a href="?p=<?=$_GET['p'];?>&a=4"><button class="btn btn-danger">Resetar AI [DEV]</button></a><?php } ?>
	<?php if($_POST['search'] == 'search') { ?><a href="?p=<?=$_GET['p'];?>"><button class="btn btn-warning">Limpar busca</button></a><?php } ?>
	<br><br>

	<?php
	$table = new Table('', true, $core->allAccess());
	$table->head(array('#', 'Usuário', 'Telefone', 'Data do sorteio'));

	$table->startBody();

	$limite = 15000;
	$pagina = $_GET['pag'];
	((!$pagina)) ? $pagina = 1 : '';
	$inicio = ($pagina * $limite) - $limite;

	$query = "$mdl_tabela ORDER BY id DESC";

	if($_POST['search'] == 'search') {
		$busca = $core->clear($_POST['busca']);
		$limite = 5000;

		$campo = "name";

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
		$sql3 = $conn->query("SELECT name, phone FROM users WHERE id='".$sql2['user_id']."' LIMIT 1");
		$sql4 = $sql3->fetch();
		$table->insertBody(array($sql2['id'], $core->clear($sql4['name']), $core->clear($sql4['phone']), $core->clear($sql2['created_at'])), $sql2['status']);
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