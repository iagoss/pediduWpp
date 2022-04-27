
function finalize() {
    cart.forEach(doc => {
      if(doc.priceCalc != '0' & parseInt(doc.priceCalc) > 1){
        doc.price = doc.priceCalc
      }else if(parseInt(doc.priceCalc) == 1){
        doc.priceCalc = doc.price
      }
    })
    let body = {
      mesa: mesa,
      order: cart,
    };
    if(cart.length == 0){
      alertSW('Ops!',"Parece que o carrinho está vazio !", 'info');
    }else{
      $.ajax({
        type: "POST",
        url: "../procedimentos/setorder.php",
        data: body,
        success: function (r) {
          console.log(r);
          alertSW('Oba!',"O pedido foi registrado com sucesso", 'success');
    
          cart = []; 
          setTimeout(()=>{
            window.location.href = "index.php";
    
          }, 2000)
        },
      });
    }

}