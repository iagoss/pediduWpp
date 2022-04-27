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
    <meta content="text/html;charset=utf-8" http-equiv="Content-Type">
    <title>Pedidos Mesa</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />    
    <meta name="Cache-Control" content="no-cache">
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
            <a href="./graphics.html"><div class="gp"> <img src="grafico.png" style="width:20px; height:20px" alt="ir para graficos"></div></a></a>
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




<script type="text/javascript" src="js/qz-tray.js"></script>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <script src="./jsRow/main.js">

    </script>
    <script src="./jsRow/mesas.js">

    </script>
    <script src="./jsRow/mothodsPayaments.js"></script>
    <script src='./jsRow/closeTable.js'></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>

<script>
  
    var teste = ''

     /// Authentication setup ///
     qz.security.setCertificatePromise(function(resolve, reject) {
      //   Preferred method - from server
       fetch("certificado/1.txt", {cache: 'no-store', headers: {'Content-Type': 'text/plain'}})
         .then(function(data) { data.ok ? resolve(data.text()) : reject(data.text()); });

        //Alternate method 1 - anonymous
//        resolve();  // remove this line in live environment

        //Alternate method 2 - direct
        // resolve("-----BEGIN CERTIFICATE-----\n" +
        //             "MIIFAzCCAuugAwIBAgICEAIwDQYJKoZIhvcNAQEFBQAwgZgxCzAJBgNVBAYTAlVT\n" +
        //             "MQswCQYDVQQIDAJOWTEbMBkGA1UECgwSUVogSW5kdXN0cmllcywgTExDMRswGQYD\n" +
        //             "VQQLDBJRWiBJbmR1c3RyaWVzLCBMTEMxGTAXBgNVBAMMEHF6aW5kdXN0cmllcy5j\n" +
        //             "b20xJzAlBgkqhkiG9w0BCQEWGHN1cHBvcnRAcXppbmR1c3RyaWVzLmNvbTAeFw0x\n" +
        //             "NTAzMTkwMjM4NDVaFw0yNTAzMTkwMjM4NDVaMHMxCzAJBgNVBAYTAkFBMRMwEQYD\n" +
        //             "VQQIDApTb21lIFN0YXRlMQ0wCwYDVQQKDAREZW1vMQ0wCwYDVQQLDAREZW1vMRIw\n" +
        //             "EAYDVQQDDAlsb2NhbGhvc3QxHTAbBgkqhkiG9w0BCQEWDnJvb3RAbG9jYWxob3N0\n" +
        //             "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtFzbBDRTDHHmlSVQLqjY\n" +
        //             "aoGax7ql3XgRGdhZlNEJPZDs5482ty34J4sI2ZK2yC8YkZ/x+WCSveUgDQIVJ8oK\n" +
        //             "D4jtAPxqHnfSr9RAbvB1GQoiYLxhfxEp/+zfB9dBKDTRZR2nJm/mMsavY2DnSzLp\n" +
        //             "t7PJOjt3BdtISRtGMRsWmRHRfy882msBxsYug22odnT1OdaJQ54bWJT5iJnceBV2\n" +
        //             "1oOqWSg5hU1MupZRxxHbzI61EpTLlxXJQ7YNSwwiDzjaxGrufxc4eZnzGQ1A8h1u\n" +
        //             "jTaG84S1MWvG7BfcPLW+sya+PkrQWMOCIgXrQnAsUgqQrgxQ8Ocq3G4X9UvBy5VR\n" +
        //             "CwIDAQABo3sweTAJBgNVHRMEAjAAMCwGCWCGSAGG+EIBDQQfFh1PcGVuU1NMIEdl\n" +
        //             "bmVyYXRlZCBDZXJ0aWZpY2F0ZTAdBgNVHQ4EFgQUpG420UhvfwAFMr+8vf3pJunQ\n" +
        //             "gH4wHwYDVR0jBBgwFoAUkKZQt4TUuepf8gWEE3hF6Kl1VFwwDQYJKoZIhvcNAQEF\n" +
        //             "BQADggIBAFXr6G1g7yYVHg6uGfh1nK2jhpKBAOA+OtZQLNHYlBgoAuRRNWdE9/v4\n" +
        //             "J/3Jeid2DAyihm2j92qsQJXkyxBgdTLG+ncILlRElXvG7IrOh3tq/TttdzLcMjaR\n" +
        //             "8w/AkVDLNL0z35shNXih2F9JlbNRGqbVhC7qZl+V1BITfx6mGc4ayke7C9Hm57X0\n" +
        //             "ak/NerAC/QXNs/bF17b+zsUt2ja5NVS8dDSC4JAkM1dD64Y26leYbPybB+FgOxFu\n" +
        //             "wou9gFxzwbdGLCGboi0lNLjEysHJBi90KjPUETbzMmoilHNJXw7egIo8yS5eq8RH\n" +
        //             "i2lS0GsQjYFMvplNVMATDXUPm9MKpCbZ7IlJ5eekhWqvErddcHbzCuUBkDZ7wX/j\n" +
        //             "unk/3DyXdTsSGuZk3/fLEsc4/YTujpAjVXiA1LCooQJ7SmNOpUa66TPz9O7Ufkng\n" +
        //             "+CoTSACmnlHdP7U9WLr5TYnmL9eoHwtb0hwENe1oFC5zClJoSX/7DRexSJfB7YBf\n" +
        //             "vn6JA2xy4C6PqximyCPisErNp85GUcZfo33Np1aywFv9H+a83rSUcV6kpE/jAZio\n" +
        //             "5qLpgIOisArj1HTM6goDWzKhLiR/AeG3IJvgbpr9Gr7uZmfFyQzUjvkJ9cybZRd+\n" +
        //             "G8azmpBBotmKsbtbAU/I/LVk8saeXznshOVVpDRYtVnjZeAneso7\n" +
        //             "-----END CERTIFICATE-----\n" +
        //             "--START INTERMEDIATE CERT--\n" +
        //             "-----BEGIN CERTIFICATE-----\n" +
        //             "MIIFEjCCA/qgAwIBAgICEAAwDQYJKoZIhvcNAQELBQAwgawxCzAJBgNVBAYTAlVT\n" +
        //             "MQswCQYDVQQIDAJOWTESMBAGA1UEBwwJQ2FuYXN0b3RhMRswGQYDVQQKDBJRWiBJ\n" +
        //             "bmR1c3RyaWVzLCBMTEMxGzAZBgNVBAsMElFaIEluZHVzdHJpZXMsIExMQzEZMBcG\n" +
        //             "A1UEAwwQcXppbmR1c3RyaWVzLmNvbTEnMCUGCSqGSIb3DQEJARYYc3VwcG9ydEBx\n" +
        //             "emluZHVzdHJpZXMuY29tMB4XDTE1MDMwMjAwNTAxOFoXDTM1MDMwMjAwNTAxOFow\n" +
        //             "gZgxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJOWTEbMBkGA1UECgwSUVogSW5kdXN0\n" +
        //             "cmllcywgTExDMRswGQYDVQQLDBJRWiBJbmR1c3RyaWVzLCBMTEMxGTAXBgNVBAMM\n" +
        //             "EHF6aW5kdXN0cmllcy5jb20xJzAlBgkqhkiG9w0BCQEWGHN1cHBvcnRAcXppbmR1\n" +
        //             "c3RyaWVzLmNvbTCCAiIwDQYJKoZIhvcNAQEBBQADggIPADCCAgoCggIBANTDgNLU\n" +
        //             "iohl/rQoZ2bTMHVEk1mA020LYhgfWjO0+GsLlbg5SvWVFWkv4ZgffuVRXLHrwz1H\n" +
        //             "YpMyo+Zh8ksJF9ssJWCwQGO5ciM6dmoryyB0VZHGY1blewdMuxieXP7Kr6XD3GRM\n" +
        //             "GAhEwTxjUzI3ksuRunX4IcnRXKYkg5pjs4nLEhXtIZWDLiXPUsyUAEq1U1qdL1AH\n" +
        //             "EtdK/L3zLATnhPB6ZiM+HzNG4aAPynSA38fpeeZ4R0tINMpFThwNgGUsxYKsP9kh\n" +
        //             "0gxGl8YHL6ZzC7BC8FXIB/0Wteng0+XLAVto56Pyxt7BdxtNVuVNNXgkCi9tMqVX\n" +
        //             "xOk3oIvODDt0UoQUZ/umUuoMuOLekYUpZVk4utCqXXlB4mVfS5/zWB6nVxFX8Io1\n" +
        //             "9FOiDLTwZVtBmzmeikzb6o1QLp9F2TAvlf8+DIGDOo0DpPQUtOUyLPCh5hBaDGFE\n" +
        //             "ZhE56qPCBiQIc4T2klWX/80C5NZnd/tJNxjyUyk7bjdDzhzT10CGRAsqxAnsjvMD\n" +
        //             "2KcMf3oXN4PNgyfpbfq2ipxJ1u777Gpbzyf0xoKwH9FYigmqfRH2N2pEdiYawKrX\n" +
        //             "6pyXzGM4cvQ5X1Yxf2x/+xdTLdVaLnZgwrdqwFYmDejGAldXlYDl3jbBHVM1v+uY\n" +
        //             "5ItGTjk+3vLrxmvGy5XFVG+8fF/xaVfo5TW5AgMBAAGjUDBOMB0GA1UdDgQWBBSQ\n" +
        //             "plC3hNS56l/yBYQTeEXoqXVUXDAfBgNVHSMEGDAWgBQDRcZNwPqOqQvagw9BpW0S\n" +
        //             "BkOpXjAMBgNVHRMEBTADAQH/MA0GCSqGSIb3DQEBCwUAA4IBAQAJIO8SiNr9jpLQ\n" +
        //             "eUsFUmbueoxyI5L+P5eV92ceVOJ2tAlBA13vzF1NWlpSlrMmQcVUE/K4D01qtr0k\n" +
        //             "gDs6LUHvj2XXLpyEogitbBgipkQpwCTJVfC9bWYBwEotC7Y8mVjjEV7uXAT71GKT\n" +
        //             "x8XlB9maf+BTZGgyoulA5pTYJ++7s/xX9gzSWCa+eXGcjguBtYYXaAjjAqFGRAvu\n" +
        //             "pz1yrDWcA6H94HeErJKUXBakS0Jm/V33JDuVXY+aZ8EQi2kV82aZbNdXll/R6iGw\n" +
        //             "2ur4rDErnHsiphBgZB71C5FD4cdfSONTsYxmPmyUb5T+KLUouxZ9B0Wh28ucc1Lp\n" +
        //             "rbO7BnjW\n" +
        //             "-----END CERTIFICATE-----\n");
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
  function printOrder(docHTML,  id, status) {
    qz?.printers.getDefault().then(function(printer) {
        var config = qz.configs.create(printer, { encoding: 'Cp1252' });
        var order = [

                // Send HTML data
                {
                    type: 'raw',
                    flavor: 'plain',
                    data: docHTML,
                }
        ];
        console.log(docHTML)

        qz.print(config, order).catch(function(err) {
            console.error(err);
        });
        alterStatus(id, status)
    });

}
</script>
<script src="jsRow/numberTables.js"></script>
<script src="jsRow/waiter.js"></script>
<script src="jsRow/impressqz.js"></script>
<script src="jsRow/alertas.js"></script>
</body>
</html>
<?php 
}else{
	header("location:login.php");
}
?>