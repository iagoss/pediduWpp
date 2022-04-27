<?php if($_GET['a'] == 1) {
    if($_POST['form'] == 'form') {
        $name = $core->clear($_POST['name']);
        $description = $core->clear($_POST['description']);
        $price = $core->clear($_POST['price']);
        $price_starting = $core->clear($_POST['price_starting']);
        $quantity = $core->clear($_POST['quantity']);
        $categorie = $core->clear($_POST['categorie']);
        $additional = $core->clear($_POST['additionals']);
        
        $all_available = $core->clear($_POST['all_available']);
        $time_ini = $all_available == 'on' ? '00:00:00' : $core->clear($_POST['time_ini']);
        $time_end = $all_available == 'on' ? '23:59:00' : $core->clear($_POST['time_end']);
        $prosseguir = true;

        if(empty($name) || $price == null) {
            $form_return .= aviso_red("Preencha todos os campos.");
            $prosseguir = false;
        }

        if($prosseguir) {
            $up_name = 'imagem';

            $up_gallery = $core->clear($_POST["gl-$up_name"]);
            $up_file = $_FILES["fl-$up_name"];
            $up_url = $core->clear($_POST["url-$up_name"]);

            $upload = new Upload($conn, $up_gallery, $up_file, $up_url, 'product-', true);

            if(!$upload->erro) {
                $caminho_img = $upload->caminho;
            } else {
                $form_return .= aviso_red($upload->erro);
                $prosseguir = false;
            }
        }
        if(strtotime($time_ini) > strtotime($time_end)){
            $form_return .= aviso_red("O Horário inicial não pode ser maior que o horário final");
            $prosseguir = false;
        }

        if($prosseguir) {
            //$additional = '';
            $methodo = '';
            $days = '';

            // $sql3 = $conn->query("SELECT * FROM products_additional WHERE status='active' ORDER BY id ASC");
            // while($sql4 = $sql3->fetch()) {
            //     $check_name = 'c-' . $sql4['id'];
            //     if($_POST[$check_name] == 'on') { $additional .= $sql4['id'] . ','; }
            // }

            $sql5 = $conn->query("SELECT * FROM delivery_methodos WHERE status='active' ORDER BY id ASC");
            while($sql6 = $sql5->fetch()) {
                $check_name = 'd-' . $sql6['id'];
                if($_POST[$check_name] == 'on') { $methodo .= $sql6['id'] . ','; }
            }
            
            for($i=0;$i<=6;$i++){
                $check_name = 'w-'.$i;
                if($_POST[$check_name] == 'on') { $days .= '['.$i.']'; }
            }
            
            

            $insert_data['name'] = $name;
            $insert_data['description'] = $description;
            $insert_data['price'] = $price;
            $insert_data['price_starting'] = $price_starting;
            $insert_data['quantity'] = $quantity;
            $insert_data['cat_id'] = $categorie;
            $insert_data['additional'] = $additional;
            $insert_data['delivery_options'] = $methodo;
            $insert_data['image'] = $caminho_img;
            
            $insert_data['time_ini'] = $time_ini;
            $insert_data['time_end'] = $time_end;
            $insert_data['dias'] = $days;

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

        $form->createInput('Nome', 'text', 'name');
        $form->createInput('Descrição', 'text', 'description');

        $form->createInput('Preço', 'number', 'price');
        //$form->createInput('Quantidade disponível', 'number', 'quantity');

        $form->mostraAviso(well('Preencha caso o produto utlize o valor do opcional selecionado, lembre-se de definir o "Preço" como 0 (zero)'));
        $form->createInput('A partir de', 'number', 'price_starting');
        
        

        $categorias = array();
        $sql = $conn->query("SELECT * FROM products_categories WHERE status='active' ORDER BY id ASC");
        while($sql2 = $sql->fetch()) {
            $atual = array("label" => $core->clear($sql2['name']), "value" => $sql2['id']);
            $categorias[] = $atual;
        }

        $form->createSelect('Categoria', 'categorie', $categorias);
        
        $form->mostraAviso(well('Insira o intervalo de horário que deseja que este produto fique disponível ou marque "sempre disponível"'));
        $form->createInput('Horário inicial', 'time', 'time_ini', '00:00:00');
        $form->createInput('Horário final', 'time', 'time_end', '23:59');
        $form->createCheckbox('Sempre disponível', 'all_available', true);

        $form->createUpload('Imagem do produto', 'imagem');
        
        $form->mostraTitulo('Escolha o(s) dia(s) que o produto ficará disponível');
        $form->createCheckbox('Todos os dias', 'w-all', true, 'check-side check-dias check-all');
        $dias = array('Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado');
        for($i=0;$i<=6;$i++){
            $check_name = 'w-'.$i;
            $form->createCheckbox($dias[$i], $check_name, true, 'check-side check-dias');
        }

        $form->mostraTitulo('Escolha a lista de complementos');
        $form->createInput('', 'text', 'additionals', '');
        $sql3 = $conn->query("SELECT * FROM products_additional WHERE status='active' ORDER BY name ASC");
        while($sql4 = $sql3->fetch()) {
            $check_name = 'c-' . $sql4['id'];
            $form->createCheckbox($sql4['name'], $check_name, '', 'check-side check-add');
        }

        $form->mostraTitulo('Métodos de entrega disponível');
        $sql5 = $conn->query("SELECT * FROM delivery_methodos WHERE status='active' ORDER BY name ASC");
        while($sql4 = $sql5->fetch()) {
            $check_name = 'd-' . $sql4['id'];
            $form->createCheckbox($sql4['name'], $check_name, 'true', 'check-side');
        }

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
        $description = $core->clear($_POST['description']);
        $price = empty($core->clear($_POST['price'])) ? 0 : $core->clear($_POST['price']);
        $price_starting = $core->clear($_POST['price_starting']);
        $quantity = $core->clear($_POST['quantity']);
        $categorie = $core->clear($_POST['categorie']);
        $additional = $core->clear($_POST['additionals']);
        
        $all_available = $core->clear($_POST['all_available']);
        $time_ini = $all_available == 'on' ? '00:00:00' : $core->clear($_POST['time_ini']);
        $time_end = $all_available == 'on' ? '23:59:00' : $core->clear($_POST['time_end']);
        $prosseguir = true;
        
        if(empty($name) || $price == null) {
            $form_return .= aviso_red("Preencha todos os campos.");
            $prosseguir = false;
        }

        if(empty($name)) {
            $form_return .= aviso_red("Preencha todos os campos.");
            $prosseguir = false;
        }

        if($prosseguir) {
            $up_name = 'imagem';

            $up_gallery = $core->clear($_POST["gl-$up_name"]);
            $up_file = $_FILES["fl-$up_name"];
            $up_url = $core->clear($_POST["url-$up_name"]);

            $upload = new Upload($conn, $up_gallery, $up_file, $up_url, 'product-', false, $ex['image']);

            if(!$upload->erro) {
                $caminho_img = $upload->caminho;
            } else {
                $form_return .= aviso_red($upload->erro);
                $prosseguir = false;
            }
        }

        if($prosseguir) {
            //$additional = '';
            $methodo = '';

            // $sql3 = $conn->query("SELECT * FROM products_additional WHERE status='active' ORDER BY id ASC");
            // while($sql4 = $sql3->fetch()) {
            //     $check_name = 'c-' . $sql4['id'];
            //     if($_POST[$check_name] == 'on') { $additional .= $sql4['id'] . ','; }
            // }

            $sql5 = $conn->query("SELECT * FROM delivery_methodos WHERE status='active' ORDER BY id ASC");
            while($sql6 = $sql5->fetch()) {
                $check_name = 'd-' . $sql6['id'];
                if($_POST[$check_name] == 'on') { $methodo .= $sql6['id'] . ','; }
            }
            
            for($i=0;$i<=6;$i++){
                $check_name = 'w-'.$i;
                if($_POST[$check_name] == 'on') { $days .= '['.$i.']'; }
            }

            $update_data['name'] = $name;
            $update_data['description'] = $description;
            $update_data['price'] = $price;
            $update_data['price_starting'] = $price_starting;
            $update_data['quantity'] = $quantity;
            $update_data['cat_id'] = $categorie;
            $update_data['additional'] = $additional;
            $update_data['delivery_options'] = $methodo;
            $update_data['image'] = $caminho_img;
            
            $update_data['time_ini'] = $time_ini;
            $update_data['time_end'] = $time_end;
            $update_data['dias'] = $days;

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

        $form = new Form('form-submit', '');

        $form->createInput('Nome', 'text', 'name', $ex['name']);
        $form->createInput('Descrição', 'text', 'description', $ex['description']);

        $form->createInput('Preço', 'number', 'price', $ex['price'] != 0 ? $ex['price'] : '0.0');
        //$form->createInput('Quantidade disponível', 'number', 'quantity', $ex['quantity']);

        $form->mostraAviso(well('Preencha caso o produto utlize o valor do opcional selecionado, lembre-se de definir o "Preço" como 0 (zero)'));
        $form->createInput('A partir de', 'number', 'price_starting', $ex['price_starting']);

        $categorias = array();
        $sql = $conn->query("SELECT * FROM products_categories WHERE status='active' ORDER BY id ASC");
        while($sql2 = $sql->fetch()) {
            $atual = array("label" => $core->clear($sql2['name']), "value" => $sql2['id']);
            $categorias[] = $atual;
        }

        $form->createSelect('Categoria', 'categorie', $categorias, $ex['cat_id']);
        
        $form->mostraAviso(well('Insira o intervalo de horário que deseja que este produto fique disponível ou marque "sempre disponível"'));
        $form->createInput('Horário inicial', 'time', 'time_ini', $ex['time_ini']);
        $form->createInput('Horário final', 'time', 'time_end', $ex['time_end']);
        $checkbox_available = $ex['time_ini'] == '00:00:00' && $ex['time_end'] == '23:59:00' ? true : false;
        $form->createCheckbox('Sempre disponível', 'all_available', $checkbox_available);

        $form->createUpload('Imagem do produto', 'imagem');
        
        $form->mostraTitulo('Escolha o(s) dia(s) que o produto ficará disponível');
        $form->createCheckbox('Todos os dias', 'w-all', $ex['dias'] == '[0][1][2][3][4][5][6]' ? true : false, 'check-side check-dias check-all');
        $dias = array('Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado');
        for($i=0;$i<=6;$i++){
            $checked = preg_match('/['.$i.']/', $ex['dias']) ? true : false;
            $check_name = 'w-'.$i;
            $form->createCheckbox($dias[$i], $check_name, $checked, 'check-side check-dias');
        }

        $form->mostraTitulo('Escolha a lista de complementos');
        $form->createInput('', 'text', 'additionals', $ex['additional']);
        $additional = explode(',', $ex['additional']);
        $sql3 = $conn->query("SELECT * FROM products_additional WHERE status='active' ORDER BY name ASC");
        while($sql4 = $sql3->fetch()) {
            $check_name = 'c-' . $sql4['id'];
            $form->createCheckbox($sql4['name'], $check_name, false, 'check-side check-add');
        }

        $form->mostraTitulo('Métodos de entrega disponível');

        $methodo = explode(',', $ex['delivery_options']);
        $sql3 = $conn->query("SELECT * FROM delivery_methodos WHERE status='active' ORDER BY name ASC");
        while($sql4 = $sql3->fetch()) {
            $check_name = 'd-' . $sql4['id'];
            $form->createCheckbox($sql4['name'], $check_name, in_array($sql4['id'], $methodo), 'check-side');
        }

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

    $delete = $conn->prepare("UPDATE $mdl_tabela SET status = 'deleted' WHERE id = ?");
    $delete->bindValue(1, $id);
    $delete->execute();

    $core->logger("O usuário ativou o registro [#$id - $mdl_tabela]", "acao");

    echo "<script>location.replace('?p=$p');</script>";
} ?>

<?php if($_GET['a'] == 6) {
    $id = $_GET['id'];

    $delete = $conn->query("INSERT INTO products (name, description, image, quantity, price, price_starting, additional, delivery_options, cat_id, author) SELECT name, description, image, quantity, price, price_starting, additional, delivery_options, cat_id, author FROM products WHERE id ='$id'");
    $core->logger("O usuário duplou o registro [#$id - $mdl_tabela]", "acao");

    echo "<script>location.replace('?p=$p');</script>";
} ?>

<?php if($_GET['a'] == '') { ?>
    <div class="box-content">
        <div class="title-section">
            <?=$mdl['nome'];?>
            <button class="btn btn-success btn-xsm btn-order">Confirmar Ordem</button>
        </div>
        <button class="btn btn-info" onclick="searchShow();">Pesquisar</button>
        <a href="?p=<?=$_GET['p'];?>&a=1"><button class="btn btn-primary f-right">Adicionar</button></a>
        <?php if($_POST['search'] == 'search') { ?><a href="?p=<?=$_GET['p'];?>"><button class="btn btn-warning">Limpar busca</button></a><?php } ?>
        
        <?php
            $cat = $conn->query("SELECT id, name FROM products_categories")->fetchAll();
        	$search = getSearchForm($cat);
        	echo $search;
        
        ?>

        <?php
        $table = new Table('', false, false);
        $table->head(array('#', 'Imagem', 'Nome', 'Categoria', 'Quantidade', 'Disponibilidade', 'Ações'));

        $table->startBody();

        $limite = 15000;
        $pagina = $_GET['pag'];
        ((!$pagina)) ? $pagina = 1 : '';
        $inicio = ($pagina * $limite) - $limite;
        
        if($_POST['search'] == 'search'){
            $busca = $core->clear($_POST['busca']);
            $cat = $core->clear($_POST['categoria']);
            $cat_id = $cat == 'all' ? 'cat_id > 0' : 'cat_id = '.$cat;
    
    		$query = "$mdl_tabela WHERE status != 'deleted' AND name LIKE ? AND $cat_id ORDER BY order_numb ASC, id DESC";
    		$sql = $conn->prepare("SELECT * FROM $query LIMIT $inicio,$limite");
    		$sql->bindValue(1, '%'.$busca.'%');
    		$sql->bindValue(2, $cat);
    		$sql->execute();

    		$_rows = $conn->prepare("SELECT count(id) FROM $query");
    		$_rows->bindValue(1, '%'.$busca.'%');
    		$_rows->bindValue(2, $cat);
    		$_rows->execute();
    		$total_registros = $_rows->fetchColumn();
        } else {
            $query = "$mdl_tabela WHERE status != 'deleted' ORDER BY order_numb ASC, id DESC";
            $sql = $conn->query("SELECT * FROM $query LIMIT $inicio,$limite");
            $total_registros = $core->getRows("SELECT * FROM $query");
        }
        

        while($sql2 = $sql->fetch()) {
            $buttons = '';
            $buttons.='<a href="?p='.$_GET['p'].'&a=2&id='.$sql2['id'].'"><button class="btn btn-primary btn-xsm">Editar</button></a>';
            $buttons.='<a href="?p='.$_GET['p'].'&a=6&id='.$sql2['id'].'"><button class="btn btn-info btn-xsm">Duplicar</button></a>';

            if($sql2['status'] == 'active'){
                $buttons.='<a href="?p='.$_GET['p'].'&a=3&id='.$sql2['id'].'"><button class="btn btn-warning btn-xsm">Inativar</button></a>';
            }else{
                $buttons.='<a href="?p='.$_GET['p'].'&a=4&id='.$sql2['id'].'"><button class="btn btn-success btn-xsm">Ativar</button></a>';
            }

            $buttons.='<a href="?p='.$_GET['p'].'&a=5&id='.$sql2['id'].'"><button class="btn btn-danger btn-xsm">Deletar</button></a>';


            $categorie = $conn->query("SELECT * FROM products_categories WHERE id='$sql2[cat_id]' LIMIT 1")->fetch();
            $available = $sql2['time_ini'] == '00:00:00' && $sql2['time_end'] == '23:59:00' ? 'Sempre disponível' : date('H:i', strtotime($sql2['time_ini'])).' ~ '.date('H:i', strtotime($sql2['time_end']));
            
            if($sql2['dias'] == '[0][1][2][3][4][5][6]') {
                 $days = 'Todos os dias';
            } else {
                
                $dias = array(0=>'Domingo', 1=>'Segunda', 2=>'Terça', 3=>'Quarta', 4=>'Quinta', 5=>'Sexta', 6=>'Sábado');
                $days = '~ ';
                $i=0;
                foreach ($dias as $key => $val){
                    if(preg_match('/['.$key.']/', $sql2['dias'])){
                        $br = $i == 2 ? '<br>' : '';
                        $days .= $val.' ~ '.$br;
                        $i++;
                    }
                }
            }
            $available = '<center>'.$available.'<br>'.$days.'</center>';
            $table->insertBody(array(
                $sql2['id'],
                "<img src='$sql2[image]' style='max-width: 50px'>",
                $core->clear($sql2['name']),
                $categorie['name'],
                $core->clear($sql2['quantity']),
                $available,
                $buttons,
            ), null, false, true);
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
<style>
        .table>thead>tr>th {
            text-align:center;
        }
        .table {
            text-align:center;
        }
        .check-dias.check-all{
            display: flex;
        }
        .btn-order {
            float: right;
            display: none;
        }
        .check-add {
            height: 100px;
        }
    </style>
    
<script>
    $(document).ready(function(){
        var sort;
        $( ".table tbody" ).sortable({
          update: function( event, ui ) {
              $('.btn-order').show();
              sort = $('.table tbody').sortable("toArray", {attribute : 'data-id'});
          }
        });
        $('.btn-order').on('click', function(){
            $.ajax({
                url: 'ajax/sortProducts.php',
                type: 'POST',
                dataType: 'json',
                data: {sort: sort},
                success: function(data){
                    location.reload();
                }
            })
        })
        
    });
</script>
