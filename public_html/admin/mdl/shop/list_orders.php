<?php if($_GET['a'] == 3) {
    $id = $_GET['id'];

    $inativar = $conn->prepare("DELETE FROM $mdl_tabela WHERE id = ?");
    $inativar->bindValue(1, $id);
    $inativar->execute();

    $core->logger("O usuário deletou o registro [#$id - $mdl_tabela]", "acao");

    echo "<script>location.replace('?p=$p');</script>";
} ?>

<?php if($_GET['a'] == '') { ?>
    <div class="box-content">
        <div class="title-section"><?=$mdl['nome'];?></div>

        <?php
        $table = new Table('', false, false);
        $table->head(array('#', 'Comprador', 'Pacote', 'Status da compra', 'Data', 'Ações'));

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
            $buttons.='<a href="?p='.$_GET['p'].'&a=3&id='.$sql2['id'].'"><button class="btn btn-danger btn-xsm">Excluir</button></a>';
            
            $comprador = $conn->query("SELECT nome FROM usuarios WHERE id='$sql2[id_user]'")->fetch();
            $pacote = $conn->query("SELECT name FROM shop WHERE id='$sql2[id_item]'")->fetch();
            
            if($sql2['status'] == 'approved'){
                $status = '<span class="label label-success">Compra aprovada</span>';
            }
            
            if($sql2['status'] == 'pending' || $sql2['status'] == 'in_process'){
                $status = '<span class="label label-warning">Aguardando pagamento</span>';
            }
            
            if($sql2['status'] == 'cancelled'){
                $status = '<span class="label label-danger">Compra cancelada ou estornada</span>';
            }
            
            if($sql2['status'] == 'created'){
                $status = '<span class="label">Link de pagamento gerado</span>';
            }

            $table->insertBody(array(
                $sql2['id'],
                $core->clear($comprador['nome']),
                $core->clear($pacote['name']),
                $status,
                date('d/m/Y H:i', strtotime($sql2['data'])),
                $buttons
            ), false, false);
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