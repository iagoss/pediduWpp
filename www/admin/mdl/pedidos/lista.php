
<?php
 include('functions/orderDatail.php');
?>
<div class="header-buttons">
    <?php
    $configurations = $conn->query("SELECT * FROM configurations")->fetch();
    ?>
    <form class="form-time-change">
        <label for="delivery-time">Tempo de entrega</label>
        <input type="text" name="delivery_time" value="<?php echo $configurations['delivery_time']; ?>">

        <label for="delivery-time">Tempo de retirada</label>
        <input type="text" name="withdraw_time" value="<?php echo $configurations['withdraw_time']; ?>">

        <button type="submit">Salvar</button>
    </form>

    <div class="btn <?php echo $configurations['opened'] == 'yes' ? 'green' : 'red'; ?>" id="changeShopState">
        <h1>Abrir/Fechar</h1>
        <p>Quando fechada o cliente não poderá enviar pedidos!</p>
    </div>

    <div class="btn red" id="ChangeAutomaticPrinter">
        <h1>Habilitar impressão automatica</h1>
        <p>Os novos pedidos serão impressos e aceitos automaticamente!</p>
    </div>
</div>
<?php echo strtotime($configurations['time_manual']) > 0 ? '<div class="alert alert-red alert-manual">O status da loja está manual, não se esqueça de iniciar/finalizar o expediente ou <u class="open-modal-status" style="cursor: pointer; color: black">clique aqui</u> para ativar a abertura/fechamento automático novamente.</div>
' : '<div class="alert-manual"></div>'  ?>
<div class="order-container">
    <div class="box">
        <div class="header-box" style="background: #FC8D43">
            <h1>Novos</h1>
        </div>

        <div class="items new-orders">
            <?php orderDatail('new'); ?>
        </div>
    </div>

    <div class="box">
        <div class="header-box" style="background: #FDB742">
            <h1>Em produção</h1>
        </div>

        <div class="items preparation-orders">
            <?php orderDatail('preparation'); ?>
        </div>
    </div>

    <div class="box">
        <div class="header-box" style="background: #42FD75">
            <h1>Pronto/Saiu para entrega</h1>
        </div>

        <div class="items delivery-orders">
            <?php orderDatail('delivery'); ?>
        </div>
    </div>

    <div class="box">
        <div class="header-box" style="background: #4396FC">
            <h1>Entregues</h1>
        </div>

        <div class="items finish-orders">
            <?php orderDatail('finished'); ?>
        </div>
    </div>

</div>

<div class="modal-container modal-motoboy">
    <div class="modal-box">
        <div class="title">
            <div class="text">Associar entregador ao pedido <b>#0</b></div>
            <div class="close-modal">✕</div>
        </div>
        <form id="associate_motoboy">
            <select name="motoboy">
                <option value="0">Selecione um entregador</option>
                <?php
                $motoboys = $conn->query("SELECT * FROM delivery_motoboy WHERE status='active'");
                while($row = $motoboys->fetch()):
                ?>
                    <option value="<?php echo $row['id']; ?>"><?php echo $row['name']; ?></option>
                <?php endwhile; ?>
            </select>
            <input type="hidden" value="0" name="orderId" id="associeteOrderId">
            <button>Salvar</button>
        </form>
    </div>
</div>
    <div class="modal-container modal-status">
    <div class="modal-box">
        <div class="title">
            <div class="text">O que acontece?</div>
            <div class="close-modal">✕</div>
        </div>
        <div>
            <br>
            ATENÇÃO: Ao ativar o status automático da loja, ela poderá fechar ou abrir<br>
            abrir nos próximos instantes dependendo do horário de funcionamento pré<br>
            configurado no menu Administração > configurações e isso fará com que <br>
            receba pedidos fora do seu funcionamento ou fechamento antes do fim do<br>
            expediente.<br>
            Lembrando que o modo manual é ativado sempre que o botao "Abrir/Fechar" é<br>
            acionado e durará até às 23:59 do mesmo dia, logo em seguida o modo <br>
            automático é reativado.
            <br>
            <br>
            Tem certeza que deseja ativar o modo automático?
            <br>
            <br>
            <button class="btn btn-success ativar-automatico">Ativar modo automático</button>
        </div>
    </div>
