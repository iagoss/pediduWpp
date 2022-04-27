

let letValues = []
const veirifyAditionalLimits = async (
    limitMin,
    limitMax,
    id,
    name,
    price,
    higthPrice,
    desc

  ) => {
    let checkbox = document.getElementsByClassName("checkbox");
    let limitBefore;
    salveCart.forEach((doc) => {
      if(doc.desc == desc){
        letValues.push(doc)

      }
    })
    console.log(letValues)

    if(document.getElementById(id).checked == true){
    if (salveCart.find((prod) => prod.desc == desc) && letValues.length == Number(document.getElementById(desc).value)) {
        alertSW('Atenção',"Você so pode selecionar " + limitMax + " deste item.", 'info');
        document.getElementById(id).checked = false;
        letValues = []
    }else{      
      salveCart.push({
        produto: name,
        selecionado: id,
        preco: price,
        higthPrice: higthPrice,
        quantity: 1,
        desc: desc        
      });     
      letValues = []
    }
    }else if(document.getElementById(id).checked == false){
      if (salveCart.find((prod) => prod.selecionado == id)) {
        if(salveCart.length == 1){
          salveCart = []
          if(salveCart[0].quantity <= 0){
            
          }
        }
        valueCartIndexSalve = salveCart.findIndex((prod) => prod.selecionado === id)
        console.log(valueCartIndexSalve)
        salveCart.splice(valueCartIndexSalve, valueCartIndexSalve)
      }
    }
   
    valorLimitVerify = valorLimitVerify + 1;
    marcado.push({ nomeProduto: name, limit: valorLimitVerify });
  
    if (marcado.find((prod) => prod.nomeProduto === name)) {
      if (marcado.find((limit) => limit.limit === Number(document.getElementById(desc).value))) {
        section = section + 1;
        window.location.href = "#section" + section;
      }
    }
  };
  
  const verifyLimit = (id, max, nameinputverify) => {
    var input = document.getElementById(`${id}`).value;
    let nameinputverifyCalc = document.getElementById(`add${nameinputverify}`)
    if (Number(nameinputverifyCalc.value)=== Number(max)) {
      alertSW('Atenção',"você não pode adicionar mais, já chegou no limite maximo.", 'info');
      document.getElementById(`${id}`).value = input - 1;
      return false
    }else{
      return true
    }
  };