<?php if($_GET['a'] == 1) {
    if($_POST['form'] == 'form') {
        $name = $core->clear($_POST['name']);
        $price = $core->clear($_POST['price']);
        $prosseguir = true;

        if(empty($name) || empty($price)) {
            $form_return .= aviso_red("Preencha todos os campos.");
            $prosseguir = false;
        }

        if($prosseguir) {
            $sqlVerifica = $conn->query("SELECT * FROM $mdl_tabela ORDER BY id DESC LIMIT 1");
            $verifica = $sqlVerifica->fetch();
            $tableprice = $verifica['price_2'] == NULL ? 'price' : 'price_2';
            
            $insert_data['name'] = $name;
            $insert_data[$tableprice] = $price;

            $insert_data['author'] = $autor;

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
        $form = new Form('form-submit', '');

        $form->createInput('Nome do bairro', 'text', 'name');
        $form->createInput('Preço da entrega', 'number', 'price');

        $form->generateForm();
        echo $form->form; ?>
    </div>
<?php } ?>

<?php if($_GET['a'] == 2) {
    $id = $_GET['id'];

    $_ex = $conn->prepare("SELECT * FROM $mdl_tabela WHERE id = ? LIMIT 1");
    $_ex->bindValue(1, $id);
    $_ex->execute();
    $ex = $_ex->fetch();
    
    $sqlVerifica = $conn->query("SELECT * FROM $mdl_tabela ORDER BY id DESC LIMIT 1");
    $verifica = $sqlVerifica->fetch();
    $tableprice = $verifica['price_2'] == NULL ? 'price' : 'price_2';

    if($_POST['form'] == 'form') {
        $name = $core->clear($_POST['name']);
        $price = $core->clear($_POST['price']);
        $prosseguir = true;

        if(empty($name) || empty($price)) {
            $form_return .= aviso_red("Preencha todos os campos.");
            $prosseguir = false;
        }

        if($prosseguir) {
            $update_data['name'] = $name;

            $update_data[$tableprice] = $price;

            $update_data['author'] = $autor;

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

    if(!$ex) {
        $script_js .= register404();
    }
    ?>
    <div class="box-content">
        <div class="title-section"><?=$mdl['nome'];?></div>

        <?php echo $form_return;

        $form = new Form('form-submit', '');

        $form->createInput('Nome do bairro', 'text', 'name', $ex['name']);
        $form->createInput('Preço da entrega', 'number', 'price', $ex[$tableprice]);

        $form->generateForm();
        echo $form->form; ?>
    </div>
<?php } ?>

<?php if($_GET['a'] == 3) {
    $id = $_GET['id'];

    $inativar = $conn->prepare("UPDATE $mdl_tabela SET status = 'inactive' WHERE id = ?");
    $inativar->bindValue(1, $id);
    $inativar->execute();

    $core->logger("O usuário inativou o registro [#$id - $mdl_tabela]", "acao");

    echo "<script>location.replace('?p=$p');</script>";
} ?>

<?php if($_GET['a'] == 4) {
    $id = $_GET['id'];

    $ativar = $conn->prepare("UPDATE $mdl_tabela SET status = 'active' WHERE id = ?");
    $ativar->bindValue(1, $id);
    $ativar->execute();

    $core->logger("O usuário ativou o registro [#$id - $mdl_tabela]", "acao");

    echo "<script>location.replace('?p=$p');</script>";
} ?>

<?php if($_GET['a'] == 5) {
    $id = $_GET['id'];

    $delete = $conn->prepare("DELETE FROM $mdl_tabela WHERE id = ?");
    $delete->bindValue(1, $id);
    $delete->execute();

    $core->logger("O usuário deletou o registro [#$id - $mdl_tabela]", "acao");

    echo "<script>location.replace('?p=$p');</script>";
} ?>

<?php if($_GET['a'] == 6) {
    $update = $conn->prepare("UPDATE $mdl_tabela SET price_2 = price, price = 0");
    $update->execute();
    echo "<script>location.replace('?p=$p');</script>";
} ?>
<?php if($_GET['a'] == 7) {
    $update = $conn->prepare("UPDATE $mdl_tabela SET price = price_2, price_2 = NULL");
    $update->execute();
    echo "<script>location.replace('?p=$p');</script>";
} ?>

<?php if($_GET['a'] == '') { ?>
    <div class="box-content">
        <div class="title-section">
            <?=$mdl['nome'];?>
            <a href="?p=<?=$_GET['p'];?>&a=1"><button class="btn btn-primary f-right">Adicionar</button></a>
            <?php
                $query = "$mdl_tabela ORDER BY id DESC";
                $sqlVerifica = $conn->query("SELECT * FROM $query LIMIT 1");
                $verifica = $sqlVerifica->fetch();
                
                if($verifica['price_2'] == NULL){
                    $ac = 6;
                    $text = "ATIVAR TAXA GRÁTIS";
                    $price = 'price';
                    $btn = 'btn-info';
                } else {
                    $ac = 7;
                    $text = "DESATIVAR TAXA GRÁTIS";
                    $price =  'price_2';
                    $btn = 'btn-danger';
                }
            ?>
            <a href="?p=<?=$_GET['p'];?>&a=<?=$ac?>"><button class="btn <?=$btn?> f-right" style="margin-right: 3px"><?=$text?></button></a>
        </div>

        <?php
        $table = new Table('', false);
        $table->head(array('#', 'Nome', 'Preço', 'Autor', 'Data', 'Ações'));

        $table->startBody();

        $limite = 15000;
        $pagina = $_GET['pag'];
        ((!$pagina)) ? $pagina = 1 : '';
        $inicio = ($pagina * $limite) - $limite;

        $query = "$mdl_tabela ORDER BY id DESC";

        $sql = $conn->query("SELECT * FROM $query LIMIT $inicio,$limite");
        $total_registros = $core->getRows("SELECT * FROM $query");

        while($sql2 = $sql->fetch()) {
            $buttons = '';
            $buttons.='<a href="?p='.$_GET['p'].'&a=2&id='.$sql2['id'].'"><button class="btn btn-info btn-xsm">Editar</button></a>';

            if($sql2['status'] == 'active'){
                $buttons.='<a href="?p='.$_GET['p'].'&a=3&id='.$sql2['id'].'"><button class="btn btn-warning btn-xsm">Inativar</button></a>';
            }else{
                $buttons.='<a href="?p='.$_GET['p'].'&a=4&id='.$sql2['id'].'"><button class="btn btn-success btn-xsm">ativar</button></a>';
            }

            $buttons.='<a href="?p='.$_GET['p'].'&a=5&id='.$sql2['id'].'"><button class="btn btn-danger btn-xsm">Deletar</button></a>';

            $table->insertBody(array(
                $sql2['id'],
                $core->clear($sql2['name']),
                $core->clear($sql2[$price]),
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