</div>
</div>
<div id="printThis"></div>
<style>
    #printThis {
        opacity: 0;
        width: 10px;
        height: 10px;
        overflow:hidden;
    }
    .modal-container {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 999;
        background: rgba(0, 0, 0, 0.666);
        align-items: center;
        justify-content: center;
        display: none;
    }

    .modal-container .modal-box {
        padding: 10px;
        border-radius: 5px;
        background: #FFF;
        border: 0.5px solid rgba(0, 0, 0, 0.5);
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    }

    .modal-container .modal-box .title {
        display: flex;
        padding: 7px;
        border-radius: 4px;
        align-items: center;
        background: #42FD75;
        justify-content: space-between;
    }

    .modal-container .modal-box .title .text {
        font-weight: bold;
        color: rgba(0, 0, 0, 0.5);
    }

    .modal-container .modal-box .title .close-modal {
        width: 28px;
        height: 28px;
        display: flex;
        cursor: pointer;
        justify-content: center;
        align-items: center;
        margin-left: 15px;
        border-radius: 5px;
        background: #902b2b;
        color: #ffffff;
        font-weight: bold;
        text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
    }

    .modal-container .modal-box form {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
    }

    .modal-container .modal-box form select {
        margin-bottom: 10px;
        width: 100%;
        padding: 5px;
        border-radius: 5px;
        outline: none;
    }

    .modal-container .modal-box form button {
        width: 50%;
        padding: 5px;
        border-radius: 5px;
        outline: none;
        background: #42FD75;
        font-weight: bold;
        border: 0.3px solid rgba(0, 0, 0, 0.5);
        color: rgba(0, 0, 0, 0.5);
    }

    .header-buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
    }

    .header-buttons .btn {
        border-radius: 6px;
        margin: 10px;
        color: rgba(0, 0, 0, 0.5);
        font-weight: bolder;
        border: rgba(0, 0, 0, 0.2);
        min-height: 180px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .header-buttons .btn p {
        font-weight: normal;
    }

    .header-buttons .btn.green {
        background: #42FD75;
    }

    .header-buttons .btn.red {
        background: #FD4263;
    }

    .header-buttons .form-time-change {
        display: flex;
        flex-direction: column;
        background: #4396FC;
        padding: 12px;
        border-radius: 6px;
        color: rgba(0, 0, 0, 0.5);
        margin-right: 9px;
    }

    .header-buttons .form-time-change input {
        margin-bottom: 5px;
        border: 0;
        border-radius: 4px;
        padding: 5px;
    }

    .header-buttons .form-time-change button {
        border: 0;
        padding: 5px;
        border-radius: 5px;
        font-weight: bold;
        background: rgba(0, 0, 0, 0.3);
        color: #FFFFFF;
        margin-top: 4px;
    }

    section.content .align {
        width: 100%;
    }

    section.content .breadcumb {
        max-width: 1000px;
        margin: 10px auto;
    }

    .order-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
        padding: 0 10px;
    }

    .order-container .box {
        background: white;
        border-radius: 4px;
        overflow: hidden;
    }

    .order-container .box .header-box {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        border-bottom: 1.2px solid rgba(0, 0, 0, 0.08);
    }

    .order-container .box .header-box h1 {
        width: 100%;
        font-size: 18px;
        margin: 0;
        text-align: center;
        font-weight: bold;
        color:rgba(0, 0, 0, 0.5);
    }

    .order-container .box .items {
        margin: 10px
    }

    .order-container .box .items .clean {
        border: 1.2px solid rgba(0, 0, 0, 0.10);
        text-align: center;
        padding: 10px 0;
        font-size: 17px;
        text-transform: uppercase;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.40);
        border-radius: 4px;
    }

    .order-container .box .items .item {
        background: rgba(0, 0, 0, 0.10);
        border-radius: 6px;
        padding: 8px;
        margin-top: 10px;
    }

    .order-container .box .items .item .header-item {
        display: flex;
        justify-content: space-between;
        margin-top: 4px;
        margin-bottom: -6px;
    }

    .order-container .box .items .item .info .whats-button {
        width: 20px;
        height: 20px;
        color: white;
        background: #4CAF50;
        border-radius: 50px;
        padding: 5px;
        margin: 5px;
    }
    
    .order-container .box .items .item .info .message-button {
        height: 24px;
        display: inline-block;
        padding: 0px 9px;
        font-size: 13px;
        color: #FFF;
        background-color: #4396FC;
        border-radius: 5px;
        line-height: 24px;
    }
    
    .order-container .box .items .item .info .message-button .fas {
        margin-right: 4px;
    }

    .order-container .box .items .item .info {
        border: 1px solid rgba(0, 0, 0, 0.10);
        border-radius: 6px;
        padding: 10px;
        margin-top: 6px;
        background: rgba(250, 250, 250, 0.8);
    }

    .order-container .box .items .item .info h1 {
        font-size: 16px;
        margin: 0;
        color: rgba(0, 0, 0, 0.90);
        padding-bottom: 5px;
        margin-bottom: 5px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.10);
    }

    .order-container .box .items .item .info p {
        margin: 0;
    }

    .order-container .box .items .item .buttons {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 8px;
        margin-top: 6px;
    }

    .order-container .box .items .item .buttons .btn {
        padding: 8px;
        text-align: center;
        border: 0;
        font-size: 11px;
        border-radius: 6px;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.5);
    }

    .order-container .box .items .item .buttons .btn.green {
        background: #42FD75;
    }

    .order-container .box .items .item .buttons .btn.red {
        background: #FD4263;
    }

    .order-container .box .items .item .buttons .btn.grey {
        background: darkgrey;
    }

    .order-container .box .items .item .buttons .btn.blue {
        background: #4396FC;
    }

    .order-container .box .items .item .order {
        display: flex;
        flex-direction: column;
        background: rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(0, 0, 0, 0.06);
        border-radius: 5px;
        margin-top: 6px;
        padding: 6px;
    }

    .order-container .box .items .item .order p {
        font-weight: bold;
        background: rgba(250, 250, 250, 0.9);
        padding: 6px;
        border-radius: 4px;
        font-size: 13px;
    }

    @media(max-width:992px) {
        .order-container {
            grid-template-columns: 1fr;
            padding: 0;
        }
        
        button.btn-novo.btn-xsm
        {
            padding: 4px 8px;
            font-size: 10px;
            float: right;
            width: auto;
            margin: 1px;
        }

        .header-buttons {
            flex-direction: column;
            padding: 20px 0;
        }

        .header-buttons .form-time-change {
            width: 100%;
            margin-right: 0;
        }

        .header-buttons .btn h1 {
            font-size: 25px;
            max-width: 100%;
            white-space: break-spaces;
        }

        .header-buttons .btn p {
            max-width: 100%;
            white-space: break-spaces;
        }
    }
