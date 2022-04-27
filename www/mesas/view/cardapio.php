<?php
session_start();
if(isset($_SESSION['usuariogarcon'])){
    $user = $_SESSION['usuariogarcon'];
?>
<?php include_once 'menu.php'; ?>
    <?php 
        $mesa = $_GET['mesa'];
    ?> 

  <script> 
      var mesa = `<?php echo $_GET['mesa']; ?>`

      var garcon = `<?php echo $user ;?>`

  </script>


<br>

    
   <div id="numMesa"> Mesa de numero:<?php echo $mesa; ?> </div> 

    <div id="categorys"> 
        <div class="categorys" onclick="getProducts(0)"> 
            Todas
        </div>    
    </div>
    <div class="input-group mb-3">
          <span class="input-group-text bg-success" >
              <i class="bi  bi-search text-white"></i></span>
          <input type="text" class="form-control" placeholder="Pesquisar" id='fetchInput' onkeyup='getProductsfetch()'>
    </div>

    <div class="containerMy" id="products">
        
    </div>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content" id="modalInfos">
      ...
    </div>
  </div>
</div>




<!-- Modal -->
<div class="modal fade" id="cartModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Carrinho mesa <?php echo $mesa ?></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" id="cartProducts">
       
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
        <button type="button" class="btn btn-primary" onclick="finalize()">Encerrar carrinho</button>
      </div>
    </div>
  </div>
</div>
</body>
    <script src="js/cardapio.js"></script>    
    <script src="js/limitsVerify.js"></script>
    <script src="js/cart.js"></script>
    <script src="js/fetchmodal.js"></script>
    <script src="js/addTypesvalues.js"></script>
    <script src="js/alert.js"></script>
    <script src="js/alterValueCart.js"></script>
    <script src="js/calculateCartModalOpen.js"></script>
    <script src="js/finalizeCart.js"></script>
    <script src="js/salvecart.js"></script>
    
</html>
<?php 
}else{
	header("location:login.php");
}
?>