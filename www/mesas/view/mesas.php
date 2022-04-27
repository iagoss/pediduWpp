<?php
session_start();
if(isset($_SESSION['usuariogarcon'])){
    $user = $_SESSION['usuariogarcon'];
?>
    <?php include_once 'menu.php'; ?>
    <div class="containerMy" id="insert">
        
    </div>
</body>
    <script>
        var mesas = []


async function getTables(){
const urlTable = '../procedimentos/getmesa.php'
    mesas = await(
        await( 
            fetch(urlTable)
        )
    ).json()


    mesas = mesas.filter(function (a) {
        return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
    }, Object.create(null))

    
    let numTables = await(
        await( 
            fetch('../procedimentos/tablesnum.php')
        )
    ).json()

    let number = Number(numTables[0].quanti)

    mesas.forEach(function(nome, i) {

        })
        for (i=0; i < number; i++){
            document.getElementById('insert').innerHTML += `
                <div class="mesaNum" id="${i}" onclick='capturaMesa(${i + 1})'>
                        <h1>N* ${i + 1}</h1>
                </div>
            `
            mesas.map(function(doc){

                if(doc.status == '10'){
                    console.log(doc.status)
                }else{
                    if(doc.numero_mesa == i + 1){
                     document.getElementById(i).style.backgroundColor = '#B90A00';                    
                     document.getElementById(i).style.color = 'white';                  
                }
                }
                
            })
        }
}
getTables()

        
        function capturaMesa(elem){
            let url = 'cardapio.php?mesa=' + elem;
            window.location = url;
        }
    </script>
</html>

<?php 
}else{
	header("location:login.php");
}
?>