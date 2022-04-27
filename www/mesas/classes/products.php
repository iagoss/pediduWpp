<?php 

    class Products
    {        
        private $products = [];
        private $productsInd = [];
        private $category = [];
        private $additional = [];
        private $additionalGet = [];
            public function getProducts($dados){
                $categoryId = $dados;
                if($categoryId == 0){                    
                    $c = new conectar();
                    $conect = $c->conexao();
                    $sql = "SELECT id, name, price, price_starting, additional, cat_id, status, status_table from products";
                    $result = mysqli_query($conect, $sql);
                    $json = file_get_contents('../painel/json/itensRemoved.json');
                    $filejson = json_decode($json);

                    while($row = mysqli_fetch_row($result)){
                        if($row[7] == 'ambos' || $row[7] == 'smesas' ){ # code...
                                array_push($this->products,  
                                [
                                'id_product' => $row[0],
                                'name' => utf8_encode($row[1]),
                                'price' => utf8_encode($row[2]),
                                'priceInitial' => utf8_encode($row[3]),
                                'additional' => utf8_encode($row[4]),                        
                                'cat_id' => utf8_encode($row[5]),
                                'status' => utf8_encode($row[7]),
                                ]);
                     }
                    }        

                }else{
                    $c = new conectar();
                    $conect = $c->conexao();
                    $sql = "SELECT id, name, price, price_starting, additional, cat_id, status, status_table from products WHERE cat_id = $categoryId";
                    $result = mysqli_query($conect, $sql);
                    while($row = mysqli_fetch_row($result)){
                        if($row[7] == 'ambos' || $row[7] == 'smesas' ){ # code...
                            array_push($this->products,  
                                [
                                'id_product' => $row[0],
                                'name' => utf8_encode($row[1]),
                                'price' => utf8_encode($row[2]),
                                'priceInitial' => utf8_encode($row[3]),
                                'additional' => utf8_encode($row[4]),
                                'cat_id' => utf8_encode($row[5]),
                                'status' => utf8_encode($row[7]),
                                ]);
                            }
                    }          
                }
                return json_encode($this->products);
            }
            public function getProductsalter(){
                $categoryId = 0;
                if($categoryId == 0){                    
                    $c = new conectar();
                    $conect = $c->conexao();
                    $sql = "SELECT id, name, price, price_starting, additional, cat_id, status, status_table from products";
                    $result = mysqli_query($conect, $sql);
                    $json = file_get_contents('../painel/json/itensRemoved.json');
                    $filejson = json_decode($json);

                    while($row = mysqli_fetch_row($result)){
                        if(true){ # code...
                                array_push($this->products,  
                                [
                                'id_product' => $row[0],
                                'name' => utf8_encode($row[1]),
                                'price' => utf8_encode($row[2]),
                                'priceInitial' => utf8_encode($row[3]),
                                'additional' => utf8_encode($row[4]),                        
                                'cat_id' => utf8_encode($row[5]),
                                'status' => utf8_encode($row[7]),
                                ]);
                     }
                    }        

                }
                return json_encode($this->products);
            }
            public function getCategoryProducts(){
                header('Content-Type: application/json');
                $c = new conectar();
                $conect = $c->conexao();
                $sql = "SELECT id, name from products_categories";
                $result = mysqli_query($conect, $sql);
                while($row = mysqli_fetch_row($result)){
                    array_push($this->category,  
                    [                        
                    'id_category' => $row[0],
                    'name' => utf8_encode($row[1]),
                    ]);
                }   
                $json = json_encode($this->category);
                return $json;
            }

            public function getProductInd($id){
                    $c = new conectar();
                    $conect = $c->conexao();
                    $sql = "SELECT id, name, price, price_starting, additional, cat_id from products WHERE id = $id";
                    $result = mysqli_query($conect, $sql);
                    
                    while($row = mysqli_fetch_row($result)){
                        if(empty($row[4])){
                            $this->additional = "Sem adicionais para este produto!";
                        }else{
                            $mystring = $row[4];
                            $arrayExplode = explode(',', $mystring);                  
                            $this->additional = $arrayExplode;
                        }
                    }
                    if($this->additional != 'Sem adicionais para este produto!'){
                        
                        $setParmadditional = array_filter($this->additional);
                        
                        for($i = 0; $i < count($setParmadditional); $i++){
                            array_push($this->additionalGet, self::getAdditional($setParmadditional[$i]));
                        }
                    }

                    return self::setModalProducts($id);
            }

            public function getAdditional($id){
                $c = new conectar();
                $conect = $c->conexao();
                $sql = "SELECT * from products_additional WHERE id = $id";
                $result = mysqli_query($conect, $sql);
                $arrayResult = [];
                while($row = mysqli_fetch_row($result)){
                    array_push($arrayResult, [
                        "name" =>utf8_encode($row[1]),
                        "description" => utf8_encode($row[2]),
                        "min" => utf8_encode($row[3]),
                        "max" => utf8_encode($row[4]),
                        "type" => utf8_encode($row[5]),
                        "higthPrice" => utf8_encode($row[6]),
                        "additional" => json_decode($row[7]),
                        "status" => utf8_encode($row[10])
                    ]);
                }

                return $arrayResult;
            }

            public function setModalProducts($id){
                $c = new conectar();
                $conect = $c->conexao();
                $sql = "SELECT id, name, price, price_starting, additional, cat_id from products WHERE id = $id";
                $result = mysqli_query($conect, $sql);
               
                while($row = mysqli_fetch_row($result)){
                    array_push($this->productsInd,  
                    [
                    'id_product' => utf8_encode($row[0]),
                    'name' => utf8_encode($row[1]),
                    'price' => utf8_encode($row[2]),
                    'priceInitial' => utf8_encode($row[3]),
                    'additional_info' => $this->additionalGet,
                    'cat_id' => utf8_encode($row[5])
                    ]);
                }
                return json_encode($this->productsInd);
            }
            public function alterStatusambos($id, $comand){
                $table_status = '';
                $status = '';
                if($comand == 'ambos'){
                    $table_status = 'ambos';
                    $status = 'active';
                }else if($comand =='smesa'){
                    $table_status = 'smesas';
                    $status = 'inactive';
                }else if($comand == 'sapp'){
                    $table_status = 'sapp';
                    $status = 'active';
                }else if($comand == 'D.ambos'){
                    $table_status = 'inactive';
                    $status = 'inactive';
                }
                $c = new conectar();
                $conect = $c->conexao();
                $sql =  "UPDATE products SET status= '$status', status_table = '$table_status' WHERE id = $id";
                $result = mysqli_query($conect, $sql);
                return $comand;
            }

    }
