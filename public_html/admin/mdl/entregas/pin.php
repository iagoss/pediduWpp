<?php
if($_POST['form'] == 'form') {
    $pin = $core->clear($_POST['pin']);
    $prosseguir = true;

    if(empty($pin)) {
        $form_return .= aviso_red("Preencha todos os campos.");
        $prosseguir = false;
    }

    $query = $conn->query("SELECT * FROM orders WHERE pin_order='$pin'")->fetch();

    if(!$query) {
        $form_return .= aviso_red("Código não encontrado!");
        $prosseguir = false;
    }

    if($prosseguir) {
        $motoboy = $conn->query("SELECT * FROM delivery_motoboy WHERE id_user='$dados[id]'")->fetch();

        $update = $conn->prepare("UPDATE orders SET delivery_motoboy_id= ?, status='finished' WHERE id= ?");
        $update->bindValue(1, $motoboy['id']);
        $update->bindValue(2, $query['id']);

        $update->execute();

        if($update){
            $form_return .= aviso_green("Sucesso!");
            $core->sendNtf("Pedido #{$query['id']}, entraga finalizada pelo motoboy", "success");

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

    $form->createInput('Digite o pin de entrega', 'text', 'pin');

    $form->generateForm();
    echo $form->form; ?>
</div>
