<div class="box-content">
    <div class="title-section"><?=$mdl['nome'];?></div>
    <div id="clients">
    <?php 
        $clients = $conn->query("SELECT * FROM clients_forward");
        while($client = $clients->fetch())
        {
            echo '<div class="client" data-id='.$client['id'].'>'.$client['nome'].'</div>';
        }
    ?>
    </div>
    <div class="faturaClient blink">
        <?php echo aviso_yellow('Selecione um dos clientes acima') ?>
    </div>
</div>

<style>
    .box {
        float: left;
        padding: 30px;
        margin: 30px;
        border-radius: 5px;
        -webkit-box-shadow: 0px 0px 10px 4px rgb(0 0 0 / 15%);; 
        box-shadow: 0px 0px 10px 4px rgb(0 0 0 / 15%);
        width: calc(40% - 120px);
    }
    .box h1 
    {
        font-size: 20px;
    }
    
    .box table
    {
        width: 100%;
    }
    
    .box .table
    {
        max-height: 300px;
        overflow: auto;
    }
    .box .table::-webkit-scrollbar-track
    {
        background-color: transparent;
    }
    .box .table::-webkit-scrollbar
    {
        width: 6px;
        background: transparent;
    }
    .box .table::-webkit-scrollbar-thumb
    {
        background: rgba(0,0,0,0.3);
        border-radius: 5px;
    }
    
    .box .total
    {
        text-align: right;
        padding: 20px;
        font-weight: bold;
    }
    
    .box table tr
    {
        display: flex;
    }
    .box table tr.negative
    {
        color: tomato;
    }
    .box table tr.positive
    {
        color: LimeGreen;
    }
    .box table td
    {
        padding: 0px 20px;
        flex: 1;
    }
    .box table td:first-child
    {
        color: silver;
    }
    .box table td:last-child
    {
        text-align: right;
    }
    .box table td:nth-child(2)
    {
        flex: 3;
    }
    .box table tr
    {
        margin: 10px 0;
    }
    .box.size-60
    {
        width: 60%;
        max-width: 60%;
    }
    
    .box form input
    {
        width: 100%;
        padding: 10px;
    }
    
    .box form input[type='submit']
    {
        margin-top: 5px;
        background:DarkSlateGray;
        color: white;
        font-weight: bold;
    }
    #clients
    {
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        margin: 0 auto;
        align-items: center;
        justify-content: center;
    }
    .client
    {
       padding: 5px 10px;
       border-radius: 30px;
       background: gray;
       font-size: 15px;
       color: white;
       margin: 10px;
       cursor:pointer;
    }
    .client.selected
    {
        background: DarkSlateGray;
    }
    .printExtrato
    {
        cursor: pointer;
    }
    
    
    @media (max-width: 992px) 
    {
        .box, .box.size-60
        {
            width: 100%;
            max-width: 100%;
            float: none;
            margin: 30px 0 0 0;
            padding:15px;
        }
    }
        .box table td:nth-child(2)
        {
            flex: 2;
        }
    }
    
    
</style>

<script>
    window.onload = function()
    {
        $(document).on('click', '#clients .client', function()
        {
            let id = $(this).attr('data-id');
            selectClient(id);
        });
        
        $(document).on('click', '.printExtrato', function()
        {
            let newAba = '<html style="width: 60mm;">';
            newAba += '<body style="margin: 0 auto">';
            newAba += '<style>';
            newAba += 'table { width: 60mm; font-size: 14px;}';
            newAba += 'td { width: 50%; vertical-align: middle; border-top: 1px solid black}';
            newAba += 'tr.data td {padding-top: 20px; text-align: center;}';
            newAba += '</style>';
            newAba += '<h1 style="font-size: 20px; text-align: center;">Extrado financeiro</h1>';
            newAba += '<table>';
            newAba += '<tr style="font-size: 16px;"><td>Cliente:</td><td><b>'+$(".client.selected").html()+'</b></td></tr>';
            $('.table').find('tr').each(function()
            {
                let data = $(this).find('td');
                newAba += '<tr class="data"><td colspan="2">'+data[0].innerText+'</td></tr>';
                newAba += '<tr>';
                newAba += '<td>'+data[1].innerText+'</td>';
                newAba += '<td style="text-align: right">'+data[2].innerText+'</td>';
                newAba += '<tr>';
            });
            newAba += '<tr><td colspan="2" style="text-align: right">'+$(".total").html()+'</td></tr>';
            newAba += '</table>';
            newAba += '</body>';
            newAba += '</html>';
            print = window.open('about:blank');
            print.document.write(newAba);
            print.window.print();
        })
        
        $(document).on('submit', 'form#insertPayment', function(e)
        {
            e.preventDefault();
            let data = $(this).serializeArray();
            console.log(data[1].value);
            if(data[1].value == 0)
            {
                alert('Utilize um valor diferente de 0 (zero)!');
            } else {
                $.ajax({
                    context: this,
                    url: 'ajax/insertPayment.php',
                    type: 'POST',
                    dataType: 'json',
                    data: {'client': data[0].value, valor: data[1].value},
                    beforeSend: function()
                    {
                        $(this).prop("disabled", true);
                    },
                    success: function(res)
                    {
                        if(res.success)
                        {
                            selectClient(data[0].value);
                        }else
                        {
                            alert('ERRO! tente novamente, caso o erro persista, contate o administrador do sistema.');
                        }
                    }
                })
            }
        });
    }
    
    function selectClient(client)
    {
        $.ajax({
            url: 'ajax/relatorioVendasPrazo.php',
            type: 'POST',
            dataType: 'html',
            data: { 'client':client },
            beforeSend: function(){
                blink('.faturaClient');
            },
            success: function(data){
                $('.faturaClient').removeClass('blink').html(data);
                $('#clients .client').removeClass('selected');
                $('#clients .client[data-id="'+client+'"]').addClass('selected');
            }
        })
    }
    
    function blink(selector){
        $(selector).addClass('blink');
        $('.blink').fadeOut('slow', function(){
            $(this).fadeIn('slow', function(){
                blink('.blink');
            });
        });
    }
</script>
