<?php
session_start();
if(isset($_SESSION['usuariogarcon'])){
    $user = $_SESSION['usuariogarcon'];
?>
    <?php include_once 'menu.php'; ?>
    <div id="buttons">
        <button style="color:white; background-color: green;"onclick="screen('mesas.php')" >Abrir Mesa</button>
    </div>
</body>
<script>
    let table = [{
        'numero_mesa' : 10
    },{
        'numero_mesa' : 11
    }]

    function screen(parm){
        let url = parm;
        window.location = url;
    }
</script>
</html>
<?php 
}else{
	header("location:login.php");
}
?>