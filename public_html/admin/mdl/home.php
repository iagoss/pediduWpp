<?php echo aviso_yellow('ATENÇÃO! Os pedidos aparecem somente na página lista de pedidos'); ?>

<div class="warnings">
    <div class="box-content">
       VERSÃO 6.1 - Bem-vindo(a), <b><?=$dados['nick'];?></b><br><br>
        Seu último acesso ao painel de gerenciamento foi em <b><?=date('d/m/Y H:i:s', $_SESSION['acp_acesso_data']);?></b>.
        
      
        <a href="" title="This is an HTML liked image">
	<img alt="box de anuncio" src="<?= $configRevenda['dashboard_home_banner'] ?>"/>
</a>
        <h3>Novidades na Plataforma! 😆</h3>
        <p>CHEGOU O PIX! Cadastre sua chave PIX através do menu <b>Administração > Chave PIX</b> <a href="admin.php?p=159" target="_blank">
            <i class="fas fa-whatsapp"></i>ou CLIQUE AQUI</p></a>
       <p>Configure seu horário de atendimento no menu <b>Administração > Configurações</b> sua loja irá abrir e fechar automático. É possível ainda continuar utilizando de forma manual.</p>
       <p><b>OUTRAS NOVIDADES: Relátorio de produtos mais vendidos, contas á prazo, notificar cliente WhatsApp, Impressão Android, categorias e pix no PDV.</b></p>
        <p>Agora tem como você pausar suas taxas de entrega de forma temporária no menu <b>Entregas > Adicionar Região</b></p>
       


        <?php $query = "SELECT * FROM acp_usuarios_alertas WHERE lido='n' AND id_usuario='".$dados['id']."'";
        $sql24 = $conn->query($query);

        if($core->getRows($query) > 0) {
            echo '<br><br>';
        }

        while($sql25 = $sql24->fetch()) {
            $up_data['lido'] = 's';
            $wh_data['id'] = $sql25['id'];

            $up = $sqlActions->update("acp_usuarios_alertas", $up_data, $wh_data);

            $alerta  = '<b>Alerta:</b><br><br>';
            $alerta .= $sql25['alerta'];
            $alerta .= '<br><br>';
            $alerta .= "Enviado por <b>{$sql25['autor']}</b> em <b>".date('d/m/Y H:i', $sql25['data'])."</b>.";

            echo aviso_red('<div class="txt-left">' . $alerta . '</div>');
        } ?>
    </div>

    <div class="box-content">
        <div class="title-section">IMPORTANTE!</div>
       
        <?=$config['acp_aviso_fixo'];?>

        <h3>[VÍDEO] Primeiros passos</h3>
        <iframe width="500" height="500" src="<?= $configRevenda['dashboard_home_video'] ?>" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br><h3>WhatsApp WEB (Aviso)</h3>
        <p>Quando um pedido é realizado seu cliente é notificado através da própria tela do sistema (site/link), caso você queira reforçar o aceite do pedido utilizando nossa função <b>"NOTIFICAR"</b>, baixe o WhatsWeb no seu computador e escaneie o qrcode do seu celular.</p>
        <p>Para baixar o WHATSWEB é simples: <a href="https://www.whatsapp.com/download/" target="_blank">
            <i class="fas fa-whatsapp"></i> CLIQUE AQUI</p>
    </div>
    
</div>

<div class="notifications">
    
    <a href="admin.php?p=144" target="_blank">
        <div class="big-button blue">
            <p><i class="fas fa-list"></i> Lista de pedidos</p>
            <span>Clique para ir para página</span>
        </div>
    </a>

    <a href="admin.php?p=150" target="_blank">
        <div class="big-button red">
            <p><i class="fas fa-cash-register"></i> Ponto de Venda</p>
            <span>Clique para ir para página</span>
        </div>
    </a>

    <a href="admin.php?p=147" target="_blank">
        <div class="big-button grey">
            <p><i class="fas fa-briefcase"></i> Treinamentos</p>
            <span>Clique para ir para página</span>
        </div>
    </a>

    <a href="https://www.mediafire.com/file/b3x8u5rbevxypz2/PluginImpressao.exe/file" target="_blank">
        <div class="big-button green">
            <p><i class="fas fa-cog"></i> Plugin de Impressão</p>
            <span>Baixe e instale para imprimir pedidos</span>
        </div>
    </a>
    
    <a href="admin.php?p=162" target="_blank">
        <div class="big-button grey">
            <p><i class="fas fa-box"></i> Marketing</p>
            <span>Cortesia do Pedidu - Turbine seu negócio</span>
        </div>
    </a>

    <div class="box-content">
        <div class="title-section">Notificações</div>

        <?php $data_limite = strtotime("-3 days");
        $query = "SELECT * FROM acp_notificacoes WHERE data > $data_limite ORDER BY id DESC LIMIT 50";
        $sql9 = $conn->query($query);
        while($sql10 = $sql9->fetch()) {
            if($sql10['tipo'] == 'success') { $icon = 'check'; }
            if($sql10['tipo'] == 'info') { $icon = 'info-circled'; }
            if($sql10['tipo'] == 'warning') { $icon = 'attention-alt'; }
            if($sql10['tipo'] == 'danger') { $icon = 'attention'; }
            ?>
            <div class="box-ntf <?=$sql10['tipo'];?>">
                <div id="icon"><i class="icon-<?=$icon;?>"></i></div>
                <div id="infos"><?=$core->clear($sql10['texto']);?> <div class="time"><?=strtolower($core->dTime($sql10['data'], time(), true));?></div></div>
                
                <br>
            </div>
        <?php }

        if($core->getRows($query) == 0) {
            echo '<center>Não há notificações.</center>';
        } ?>
    </div>

    <div class="box-content">
        <div class="title-section">Colaboradores online no painel</div>

        <?php $sql5 = $conn->query("SELECT * FROM acp_online ORDER BY tempo DESC");
        while($sql6 = $sql5->fetch()) {
            $sql7 = $conn->query("SELECT nick FROM acp_usuarios WHERE id='".$sql6['id_usuario']."' LIMIT 1");
            $sql8 = $sql7->fetch();

            echo '<span class="label label-primary">' . $core->clear($sql8['nick']) . '</span>';
        } ?>
    </div>
     <a href="https://www.qrcodefacil.com/" target="_blank">
        <div class="big-button grey">
            <p><i class="fas fa-qrcode"></i> GERE SEU QRCODE</p>
            <span>Opção link único e cole o link cardápio</span>
        </div>
    </a>
     <a href="https://docs.google.com/forms/d/e/1FAIpQLSc4IFpeWemsKAMJNumCDHNvN8ty3kb8IJQNJTwLFfV0m2xx-A/viewform?usp=sf_link" target="_blank">
        <div class="big-button grey">
            <p><i class="fas fa-envelope"></i> ENVIE SUGESTÕES</p>
            <span></span>
        </div>
    </a>
</div>

<style>
    .big-button {
        width: 100%;
        padding: 15px;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-bottom: 12px;
    }

    .big-button.blue {
        background: #4396FC;
    }

    .big-button.grey {
        background: grey;
    }

    .big-button.red {
        background: #fc4343;
    }

    .big-button.green {
        background: #43fc8d;
    }

    .big-button p {
        font-size: 2.2em;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.4)
    }

    .big-button span {
        font-size: 1.2em;
        margin-top: -16px;
        color: rgba(0, 0, 0, 0.5);
    }

    .alert.alert-yellow {
        margin-bottom: 30px;
    }
</style>
