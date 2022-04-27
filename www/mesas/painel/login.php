<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" type="image/png" sizes="512x512" href="../../../images/logo.png">
        <link rel="manifest" href="../../../manifest.webmanifest">    
        <script src="../../../index1.js"></script>
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="application-name" content="PWA Workshop">
        <meta name="apple-mobile-web-app-title" content="PWA Workshop">
        <meta name="msapplication-starturl" content="admin/mesas/view">
        <meta name="Cache-Control" content="no-cache">
        <title>Login Mesas</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
        <style>
            .divider:after,
            .divider:before {
                content: "";
                flex: 1;
                height: 1px;
                background: #eee;
            }
        </style>
    </head>

    <body>
    <section class="vh-100">
  <div class="container py-5 h-100">
    <div class="row d-flex align-items-center justify-content-center h-100">
      <div class="col-md-8 col-lg-7 col-xl-6">
        <img src="img/grLogo.png"  class="img-fluid" style="width:70%" alt="Phone image">
      </div>
      
      <div class="col-md-7 col-lg-5 col-xl-5 shadow-lg p-5 bg-light">
                        <div class="text-center">
                        <div>
                            <img src="./img/pedidoLogoLogin.png" style="width:100%; height:100%; padding:10px;" alt="">
                        </div>
                        </div>
                        <form action="../procedimentos/loginpainel.php" method="post">
                            <div class="p-4">
                                <div class="input-group mb-3">
                                    <span class="input-group-text bg-danger"><i
                                            class="bi bi-person-plus-fill text-white"></i></span>
                                    <input type="text" name="login" class="form-control" placeholder="Username">
                                </div>
                                <div class="input-group mb-3">
                                    <span class="input-group-text bg-danger"><i
                                            class="bi bi-key-fill text-white"></i></span>
                                    <input type="password" name="pass" class="form-control" placeholder="password">
                                </div>
                                <button   class="btn btn-danger text-center mt-2" onclick="logar()" type="submit">
                                     Login
                                </button>
                            </div>
                            <center>
                                <p style="opacity:0.3">Gerenciamento de mesas</p>
                            </center>
                        </form>
                    </div>
    </div>
  </div>
</section>
    </body>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>    
<script>
    function logar(){
        var bodysend = {
        login: 'mylogin',
        pass: 'mypassword'
    }
    console.log(bodysend)
    }
</script>
</html>