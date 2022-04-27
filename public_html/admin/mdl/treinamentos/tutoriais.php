<div class="box-content">
    <div class="title-section">Treinamentos - Qualquer dúvida contate o suporte</div>

    <div class="btns">
      
    </div>
    
    <?php if($configRevenda['dashboard_tutorial_1'] != NULL) { ?>
        <h3>[AULA 01] COMO GERENCIAR OS PEDIDOS</h3>
        <iframe width="560" height="315" src="<?= $configRevenda['dashboard_tutorial_1'] ?>" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <?php } ?>
    
    <?php if($configRevenda['dashboard_tutorial_2'] != NULL) { ?>
        <h3>[AULA 02] Como criar cupons descontos</h3>
        <iframe width="560" height="315" src="<?= $configRevenda['dashboard_tutorial_2'] ?>" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <?php } ?>
    
    <?php if($configRevenda['dashboard_tutorial_3'] != NULL) { ?>
        <h3>[AULA 03] Como cadastrar bairros ou regiões</h3>
        <iframe width="560" height="315" src="<?= $configRevenda['dashboard_tutorial_3'] ?>" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <?php } ?>
    
    <?php if($configRevenda['dashboard_tutorial_4'] != NULL) { ?>
        <h3>[AULA 04] Como cadastrar PIX ou Bandeiras Cartão</h3>
        <iframe width="560" height="315" src="<?= $configRevenda['dashboard_tutorial_4'] ?>" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <?php } ?>

    <?php if($configRevenda['dashboard_tutorial_5'] != NULL) { ?>
        <h3>[AULA 5] Fechamento de Caixa ou consultar faturamento</h3>
        <iframe width="560" height="315" src="<?= $configRevenda['dashboard_tutorial_5'] ?>" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <?php } ?>
    
    <?php if($configRevenda['dashboard_tutorial_6'] != NULL) { ?>
        <h3>[AULA 06] Como Ativar o Programa de Fidelidade</h3>
        <iframe width="560" height="315" src="<?= $configRevenda['dashboard_tutorial_6'] ?>" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <?php } ?>
    
    <?php if($configRevenda['dashboard_tutorial_7'] != NULL) { ?>
        <h3>[AULA 07] Ativar ou Desativar Formas de Entrega</h3>
        <iframe width="560" height="315" src="<?= $configRevenda['dashboard_tutorial_7'] ?>" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <?php } ?>
    
    <?php if($configRevenda['dashboard_tutorial_8'] != NULL) { ?>
        <h3>[AULA 08] Ativar ou Desativar Formas de Entrega</h3>
        <iframe width="560" height="315" src="<?= $configRevenda['dashboard_tutorial_8'] ?>" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <?php } ?>
    
    <?php if($configRevenda['dashboard_tutorial_9'] != NULL) { ?>
        <h3>[AULA 09] CADASTRO DE BEBIDAS *</h3>
        <iframe width="560" height="315" src="<?= $configRevenda['dashboard_tutorial_9'] ?>" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <?php } ?>
    
    <?php if($configRevenda['dashboard_tutorial_10'] != NULL) { ?>
        <h3>[AULA 10] CADASTRO DE LANCHES *</h3>
        <iframe width="560" height="315" src="<?= $configRevenda['dashboard_tutorial_10'] ?>" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <?php } ?>

    <?php if($configRevenda['dashboard_tutorial_11'] != NULL) { ?>
        <h3>[AULA 11] CADASTRO DE PIZZAS *</h3>
        <iframe width="560" height="315" src="<?= $configRevenda['dashboard_tutorial_11'] ?>" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <?php } ?>
    
    <?php if($configRevenda['dashboard_tutorial_12'] != NULL) { ?>
        <h3>[AULA 12] CADASTRO DE ESFIHAS *</h3>
        <iframe width="560" height="315" src="<?= $configRevenda['dashboard_tutorial_12'] ?>" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <?php } ?>
</div>

<style>
    .btns {
        display: flex;
    }

    .btns a {
        flex: 1
    }

    .btns .btn {
        margin: 10px;
        border-radius: 6px;
        padding: 15px;
        display: flex;
        flex-direction: column;
        border: 0;
        background: rgba(0, 0, 0, 0.3);
        color: #FFF;
    }

    .btns .btn h1 {
        font-weight: bold;
    }
</style>
