function payamentMetodh(parm) {
    var payment = null;
    document.getElementById("mesas").style.display = "none";
    Swal.fire(
      "quantia que sera paga no " + parm + "?",
      '<input type="number"> ',
      "question"
    );
    Swal.fire({
      icon: "question",
      title: "quantia que sera paga no " + parm + "?",
      html: '<input type="number" class="form-control" id="payamentTypeValue">',
      showCancelButton: true,
      confirmButtonText: "Pagar",
      showLoaderOnConfirm: true,
      preConfirm: (value) => {
        document.getElementById("mesas").style.display = "block";
        payment = document.getElementById('payamentTypeValue').value;
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        if (Number(payment) < parseFloat(subvalueTotal).toFixed(2)) {
          result = Number.parseFloat(subvalueTotal).toFixed(2) - Number(payment);
          subvalueTotal = Number.parseFloat(result).toFixed(2);
          Swal.fire({
            title: "Atenção!",
            text: "Ainda faltam: " + subvalueTotal,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Okay",
          });
          
          typePayament.push({ type: parm, value: payment });
  
          document.getElementById("values").innerHTML += `
            <div id="${typePayament.length - 1}" class="value">
            <button type="button"  class="btn-close btn-danger" "></button>
                ${payment} - ${parm}
            </div>
            `;
          document.getElementById('acreesid').style.display = 'none'
          document.getElementById('descountid').style.display = 'none'
  
        } else if (Number(payment) == subvalueTotal) {
          result = Number.parseFloat(subvalueTotal).toFixed(2) - Number(payment);
          subvalueTotal = Number.parseFloat(result).toFixed(2);  
          const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
  
          swalWithBootstrapButtons.fire({
            title: 'Atenção?',
            text: "A conta foi fechada. o que você gostaria de fazer ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Encerrar!',          
            confirmButton2Text: "Okay 1",
            cancelButtonText: 'Cancelar!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {  
  
              swalWithBootstrapButtons.fire({
                title: 'Atenção?',
                text: "Qual ação você gostaria de realizar ?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Encerrar!',          
                confirmButton2Text: "Okay 1",
                cancelButtonText: 'Imprimir e Encerrar!',
                reverseButtons: true
              }).then((result) => {
                if (result.isConfirmed) {    
                  swalWithBootstrapButtons.fire(
                    'Sucesso !',
                    'A conta foi fechada.',
                    'success'
                  )
                  closeGraphcs()
                  closeTableStatusThen(mesa, '10')
                  acressVerify = false
                  discountVerify = false
                  ajx()
                } else if (
                  /* Read more about handling dismissals below */
                  result.dismiss === Swal.DismissReason.cancel
                ) {     
                  var payamentsForm = ``
                  typePayament.forEach(doc => {
                    console.log(doc)
                    payamentsForm += `<h3 style="margin: 0!important;" class="fontImpressGlobalty">${doc.type}: ${parseFloat(doc.value).toFixed(2)}</h3>`
                  })           
                  //mostrar o tipo de pagamento
                  htmlImpress += `
                  ${payamentsForm}
                  <h3 style="margin: 0!important;" class="fontImpressGlobalty"> Sub-total: ${parseFloat(valueTotal).toFixed(2)} R$<h3> 
                  <hr>
                `;
                  printOrder(htmlImpress);
                  swalWithBootstrapButtons.fire(
                    'Sucesso !',
                    'A conta foi fechada.',
                    'success'
                  )
                  closeGraphcs()
                  closeTableStatusThen(mesa, '10')
                  acressVerify = false
                  discountVerify = false
                  //closedTable(mesa, '10')
                  ajx()
                }
              })
              closeTableStatusThen(mesa, '10')
              acressVerify = false
              discountVerify = false
              ajx()
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              
  
            }
          })
  
  

  
          typePayament.push({ type: parm, value: payment });

          document.getElementById("values").innerHTML += `
          <div id="${typePayament.length - 1}" class="value">
              ${payment} - ${parm}
          </div>
            `;
          document.getElementById('acreesid').style.display = 'none'
          document.getElementById('descountid').style.display = 'none'

        } else {
          Swal.fire({
            title: "Ops!",
            text:
              "Esse valor parece ser maior do que o esperado. ainda faltam: " +
              subvalueTotal,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Okay",
          });
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        document.getElementById("mesas").style.display = "block";
      }
    });
  
    if (payment != null) {
    }
  }

  const removePayament = async (indiceid)=>{
    subvalueTotal = valueTotal
    typePayament = 0
  }
  