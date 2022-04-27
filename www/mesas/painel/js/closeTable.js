const closedTable = (parm)=>{
    $.ajax({
        url: "../procedimentos/deleteTable.php?tableNum=" + parm + "&status=6",
        async: false,
        type: "get",
        dataType: "json",
      });
      getTables()
}