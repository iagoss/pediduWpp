
async function getProductsModal(parm){
    document.getElementById(`additionais`).innerHTML = ''
    const response = await (await fetch(urlProductsind + "?id=" + parm)).json();
    console.log(response)
    get = document.getElementById('fetchInputGetIndprod').value
  
    response[0].additional_info.forEach((doc, index) => {
      numIndices = index
        
      document.getElementById(`additionais`).innerHTML += `
              <div class="description" id="section${index}">
                  <h6> <b name="">${doc[0].description}</b> </h6> 
                  <input disabled id="${doc[0].name}" value="${doc[0].max}" />
                  <input disabled id="add${doc[0].name}" value="0" />              
              </div>               
          `;
      for (i = 0; i < doc[0].additional.length; i++) {
        result = doc[0].additional[i].name.toLowerCase().includes(get.toLowerCase())
        if(result === true){
          console.log(result)
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
                    console.log(doc[0].additional[i])
                  
          } else {
            var button = `                
                    <div class="butonType">
                        <input type="checkbox" class="selectType checkbox" onclick="veirifyAditionalLimits('${doc[0].min}', '${doc[0].max}', '${doc[0].additional[i].name}', '${doc[0].name}', '${doc[0].additional[i].price}', '${doc[0].higthPrice}')" id="${doc[0].additional[i].name}" value="${doc[0].additional[i].name}">
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
        
      }
    });
  }