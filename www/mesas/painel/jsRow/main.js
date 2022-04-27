const audio = document.querySelector('audio');
var quantityOrder = 0;
async function ajx() {
  var ajax = new XMLHttpRequest(); // cria o objeto XHR
  ajax.onreadystatechange = function () {
    // verifica quando o Ajax for completado
    if (ajax.readyState == 4 && ajax.status == 200) {
      let order = ajax.responseText; // atualiza o span
      
      let orderGet = $.parseJSON(order);

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
        document.getElementById(
          "order3"
        ).innerHTML += `<button onclick="deleteOdersCanceleds()" style="padding:5px">Limpar Pedidos Cancelados </button>`;

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
                    </div> 
                `;

var htmlImpress = `
Mesa: ${el.numero_mesa}                          
Pedido numero: ${el.id}
${el.hora}
`;
            var valorFinalComanda = 0;
            cart = el.product;
            for (i = 0; i < cart.length; i++) {
              var selecteds = "";
              var adicionais = "";
              var adicionaisRaw = "";
              var selectedsRaw = "";
              if (cart[i].selected) {
                cart[i].selected.forEach((doc) => {
                  selecteds += `
                        <p style="margin: 0!important"> <span  style="margin: 0!important">  ${doc.selecionado} </span></p>
                    `;
                    selectedsRaw += `${doc.selecionado} \n`;
                });
              } else {
              }

              if (typeof cart[i].additional === "undefined") {
              } else {
                cart[i].additional.forEach((document) => {
                  adicionais += `            
                        <span style="margin: 0!important"> ${document.quantity}x - ${document.name} </span> <br>
                        
                        `;
                  adicionaisRaw += `${document.quantity}x - ${document.name} \n`;
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
                                        <p style="margin: 0!important"> Atendente: ${cart[i].waiter} </p> 

                                        </div>   
                                    </div>    
                                <div>
                                `;
htmlImpress += `\n(${cart[i].quantity})  - ${cart[i].product} 
${selectedsRaw}Adicionais:
${adicionaisRaw}
OBS:${cart[i].description}
R$: ${cart[i].price}\n
- - - - - - ----`;

              valorFinalComanda += Number(cart[i].price);
            }

htmlImpress += `
Sub-total: ${valorFinalComanda} 
- - - - - - ---- \n`;


            if (
              document.getElementById("flexSwitchCheckChecked").checked == true
            ) {
              printOrder(htmlImpress, el.id, "1");
              document.getElementById("order").innerHTML += `
                                <div >  
                                    <center> 
                                        <button  class="btn btn-warning"  onclick="impress('${el.id}')"> 
                                            imprimir
                                        </button>
                                        <button  class="btn btn-danger"  onclick="cancelStatus(${el.id})"> 
                                            Cancelar
                                        </button> 
                                    <center>
                                </div>
                                `;
                                audio.play();
                                audio.play();
            } else {
              document.getElementById("order").innerHTML += `
                                <div >  
                                    <center> 
                                        <button  class="btn btn-warning"  onclick="impress('${el.id}')"> 
                                            imprimir
                                        </button>
                                        <button  class="btn btn-danger"  onclick="cancelStatus(${el.id})"> 
                                            Cancelar
                                        </button> 
                                    <center>
                                </div>
                                `;
                                audio.play();
                                audio.play();
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
                                            <p style="margin: 0!important"> Atendente: ${cart[i].waiter} </p> 

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
                                        <button  class="btn btn-warning" onclick="impress('${el.id}')"> 
                                            imprimir
                                        </button>
                                        <button  class="btn btn-danger"  onclick="cancelStatus(${el.id})"> 
                                          Cancelar
                                        </button> 
                                    <center>
                                    </div>`;
          }
          if (el.status == "5") {
            document.getElementById("order3").innerHTML += `
                            <div class="mesas" style="display:flex; margin-top: 10px;"> 
                                <div class="numMesa"> 
                                    <h5 style="margin-top:10px;">Mesa Numero : ${el.numero_mesa} </h5> 
                                </div>  
                                <div class="numMesa" style=" margin: 0;">
                                    <p style=" margin: 0;">${el.hora}</p> 
                                    <h6 style=" margin: 0;"> Comanda: ${el.id} </h6> 
                                    <h5 style="color: red;">CENCELADO</h6>
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
                                        <div class='productInCart' style="margin: 0!important" >
                                            <div style="margin: 0!important">
                                            <h6 style="margin: 0!important"> ${cart[i].quantity}x : ${cart[i].product} </h6>
                                            ${selecteds}
                                            Adicionais: 
                                            <p style="margin: 0!important">${adicionais}</p>
                                            <p style="margin: 0!important">OBS: ${cart[i].description}</p>
                                            <p style="margin: 0!important"> R$: ${cart[i].price} </p>
                                            <p style="margin: 0!important"> Atendente: ${cart[i].waiter} </p> 
                                            </div>   
                                        </div>    
                                    <div>                            
                                    `;
            }
            document.getElementById("order3").innerHTML += `
                                    <div>
                                    <center> 
                                    <button  class="btn btn-danger"  onclick="deleteTable(${el.id})"> 
                                      Apagar
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
                                            <p style="margin: 0!important"> Atendente: ${cart[i].waiter} </p> 
                                            </div>   
                                        </div>    
                                    <div>                            
                                    `;
            }
            document.getElementById("order3").innerHTML += `
            <div>
                <center> 
                    <button  class="btn btn-danger"  onclick="deleteTable(${el.id})"> 
                      Apagar
                    </button> 
                <center>
            </div>`;
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
  window.open("../procedimentos/orderImpress.php?id=" + id);
  quantityOrder = 0;
  ajx();
}



async function register() {
  let body = {
    login: document.getElementById("login").value,
    pass: document.getElementById("pass").value,
  };
  $.ajax({
    type: "POST",
    url: "../procedimentos/registerGarcons.php",
    data: body,
    success: function (r) {
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

const cancelStatus = (id) => {
  $.ajax({
    url: "../procedimentos/alterStatus.php?id=" + id + "&status=5",
    async: false,
    type: "get",
    dataType: "json",
  });
  quantityOrder = 0;
  ajx();
};


async function finalizeTable(id, status) {
  $.ajax({
    url: `../procedimentos/alterStatus.php?id=${id}&status=${status}`,
    async: false,
    type: "get",
    dataType: "json",
  });
  quantityOrder = 0;
  ajx();
}


const deleteTable = async (id)=>{
  
 alertify.confirm('Tem certeza ?', "Tem certeza que deseja apagar ? Ao apagar o pedido ele não será somado ao fechar a mesa.",
  function(){
     $.ajax({
      url: "../procedimentos/calcelstatus.php?id=" + id,
      async: false,
      type: "get",
      dataType: "json",
    });
    alertify.success('Pedido ' + id + ' apagado com sucesso');

    quantityOrder = 0;
    ajx();
    confirmVerifyDelete == true
  },
  function(){
    alertify.error('O pedido não será apagado');
  }); 
  
}

const archive = async (id)=>{
    $.ajax({
      url: "../procedimentos/alterStatus.php?id=" + id + "&status=6",
      async: false,
      type: "get",
      dataType: "json",
    });
    quantityOrder = 0;
    ajx();
}