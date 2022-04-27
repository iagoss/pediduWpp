<?php if($_GET['a'] == 1) {
    if($_POST['form'] == 'form') {
        $name = $core->clear($_POST['name']);
        $amount_coins = $core->clear($_POST['amount_coins']);
        $price = $core->clear($_POST['price']);
        $prosseguir = true;

        if(empty($name) || $amount_coins == 0 || $price == '0') {
            $form_return .= aviso_red("Preencha todos os campos.");
            $prosseguir = false;
        }

        if($prosseguir) {
            $insert_data['name'] = $name;
            $insert_data['amount_coins'] = $amount_coins;
            $insert_data['price'] = $price;
            $insert_data['author'] = $autor;

            $insert = $sqlActions->insert($mdl_tabela, $insert_data);

            if($insert) {
                $core->logger("O usuário adicionou um novo item à loja.", "acao");

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
        $form = new Form('form-submit', '');

        $form->createInput('Nome do pacote', 'text', 'name');
        $form->createInput('Quantidade de Hardcoins', 'number', 'amount_coins');
        $form->createInput('Preço do pacote', 'number', 'price');

        $form->generateForm();
        echo $form->form; ?>
    </div>
<?php } ?>

<?php if($_GET['a'] == 2) {
    $id = $_GET['id'];

    if($_POST['form'] == 'form') {
        $name = $core->clear($_POST['name']);
        $amount_coins = $core->clear($_POST['amount_coins']);
        $price = $core->clear($_POST['price']);
        $prosseguir = true;

        if(empty($name) || $amount_coins == 0 || $price == '0') {
            $form_return .= aviso_red("Preencha todos os campos.");
            $prosseguir = false;
        }

        if($prosseguir) {
            $update_data['name'] = $name;
            $update_data['amount_coins'] = $amount_coins;
            $update_data['price'] = $price;

            $where_data['id'] = $id;
            $update = $sqlActions->update($mdl_tabela, $update_data, $where_data);

            if($update) {
                $core->logger("O usuário editou um item da loja [#$id].", "acao");

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

        $form = new Form('form-submit', '');

        $form->createInput('Nome do pacote', 'text', 'name', $ex['name']);
        $form->createInput('Quantidade de Hardcoins', 'number', 'amount_coins', $ex['amount_coins']);
        $form->createInput('Preço do pacote', 'number', 'price', $ex['price']);

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
        $table->head(array('#', 'Nome', 'Quantidade Hardcoins', 'Preço', 'Autor', 'Data', 'Ações'));

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

            $table->insertBody(array(
                $sql2['id'],
                $core->clear($sql2['name']),
                $core->clear($sql2['amount_coins']),
                $core->clear($sql2['price']),
                $core->clear($sql2['author']),
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
