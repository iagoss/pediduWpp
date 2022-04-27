<?php

if($_POST['form'] == 'form') {
    $_ex = $conn->prepare("SELECT * FROM $mdl_tabela LIMIT 1");
    $_ex->bindValue(1, $id);
    $_ex->execute();
    $ex = $_ex->fetch();

    $status = $_POST['status'];
    $min_price = $_POST['min_price'];
    $total_orders = $_POST['total_orders'];
    $promotional_text = $_POST['promotional_text'];
    $discount_type = $_POST['discount_type'];
    $discount_value = $_POST['discount_value'];
    $discount_min_order = $_POST['discount_min_order'];

    $prosseguir = true;

    if($prosseguir) {
        $update_data['status'] = $status;
        $update_data['min_price'] = $min_price;
        $update_data['total_orders'] = $total_orders;
        $update_data['promotional_text'] = $promotional_text;
        $update_data['discount_type'] = $discount_type;
        $update_data['discount_value'] = $discount_value;
        $update_data['discount_min_order'] = $discount_min_order;

        $update = $sqlActions->update($mdl_tabela, $update_data);

        if($update) {
            $core->logger("O usuário alterou as configurações do fidelidade.", "acao");

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

    $categorias = array();
    $categorias[] =array("label" => "Sim", "value" => "active");
    $categorias[] =array("label" => "Não", "value" => "inactive");

    $form->createSelect('Mostrar fidelidade no sistema', 'status', $categorias, $ex['status']);

    $form->createInput('Preço minímo para pontuar', 'number', 'min_price', $ex['min_price']);
    $form->createInput('Total de compras para gerar o cupom', 'number', 'total_orders', $ex['total_orders']);

    $form->createTextarea('Texto promocional', 'promotional_text', $ex['promotional_text'], 'ckeditor','ckeditor');

    $categorias = array();
    $categorias[] =array("label" => "Dinheiro", "value" => "money");
    $categorias[] =array("label" => "Porcentagem", "value" => "percent");

    $form->createSelect('Tipo de desconto do cupom', 'discount_type', $categorias, $ex['discount_type']);

    $form->createInput('Valor de desconto do cupom', 'number', 'discount_value', $ex['discount_value']);
    $form->createInput('Valor minímo para utilizar o cupom', 'number', 'discount_min_order', $ex['discount_min_order']);


    $form->generateForm();
    echo $form->form; ?>
</div>
