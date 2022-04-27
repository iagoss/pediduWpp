console.log('teste')
const impress = async (id)=>{
    const urlorder = "../procedimentos/indevgetorder.php?id=" + id;
    
    var orderGet = await(await fetch(urlorder)).json();

    orderGet.forEach(el => {
            
var htmlImpress = `
Mesa ${el.numero_mesa}                    
Comanda: ${el.id} 
${el.hora}\n
`
            var valorFinalComanda = 0
            cart = el.product
            for(i=0;i<cart.length;i++){
                var selecteds = '';
                var adicionais = '';
                
                if(cart[i].selected){
                    cart[i].selected.forEach((doc) =>{        
                        selecteds += `${doc.selecionado}\n`
                    })
                }else{
                    console.log('pular')
                }
                
                    if(typeof cart[i].additional ===  'undefined'){
                        
                    }else{
                        cart[i].additional.forEach(document =>{
                                adicionais += `${document.quantity}x - ${document.name}\n`
                            })
                    }                           
                                        
htmlImpress +=`(${cart[i].quantity})-${cart[i].product}`
htmlImpress += `
${selecteds}Adicionais: 
${adicionais}OBS: ${cart[i].description}
R$: ${cart[i].price}
- - - - - - ----
`
                
                valorFinalComanda +=  Number(cart[i].price)

            }

htmlImpress +=`Sub-total: ${valorFinalComanda}\n
- - - - - - ----\n
`

            if(true){
                printOrder(htmlImpress, el.id, '1');
            }
                
        });   
}