</style>

<script src="assets/js/rsvp.min.js"></script>
<script src="assets/js/sha256.min.js"></script>
<script src="assets/js/qz-tray.js"></script>

<script>
    //general variables
    let ChangeAutomaticPrinter = false;
    const audio = new Audio('assets/sound/campainha.mp3');

    setInterval(() => {
        let currentItensCount = $('.new-orders .item').length;

        if(currentItensCount > 0) {
            audio.currentTime=0;
            audio.play();

            if(ChangeAutomaticPrinter){
                $('.new-orders .item').each((index, element) => {
                    $(element).find('#printer').trigger('click');
                });
            }
        }
        statusLoja();
    }, 6000);

    setInterval(() => {
        updateNewOrders();
        updateDeliveryOrders();
        updateFinishOrders();
    }, 15000)

    //update new orders
    function statusLoja(){
        $.ajax({
            url: 'ajax/statusLoja.php',
            type: 'POST',
            data: {view: true},
            success: function(data){
                if(data == 'yes')
                {
                    $('#changeShopState').removeClass('red').addClass('green');  
                }
                else
                {
                   $('#changeShopState').removeClass('green').addClass('red'); 
                }
            }
        })
    }
    function updateNewOrders(){
        $.ajax({
            url: 'ajax/orderNewsList.php',
            type: 'POST',
            dataType: 'HTML',
            data: {view: true},
            success: function(data){
                $('.new-orders').html(data);
            }
        })
    }

    //update preparations orders
    function updatePreparationOrders(){
        $.ajax({
            url: 'ajax/orderPreparationList.php',
            type: 'POST',
            dataType: 'HTML',
            data: {view: true},
            success: function(data){
                $('.preparation-orders').html(data);
            }
        })
    }

    //update delivery order
    function updateDeliveryOrders(){
        $.ajax({
            url: 'ajax/orderDeliveryList.php',
            type: 'POST',
            dataType: 'HTML',
            data: {view: true},
            success: function(data){
                $('.delivery-orders').html(data);
            }
        })
    }

    //update delivery order
    function updateFinishOrders(){
        $.ajax({
            url: 'ajax/orderFinishList.php',
            type: 'POST',
            dataType: 'HTML',
            data: {view: true},
            success: function(data){
                $('.finish-orders').html(data);
            }
        })
    }

    window.onload = function(){
        //cancell order
        $(document).on('click', '#cancellOrder', function () {
            let orderId = $(this).attr('order-id');
            removeItem(orderId)
        });

        $(document).on('click', '.open-modal-status', function(){
            $('.modal-status').css({'display': 'flex'});
        })
        //print and aprovedd orders
        $(document).on('click', '#printer', function(){
            let orderId = $(this).attr('order-id');
            printOrder(orderId)
        });
        
        //print android orders
        $(document).on('click', '#printAndroidOrder', function(){
            let orderId = $(this).attr('order-id');
            printAndroidOrder(orderId)
        });

        //delivery order
        $(document).on('click', '#delivery', function () {
            let orderId = $(this).attr('order-id');
            deliveryItem(orderId)
        });

        //finish order
        $(document).on('click', '#finish', function () {
            let orderId = $(this).attr('order-id');
            finishItem(orderId)
        });

        //ended order
        $(document).on('click', '#ended', function () {
            let orderId = $(this).attr('order-id');
            endedItem(orderId)
        });

        //associate order on motoboy
        $(document).on('click', '#associateOrder', function () {
            let orderId = $(this).attr('order-id');
            let motoboyId = $(this).attr('motoboy-id');
            $('#associeteOrderId').val(orderId);
            if(motoboyId)
            {
                $('#associate_motoboy option[value="'+motoboyId+'"]').prop('selected', true);
            }
            else
            {
                $('#associate_motoboy option[value="0"]').prop('selected', true);
            }
            $('.modal-motoboy').css({'display': 'flex'});
            $('.modal-motoboy .modal-box .title .text b').html(`#${orderId}`);
        });

        $(document).on('click', '.close-modal', function () {
            $('.modal-container').css({'display': 'none'});
        });

        $(document).on('submit', '#associate_motoboy', function(e) {
            e.preventDefault();
            const data = $(this).serializeArray();

            if(data[0].value == 0) {
                alert('Selecione um entregador!');
            }else{
                $.ajax({
                    url: 'ajax/associeteMotoboy.php',
                    type: 'POST',
                    dataType: 'JSON',
                    data: {'motoboy': data[0].value, 'orderId': data[1].value},
                    success: function(data){
                        updatePreparationOrders();
                        updateDeliveryOrders();
                        $('.modal-container').css({'display': 'none'});
                    }
                })
            }
        });
        
        $(document).on('click', '.ativar-automatico', function(){
                
            $.ajax({
                context: this,
                url: 'ajax/statusManualAuto.php',
                type: 'POST',
                data: {auto: true},
                success: function(){
                    $('.modal-container').css({'display': 'none'});
                    $('.alert-manual').removeClass('alert-red').addClass('alert-green').html('Abrir/Fechar loja automático foi reativado! Aguarde 1 minuto para atualizar o sistema.');
                }
            })
        })

        $(document).on('click', '#changeShopState', function () {
            $.ajax({
                context: this,
                url: 'ajax/changeShopState.php',
                data: {change: true},
                type: 'post',
                success: function(){
                    $('.alert-manual').addClass('alert alert-red ').html('O status da loja está manual, não se esqueça de iniciar/finalizar o expediente ou <u class="open-modal-status" style="cursor: pointer; color: black">clique aqui</u> para ativar a abertura/fechamento automático novamente.');
                    if($(this).hasClass('green')){
                        $(this).addClass('red').removeClass('green');
                    }else{
                        $(this).addClass('green').removeClass('red')
                    }
                }
            })
        });

        $(document).on('click', '#ChangeAutomaticPrinter', function(){
            if($(this).hasClass('green')){
                $(this).addClass('red').removeClass('green');
                ChangeAutomaticPrinter = false;
            }else{
                $(this).addClass('green').removeClass('red')
                ChangeAutomaticPrinter = true;
            }
        });

        $(document).on('click', '.print-order', function(){
            let orderId = $(this).attr('order-id');
            let printType = $(this).attr('print-type');
            printOrderById(orderId, printType)
        })

        $(document).on('submit', '.form-time-change', function(e) {
            e.preventDefault();
            let data = $(this).serialize();
            $.ajax({
                url: `ajax/changeTimeConfig.php`,
                data: data,
                dataType: 'JSON',
                type: 'post',
                beforeSend: function(){
                    $('.form-time-change').css('opacity', '0.5');
                },
                success: function(data){
                    $('.form-time-change').css('opacity', '1');
                }
            })
        })
        
        
    }

    function removeItem(id) {
        $.ajax({
            url: 'ajax/orderCancell.php',
            type: 'POST',
            dataType: 'json',
            data: {id},
            success:function(data) {
                if(data.success){
                    $(`.item[data-order-id="${id}"]`).remove();
                }
            }
        })
    }

    function deliveryItem(id){
        $.ajax({
            url: 'ajax/orderDelivery.php',
            type: 'POST',
            dataType: 'json',
            data: {id},
            success:function(data) {
                if(data.success){
                    updateDeliveryOrders()
                    $(`.item[data-order-id="${id}"]`).remove();
                }
            }
        })
    }

    function finishItem(id){
        $.ajax({
            url: 'ajax/orderFinish.php',
            type: 'POST',
            dataType: 'json',
            data: {id},
            success:function(data) {
                if(data.success){
                    updateFinishOrders()
                    $(`.item[data-order-id="${id}"]`).remove();
                }
            }
        })
    }

    function endedItem(id){
        $.ajax({
            url: 'ajax/orderEnded.php',
            type: 'POST',
            dataType: 'json',
            data: {id},
            success:function(data) {
                if(data.success){
                    $(`.item[data-order-id="${id}"]`).remove();
                }
            }
        })
    }

    //printer configurations
    qz.security.setCertificatePromise(function(resolve, reject) {
        fetch("assets/signing/digital-certificate.txt", {cache: 'no-store', headers: {'Content-Type': 'text/plain'}})
            .then(function (data) {
                data.ok ? resolve(data.text()) : reject(data.text());
            });
    });

    qz.security.setSignatureAlgorithm("SHA512"); // Since 2.1
    qz.security.setSignaturePromise(function(toSign) {
        return function(resolve, reject) {
            fetch("assignature.php?request=" + toSign, {cache: 'no-store', headers: {'Content-Type': 'text/plain'}})
                .then(function(data) { data.ok ? resolve(data.text()) : reject(data.text()); });
        };
    });

    qz.websocket.connect().then(function() {
        console.log('qz conected')
    });

    function printOrder(orderId) {
        $.ajax({
            url: 'ajax/orderApproved.php',
            type: 'POST',
            dataType: 'json',
            data: {id: orderId},
            success:function(data) {
                if(data.success){
                    updatePreparationOrders()

                    let order = document.querySelector(`.item[data-order-id="${orderId}"]`)
                    order.remove();

                    qz?.printers.getDefault().then(function(printer) {
                        var config = qz.configs.create(printer, { encoding: 'Cp1252' });

                        console.log("data.success.type: ", data.success.type);
                        var order = [
                            data.success.type == 'plain' ?
                                // Send raw data
                                data.success.data :
                                // Send HTML data
                                {
                                    type: 'pixel',
                                    format: 'html',
                                    flavor: 'plain',
                                    data: data.success.data,
                                }
                        ];

                        qz.print(config, order).catch(function(err) {
                            console.error(err);
                        });
                    });
                }
            }
        })
    }

    function printOrderById(orderId, type) {
        let url = ''

        if(type == 'viaNormal'){
            url = 'printOrder'
        }else if(type == 'viaCozinha'){
            url = 'printCozinha'
        }else{
            url = 'printEntregador'
        }

        $.ajax({
            url: `ajax/${url}.php`,
            type: 'POST',
            dataType: 'json',
            data: {id: orderId},
            success:function(data) {
                if(data.success){
                    qz.printers.getDefault().then(function(printer) {
                        var config = qz.configs.create(printer, { encoding: 'Cp1252' });

                        var order = [
                            data.success.type == 'plain' ?
                                // Send raw data
                                data.success.data :
                                // Send HTML data
                                {
                                    type: 'pixel',
                                    format: 'html',
                                    flavor: 'plain',
                                    data: data.success.data,
                                }
                        ];

                        qz.print(config, order).catch(function(err) {
                            console.error(err);
                        });
                    });
                }
            }
        })
    }
    
    function printAndroidOrder(orderId){
         $.ajax({
            url: `ajax/printOrder.php`,
            type: 'POST',
            dataType: 'json',
            data: {id: orderId},
            success:function(data) {
                if(data.success){
                    // $('#printThis').html(data.success.data);
                    // $('#printThis').printThis();
                    print = window.open('about:blank');
                    print.document.write('<html style="width: 60mm">'+data.success.data+'</html>');
                    print.window.print();

                }
            }
        })
    }
</script>
