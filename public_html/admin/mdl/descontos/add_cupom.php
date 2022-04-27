<?php if($_GET['a'] == 1) {
    if($_POST['form'] == 'form') {
        $name = $core->clear($_POST['name']);
        $discount = $core->clear($_POST['discount']);
        $price_min = $core->clear($_POST['price_min']);
        $usage_max = $core->clear($_POST['usage_max']);
        $multiple_usage = $core->clear($_POST['multiple_usage']);
        $discount_type = $core->clear($_POST['discount_type']);
        $initial_date = $core->clear($_POST['initial_date']) ? $core->clear($_POST['initial_date']) : null;
        $final_date = $core->clear($_POST['final_date']) ? $core->clear($_POST['final_date']) : null;
        $show = $core->clear($_POST['show']);
        $prosseguir = true;

        if(empty($name) || empty($discount)) {
            $form_return .= aviso_red("Preencha todos os campos.");
            $prosseguir = false;
        }

        if($prosseguir) {
            $insert_data['name'] = $name;
            $insert_data['discount'] = $discount;
            $insert_data['price_min'] = $price_min;
            $insert_data['usage_max'] = $usage_max;
            $insert_data['discount_type'] = $discount_type;
            $insert_data['multiple_usage'] = $multiple_usage;
            $insert_data['initial_date'] = $initial_date;
            $insert_data['final_date'] = $final_date;
            $insert_data['author'] = $autor;
            $insert_data['show_page'] = $show;

            if($show === true){
                $conn->query("UPDATE $mdl_tabela SET show_page='false'");
            }


            $insert = $sqlActions->insert($mdl_tabela, $insert_data);

            if($insert) {
                $core->logger("O usuário adicionou um novo bairro de entrega.", "acao");

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

        $discount_type = array(
            array("label" => 'Dinheiro (R$)', "value" => 'money'),
            array("label" => 'Porcentagem (%)', "value" => 'percent')
        );

        $multiple_usage = array(
            array("label" => 'Sim', "value" => 'yes'),
            array("label" => 'Não', "value" => 'no')
        );

        $show = array(
            array("label" => 'Sim', "value" => 'true'),
            array("label" => 'Não', "value" => 'false')
        );

        $form->createInput('Código', 'text', 'name');
        $form->createInput('Desconto', 'number', 'discount');

        $form->createInput('Válido para compras a partir de', 'number', 'price_min');
        $form->createInput('Uso máximo', 'number', 'usage_max');

        $form->createSelect('Tipo de desconto', 'discount_type', $discount_type);
        $form->createSelect('Válido somente uma vez por usuário', 'multiple_usage', $multiple_usage);

        $form->createInput('Data de início', 'datetime-local', 'initial_date');
        $form->createInput('Data de termino', 'datetime-local', 'final_date');

        $form->createSelect('Exibir na tela de compras', 'show', $show);

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
        $date = new DateTime();

        $name = $core->clear($_POST['name']);
        $discount = $core->clear($_POST['discount']);
        $price_min = $core->clear($_POST['price_min']);
        $usage_max = $core->clear($_POST['usage_max']);
        $discount_type = $core->clear($_POST['discount_type']);
        $multiple_usage = $core->clear($_POST['multiple_usage']);
        $initial_date = $core->clear($_POST['initial_date']) ? $core->clear($_POST['initial_date']) : null;
        $final_date = $core->clear($_POST['final_date']) ? $core->clear($_POST['final_date']) : null;
        $show = $core->clear($_POST['show']);

        $prosseguir = true;

        if(empty($name) || empty($discount)) {
            $form_return .= aviso_red("Preencha todos os campos.");
            $prosseguir = false;
        }

        if($prosseguir) {
            $update_data['name'] = $name;
            $update_data['discount'] = $discount;
            $update_data['price_min'] = $price_min;
            $update_data['usage_max'] = $usage_max;
            $update_data['discount_type'] = $discount_type;
            $update_data['multiple_usage'] = $multiple_usage;
            $update_data['initial_date'] = $initial_date;
            $update_data['final_date'] = $final_date;
            $update_data['show_page'] = $show;
            $update_data['author'] = $autor;

            if($show === 'true'){
                $conn->query("UPDATE $mdl_tabela SET show_page='false'");
            }


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

        $discount_type = array(
            array("label" => 'Dinheiro (R$)', "value" => 'money'),
            array("label" => 'Porcentagem (%)', "value" => 'percent')
        );

        $multiple_usage = array(
            array("label" => 'Sim', "value" => 'yes'),
            array("label" => 'Não', "value" => 'no')
        );

        $show = array(
            array("label" => 'Sim', "value" => 'true'),
            array("label" => 'Não', "value" => 'false')
        );

        $form->createInput('Código', 'text', 'name', $ex['name']);
        $form->createInput('Desconto', 'number', 'discount', $ex['discount']);

        $form->createInput('Válido para compras a partir de', 'number', 'price_min', $ex['price_min']);
        $form->createInput('Uso máximo', 'number', 'usage_max', $ex['usage_max']);

        $form->createSelect('Tipo de desconto', 'discount_type', $discount_type, $ex['discount_type']);
        $form->createSelect('Válido somente uma vez por usuário', 'multiple_usage', $multiple_usage, $ex['multiple_usage']);

        $form->createInput('Data de início', 'datetime-local', 'initial_date', ($ex['initial_date'] != NULL ? date('Y-m-d\TH:i:s', strtotime($ex['initial_date'])) : ""));
        $form->createInput('Data de termino', 'datetime-local', 'final_date', date('Y-m-d\TH:i:s', strtotime($ex['final_date'])));

        $form->createSelect('Exibir na tela de compras', 'show', $show, $ex['show_page']);

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
        $table->head(array('#', 'Codigo', 'Desconto', 'A partir de', 'Mostrar na tela de compras', 'Data de Inicio', 'Data de Fim', 'Ações'));

        $table->startBody();

        $limite = 15000;
        $pagina = $_GET['pag'];
        ((!$pagina)) ? $pagina = 1 : '';
        $inicio = ($pagina * $limite) - $limite;

        $query = "$mdl_tabela WHERE status='active' AND fidelity='false' ORDER BY id DESC";

        $sql = $conn->query("SELECT * FROM $query LIMIT $inicio,$limite");
        $total_registros = $core->getRows("SELECT * FROM $query");

        while($sql2 = $sql->fetch()) {
            $buttons = '';
            $buttons.='<a href="?p='.$_GET['p'].'&a=2&id='.$sql2['id'].'"><button class="btn btn-success btn-xsm">Editar</button></a>';
            $buttons.='<a href="?p='.$_GET['p'].'&a=3&id='.$sql2['id'].'"><button class="btn btn-danger btn-xsm">Excluir</button></a>';

            $table->insertBody(array(
                $sql2['id'],
                $core->clear($sql2['name']),
                $sql2['discount_type'] == 'money' ? 'R$ '.number_format($sql2['discount'], 2, '.', '') : $sql2['discount'].'%',
                $core->clear(number_format($sql2['price_min'], 2, '.', '')),
                $sql2['show_page'] === 'true' ? 'Exibido na tela inicial' : 'Não exibir',
                $sql2['initial_date'] != null ? date('d/m/Y H:i', strtotime($sql2['initial_date'])) : '--',
                $sql2['final_date'] != null ? date('d/m/Y H:i', strtotime($sql2['final_date'])) : '--',
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
