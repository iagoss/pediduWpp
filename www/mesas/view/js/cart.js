var verifypriceDupleCart = [];

async function cartOpen() {
document.getElementById("cartProducts").innerHTML = ``;
  for (i = 0; i < cart.length; i++) {
    var selecteds = "";
    var adicionais = "";
    cart[i].selected.forEach((doc) => {
      selecteds += `
                <p><span style="color: green">  ${doc.selecionado} </span></p>
            `;
    });

    cart[i].additional.forEach((document) => {
      adicionais += `            
          <span style="color:red">  ${document.name} </span>
          quantidade:  ${document.quantity} </br>
          
      `;
    });

    document.getElementById("cartProducts").innerHTML += `
            <div class='productInCart' >
            <div >
            <h4>${cart[i].product} </h4>
            ${selecteds}
            Complementos: 
            <p>${adicionais}</p>
            <p style="margin: 0">OBS: ${cart[i].description}</p>
            <p style="margin: 0"> R$: ${parseFloat(cart[i].price).toFixed(2)} </p>
            </div>

            <div class="butonTypeCart">
                <div class="buttonsNegative" onclick="alterValueCartNumberProduct('${i}','negative', 'produtoCartNumber${i}')">            
                <span class="material-icons" >
                    minimize
                </span>
                </div>
                <div  class="valueAdittional">            
                    <input type="number" onclick="alterQuantityCart('${i}')" class="valueAdditional" id="produtoCartNumber${i}" disabled value="${cart[i].quantity}"> 
                </div>
                <div class="buttonsPositive" onclick="alterValueCartNumberProduct('${i}','positive', 'produtoCartNumber${i}')" >            
                    <h2>+</h2>
                </div>
            </div>                   
        </div>
    `;
  }
}