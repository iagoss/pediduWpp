
function alertMsg(icon, title, menssage ){
    Swal.fire({
      title: title,
      text: menssage,
      icon: icon,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Okay",
    });
  }
  
  
  function alertConfirmMsg(icon, title, menssage ){
    Swal.fire({
      icon: icon,
      title: title,
      text: menssage,
      showCancelButton: true,
      confirmButtonText: "Calcular",
      showLoaderOnConfirm: true,
  
    }).then((result) => {
      if (result.isConfirmed) {
        confirmVerifyDelete =  true
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        confirmVerifyDelete =  false
      }
    });
  }