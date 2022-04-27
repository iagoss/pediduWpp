<?php
    $dataNow = date('Y-m-d\TH:i');
    $dataLastMonth = date('Y-m-d\TH:i', strtotime('-1 day'));
?>
<div class="box-content">
    <div class="title-section"><?=$mdl['nome'];?></div>
    <form>
        <div class="form-section">
            <label for="time_ini">Data inicial</label>
            <input type="datetime-local" name="data_ini" value="<?=$dataLastMonth?>">
        </div>
        <div class="form-section">
            <label for="time_end">Data final</label>
            <input type="datetime-local" name="data_end" value="<?=$dataNow?>">
        </div>
        <input type="submit" class="btn btn-success">
    </form>
    <div style="clear:both"></div>
    <br><br>
    <div class="alert alert-green alert-informations">Pesquisando! Isso pode demorar um pouco, aguarde!</div>
    <div class="informations">
        <div class="info pedidos" style="background: tomato"></div>
        <div class="info faturamento" style="background: DarkSlateGray"></div>
        <div class="info clientes" style="background: DarkSlateGray"></div>
    </div>
    <div class="informations">
        <div class="info categorias" style="background: LimeGreen"></div>
        <div class="info bairros" style="background: DarkSlateGray"></div>
    </div>
</div>
<script>
    $(document).ready(function()
    {
        preencherRelatorio(0,0);
        $(document.body).on('click', '.toggle', function()
        {
            if($(this).parent().next().is(':visible'))
            {
               $(this).parent().next().slideUp();
               $(this).html('+');
            }
            else
            {
                $(this).parent().next().slideDown();
                $(this).html('-');
            }
        })
    });
    
    $('form').on('submit', function(e)
    {
        e.preventDefault();
        var data_ini = $('form input[name="data_ini"]').val();
        var data_end = $('form input[name="data_end"]').val();
        preencherRelatorio(data_ini, data_end); 
    });
    function blink(selector){
        $(selector).fadeOut('slow', function(){
            $(this).fadeIn('slow', function(){
                blink(selector);
            });
        });
    }
    function money(args)
    {
        soma = parseFloat(args);
        return Number(soma).toFixed(2).replace('.',',');
        
    }
    
    function preencherRelatorio(data_ini, data_end)
    {
        $.ajax
        ({
            url: 'ajax/relatorio.php',
            type: 'POST',
            dataType: 'json',
            data: {data_ini: data_ini, data_end: data_end},
            beforeSend: function()
            {
                $('.alert-informations').removeClass('alert-red').addClass('alert-green').html('Pesquisando! Isso pode demorar um pouco, aguarde!');
                $('.informations').addClass('blink');
                $('.informations .info').html('');
                blink('.blink');
            },
            success: function(data)
            {
                $('.blink').removeClass('blink');
                $('.informations .info').slideDown();
                if((data['quant_order']['delivery']+data['quant_order']['retirado']) > 0)
                {
                    $('.alert-informations').html('Exibindo resultados entre '+data['data_ini']+' e '+data['data_end']);
                    var quantPedidos = "<h1>Quantidade de pedidos</h1>";
                    quantPedidos += "<p>Total: <b>"+(data['quant_order']['delivery']+data['quant_order']['retirado'])+"</b> Pedidos</p>";
                    quantPedidos += "<p>Delivery: <b>"+data['quant_order']['delivery']+"</b> Pedidos</p>";
                    quantPedidos += "<p>Retirados: <b>"+data['quant_order']['retirado']+"</b> Pedidos</p>";
                    $('.info.pedidos').html(quantPedidos);
                    
                    var faturamento = "<h1>Faturamento</h1>";
                    faturamento += "<p>Delivery: <b>R$"+money(data['valor_order']['delivery'])+"</b></p>";
                    faturamento += "<p>Retirados: <b>R$"+money(data['valor_order']['retirado'])+"</b></p>";
                    faturamento += "<p>Valor frete: <b>R$"+money(data['valor_order']['frete'])+"</b></p>";
                    faturamento += "<p>Total sem frete: <b>R$"+money(data['valor_order']['retirado']+data['valor_order']['delivery'])+"</b></p>";
                    faturamento += "<p>Total geral: <b>R$"+money(data['valor_order']['retirado']+data['valor_order']['delivery']+data['valor_order']['frete'])+"</b></p>";
                    $('.info.faturamento').html(faturamento);
                    
                    var clientes = "<h1>Top clientes</h1>";
                    $.each(data['clientes'], function(key, val)
                    {
                        clientes += "<p><b>"+val['nome']+"</b> <span class=\"toggle\">+</span></p>";
                        clientes += "<div class=\"options\">";
                        clientes += "    <p>Pedidos realizados: <b>"+val['quant_pedidos']+"</b></p>";
                        clientes += "    <p>Celular: <b>"+val['phone']+"</b></p>";
                        clientes += "    <p>Cadastrado desde: <b>"+val['data_cadastro']+"</b></p>";
                        clientes += "    <p>Endereço: <b>"+val['endereco']+"</b></p>";
                        clientes += "</div>";
                    });
                    $('.info.clientes').html(clientes);
                    
                    var bairros = "<h1>Ranking bairros</h1>";
                    $.each(data['regiao'], function(key, val)
                    { 
                        bairros += "<p>"+val['nome']+": <b>"+val['quant_pedidos']+" pedidos</b></p>";
                    });
                    $('.info.bairros').html(bairros);
                    
                    var categorias = "<h1>Produtos mais vendidos</h1>";
                    $.each(data['categorias'], function(key, cat)
                    {
                        categorias += "<p>"+cat['cat_nome']+": <b>"+cat['quant_cat']+"</b> vendidos <span class=\"toggle\">+</span></p>";
                        categorias += '<div class="options">';
                        $.each(cat['pedidos'], function(key2, produtos)
                        {
                            categorias += "<p>"+produtos['nome']+": <b>"+produtos['quant_produtos']+"</b> vendidos ";
                            if(produtos['adicionais'])
                            {
                                categorias += "<span class=\"toggle\">+</span></p>";
                               categorias += "<div class=\"options\">";
                                $.each(produtos['adicionais'], function(key3, adicionais)
                                {
                                    categorias += "<p>"+adicionais['nome']+": <b>"+adicionais['quant_adicional']+"</b> vendidos</p>";
                                });
                                categorias += "</div>";  
                            }
                            else
                            {
                                categorias += "</p>";
                            }
                            
                        });
                        categorias += "</div>";    
                    });
                    $('.info.categorias').html(categorias);
                }
                else
                {
                    $('.alert-informations').removeClass('alert-green').addClass('alert-red').html('Nenhum dado encontrado entre as datas selecionadas');
                    $('.informations .info').slideUp();
                }
            }
        });
    }
    
