const url = "../procedimentos/getproducts.php";
const urlCategory = "../procedimentos/getcategory.php";
const urlProductsind = "../procedimentos/getproductInd.php";

var selected;
var salveCart = [];
var arrUnique = [];
var marcado = [];
var valorLimitVerify = 0;
var additionaisSelected = [];
var section = 0;
var prod = []
var typeOpens = []
var limitsMin = []
var limitsVerification = 0
cart = [];
cartReserve = [];
async function getCategorys() {
  let price;
  const response = await (await fetch(urlCategory)).json();
  response.forEach((doc, i) => {
    document.getElementById("categorys").innerHTML += `
            <div class="categorys" onclick="getProducts(${doc.id_category})"> 
              <h6> ${doc.name} <h6>
            </div>    
        `;
  });
}
getCategorys();

async function getProducts(parm) {
  if (parm > 0) {
    idCat = parm;
  } else {
    idCat = 0;
  }

  let price;
  document.getElementById("products").innerHTML = `
        `;

  const response = await (await fetch(url + "?id_cat=" + idCat)).json();
  prod = await (await fetch(url + "?id_cat=" + idCat)).json();
  response.forEach((doc, i) => {
    if (doc.price == 0) {
      price = doc.priceInitial;
    } else {
      price = doc.price;
    }

    document.getElementById("products").innerHTML += `
            <div data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="getModalProducts(${doc.id_product})" class="products" onclick="getProductsInd(${doc.id_product})"> 
                <h6> ${doc.name}</h6>
                <h6 style="margin-top:5px;color:rgb(122, 255, 155)"> R$ ${parseFloat(price).toFixed(2)}</h6>
            </div>
        `;
  });
}
getProducts();

const getModalProducts = async (parm) => {
  const response = await (await fetch(urlProductsind + "?id=" + parm)).json();
  document.getElementById("modalInfos").innerHTML = `
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel" id="title">${response[0].name}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onclick="resetVars()"></button>
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text bg-success" >
            <i class="bi  bi-search text-white"></i></span>
              <input type="text" class="form-control" placeholder="Pesquisar" id='fetchInputGetIndprod' onkeyup='getProductsModal(${parm})'>
        </div>
        <div class="modal-body" id="infos">

            <div id="additionais"> 
            
            </div>
        </div>
        <div class="divDesc">
        <h4>Observação:</h4>
            <textarea  id="descProd" placeholder="alguma descrição para este produto ?"></textarea>
        </div>
            
        <div class="modal-footer" id="footer">
            <button type="button" class="btn btn-secondary" onclick="resetVars()" data-bs-dismiss="modal">fechar</button>
            <button type="button" class="btn btn-success"  data-bs-dismiss="modal" onclick="cartNavigation('${response[0].name}', '${response[0].price}', '${typeOpens}')">Carrinho</button>
            <button type="button" class="btn btn-primary" onclick="salveCartFunc('${response[0].name}', '${response[0].price}', '${typeOpens}')"  data-bs-dismiss="modal">Adicionar</button>
        </div>
    `;
  var numIndices = 0;
  response[0].additional_info.forEach((doc, index) => {
    numIndices = index
    document.getElementById(`additionais`).innerHTML += `
          <div class="description" id="section${index}">
              <h6> <b name="">${doc[0].description}</b> </h6> 
              <div style="display:flex; width:80%;">
                <input disabled style="width:85px; background-color:transparent;" id="${doc[0].description}${index}" value="${doc[0].max}" /> 
                <input disabled style="width:85px; background-color:transparent;" id="add${doc[0].name}" value="0" />          
                <input disabled style="width:85px; background-color:transparent;" id="min${doc[0].description}" value="${doc[0].min}" />     
              </div>     
          </div>               
      `;
    if(document.getElementById(`min${doc[0].description}`).value > 0){
      limitsVerification = limitsVerification + 1;
    }
    for (i = 0; i < doc[0].additional.length; i++) {
      if (doc[0].type == "add") {
        var button = `
                        <div class="butonType">
                        <div class="buttonsNegative" onclick="alterValue('${doc[0].additional[i].name + doc[0].additional[i].order + index}', 'negative', '${doc[0].max}', '${doc[0].additional[i].name}', '${doc[0].additional[i].price}', '${doc[0].name}')">            
                        <span class="material-icons">
                            minimize
                        </span>
                        </div>
                        <div  class="valueAdittional">            
                            <input type="number"  max="" class="valueAdditional" id="${doc[0].additional[i].name + doc[0].additional[i].order + index}" disabled value="0"> 
                        </div>
                        <div class="buttonsPositive" onclick="alterValue('${doc[0].additional[i].name + doc[0].additional[i].order + index}', 'positive', '${doc[0].max}', '${doc[0].additional[i].name}', '${doc[0].additional[i].price}', '${doc[0].name}')">            
                            <h2>+</h2>
                        </div>
                        </div>        
                `;
                typeOpens.push(doc[0].type)
                limitsMin.push({limit: doc[0].min, name: doc[0].name})
      } else {
        var button = `                
                <div class="butonType">
                    <input type="checkbox" class="selectType checkbox" onclick="veirifyAditionalLimits('${doc[0].min}', '${doc[0].max}', '${doc[0].additional[i].name}', '${doc[0].name}', '${doc[0].additional[i].price}', '${doc[0].higthPrice}', '${doc[0].description}${index}')" id="${doc[0].additional[i].name}" value="${doc[0].additional[i].name}">
                </div>
            `;
            typeOpens.push(doc[0].type)
            limitsMin.push({limit: doc[0].min, name: doc[0].name})            
            
  }
    if(doc[0].additional[i].status == 'inactive'){

    }else{    
          document.getElementById(`additionais`).innerHTML += `
                    <div class="adittionaisSelect">
                        <div class="nameAdditionais">
                        <div> <h5> ${doc[0].additional[i].name} </h5></div>
                        <div class="text-sizing"> ${doc[0].additional[i].description} </div>
                        <div style="color: green;">R$  ${doc[0].additional[i].price} </div>
                        </div>                
                            ${button}
                    </div>
              `;
        }
    }
  });

};


function resetVars() {
  selected;
  salveCart = [];
  arrUnique = [];
  marcado = [];
  valorLimitVerify = 0;
  additionaisSelected = [];
  section = 0;
  prod = []
  typeOpens = []
  limitsVerification = 0
}




async function getProductsfetch() {
  let parm =  document.getElementById('fetchInput').value

  const response = await (await fetch(url + "?id_cat=" + 0)).json();

  
  document.getElementById('products').innerHTML = ''
  
  for (i=0;i<response.length;i++){    

  }
  response.forEach((doc, i) => {
    result = doc.name.toLowerCase().includes(parm.toLowerCase())
    if(result === true){
      if (doc.price == 0) {
        price = doc.priceInitial;
      } else {
        price = doc.price;
      }
  
      document.getElementById("products").innerHTML += `
              <div data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="getModalProducts(${doc.id_product})" class="products" onclick="getProductsInd(${doc.id_product})"> 
                  <h6> ${doc.name}</h6>
                  <h6 style="margin-top:5px;color:rgb(122, 255, 155)">Preço: ${parseFloat(price).toFixed(2)}</h6>
              </div>
          `;
    }
    
  });
}
function cartNavigation(name, price, type){
  salveCartFunc(name, price, type)
  $('#clickOpen').click()
}











