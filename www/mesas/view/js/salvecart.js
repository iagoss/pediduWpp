const salveCartFunc = (name, price, type) => {
    typeOpens = typeOpens.filter(function (a) {
      return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
    }, Object.create(null));
  
    if(typeOpens[0] == 'add'){
      
      if(limitsVerification > 0 & additionaisSelected.length < limitsVerification ){
        alertSW('Atenção!','Selecionar no minimo ' + limitsVerification + ' produto(s) é obrigarodio.', 'info');
        resetVars();
      }else{
        salveCart = salveCart.filter(function (a) {
          return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
        }, Object.create(null));
    
        cart.push({
          product: name,
          price: price,
          priceCalc: price,
          selected: salveCart,
          additional: additionaisSelected,
          description: document.getElementById("descProd").value,
          quantity: 1,
          waiter: garcon,
        });
        cartReserve.push({
          product: name,
          price: price,
          priceCalc: price,
          selected: salveCart,
          additional: additionaisSelected,
          description: document.getElementById("descProd").value,
          quantity: 1,
          waiter: garcon,
        });
      
        document.getElementById("cartQuantity").innerHTML = cart.length;
      
        document.getElementById("cartQuantity").className += " cartQuantityAnimation";
        setTimeout(() => {
          document
            .getElementById("cartQuantity")
            .classList.remove("cartQuantityAnimation");
        }, 2000);
      
    
      
        document.getElementById("descProd").value = "";  
              
        resetVars();
        
      }
    }else{
      if(limitsVerification > 0 & salveCart.length == 0 ){
        resetVars();
        alertSW('Atenção!',"Selecione um produto por favor.", 'info');
  
        
      }else{
        salveCart = salveCart.filter(function (a) {
          return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
        }, Object.create(null));
    
        console.log(salveCart)
        console.log(additionaisSelected)
    
        cart.push({
          product: name,
          price: price,
          priceCalc: price,
          selected: salveCart,
          additional: additionaisSelected,
          description: document.getElementById("descProd").value,
          quantity: 1,
          waiter: garcon,
        });
        cartReserve.push({
          product: name,
          price: price,        
          priceCalc: price,
          selected: salveCart,
          additional: additionaisSelected,
          description: document.getElementById("descProd").value,
          quantity: 1,
          waiter: garcon,
        });
      
        document.getElementById("cartQuantity").innerHTML = cart.length;
      
        document.getElementById("cartQuantity").className += " cartQuantityAnimation";
        setTimeout(() => {
          document
            .getElementById("cartQuantity")
            .classList.remove("cartQuantityAnimation");
        }, 2000);
        document.getElementById("descProd").value = "";
        resetVars();
      }
    }
  };