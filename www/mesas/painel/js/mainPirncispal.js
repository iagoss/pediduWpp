var quantityOrder = 0;
async function ajx() {
  var ajax = new XMLHttpRequest(); // cria o objeto XHR
  ajax.onreadystatechange = function () {
    // verifica quando o Ajax for completado
    if (ajax.readyState == 4 && ajax.status == 200) {
      let order = ajax.responseText; // atualiza o span
      let orderGet = $.parseJSON(order);

      console.log(orderGet);

      if (orderGet.length > quantityOrder || orderGet < quantityOrder) {
        document.getElementById("order").innerHTML = "";
        document.getElementById(
          "order"
        ).innerHTML = `<div class="title1"><h6 style="text-align:center; margin-bottom:2px;">Novos pedidos</h6><div>`;
        document.getElementById(
          "order2"
        ).innerHTML = `<div class="title2"><h6 style="text-align:center; margin-bottom:2px;">Em processo</h6><div>`;
        document.getElementById(
          "order3"
        ).innerHTML = `<div class="title3"><h6 style="text-align:center; margin-bottom:2px;">Entregues na mesa </h6><div>`;

        orderGet.forEach((el) => {
          if (el.status == "0") {
            document.getElementById(
              "order"
            ).innerHTML += `<div class="productsContainer">   </div> `;
            document.getElementById("order").innerHTML += `
                        <div class="mesas" style="display:flex; margin-top: 10px;"> 
                            <div class="numMesa"> 
                                <h5 style="margin-top:10px;">Mesa Numero : ${el.numero_mesa} </h5> 
                            </div>
                            <div class="numMesa" style=" margin: 0;">
                                <p style=" margin: 0;">${el.hora}</p> 
                                <h6 style=" margin: 0;"> Comanda: ${el.id} </h6> 
                            </div>  
                        </div> `;

            var htmlImpress = `
                            <center>
                            <div style="width:80px; height:80px; border:1px solid black; background-color:black; border-radius: 50%;">
                                <h1 style="margin: 0!important; color:white; padding-top: 20px;" > ${el.numero_mesa} </h1><br>
                            </div>
                                <h6 style="margin: 0!important;">
                                    Pedido numero: ${el.id} <br>
                                    ${el.hora}
                                </h6> 
                            </center>  
                        `;
            var valorFinalComanda = 0;
            cart = el.product;
            console.log(el);
            for (i = 0; i < cart.length; i++) {
              var selecteds = "";
              var adicionais = "";

              if (cart[i].selected) {
                cart[i].selected.forEach((doc) => {
                  selecteds += `
                                        <p style="margin: 0!important"> <span  style="margin: 0!important">  ${doc.selecionado} </span></p>
                                    `;
                });
              } else {
                console.log("pular");
              }

              if (typeof cart[i].additional === "undefined") {
              } else {
                cart[i].additional.forEach((document) => {
                  adicionais += `            
                                            <span style="margin: 0!important"> ${document.quantity}x - ${document.name} </span> <br>
                                            
                                            `;
                });
              }

              document.getElementById("order").innerHTML += `
                                <div class='productInCartInner'>
                                    <div class='productInCart' >
                                        <div >
                                        <h6 style="margin: 0!important"> ${cart[i].quantity}x : ${cart[i].product} </h6>
                                        ${selecteds}
                                        Adicionais: 
                                        <p style="margin: 0!important">${adicionais}</p>
                                        <p style="margin: 0!important">OBS: ${cart[i].description}</p>
                                        <p style="margin: 0!important"> R$: ${cart[i].price} </p>
                                        </div>   
                                    </div>    
                                <div>
                                `;
              htmlImpress += `
                                <h3 style="margin: 0!important"> (${cart[i].quantity})  - ${cart[i].product} </h3>
                                <h3>${selecteds}</h3>
                                <h3 style="margin: 0!important">Adicionais: </h3>
                                <h3 style="margin: 0!important">${adicionais}</h3>
                                <h3 style="margin: 0!important">OBS: ${cart[i].description}</h3>
                                <h3 style="margin: 0!important"> R$: ${cart[i].price} </h3>

                                <br>
                                - - - - - - -- - - -- - - - - - - - - - - -  

                                <br><br>              
                            
                            `;

              valorFinalComanda += Number(cart[i].price);
            }

            htmlImpress += `

                            <h3> Sub-total: ${valorFinalComanda}<h3> <br>
                            - - - - - - -- - - -- - - - - - - - - - - -
                        `;

            if (
              document.getElementById("flexSwitchCheckChecked").checked == true
            ) {
              printOrder(htmlImpress, el.id, "1");
              document.getElementById("order").innerHTML += `
                                <div >  
                                    <center> 
                                        <button  class="btn btn-warning"  onclick="printOrder(htmlImpress)"> 
                                            imprimir
                                        </button>
                                        <button  class="btn btn-danger"  onclick="printOrder(htmlImpress)"> 
                                            Cancelar
                                        </button> 
                                    <center>
                                </div>
                                `;
            } else {
              document.getElementById("order").innerHTML += `
                                <div >  
                                    <center> 
                                        <button  class="btn btn-warning"  onclick="printOrder(htmlImpress)"> 
                                            imprimir
                                        </button>
                                        <button  class="btn btn-danger"  onclick="printOrder(htmlImpress)"> 
                                            Cancelar
                                        </button> 
                                    <center>
                                </div>
                                `;
            }
          }

          if (el.status == "1") {
            document.getElementById("order2").innerHTML += `
                            <div class="mesas" style="display:flex; margin-top: 10px;"> 
                                <div class="numMesa"> 
                                    <h5 style="margin-top:10px;">Mesa Numero : ${el.numero_mesa} </h5> 
                                </div>  
                                <div class="numMesa" style=" margin: 0;">
                                    <p style=" margin: 0;">${el.hora}</p> 
                                    <h6 style=" margin: 0;"> Comanda: ${el.id} </h6> 
                                </div>  
                            </div> `;
            cart = el.product;
            for (i = 0; i < cart.length; i++) {
              var selecteds = "";
              var adicionais = "";

              if (cart[i].selected) {
                cart[i].selected.forEach((doc) => {
                  selecteds += `
                                            <p style="margin:0"> <span style="color: green">  ${doc.selecionado} </span></p>
                                        `;
                });
              } else {
                console.log("pular");
              }

              if (typeof cart[i].additional === "undefined") {
              } else {
                cart[i].additional.forEach((document) => {
                  adicionais += `            
                                                <span style="margin: 0!important"> ${document.quantity}x - ${document.name} </span> <br>
                                                `;
                });
              }

              document.getElementById("order2").innerHTML += `
                                    <div class='productInCartInner'>
                                        <div class='productInCart' style="margin: 0!important" >
                                            <div style="margin: 0!important">
                                            <h6 style="margin: 0!important"> ${cart[i].quantity}x : ${cart[i].product} </h6>
                                            ${selecteds}
                                            Adicionais: 
                                            <p style="margin: 0!important">${adicionais}</p>
                                            <p style="margin: 0!important">OBS: ${cart[i].description}</p>
                                            <p style="margin: 0!important"> R$: ${cart[i].price} </p>
                                            </div>   
                                        </div>    
                                    <div>                            
                                    `;
            }
            document.getElementById("order2").innerHTML += `
                                    <div>
                                    <center> 
                                        <button  class="btn btn-success" onclick="finalizeTable('${el.id}', '2')" > 
                                            Finalizar
                                        </button> 
                                        <button  class="btn btn-warning"  onclick="printOrder(htmlImpress)"> 
                                            imprimir
                                        </button>
                                        <button  class="btn btn-danger"  onclick="printOrder(htmlImpress)"> 
                                            Cancelar
                                        </button> 
                                    <center>
                                    </div>`;
          }

          if (el.status == "2") {
            document.getElementById("order3").innerHTML += `
                            <div class="mesas" style="display:flex; margin-top: 10px;"> 
                                <div class="numMesa"> 
                                    <h5 style="margin-top:10px;">Mesa Numero : ${el.numero_mesa} </h5> 
                                </div>  
                                <div class="numMesa" style=" margin: 0;">
                                    <p style=" margin: 0;">${el.hora}</p> 
                                    <h6 style=" margin: 0;"> Comanda: ${el.id} </h6> 
                                </div>  
                            </div> `;

            cart = el.product;
            for (i = 0; i < cart.length; i++) {
              var selecteds = "";
              var adicionais = "";

              if (cart[i].selected) {
                cart[i].selected.forEach((doc) => {
                  selecteds += `
                                            <p> <span style="color: green">  ${doc.selecionado} </span></p>
                                        `;
                });
              } else {
                console.log("pular");
              }

              if (typeof cart[i].additional === "undefined") {
              } else {
                cart[i].additional.forEach((document) => {
                  adicionais += `            
                                                <span style="margin: 0!important"> ${document.quantity}x - ${document.name} </span> <br>
                                                
                                                `;
                });
              }

              document.getElementById("order3").innerHTML += `
                                    <div class='productInCartInner'>
                                        
                                        <div class='productInCart' >
                                            <div >
                                            <h6> ${cart[i].quantity}x : ${cart[i].product} </h6>
                                            ${selecteds}
                                            Adicionais: 
                                            <p>${adicionais}</p>
                                            <p style="margin: 0!important">OBS: ${cart[i].description}</p>
                                            <p style="margin: 0!important"> R$: ${cart[i].price} </p>
                                            </div>   
                                        </div>    
                                    <div>                            
                                    `;
            }
          }

          document.getElementById("order").innerHTML += `<div/>`;
        });
      }

      quantityOrder = orderGet.length;
      setTimeout(ajx, 9000); // chama a função novamente após 2 segundos
    }
  };

  ajax.open("GET", "../procedimentos/order.php"); // página a ser requisitada
  ajax.send(); // envia a requisição
}
ajx(); // chama a função

function imprimir(id) {
  console.log(id);
  window.open("../procedimentos/orderImpress.php?id=" + id);
  quantityOrder = 0;
  ajx();
}

function finalizeTable(id, status) {
  $.ajax({
    type: "GET",
    url: `../procedimentos/alterStatus.php?id=${id}&status=${status}`,
    success: function (response) {
      console.log(response);
      quantityOrder = 0;
      ajx();
    },
  });
  quantityOrder = 0;
  ajx();
}

function register() {
  let body = {
    login: document.getElementById("login").value,
    pass: document.getElementById("pass").value,
  };
  $.ajax({
    type: "POST",
    url: "../procedimentos/registerGarcons.php",
    data: body,
    success: function (r) {
      console.log(r);
      alert("Garçon, registrado com sucesso");
      cart = [];
      window.location.href = "index.php";
    },
  });
}

const alterStatus = (id, status) => {
  $.ajax({
    url: "../procedimentos/alterStatus.php?id=" + id + "&status=" + status,
    async: false,
    type: "get",
    dataType: "json",
  });
  quantityOrder = 0;
  ajx();
};
