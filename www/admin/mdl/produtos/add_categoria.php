<?php if($_GET['a'] == 1) {
    if($_POST['form'] == 'form') {
        $name = $core->clear($_POST['name']);
        $order_numb = $core->clear($_POST['order_numb']);
        $all_available = $core->clear($_POST['all_available']);
        $time_ini = $all_available == 'on' ? '00:00:00' : $core->clear($_POST['time_ini']);
        $time_end = $all_available == 'on' ? '23:59:00' : $core->clear($_POST['time_end']);
        $prosseguir = true;

        if(empty($name)) {
            $form_return .= aviso_red("Preencha todos os campos.");
            $prosseguir = false;
        }
        
        if(strtotime($time_ini) > strtotime($time_end)){
            $form_return .= aviso_red("O Horário inicial não pode ser maior que o horário final");
            $prosseguir = false;
        }

        if($prosseguir) {
            $up_name = 'imagem';

            $up_gallery = $core->clear($_POST["gl-$up_name"]);
            $up_file = $_FILES["fl-$up_name"];
            $up_url = $core->clear($_POST["url-$up_name"]);

            $upload = new Upload($conn, $up_gallery, $up_file, $up_url, 'product-category-', true);

            if(!$upload->erro) {
                $caminho_img = $upload->caminho;
            } else {
                $form_return .= aviso_red($upload->erro);
                $prosseguir = false;
            }
        }

        if($prosseguir) {
            $insert_data['name'] = $name;
            $insert_data['order_numb'] = $order_numb;
            $insert_data['time_ini'] = $time_ini;
            $insert_data['time_end'] = $time_end;
            $insert_data['icon'] = $caminho_img;

            $insert_data['author'] = $autor;

            $insert = $sqlActions->insert($mdl_tabela, $insert_data);

            if($insert) {
                $core->logger("O usuário adicionou uma nova categoria.", "acao");

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

        $form->createInput('Nome da categoria', 'text', 'name');
        $form->createInput('Ordem de exibição', 'number', 'order_numb');
        $form->mostraAviso(well('Insira o intervalo de horário que deseja que esta categoria fique disponível ou marque "sempre disponível" para deixa-la disponível durante todo o funcionamento do estabelecimento.'));
        $form->createInput('Horário inicial', 'time', 'time_ini');
        $form->createInput('Horário final', 'time', 'time_end');
        $form->createCheckbox('Sempre disponível', 'all_available', true);
        $form->createUpload('Icone', 'imagem');

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
        $order_numb = $core->clear($_POST['order_numb']);
        $all_available = $core->clear($_POST['all_available']);
        $time_ini = $all_available == 'on' ? '00:00:00' : $core->clear($_POST['time_ini']);
        $time_end = $all_available == 'on' ? '23:59:00' : $core->clear($_POST['time_end']);
        $prosseguir = true;

        if(empty($name)) {
            $form_return .= aviso_red("Preencha todos os campos.");
            $prosseguir = false;
        }
        if(strtotime($time_ini) > strtotime($time_end)){
            $form_return .= aviso_red("O Horário inicial não pode ser maior que o horário final");
            $prosseguir = false;
        }

        if($prosseguir) {
            $up_name = 'imagem';

            $up_gallery = $core->clear($_POST["gl-$up_name"]);
            $up_file = $_FILES["fl-$up_name"];
            $up_url = $core->clear($_POST["url-$up_name"]);

            $upload = new Upload($conn, $up_gallery, $up_file, $up_url, 'product-category-', false, $ex['icon']);

            if(!$upload->erro) {
                $caminho_img = $upload->caminho;
            } else {
                $form_return .= aviso_red($upload->erro);
                $prosseguir = false;
            }
        }

        if($prosseguir) {
            $update_data['name'] = $name;
            $update_data['order_numb'] = $order_numb;
            $update_data['icon'] = $caminho_img;
            $update_data['time_ini'] = $time_ini;
            $update_data['time_end'] = $time_end;

            $update_data['author'] = $autor;

            $where_data['id'] = $id;
            $update = $sqlActions->update($mdl_tabela, $update_data, $where_data);

            if($update) {
                $core->logger("O usuário editou uma categoria. [#$id].", "acao");

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
        
        $checkbox_available = $ex['time_ini'] == '00:00:00' && $ex['time_end'] == '23:59:00' ? true : false;

        $form = new Form('form-submit', '');

        $form->createInput('Nome da categoria', 'text', 'name', $ex['name']);
        $form->createInput('Ordem de exibição', 'number', 'order_numb', $ex['order_numb']);
        $form->mostraAviso(well('Insira o intervalo de horário que deseja que esta categoria fique disponível ou marque "sempre disponível" para deixa-la disponível durante todo o funcionamento do estabelecimento.'));
        $form->createInput('Horário inicial', 'time', 'time_ini', $ex['time_ini']);
        $form->createInput('Horário final', 'time', 'time_end', $ex['time_end']);
        $form->createCheckbox('Sempre disponível', 'all_available', $checkbox_available);
        $form->createUpload('Icone', 'imagem', $ex['icon']);

        $form->generateForm();
        echo $form->form; ?>
    </div>
<?php } ?>

<?php if($_GET['a'] == 3) {
    $id = (int)$_GET['id'];
    $select = $conn->query("SELECT * FROM $mdl_tabela WHERE id = $id");
    $row = $select->fetch(PDO::FETCH_ASSOC);
    $status = $row['status'] == 'active' ? 'inactive' : 'active';
    $inativar = $conn->prepare("UPDATE $mdl_tabela SET status = ? WHERE id = ?");
    $inativar->bindValue(1, $status);
    $inativar->bindValue(2, $id);
    $inativar->execute();
    
    $status = $row['status'] == 'active' ? 'inativou' : 'ativou';
    $core->logger("O usuário $status o registro [#$id - $mdl_tabela]", "acao");

    echo "<script>location.replace('?p=$p');</script>";
} ?>

<?php if($_GET['a'] == 4) {
    $id = (int)$_GET['id'];
    
        if($id > 0){
            $inativar = $conn->prepare("DELETE FROM $mdl_tabela  WHERE id = ?");
            $inativar->bindValue(1, $id);
            $inativar->execute();
            
            $core->logger("O usuário deletou o registro [#$id - $mdl_tabela]", "acao");
        } else {
            echo aviso_red("Selecione um registro");
        }


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
        $table->head(array('#', 'Nome', 'Ordem', 'Disponibilidade', 'Ações'));

        $table->startBody();

        $limite = 15000;
        $pagina = $_GET['pag'];
        ((!$pagina)) ? $pagina = 1 : '';
        $inicio = ($pagina * $limite) - $limite;

        $query = "$mdl_tabela  ORDER BY id DESC";

        $sql = $conn->query("SELECT * FROM $query LIMIT $inicio,$limite");
        $total_registros = $core->getRows("SELECT * FROM $query");

        while($sql2 = $sql->fetch()) {
            $btn_status = $sql2['status'] == 'active' ? '<button class="btn btn-danger btn-xsm">Inativar</button>' : '<button class="btn btn-warning btn-xsm">Ativar</button>';
            $buttons = '';
            $buttons.='<a href="?p='.$_GET['p'].'&a=2&id='.$sql2['id'].'"><button class="btn btn-success btn-xsm">Editar</button></a>';
            $buttons.='<a href="?p='.$_GET['p'].'&a=3&id='.$sql2['id'].'">'.$btn_status.'</a>';
            $buttons.='<a href="?p='.$_GET['p'].'&a=4&id='.$sql2['id'].'"><button class="btn btn-danger btn-xsm">Excluir</button></a>';
            
            $available = $sql2['time_ini'] == 0 && $sql2['time_end'] == '23:59:00' ? 'Sempre disponível' : date('H:i', strtotime($sql2['time_ini'])).' ~ '.date('H:i', strtotime($sql2['time_end']));
            $table->insertBody(array(
                $sql2['id'],
                $core->clear($sql2['name']),
                $core->clear($sql2['order_numb']),
                $available,
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
