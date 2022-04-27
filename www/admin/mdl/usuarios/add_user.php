<?php if($_GET['a'] == 1 || $_GET['a'] == 2) {
    if($_POST['form'] == 'form') {
        $name = $core->clear($_POST['name']);
        $tel = $core->clear($_POST['tel']);
        $prosseguir = true;

        if(empty($name)) {
            $form_return .= aviso_red("Preencha todos os campos.");
            $prosseguir = false;
        }

        if($prosseguir) {
            $insert_data['nome'] = $name;
            $insert_data['telefone'] = preg_replace("/[^0-9]/", "", $tel);
            
            if($_GET['a'] == 2) {
                $where_data['id'] = $core->clear($_GET['id']);
                $insert = $sqlActions->update($mdl_tabela, $insert_data, $where_data);
            } else {
                $insert = $sqlActions->insert($mdl_tabela, $insert_data);
            }

            if($insert) {
                $core->logger("O usuário adicionou um novo cliente a prazo.", "acao");

                $form_return .= aviso_green("Sucesso!");
                foreach($_POST as $nome_campo => $valor){ $_POST[$nome_campo] = '';}
            } else {
                $form_return .= aviso_red("Ocorreu um erro ao executar a ação. Código de erro: {$sqlActions->error}");
            }
        }
        
    }
    ?>
    <script>
        if ( window.history.replaceState ) {
          window.history.replaceState( null, null, window.location.href );
        }
    </script>
    <div class="box-content">
        <div class="title-section"><?=$mdl['nome'];?></div>
        <?php echo $form_return;
            if($_GET['a'] == 2) {
                $ver = $conn->prepare("SELECT * FROM $mdl_tabela WHERE id =?");
                $ver->bindValue(1, $core->clear($_GET['id']));
                $ver->execute();
                $ver = $ver->fetch();
                
                $tel = preg_match('/^([0-9]{2})([0-9]{4,5})([0-9]{4})$/', $ver['telefone'], $matches);
                $tel = '('.$matches[1].') '.$matches[2].'-'.$matches[3];
            }
            
            $url = $_GET['id'] ? "?p=".$_GET['p']."&a=".$_GET['a'].'&id='.$_GET['id'] : "?p=".$_GET['p']."&a=".$_GET['a'];
            
        ?>
        <form action="<?=$url;?>" method="post" class="form-submit">
            <input type="hidden" name="form" value="form">
            <div class="form-group">
                <label class="form-label" for="name">Nome</label>
                <input class="form-input" type="text" name="name" id="name" placeholder="Nome" value="<?php echo $ver ? $ver['nome'] : '' ?>"><br>
            </div>
            
            <div class="form-group">
                <label class="form-label" for="tel">Telefone</label>
                <input class="form-input" type="text" name="tel" id="tel" placeholder="(00) 0 0000-0000" value="<?php echo $ver ? $tel : '' ?>"><br>
            </div>
		
		<div class="form-group submit">
		    <button type="submit" class="btn btn-primary">Enviar</button>
		</div>
		</form>
    </div>
<?php } ?>

<?php if($_GET['a'] == 3) {
    $id = $_GET['id'];

    $inativar = $conn->prepare("UPDATE $mdl_tabela SET status = 'deleted ' WHERE id = ?");
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
        $table = new Table('', false, false, false);
        $table->head(array('#', 'Nome', 'Telefone', 'Ações'));

        $table->startBody();

        $limite = 15000;
        $pagina = $_GET['pag'];
        ((!$pagina)) ? $pagina = 1 : '';
        $inicio = ($pagina * $limite) - $limite;

        $query = "$mdl_tabela WHERE status!='deleted' ORDER BY id DESC";

        $sql = $conn->query("SELECT * FROM $query LIMIT $inicio,$limite");
        $total_registros = $core->getRows("SELECT * FROM $query");

        while($sql2 = $sql->fetch()) {
            $buttons = '';
            $buttons.='<a href="?p='.$_GET['p'].'&a=3&id='.$sql2['id'].'"><button class="btn btn-danger btn-xsm">Excluir</button></a>';
            $matches = array();
            $tel = preg_match('/^([0-9]{2})([0-9]{4,5})([0-9]{4})$/', $sql2['telefone'], $matches);
            $tel = '('.$matches[1].') '.$matches[2].'-'.$matches[3];
            $table->insertBody(array(
                $sql2['id'],
                $core->clear($sql2['nome']),
                $tel,
                $buttons
            ));
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
