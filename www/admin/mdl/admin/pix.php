<?php if ($_GET['a'] == 2) {
    $id = $_GET['id'];

    if ($_POST['form'] == 'form') {
        $pix = $core->clear($_POST['pix']);
        $image = $core->clear($_POST['image']);
        $type = $core->clear($_POST['type']);
        $status = $core->clear($_POST['status']);
        $prosseguir = true;

        if (empty($pix) || empty($status) || empty($type)) {
            $form_return .= aviso_red("Preencha todos os campos.");
            $prosseguir = false;
        }

        if ($prosseguir) {
            $update_data['pix'] = $pix;
            $update_data['image'] = $image;
            $update_data['status'] = $status;
            $update_data['type'] = $type;

            $where_data['id'] = $id;
            $update = $sqlActions->update($mdl_tabela, $update_data, $where_data);

            if ($update) {
                $core->logger("O usuário editou a chave PIX.", "acao");

                $form_return .= aviso_green("Sucesso!");
                foreach ($_POST as $nome_campo => $valor) {
                    $_POST[$nome_campo] = '';
                }
            } else {
                $form_return .= aviso_red("Ocorreu um erro ao executar a ação. Código de erro: {$sqlActions->error}");
            }
        }
    }

    $_ex = $conn->prepare("SELECT * FROM $mdl_tabela WHERE id = ? LIMIT 1");
    $_ex->bindValue(1, $id);
    $_ex->execute();
    $ex = $_ex->fetch();

    if (!$ex) {
        $script_js .= register404();
    }
?>
    <div class="box-content">
        <div class="title-section"><?= $mdl['nome']; ?></div>

        <?php echo $form_return;

        $form = new Form('form-submit', '');

        $form->createInput('Chave PIX', 'text', 'pix', $ex['pix'], '',  '', 'Este campo é a chave PIX que ficará visível no aplicativo para os clientes.');
        $form->createInput('Imagem QRCode', 'text', 'image', $ex['image'], '', '', 'Este campo é opcional para caso houver uma imagem QRCode correspondente a chave PIX.');
        $form->createInput('Tipo', 'text', 'type', $ex['type'], '',  '', 'Este campo é o tipo da chave PIX que aparacerá pro cliente no aplicativo.');

        $status = array(
            array("label" => 'Ativo', "value" => "active"),
            array("label" => 'Inativo', "value" => "inactive"),
        );

        $form->createSelect('Status', 'status', $status, $ex['status']);

        $form->generateForm();
        echo $form->form; ?>
    </div>
<?php } ?>

<?php if ($_GET['a'] == '') { ?>
    <div class="box-content">
        <div class="title-section"><?= $mdl['nome']; ?></div>

        <?php
        $table = new Table('', true, $core->allAccess());
        $table->head(array('#', 'Chave', 'Imagem QRCode', 'Tipo', 'Status', 'Ações'));

        $table->startBody();

        $query = "$mdl_tabela ORDER BY id DESC";

        $sql = $conn->query("SELECT * FROM $query");
        $total_registros = $core->getRows("SELECT * FROM $query");

        while ($sql2 = $sql->fetch()) {
            $status = '';

            if ($sql2['status'] == 'active') {
                $status .= '<span class="label label-primary">Ativo</span> ';
            } else {
                $status .= '<span class="label label-warning">Inativo</span> ';
            }

            $btn_edit = '<a href="?p=' . $p . '&a=2&id=' . $sql2['id'] . '"><button class="btn btn-success btn-xsm">Editar</button></a>';

            $image = '';

            if ($sql2['image'] != "") {
                $image .= '<img src="' . $sql2['image'] . '">';
            } else {
                $image .= "Não possuí";
            }

            $table->insertBody(array($core->clear($sql2['id']), $core->clear($sql2['pix']), $image, $sql2['type'], $status, $btn_edit));
        }

        $table->closeTable();
        echo $table->table;

        if ($total_registros == 0) {
            echo aviso_red("Nenhum registro encontrado.");
        } ?>
    </div>
<?php } ?>