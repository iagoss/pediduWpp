var valueProdtuctHigthPrice = 0;
var valueProductComplet = 0;
var resultMat = 0;
function calculationOpenModal() {
for (i = 0; i < cartReserve.length; i++) {
  cart[i].price = cartReserve[i].price;
}
verifypriceDuple = [];
for (i = 0; i < cart.length; i++) {
  cart[i].selected.forEach((doc, index) => {
    if (doc.higthPrice == "yes") {
      verifypriceDuple.push(doc);
    } else {
      valueProductComplet += Number(doc.preco);
    }
  });

  breakFor = verifypriceDuple.length;
  if (verifypriceDuple.length > 0) {
    for (y = 0; y <= verifypriceDuple.length; y++) {
      if (verifypriceDuple.length == 1) {
        resultMat = Number(verifypriceDuple[y].preco);
      }
      if (y == verifypriceDuple.length - 1) {
        break;
      }
      if (verifypriceDuple[y].produto == verifypriceDuple[y + 1].produto) {
        resultMat = Math.max(
          verifypriceDuple[y].preco,
          verifypriceDuple[y + 1].preco
        );
      }
    }
  }

  valueProdtuctHigthPrice = resultMat;
  valueProductComplet += valueProdtuctHigthPrice;

  cart[i].additional.forEach((docAddtional) => {
    const valorAdditionais =
      Number(docAddtional.price) * docAddtional.quantity;
    valueProductComplet += valorAdditionais;
  });

  valueProductComplet += Number(cart[i].price);

  cart[i].price = valueProductComplet;
  cart[i].priceCalc = valueProductComplet;
  verifypriceDuple = [];
  resultMat = 0;
  valueProdtuctHigthPrice = 0;
  valueProductComplet = 0;
}

cartOpen();
}