</script>
<style>
    .informations
    {
        display: flex;
        text-align: center;
        color: white;
        margin-top: 20px;
    }
    .informations .info h1 {
        font-size: 25px;
        padding-bottom: 8px;
    }
    .informations .info
    {
        padding: 20px;
        margin: 0 10px;
        border-radius: 5px;
        flex: 1;
        max-height: 250px;
        overflow: auto;
    }
    .informations .info .toggle
    {
        float: right;
        font-size: 15px;
        font-weight: bold;
        cursor: pointer;
    }
    .informations .info::-webkit-scrollbar-track
    {
        background-color: transparent;
    }
    .informations .info::-webkit-scrollbar
    {
        width: 6px;
        background: transparent;
    }
    .informations .info::-webkit-scrollbar-thumb
    {
        background: rgba(0,0,0,0.3);
        border-radius: 5px;
    }
    .informations .info .options
    {
        display: none;
        padding: 10px;
        margin: 5px 0;
        background: rgba(0,0,0,0.1);
    }
    form 
    {
        clear:both;
    }
    .form-section
    {
        width: calc(50% - 40px);
        float:left;
    }
    
    form input
    {
        width:70%;
        padding: 8px 16px;
    }
    .form-section label
    {
        width: calc(30% - 20px);
    }
    
    form input[type="submit"]
    {
        width: 75px;
        float: right;
    }
    @media (max-width: 992px) 
    {
        .form-section, form input, .form-section label, form input[type="submit"]
        {
            width:100%;
            margin-top: 10px;
            float: none;
        }
        .informations 
        {
            display: block;
            margin:0;
        }
        .informations .info
        {
            margin: 10px 0;
        }
        
    }
</style>