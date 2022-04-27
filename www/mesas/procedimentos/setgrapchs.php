<?php
include_once '../classes/conn.php';

        function registerTables(){
            $c = new conectar();
            $conect = $c->conexao();

            $graphics = json_encode($_POST["valueGraphcs"] , JSON_UNESCAPED_UNICODE);
            $timezone = new DateTimeZone('America/Sao_Paulo');
            date_default_timezone_set('America/Sao_Paulo');
            $today = date("Y-m-d H:i:s");    

            
            $sql = "INSERT INTO graphics (dados, data_pedido)
            
            VALUES ('$graphics', '$today')";

            echo   mysqli_query($conect, $sql);


        }

      registerTables();

?>