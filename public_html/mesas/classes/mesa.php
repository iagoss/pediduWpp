<?php 

    class Mesas
    {        
        private $mesa = [];
        private $order = [];
            public function getMesas(){             
                    $c = new conectar();
                    $conect = $c->conexao();
                    $sql = "SELECT table_num, status, date_order from oders_table";
                    $result = mysqli_query($conect, $sql);
                    while($row = mysqli_fetch_row($result)){
                        array_push($this->mesa,  
                        [
                        'numero_mesa' => $row[0],
                        'status' => $row[1],
                        'date' => $row[2]
                        ]);
                    }                   
    
                return json_encode($this->mesa);
            }

            public function getMesasDeleted(){             
                    $c = new conectar();
                    $conect = $c->conexao();
                    $sql = "SELECT table_num, status, date_order from oders_table";
                    $result = mysqli_query($conect, $sql);
                    while($row = mysqli_fetch_row($result)){
                        if($row[1] == '10'){

                        }else{
                            array_push($this->mesa,  
                            [
                            'numero_mesa' => $row[0],
                            'status' => $row[1],
                            'date' => $row[2]
                            ]);
                        }
                    }                   

                return json_encode($this->mesa);
            }
            public function registerTables($mesa, $order){
                $c = new conectar();
                $conect = $c->conexao();
        
                    $sql = "INSERT INTO oders_table (table_num, order_json )
                    
                    VALUES ('$mesa', '$order')";
        
                return   mysqli_query($conect, $sql);
            }

            public function graphcs(){             
                $c = new conectar();
                $conect = $c->conexao();
                $sql = "SELECT * from graphics";
                $result = mysqli_query($conect, $sql);
                while($row = mysqli_fetch_row($result)){
                    array_push($this->order,  
                    [
                    'id' => $row[0],
                    'dados' => json_decode($row[1]),
                    'date' => $row[2],
                    ]);
                }                   

                return html_entity_decode( json_encode( $this->order ) );
            }
            public function getOrder(){             
                $c = new conectar();
                $conect = $c->conexao();
                $sql = "SELECT * from oders_table";
                $result = mysqli_query($conect, $sql);
                while($row = mysqli_fetch_row($result)){
                    array_push($this->order,  
                    [
                    'id' => $row[0],
                    'numero_mesa' => $row[1],
                    'product' => json_decode($row[2]),
                    'status' => $row[3],
                    'hora' => $row[4]

                    ]);
                }                   

            return html_entity_decode( json_encode( $this->order ) );
        }

        public function getOrderindVid($id){             
            $c = new conectar();
            $conect = $c->conexao();
            $sql = "SELECT * from oders_table WHERE id = '$id'";
            $result = mysqli_query($conect, $sql);
            while($row = mysqli_fetch_row($result)){
                array_push($this->order,  
                [
                'id' => $row[0],
                'numero_mesa' => $row[1],
                'product' => json_decode($row[2]),
                'status' => $row[3],
                'hora' => $row[4]
                ]);
            }                   

        return html_entity_decode( json_encode( $this->order ) );
    }

    public function getOrderind($id){             
            $c = new conectar();
            $conect = $c->conexao();
            $sql = "SELECT * from oders_table WHERE id = '$id'";
            $result = mysqli_query($conect, $sql);
            while($row = mysqli_fetch_row($result)){
                array_push($this->order,  
                [
                'id' => $row[0],
                'numero_mesa' => $row[1],
                'product' => json_decode($row[2]),
                'status' => $row[3],
                ]);
            }           
            self::alterStatus($id, '1');

        return html_entity_decode( json_encode( $this->order ) );
    }


    public function closeTable($num){             
        $c = new conectar();
        $conect = $c->conexao();
        $sql = "SELECT * from oders_table WHERE table_num = '$num'";
        $result = mysqli_query($conect, $sql);
        while($row = mysqli_fetch_row($result)){
            array_push($this->order,  
            [
            'id' => $row[0],
            'numero_mesa' => $row[1],
            'product' => json_decode($row[2]),
            'status' => $row[3],
            ]);
        }                   

    return html_entity_decode( json_encode( $this->order ) );
}

    public function alterStatus($id, $status){
        $c = new conectar();
        $conect = $c->conexao();
        $sql =  "UPDATE oders_table SET status = '$status' WHERE id = '$id'";

        mysqli_query($conect, $sql);
    }

    
    public function alterStatusFor($num, $status){
        $c = new conectar();
        $conect = $c->conexao();
        $sql =  "UPDATE oders_table SET status = '$status' WHERE table_num = '$num'";

        mysqli_query($conect, $sql);
    }

    public function cancelStatus($id){
        $c = new conectar();
        $conect = $c->conexao();
        $sql =  "DELETE FROM oders_table WHERE id = '$id'";


        $result = mysqli_query($conect, $sql);

        echo $result;
    }

    //DELETA TODAS AS MESAS COM O NUMERO CORRESPODENTE
    public function TableCloseAll($tableNum){ 
        $c = new conectar();
        $conect = $c->conexao();
        $sql =  "DELETE FROM oders_table WHERE table_num = '$tableNum'";


        $result = mysqli_query($conect, $sql);

        echo $result;
    }
   

    public function tablesNum(){             
        $c = new conectar();
        $conect = $c->conexao();
        $sql = "SELECT * from tables";
        $result = mysqli_query($conect, $sql);
        $numbers = [];
        while($row = mysqli_fetch_row($result)){
            array_push($numbers,  
            [
                'id'=> $row[0],
                'quanti' => $row[1],
            ]);
        }                   

        return json_encode($numbers);
    }

//Altera o numero de mesas ebertas no restaurante
public function tablesNumRegister($number){             
    $c = new conectar();
    $conect = $c->conexao();
    $sql = "UPDATE tables SET number = '$number' WHERE id = '1'";
    $result = mysqli_query($conect, $sql);
    if($result > 0){
        echo 'Sucesso';
    }else{
        echo 'Algum erro ocorreu Contate o desenvolvedor @MARCOSMACHADO! ';
    }
}

public function deleteTableStatusfive(){
    $c = new conectar();
    $conect = $c->conexao();
    $sql = "DELETE FROM oders_table WHERE status = '5'";
    $result = mysqli_query($conect, $sql);
    echo $result;
}

}