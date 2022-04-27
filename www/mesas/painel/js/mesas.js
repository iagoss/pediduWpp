var valor = 0;
var desconto = 0;
var acressimo_waiter = {};
var acressimo = 0;
var valueTotal = 0;
var typePayament = [];
var subvalueTotal = 0;
var garcon = null;
var mesa = '';
var selected_id = '';
var htmlImpress = `` ;
var discountVerify = false
var acressVerify = false
var confirmVerifyDelete = false;


async function getTables() {
  
  document.getElementById("numbers").innerHTML = "";
  document.getElementById("count").innerHTML = ``;
  typePayament = [];
  var mesas;
  const urlTable = "../procedimentos/getMesadeleted.php";

  mesas = await (await fetch(urlTable)).json();

  mesas = mesas.filter(function (a) {
    return (
      !this[JSON.stringify(a.numero_mesa)] &&
      (this[JSON.stringify(a.numero_mesa)] = true)
    );
  }, Object.create(null));

  mesas.map(function (doc, i) {
    document.getElementById("numbers").innerHTML += `
    <button type="button" onclick="closeTable(${doc.numero_mesa})" class="btn btn-success tableNum" >
         N* ${doc.numero_mesa}
    </button>
    `;
  });
}

async function closeTable(num) {

  valueTotal = 0;
  document.getElementById("count").innerHTML = `
    <div id="comand">

    </div>
    `;

  const response = await (
    await fetch("../procedimentos/closeTable.php?table=" + num)
  ).json();
  document.getElementById("comand").innerHTML += `
    <h3 style="background-color:rgb(88, 255, 88); padding:10px">Mesa completa : ${num} </h3>
  `;
  
htmlImpress = `
<center>
    <h1 style="margin: 0!important; " class="fontImpressGlobalty"> ${response[0].numero_mesa} </h1><br>

    <h6 style="margin: 0!important; " class="fontImpressGlobalty">
        Pedido numero: ${response[0].id} <br>
    </h6> 
</center>  
`;
  mesa = num  
  response.map((doc, index) => {
    doc.product.forEach((el) => {
      convertTextInNumber = Number(el.price);
      if (doc.status == "5" || doc.status == "6"|| doc.status == "10") {
      } else {
        valueTotal += convertTextInNumber;
        valor += convertTextInNumber;
      }
    });
  });

  response.forEach((el) => {
    cart = el.product;

    if (el.status == "5" || el.status == "6"  ) {
      for (i = 0; i < cart.length; i++) {
        var selecteds = "";
        var adicionais = "";
        garcon = cart[i].waiter;

        document.getElementById("comand").innerHTML += `
                <div class='productInCartInner'>
                    <div class='productInCart' >
                        <div >
                        <h4> ${cart[i].product} </h4>
                        <div class='productInCartInner'>
                        Este Pedido foi cancelado e não sera somado.
                    <div>       
                    </div>    
                <div>                            
                `;
      }
      
    }else if(el.status == "10"){
      console.log('não somar')
    } else {
      for (i = 0; i < cart.length; i++) {
        var selecteds = "";
        var adicionais = "";
        garcon = cart[i].waiter;

        if (cart[i].selected) {
          cart[i].selected.forEach((doc) => {
            selecteds += `
              <p>${doc.produto}: <span style="color: green">  ${doc.selecionado} </span></p>
          `;
          });
        } else {
        }
        
        if (typeof cart[i].additional === "undefined") {
        } else {
          cart[i].additional.forEach((document) => {
            adicionais += `            
                            <span style="color:red">  ${document.name} </span>
                                quantidade:  ${document.quantity} </br>
                            
                            `;
          });
        }

        document.getElementById("comand").innerHTML += `
                <div class='productInCartInner'>
                    <div class='productInCart' >
                        <div >
                        <h4> ${cart[i].product} </h4>
                        ${selecteds}
                        Adicionais: 
                        <p>${adicionais}</p>
                        <p style="margin: 0">OBS: ${cart[i].description}</p>
                        <p style="margin: 0"> R$: ${cart[i].price} </p>
                        </div>   
                    </div>    
                <div>                            
                `;
                
                htmlImpress += `
                <h3 style="margin: 0!important; " class="fontImpressGlobalty"> (${cart[i].quantity})  - ${cart[i].product} </h3>
                <h3 style="margin: 0!important; " class="fontImpressGlobalty">${selecteds}</h3>
                <h3 style="margin: 0!important; " class="fontImpressGlobalty">Adicionais: </h3>
                <h3 style="margin: 0!important; " class="fontImpressGlobalty">${adicionais}</h3>
                <h3 style="margin: 0!important; " class="fontImpressGlobalty">OBS: ${cart[i].description}</h3>
                <h3 style="margin: 0!important; " class="fontImpressGlobalty"> R$: ${cart[i].price} </h3>

                <hr>
            
            `;
      }
      

    }
  });

  document.getElementById("count").innerHTML += `
        <div class="valueSub">
             Sub Total : ${parseFloat(valueTotal).toFixed(2)}<br>
             <button id="acreesid"   class="" onclick="discount_or_acress_in_payment('acress')" style="background-color: gray; color: white" >acréscimo</button>
             <button class=""  id="descountid"  onclick="discount_or_acress_in_payment('discount')" style="background-color: gray; color: white">Desconto</button>
             <br>
             <div id="total">             
                Total : ${parseFloat(valueTotal).toFixed(2)}<br>
             </div>
             <button class="" onclick="payamentMetodh('pix')" style="background-color: gray; color: white" >pix</button>
             <button class="" onclick="payamentMetodh('credito')" style="background-color: gray; color: white">credito</button>
             <button class="" onclick="payamentMetodh('debito')" style="background-color: gray; color: white">debito</button>
             <button class="" onclick="payamentMetodh('picpay')" style="background-color: gray; color: white">picpay</button>
             <button class="" onclick="payamentMetodh('dinheiro')" style="background-color: gray; color: white">dinheiro</button>
             <div id="values">

             </div>
        <div>
    `;

  subvalueTotal = parseFloat(valueTotal).toFixed(2);

}




