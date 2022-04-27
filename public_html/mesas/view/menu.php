<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/animation.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <meta name="Cache-Control" content="no-cache">
</head>
<body>
    
<div id="myModal" class="myModal">

    <div class="title">
        <h2>Menu</h2>
    </div>   

    <div class="headerModal">
        <span class="material-icons " onclick="closeModal()" style="font-size: 36px;cursor:pointer;" id="close">close</span>
    </div>    

    <div class="options">        
       <a href="mesas.php">  <h2>Nova Mesa</h2>  </a>
    </div>
 
</div>
    
<header >
    <div >
        <img src="img/logo.png" style="width:50%;margin: 10px;"  alt="">
        
    </div>

     <div style="text-align:right; color: white; margin: 20px 0px; cursor:pointer;" onclick="calculationOpenModal()" id="clickOpen"  data-bs-toggle="modal" data-bs-target="#cartModal">
        <!-- <span class="material-icons" >shopping_cart</span> -->
        <a class="nav-icon position-relative text-decoration-none" href="#">
            <i class="fa fa-fw fa-cart-arrow-down text-light mr-1" style="font-size:25px;"></i>
            <span class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-success text-light" id="cartQuantity">0</span>
       </a>        
    </div>
    <div style="text-align:right; color: white;margin: 15px 25px;   " >
        <span class="material-icons " style="font-size: 48px; cursor:pointer;"onclick="openModal()" >list</span>
    </div>
</header>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
<script src="js/main.js"></script>
<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>


