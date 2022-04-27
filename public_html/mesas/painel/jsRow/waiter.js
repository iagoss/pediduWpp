const getWaiter = async ()=>{
    document.getElementById('listWaiter').innerHTML = ``
    const urlGetWaiter = "../procedimentos/getWaiter.php";
    
    var orderGet = await(await fetch(urlGetWaiter)).json();
    console.log(orderGet)


    orderGet.forEach(element => {        
        document.getElementById('listWaiter').innerHTML += `
        <tr>
        <th scope="row">${element.id}</th>
        <td>${element.user}</td>
        <td><button class='btn btn-danger' onclick="deleteWaiter('${element.id}')">Excluir</button></td>
        </tr>

        `
    });

}

async  function deleteWaiter(id){
    await $.ajax({
        url: "../procedimentos/deleteWaiter.php?id=" + id,
        async: false,
        type: "get",
        dataType: "json",
      });
    alertify.success('Garçon ' + id + ' apagado com sucesso.');  
    getWaiter()
}