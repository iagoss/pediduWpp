<?php
echo $mdl_tabela;
if($_POST['form'] == 'form') {
    $_ex = $conn->prepare("SELECT * FROM $mdl_tabela LIMIT 1");
    $_ex->bindValue(1, $id);
    $_ex->execute();
    $ex = $_ex->fetch();

    $name = $_POST['name'];
    $title_site = $_POST['title_site'];
    $link = $_POST['link'];
    $dashboard_login_logo = $_POST['dashboard_login_logo'];
    $dashboard_menu_logo = $_POST['dashboard_menu_logo'];
    $dashboard_home_banner = $_POST['dashboard_home_banner'];
    $dashboard_home_video = $_POST['dashboard_home_video'];
    
    $dashboard_tutorial_1 = $_POST['dashboard_tutorial_1'];
    $dashboard_tutorial_2 = $_POST['dashboard_tutorial_2'];
    $dashboard_tutorial_3 = $_POST['dashboard_tutorial_3'];
    $dashboard_tutorial_4 = $_POST['dashboard_tutorial_4'];
    $dashboard_tutorial_5 = $_POST['dashboard_tutorial_5'];
    $dashboard_tutorial_6 = $_POST['dashboard_tutorial_6'];
    $dashboard_tutorial_7 = $_POST['dashboard_tutorial_7'];
    $dashboard_tutorial_8 = $_POST['dashboard_tutorial_8'];
    $dashboard_tutorial_9 = $_POST['dashboard_tutorial_9'];
    $dashboard_tutorial_10 = $_POST['dashboard_tutorial_10'];
    $dashboard_tutorial_11 = $_POST['dashboard_tutorial_11'];
    $dashboard_tutorial_12 = $_POST['dashboard_tutorial_12'];
    
    $prosseguir = true;

    if($prosseguir) {
        $up_name = 'logo';

        $up_gallery = $core->clear($_POST["gl-$up_name"]);
        $up_file = $_FILES["fl-$up_name"];
        $up_url = $core->clear($_POST["url-$up_name"]);

        $upload = new Upload($conn, $up_gallery, $up_file, $up_url, 'resale-logo', false, $ex['logo']);

        if(!$upload->erro) {
            $logo_caminho_img = $upload->caminho;
        } else {
            $form_return .= aviso_red($upload->erro);
            $prosseguir = false;
        }
    }

    if($prosseguir) {
        $update_data['link'] = $link;
        $update_data['name'] = $name;
        $update_data['title_site'] = $title_site;
        $update_data['logo'] = $logo_caminho_img;
        $update_data['dashboard_login_logo'] = $dashboard_login_logo;
        $update_data['dashboard_menu_logo'] = $dashboard_menu_logo;
        $update_data['dashboard_home_banner'] = $dashboard_home_banner;
        $update_data['dashboard_home_video'] = $dashboard_home_video;
        
        $update_data['dashboard_tutorial_1'] = $dashboard_tutorial_1;
        $update_data['dashboard_tutorial_2'] = $dashboard_tutorial_2;
        $update_data['dashboard_tutorial_3'] = $dashboard_tutorial_3;
        $update_data['dashboard_tutorial_4'] = $dashboard_tutorial_4;
        $update_data['dashboard_tutorial_5'] = $dashboard_tutorial_5;
        $update_data['dashboard_tutorial_6'] = $dashboard_tutorial_6;
        $update_data['dashboard_tutorial_7'] = $dashboard_tutorial_7;
        $update_data['dashboard_tutorial_8'] = $dashboard_tutorial_8;
        $update_data['dashboard_tutorial_9'] = $dashboard_tutorial_9;
        $update_data['dashboard_tutorial_10'] = $dashboard_tutorial_10;
        $update_data['dashboard_tutorial_11'] = $dashboard_tutorial_11;
        $update_data['dashboard_tutorial_12'] = $dashboard_tutorial_12;

        $update = $sqlActions->update($mdl_tabela, $update_data);

        if($update) {
            $core->logger("O usuário alterou as configurações do site.", "acao");

            $form_return .= aviso_green("Configurações alteradas com sucesso!");
            foreach($_POST as $nome_campo => $valor){ $_POST[$nome_campo] = '';}
        } else {
            $form_return .= aviso_red("Ocorreu um erro ao executar a ação. Código de erro: {$sqlActions->error}");
        }
    }
}

$_ex = $conn->prepare("SELECT * FROM $mdl_tabela LIMIT 1");
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

    $form->createInput('Nome da empresa', 'text', 'name', $ex['name']);
    $form->createInput('Tíulo site', 'text', 'title_site', $ex['title_site']);
    $form->createInput('Link da logo página de login', 'link', 'dashboard_login_logo', $ex['dashboard_login_logo']);
    $form->createInput('Link da Revenda', 'text', 'link', $ex['link']);
    $form->createInput('Link da logo do menu', 'link', 'dashboard_menu_logo', $ex['dashboard_menu_logo']);
    $form->createInput('Link do banner do ínicio', 'link', 'dashboard_home_banner', $ex['dashboard_home_banner']);
    $form->createInput('Link do vídeo do ínicio', 'link', 'dashboard_home_video', $ex['dashboard_home_video']);
    $form->createUpload('Logo', 'logo', $ex['logo']);
    
    $form->mostraTitulo('Tutoriais');
    
    $form->createInput('Link do tutorial 1', 'link', 'dashboard_tutorial_1', $ex['dashboard_tutorial_1']);
    $form->createInput('Link do tutorial 2', 'link', 'dashboard_tutorial_2', $ex['dashboard_tutorial_2']);
    $form->createInput('Link do tutorial 3', 'link', 'dashboard_tutorial_3', $ex['dashboard_tutorial_3']);
    $form->createInput('Link do tutorial 4', 'link', 'dashboard_tutorial_4', $ex['dashboard_tutorial_4']);
    $form->createInput('Link do tutorial 5', 'link', 'dashboard_tutorial_5', $ex['dashboard_tutorial_5']);
    $form->createInput('Link do tutorial 6', 'link', 'dashboard_tutorial_6', $ex['dashboard_tutorial_6']);
    $form->createInput('Link do tutorial 7', 'link', 'dashboard_tutorial_7', $ex['dashboard_tutorial_7']);
    $form->createInput('Link do tutorial 8', 'link', 'dashboard_tutorial_8', $ex['dashboard_tutorial_8']);
    $form->createInput('Link do tutorial 9', 'link', 'dashboard_tutorial_9', $ex['dashboard_tutorial_9']);
    $form->createInput('Link do tutorial 10', 'link', 'dashboard_tutorial_10', $ex['dashboard_tutorial_10']);
    $form->createInput('Link do tutorial 11', 'link', 'dashboard_tutorial_11', $ex['dashboard_tutorial_11']);
    $form->createInput('Link do tutorial 12', 'link', 'dashboard_tutorial_12', $ex['dashboard_tutorial_12']);

    $form->generateForm();
    echo $form->form; ?>
</div>
