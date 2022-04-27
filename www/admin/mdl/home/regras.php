<? if($_GET['a'] == '' || $_GET['a'] == '2') { ?>
<div class="box-content">
    <style>
        .simple-vip {
            background: #ececec;
            color: #000;
            border: 1px solid rgba(0, 0, 0, 0.2);
        }
        
        .vip-extreme {
            background: #181818;
            color: #FFF;
        }
    </style>
	<div class="title-section"><?=$mdl['nome'];?></div>
    <?php 
    $query = "$mdl_tabela ORDER BY id DESC";
    $sql = $conn->query("SELECT * FROM $query");
    
    $btn_regras = '';
    
    while($res = $sql->fetch()) {
        //Permissão de Conteúdo
        if($permissoes[139] == 's') {
            $btn_regras .= '<a href="/acp/admin.php?v=1&id='. $res['id'] . '"><button class="btn btn-primary">'.$res['titulo'] .'</button></a>';
        }
        
        //Permissão de rádio
        if($permissoes[140] == 's') {
            $btn_regras .= '<a href="/acp/admin.php?v=1&id='. $res['id'] . '"><button class="btn btn-primary">'.$res['titulo'] .'</button></a>';
        }
        
        //Permissão de Marketing
        if($permissoes[141] == 's') {
            $btn_regras .= '<a href="/acp/admin.php?v=1&id='. $res['id'] . '"><button class="btn btn-primary">'.$res['titulo'] .'</button></a>';
        }
        
        // -------------- //
        if($permissoes[139] == 's' && $permissoes[140] == 's' && $permissoes[141] == 's') {
            $btn_regras = '';
            $btn_regras .= '<a href="/acp/admin.php?v=1&id='. $res['id'] . '"><button class="btn btn-primary">'.$res['titulo'] .'</button></a>';
        }
        
        echo $btn_regras;
    }
    ?>
</div>
<? } ?>