
function alterValue(id, operation, max, nameAdittional, price, nameinputverify) {
    let valor = document.getElementById(id).value;
    let nameinputverifyCalc = document.getElementById(`add${nameinputverify}`)
    if (operation == "negative") {
      document.getElementById(id).value = Number(valor) - 1;
      nameinputverifyCalc.value = Number(nameinputverifyCalc.value) - 1
      if(document.getElementById(id).value < 0){
        document.getElementById(id).value = 0;
      }
        valorQuantity = additionaisSelected.find((additional) => additional.name === nameAdittional)
        valorQuantity.quantity = document.getElementById(`${id}`).value

        indiceArray = additionaisSelected.findIndex((additional) => additional.name === nameAdittional)
        if(valorQuantity.quantity <= 0){
          additionaisSelected.splice(Number(indiceArray), Number(indiceArray))

          console.log('REMOVIDO')
          if(additionaisSelected.length == 1){
            if(additionaisSelected[0].quantity <= 0){
              additionaisSelected = []
            }
          }
        }
  
    } else {
      document.getElementById(`${id}`).value = Number(valor) + 1;
      var verifiqyed = verifyLimit(id, max, nameinputverify);
      if(verifiqyed == true){
        additionaisSelected.push({
          name: nameAdittional,
          price: price,
          quantity: document.getElementById(`${id}`).value,
        });
        nameinputverifyCalc.value = Number(nameinputverifyCalc.value) + 1
        console.log(nameinputverifyCalc.value)
        if (additionaisSelected.find((additional) => additional.name === nameAdittional)) {
          var valorQuantity = additionaisSelected.find((additional) => additional.name === nameAdittional)
              console.log(valorQuantity.quantity = document.getElementById(`${id}`).value)
        }
        additionaisSelected = additionaisSelected.filter(function (a) {
          return !this[JSON.stringify(a.name)] && (this[JSON.stringify(a.name)] = true);
        }, Object.create(null));
      }else{
        //...
      }
     
    }
  }