function discount_or_acress_in_payment(type) {
  if (type == "discount") {

  if(discountVerify == false){
    discount = 0;

    document.getElementById("mesas").style.display = "none";

    Swal.fire({
      icon: "question",
      title: "Digite a quantia de desconto em porcentagem, por favor!",
      input: "text",
      inputAttributes: {
        autocapitalize: "true",
      },
      showCancelButton: true,
      confirmButtonText: "Calcular",
      showLoaderOnConfirm: true,
      preConfirm: (value) => {
        document.getElementById("mesas").style.display = "block";
        discount = value;
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        calc = Number(discount) / 100;
        value_discount = valueTotal * calc;
        desconto = value_discount;
        result = valueTotal - value_discount;
        valueTotal = Number.parseFloat(result).toFixed(2);
        subvalueTotal = parseFloat(valueTotal).toFixed(2);
        Swal.fire({
          title: "Muito bom!",
          text: "O valor foi alterado para " + valueTotal,
          icon: "success",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Okay",
        });

        document.getElementById("total").innerHTML = `
                        Total : ${valueTotal}<br>
                    `;
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        document.getElementById("mesas").style.display = "block";
      }
    });
    discountVerify = true

  }else{
    alertMsg('warning', 'atenção',  'Você so pode adicionar um desconto ou acréscimo uma vez!')
  }



  } else {
    if (acressVerify == false) {
    document.getElementById("mesas").style.display = "none";
    let acress = 0;
    Swal.fire({
      icon: "question",
      title: "Digite a quantia de acréscimo em porcentagem, por favor!",
      input: "text",
      inputAttributes: {
        autocapitalize: "true",
      },
      showCancelButton: true,
      confirmButtonText: "Calcular",
      showLoaderOnConfirm: true,
      preConfirm: (value) => {
        document.getElementById("mesas").style.display = "block";
        acress = value;
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        calc = Number(acress) / 100;
        value_acress = valueTotal * calc;
        acressimo = value_acress;
        result = valueTotal + value_acress;
        valueTotal = Number.parseFloat(result).toFixed(2);
        subvalueTotal = valueTotal;
        Swal.fire({
          title: "Muito bom!",
          text: "O valor foi alterado para " + valueTotal,
          icon: "success",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Okay",
        });

        document.getElementById("total").innerHTML = `
                    Total : ${valueTotal}<br>
                `;
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        document.getElementById("mesas").style.display = "block";
      }
    });
    acressVerify = true
  }else{
    alertMsg('warning', 'atenção',  'Você so pode adicionar um desconto ou acréscimo uma vez!')
    }
  }
}

function table_close() {
  acressimo_waiter = { waiter: garcon, value: acressimo };
  let data = {
    value: valor,
    discount: desconto,
    acress: acressimo,
    waiter: garcon,
    acressimo_waiter: acressimo_waiter,
    typePayament: typePayament,
  };
}


const closeTableStatusThen = (num, status)=>{
  $.ajax({
    url: "../procedimentos/alterStatusFor.php?id=" + num + "&status=" + status,
    async: false,
    type: "get",
    dataType: "json",
  });
  quantityOrder = 0;
  ajx();
  acressVerify = false
  discountVerify = false
}


const deleteOdersCanceleds = ()=>{
  $.ajax({
    url: "../procedimentos/deleteTableStatusfive.php",
    type: 'get'
  })
  quantityOrder = 0;
  ajx();
}



function closeGraphcs(){
  var payamentSalve = {
    subtotal: parseFloat(valueTotal).toFixed(2),
    discount: desconto,
    typePayament: typePayament,
  };
  body = {
    valueGraphcs: payamentSalve,
  }
  $.ajax({
    type: "POST",
    url: "../procedimentos/setgrapchs.php",
    data: body,
    success: function (r) {
      console.log(r);
      //window.location.href = "index.php";
    },
  });
}


function imprimirCount(){
    htmlImpress += `
    <h3 style="margin: 0!important;" class="fontImpressGlobalty"> Sub-total: ${parseFloat(valueTotal).toFixed(2)}<h3> 
    <hr>
  `;
  printOrder(htmlImpress);
}