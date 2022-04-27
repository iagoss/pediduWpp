const alterQuantyNumber = ()=>{
    let number = document.getElementById('number').value
    $.ajax({
        url: '../procedimentos/setTeables.php?number=' + number,
        type: 'get',
    })
    alertify.success('Numero de mesas alterado com sucesso !');
}