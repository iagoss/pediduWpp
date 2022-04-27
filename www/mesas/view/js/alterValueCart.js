const alterValueCartNumberProduct = (indice, comand, id) => {
    valor = document.getElementById(id).value;
    if ( comand == "negative" ) {
      valor = document.getElementById(id).value = Number(valor) - 1;
      cart[indice].quantity = document.getElementById(`produtoCartNumber${indice}`).value;
      cart[indice].priceCalc = cart[indice].quantity * cart[indice].price
      cartOpen()
    
      if (valor <= 0) {
        Swal.fire({
          title: 'Tem certeza ?',
          text: "O item será removido da lista!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sim, Remover item!'
        }).then((result) => {
          if (result.isConfirmed) {
              cart.splice(Number(indice),1);
              cartReserve.splice(Number(indice),1);
            calculationOpenModal()
            document.getElementById("cartQuantity").innerHTML = cart.length;
            document.getElementById("cartQuantity").className += " cartQuantityAnimation";
            setTimeout(() => {
              document.getElementById("cartQuantity").classList.remove("cartQuantityAnimation");
            }, 2000);
            Swal.fire(
              'Removido!',
              'O item foi removido com sucesso.',
              'success'
            )
          }else if (result.dismiss === Swal.DismissReason.cancel) {
            valor = 1
            document.getElementById(id).value = 1
            cart[indice].quantity = document.getElementById(
              `produtoCartNumber${indice}`
            ).value;
            calculationOpenModal()
          }
        })
    
      }
    } else {
      valor = document.getElementById(id).value = Number(valor) + 1;
      cart[indice].quantity = document.getElementById(`produtoCartNumber${indice}`).value;
      cart[indice].priceCalc = cart[indice].quantity * cart[indice].price
      cartOpen()
    }
    
    };

    
function alterQuantityCart(i) {
  cart[i].qunatity = document.getElementById(`produtoCartNumber${i}`);
}