
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        *{
            font-size: 10px; 
        }
    </style>
</head>
<body>
    <div id='order'>

    </div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>


<script>
    async function ajx(){
    var ajax = new XMLHttpRequest(); // cria o objeto XHR
    ajax.onreadystatechange = function(){
                // verifica quando o Ajax for completado
                if(ajax.readyState == 4 && ajax.status == 200){
                    
                    let order = ajax.responseText; // atualiza o span
                    let orderGet = $.parseJSON(order);

                   console.log(orderGet)

                
                    document.getElementById('order').innerHTML = '';
                    document.getElementById('order').innerHTML = `<h3 style="text-align:left; margin-bottom:10px;">Novos pedidos</h3>`;

                    orderGet.forEach(el => {

                        document.getElementById('order').innerHTML += `<div class="mesas"> <div class="numMesa"> <h3>Mesa Numero : ${el.numero_mesa} </h3> </div> <div>  </div> `

                            
                        cart = el.product
                        for(i=0;i<cart.length;i++){
                            var selecteds = '';
                            var adicionais = '';

                            if(cart[i].selected){
                                cart[i].selected.forEach((doc) =>{
                                    selecteds += `
                                        <p> <span style="color: green">  ${doc.selecionado} </span></p>
                                    `
                                })
                            }else{
                                console.log('pular')
                            }
                                if(typeof cart[i].additional ===  'undefined'){
                                    
                                }else{
                                    cart[i].additional.forEach(document =>{
                                            adicionais += `            
                                            <span  style="color:red">  ${document.quantity}x :  ${document.name} </span>
                                            
                                            `
                                        })
                                }                           
                                    
                                document.getElementById('order').innerHTML += `
                                    <div class='productInCart' >
                                        <div >
                                        <h4> ${cart[i].quantity}x : ${cart[i].product} </h4>
                                        ${selecteds}
                                        Adicionais: 
                                        <p>${adicionais}</p>
                                        <p style="margin: 0">OBS: ${cart[i].description}</p>
                                        <br>
                                        <p style="margin: 0"> R$: ${cart[i].price} </p>
                                        </div>   
                                    </div>                                
                                `                                
                            }

                            
                    });   
                                     

                
                quantityOrder = orderGet.length;
                    setTimeout(ajx, 9000); // chama a função novamente após 9 segundos
                }
            }

            ajax.open("GET", "./getProdImpres.php?id=<?php echo $_GET['id'] ?>"); // página a ser requisitada
            ajax.send(); // envia a requisição
            
    }
    ajx(); // chama a função
</script>
    
</body>
</html>