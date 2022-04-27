<?php
include_once '../classes/conn.php';

        function registerTables(){
            $c = new conectar();
            $conect = $c->conexao();

            $order = json_encode($_POST["order"] , JSON_UNESCAPED_UNICODE);
            $mesa = $_POST["mesa"];
            $timezone = new DateTimeZone('America/Sao_Paulo');
            date_default_timezone_set('America/Sao_Paulo');
            $today = date("Y-m-d H:i:s");    

            
            $sql = "INSERT INTO oders_table (table_num, order_json, status, date_order)
            
            VALUES ('$mesa', '$order', '0', '$today')";

            return   mysqli_query($conect, $sql);


        }

      registerTables();

      echo json_encode($_POST["order"]);

?>