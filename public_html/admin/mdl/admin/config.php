<?php

if($_POST['form'])
{
        $_ex = $conn->prepare("SELECT * FROM configurations LIMIT 1");
    $_ex->execute();
    $ex = $_ex->fetch();
    $name = $_POST['name'];
    $description = $_POST['description'];
    $color = $_POST['color'];
    $informations = $_POST['informations'];
    $whatsapp = $_POST['whatsapp'];
    $min_price = $_POST['min_price'];
    $cancellable = $_POST['cancellable'];
    $timeIni = $_POST['timeIni'];
    $timeEnd = $_POST['timeEnd'];
    if($_POST['timeIni2']) {
        foreach($_POST['timeIni2'] as $key => $val){
            $timeIni[$key] = empty($_POST['timeIni2'][$key]) ? $timeIni[$key] : array($timeIni[$key], $_POST['timeIni2'][$key]);
        }
    }
    
    if($_POST['timeEnd2']) {
        foreach($_POST['timeEnd2'] as $key => $val){
            $timeEnd[$key] = empty($_POST['timeEnd2'][$key]) ? $timeEnd[$key] : array($timeEnd[$key], $_POST['timeEnd2'][$key]);
        }
    }
    
    $prosseguir = true;
    $up_name = 'logo-imagem';

    $up_gallery = $core->clear($_POST["gl-$up_name"]);
    $up_file = $_FILES["fl-$up_name"];
    $up_url = $core->clear($_POST["url-$up_name"]);

    $upload = new Upload($conn, $up_gallery, $up_file, $up_url, 'acp-profile-', false, $ex['logo']);

    if(!$upload->erro) {
        $logo_caminho_img = $upload->caminho;
    } else {
        $form_return = aviso_red($upload->erro);
        $prosseguir = false;
    }

    if($prosseguir) {
        $up_name = 'banner-imagem';

        $up_gallery = $core->clear($_POST["gl-$up_name"]);
        $up_file = $_FILES["fl-$up_name"];
        $up_url = $core->clear($_POST["url-$up_name"]);

        $upload = new Upload($conn, $up_gallery, $up_file, $up_url, 'acp-profile-', false, $ex['banner']);

        if(!$upload->erro) {
            $banner_caminho_img = $upload->caminho;
        } else {
            $form_return = aviso_red($upload->erro);
            $prosseguir = false;
        }
    }

    if($prosseguir) {
        $update_data['name'] = $name;
        $update_data['description'] = $description;
        $update_data['color'] = $color;
        $update_data['informations'] = $informations;
        $update_data['whatsapp'] = $whatsapp;
        $update_data['min_price'] = $min_price;
        $update_data['cancellable'] = $cancellable;
        $update_data['time_ini'] = json_encode($timeIni);
        $update_data['time_end'] = json_encode($timeEnd);
        $update_data['logo'] = $logo_caminho_img;
        $update_data['banner'] = $banner_caminho_img;

        $update_data['author'] = $autor;
        $update = $sqlActions->update('configurations', $update_data);

        if($update) {
            $core->logger("O usuário alterou as configurações do site.", "acao");
            $form_return = aviso_green('Configurações alteradas com sucesso!');
        } else {
            $form_return = aviso_red("Ocorreu um erro ao executar a ação. Código de erro: {$sqlActions->error}");
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

    $form->mostraAviso(well("A última alteração dessas configurações foi feita por <b>".$ex['author']."</b> em <b>".date('d/m/Y H:i', strtotime($ex['date']))."</b>."));

    $form->createInput('Nome da empresa', 'text', 'name', $ex['name']);
    $form->createInput('Descrição da empresa', 'text', 'description', $ex['description']);
    $form->createInput('Cor principal', 'text', 'color', $ex['color']);

    $form->createUpload('Logo', 'logo-imagem', $ex['logo']);
    $form->createUpload('Banner', 'banner-imagem', $ex['banner']);

    $form->createTextarea('Informações', 'informations', $ex['informations'], 'ckeditor','ckeditor');

    $form->createInput('Link do whatsapp para contato', 'link', 'whatsapp', $ex['whatsapp']);
    $form->createInput('Valor minimo de compra', 'number', 'min_price', $ex['min_price']);

    $categorias = array();
    $categorias[] =array("label" => "Sim", "value" => "true");
    $categorias[] =array("label" => "Não", "value" => "false");

    $form->createSelect('Habilitar botão de cancelamento', 'cancellable', $categorias, $ex['cancellable']);
    
    $form->mostraTitulo('Dias e horários de funcionamento');
    $dias = array(1 => 'Domingo', 2 => 'Segunda-feira', 3 => 'Terça-feira', 4 => 'Quarta-feira', 5 => 'Quinta-feira', 6 => 'Sexta-feira', 7 => 'Sábado');
    $timeIni = json_decode($ex['time_ini'], true);
    $timeEnd = json_decode($ex['time_end'], true);
    $script = '';
    foreach($dias as $diaInt => $diaName) {
        $time_ini = is_array($timeIni[$diaInt]) ? $timeIni[$diaInt][0] : $timeIni[$diaInt];
        $time_ini2 = is_array($timeIni[$diaInt]) ? $timeIni[$diaInt][1] : '';
        
        $time_end = is_array($timeEnd[$diaInt]) ? $timeEnd[$diaInt][0] : $timeEnd[$diaInt];
        $time_end2 = is_array($timeEnd[$diaInt]) ? $timeEnd[$diaInt][1] : '';
        $script .= !empty($time_ini2) ? "addIntervalo($('.dia-".$diaInt." .add-intervalo'));" : '';
        $form->createCheckbox($diaName, $diaName, isset($timeIni[$diaInt]), 'dias dia-'.$diaInt);
        
        $form->createInput('Abre às', 'time', 'timeIni['.$diaInt.']', $time_ini, 'inputRemover input50 '.$diaName);
        $form->createInput('Fecha às', 'time', 'timeEnd['.$diaInt.']', $time_end, 'inputRemover input50 '.$diaName); 
        $form->createInput('Abre às', 'time', 'timeIni2['.$diaInt.']', $time_ini2, 'inputRemover inputInativo input50 '.$diaName);
        $form->createInput('Fecha às', 'time', 'timeEnd2['.$diaInt.']', $time_end2, 'inputRemover inputInativo input50 '.$diaName); 
    }  

    $form->generateForm();
    echo $form->form;
    ?>
</div>
<script>
$(document).ready(function(){
    
    
    //BOTAO ADD INTERVALOS
    $('.dias').append('<button class="btn btn-info add-intervalo">Adicionar intervalo</button>');
    postForm();
    
    $('.dias').on('change', 'input', function(){
        toggleHoras(this);
    });
    
    $('.add-intervalo').on('click', function(e){
        e.preventDefault();
        addIntervalo(this);
    });
    toggleHoras($('.dias input[type="checkbox"]')[0]);
    toggleHoras($('.dias input[type="checkbox"]')[1]);
    toggleHoras($('.dias input[type="checkbox"]')[2]);
    toggleHoras($('.dias input[type="checkbox"]')[3]);
    toggleHoras($('.dias input[type="checkbox"]')[4]);
    toggleHoras($('.dias input[type="checkbox"]')[5]);
    toggleHoras($('.dias input[type="checkbox"]')[6]);
        
    
    <?php echo $script ?>    
})

    function toggleHoras(obj){
        var name = $(obj).attr('name');
        if($(obj).is(':checked')){
            if($(obj).siblings('button').html() == 'Adicionar intervalo'){
                name += ':not(.inputInativo)';
            }
            $('.'+name).show();
            $(obj).siblings('button').show();
        } else {
            $('.'+name).hide();
            $(obj).siblings('button').hide();
        }
    }
    
    function addIntervalo(obj){
        var dia = $(obj).siblings('input').attr('name');
        
        if($(obj).html() == 'Adicionar intervalo'){   
            $('.inputInativo.'+dia).show();
            $(obj).html('Remover intervalo');
        } else {
            $('.inputInativo.'+dia).hide();
            $(obj).html('Adicionar intervalo');
        }
    }
    
    function postForm(){
        $(document).on('submit', 'form', function(e){
            $('.inputRemover input:hidden').remove();
            // var dados = new FormData(this);
            
            // $.ajax({
            //     url: 'ajax/configurations.php',
            //     type: 'POST',
            //     dataType: 'json',
            //     processData: false,
            //     contentType: false,
            //     data: dados,
            //     success: function(r) {
            //         console.log(r);
                    
            //         //location.replace(window.location.href);
            //     }
            // })
        })
    }
    
    
    
    
</script>

<style>
    .input50 {
        width:50%;
        float: left;
    }
    .input50 label {
        text-align: center;
    }
    .inputInativo {
        display:none;
    }
    .add-intervalo {
        float: right;
        margin-top: -35px;
    }
    @media only screen and (max-width: 992px) {
        .input50 {
            width: 100%;
            float: none;
        }
        .input50.inputInativo {
            display:none;
        }
        .add-intervalo {
        margin-top: 15px;
    }
    }
</style>









