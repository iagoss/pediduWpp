<?php
session_start();
if(isset($_SESSION['usuarioPainel'])){
    $user = $_SESSION['usuarioPainel'];
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pedidos Mesa</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />    
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/payament.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

      <!-- Required scripts -->
    <script type="text/javascript" src="js/qz-tray.js"></script>

    <!-- Pollyfills -->
    <script type="text/javascript" src="js/sample/promise-polyfill-8.1.3.min.js"></script>
    <script type="text/javascript" src="js/sample/whatwg-fetch-3.0.0.min.js"></script>

    <!-- JavaScript -->
    <script src="//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/alertify.min.js"></script>

    <!-- CSS -->
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/css/alertify.min.css"/>
    <!-- Default theme -->
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/css/themes/default.min.css"/>
    <!-- Semantic UI theme -->
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/css/themes/semantic.min.css"/>
    <!-- Bootstrap theme -->
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/css/themes/bootstrap.min.css"/>

    <!-- 
        RTL version
    -->
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/css/alertify.rtl.min.css"/>
    <!-- Default theme -->
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/css/themes/default.rtl.min.css"/>
    <!-- Semantic UI theme -->
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/css/themes/semantic.rtl.min.css"/>
    <!-- Bootstrap theme -->
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/css/themes/bootstrap.rtl.min.css"/>


  </head>
<body  id="qz-page" role="document" onmouseover="document.getElementById('silence').play()">
    <Header>
        <img src="../view/img/logo.png" style="width:20%; height:100%; padding:10px;" alt="">
        <iframe src="silence.mp3" allow="autoplay" id="audio" style="display:none"></iframe>
        <audio>
          <source src="alert.mp3" type="audio/mp3">
        </audio>
        <audio>
          <source src="alert.mp3" id="silence" type="audio/mp3">
        </audio>
    </Header>
    
    <div class="configs">
        <div id="autoimpress">   
          <div class='autoimpress'>
            <div class="form-check form-switch">

            <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked">
              <label class="form-check-label" for="flexSwitchCheckChecked">
                AUTO IMPRESSÃO
              </label>
          </div>
        </div>
          <button type="button" data-bs-toggle="modal" class='list' data-bs-target="#mesas" onclick="getTables()">
            LISTA DE MESAS 
          </button>
        </div>


        <div id="buttons">
          <input type="number" placeholder="Digite aqui a quantidade de mesas." id='number' style="height:40px; margin-top:10px;padding-left:5px;">
          <button type="button" onclick="alterQuantyNumber()" >
              Alterar mesas
          </button>
            <!-- Button trigger modal -->
            <button type="button" data-bs-toggle="modal" class='add_waiter'  data-bs-target="#waiterRegister">
              ADICIONAR GARÇOM
            </button>
            <button type="button" data-bs-toggle="modal" class='delete'  data-bs-target="#waiterEdit" onclick="getWaiter()">
              EXCLUIR GARÇOM
            </button>
            
            <a href="./graphics.html"><div class="gp"> <img src="grafico.png" style="width:20px; height:20px" alt="ir para graficos"></div></a>
        </div>
    </div>
    <!-- <div class="container">
    </div> -->
        <div id="items">
            
            <div id="order">               

            </div>
            <div id="order2">

            </div>
            <div id="order3">

            </div>
        </div>

<!-- Modal -->
<div class="modal fade" id="mesas" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title title-List" id="exampleModalLabel">  
           <div class="btn btn-danger">
              Lista de mesas
          </div>
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" id="tables">
        <div id="numbers">
       

        </div>
        <div id="count">
          <div id="comand">

          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-warning" onclick="imprimirCount()">Imprimir conta</button>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
        <!-- <button type="button" class="btn btn-primary" onclick="table_close()">Encerrar Mesa</button> -->
      </div>
    </div>
  </div>
</div>

<!-- Modal add graçon -->
<div class="modal fade" id="waiterRegister" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Registre um garçon</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="for-group">
        <div class="input-group input-group-sm mb-3">
        <span class="input-group-text" id="inputGroup-sizing-sm">Nome_user</span>
             <input type="text" class="form-control" aria-label="Sizing example input" id="login"  aria-describedby="inputGroup-sizing-sm">
        </div>
        </div>
        <div class="input-group input-group-sm mb-3">
        <span class="input-group-text" id="inputGroup-sizing-sm">Senha</span>
             <input type="password" class="form-control" aria-label="Sizing example input" id="pass" aria-describedby="inputGroup-sizing-sm">
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
        <button type="button" class="btn btn-primary" onclick="register()">Registrar</button>
      </div>
    </div>
  </div>
</div>



<!-- Modal editar garçon -->
<div class="modal fade" id="waiterEdit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edite um garçon</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <table class="table" >
        <thead>
            <tr>
            <th scope="col">id</th>
            <th scope="col">Nome</th>
            <th scope="col">Excluir</th>
            </tr>
        </thead>
        <tbody id='listWaiter'>

        </tbody>
        </table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
        <button type="button" class="btn btn-primary">Registrar</button>
      </div>
    </div>
  </div>
</div>


</body>
</html>
<?php 
}else{
	header("location:login.php");
}
?>