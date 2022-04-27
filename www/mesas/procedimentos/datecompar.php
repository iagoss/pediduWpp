<?php
include_once '../classes/conn.php';
    function  getForDate(){
        $c = new conectar();
        $conect = $c->conexao();
        $order = [];
        $initialDate = $_GET['init'];
        $finalDate = $_GET['final'];
        $sql = "SELECT * from graphics WHERE data_pedido >=  '$initialDate' AND data_pedido < '$finalDate'" ;
        $result = mysqli_query($conect, $sql);
        while($row = mysqli_fetch_row($result)){
            array_push($order,  
            [
            'id' => $row[0],
            'dados' => json_decode($row[1]),
            'date' => $row[2],
            ]);
        } 
        
        return   html_entity_decode( json_encode( $order ) );
    }
           
    echo getForDate()

?>














