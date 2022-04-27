console.log('teste')
const impress = async (id)=>{
    const urlorder = "../procedimentos/indevgetorder.php?id=" + id;
    
    var orderGet = await(await fetch(urlorder)).json();

    orderGet.forEach(el => {
            
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
            `
            var valorFinalComanda = 0
            cart = el.product
            for(i=0;i<cart.length;i++){
                var selecteds = '';
                var adicionais = '';
                
                if(cart[i].selected){
                    cart[i].selected.forEach((doc) =>{        
                        selecteds += `
                            <p style="margin: 0!important"> <span  style="margin: 0!important">  ${doc.selecionado} </span></p>
                        `
                    })
                }else{
                    console.log('pular')
                }
                
                    if(typeof cart[i].additional ===  'undefined'){
                        
                    }else{
                        cart[i].additional.forEach(document =>{
                                adicionais += `            
                                <span style="margin: 0!important"> ${document.quantity}x - ${document.name} </span> <br>
                                
                                `
                            })
                    }                           
                                        
                    htmlImpress += `
                    <h3 style="margin: 0!important" class="fontImpressComand"> (${cart[i].quantity})  - ${cart[i].product} </h3>
                    <h3 style="margin: 0!important" class="fontImpressComand">${selecteds}</h3>
                    <h3 style="margin: 0!important" class="fontImpressComand">Adicionais: </h3>
                    <h3 style="margin: 0!important" class="fontImpressComand">${adicionais}</h3>
                    <h3 style="margin: 0!important" class="fontImpressComand">OBS: ${cart[i].description}</h3>
                    <h3 style="margin: 0!important" class="fontImpressComand"> R$: ${cart[i].price} </h3>

                    <br>
                    - - - - - - -- - - -- - - - - - - - - - - -  

                    <br><br>              
                
                `
                
                valorFinalComanda +=  Number(cart[i].price)

            }

            htmlImpress += `

                <h3 class="fontImpressComand"> Sub-total: ${parseFloat(valorFinalComanda).toFixed(2)} R$<h3> <br>
                - - - - - - -- - - -- - - - - - - - - - - -
            `

            if(true){
                printOrder(htmlImpress, el.id, '1');

            }
                
        });   
}





// console.log('teste')
// const impressAllTable = async (id)=>{
//     const urlorder = "../procedimentos/indevgetorderAlltable.php?id=" + id;
    
//     var orderGet = await(await fetch(urlorder)).json();

//     orderGet.forEach(el => {
            
//             var htmlImpress = `
//                 <center>
//                 <div style="width:80px; height:80px; border:1px solid black; background-color:black; border-radius: 50%;">
//                     <h1 style="margin: 0!important; color:white; padding-top: 20px;" > ${el.numero_mesa} </h1><br>
//                 </div>
//                     <h6 style="margin: 0!important;">
//                         Pedido numero: ${el.id} <br>
//                         ${el.hora}
//                     </h6>
//                 </center>  
//             `
//             var valorFinalComanda = 0
//             cart = el.product
//             for(i=0;i<cart.length;i++){
//                 var selecteds = '';
//                 var adicionais = '';
                
//                 if(cart[i].selected){
//                     cart[i].selected.forEach((doc) =>{        
//                         selecteds += `
//                             <p style="margin: 0!important"> <span  style="margin: 0!important">  ${doc.selecionado} </span></p>
//                         `
//                     })
//                 }else{
//                     console.log('pular')
//                 }
                
//                     if(typeof cart[i].additional ===  'undefined'){
                        
//                     }else{
//                         cart[i].additional.forEach(document =>{
//                                 adicionais += `            
//                                 <span style="margin: 0!important"> ${document.quantity}x - ${document.name} </span> <br>
                                
//                                 `
//                             })
//                     }                           
                                        
//                     htmlImpress += `
//                     <h3 style="margin: 0!important"> (${cart[i].quantity})  - ${cart[i].product} </h3>
//                     <h3 style="margin: 0!important">${selecteds}</h3>
//                     <h3 style="margin: 0!important">Adicionais: </h3>
//                     <h3 style="margin: 0!important">${adicionais}</h3>
//                     <h3 style="margin: 0!important">OBS: ${cart[i].description}</h3>
//                     <h3 style="margin: 0!important"> R$: ${cart[i].price} </h3>

//                     <br>
//                     - - - - - - -- - - -- - - - - - - - - - - -  

//                     <br><br>              
                
//                 `
                
//                 valorFinalComanda +=  Number(cart[i].price)

//             }

//             htmlImpress += `

//                 <h3> Sub-total: ${valorFinalComanda}<h3> <br>
//                 - - - - - - -- - - -- - - - - - - - - - - -
//             `

//             if(true){
//                 printOrder(htmlImpress, el.id, '1');

//             }
                
//         });   
// }




