<?php 

class User
{

    public function login($login, $senha){
        $c = new conectar();
        $conect = $c->conexao();
        $sql = "SELECT 	user, pass from garcons";
        $result = mysqli_query($conect, $sql);
        $logado = false;
        while($row = mysqli_fetch_row($result)){
            if(strtoupper($row[0]) == strtoupper($login)){
                if($row[1] == $senha){
                    $logado = true;
                }
            }
        } 

        if($logado == true){
            $_SESSION['usuariogarcon'] = $login;
            return '1';
        }else{
            echo 'Nenhum usuario registrado.';
        }

    }

    public function loginPainel($login, $senha){
        $c = new conectar();
        $conect = $c->conexao();
        $sql = "SELECT 	nick, senha from acp_usuarios";
        $result = mysqli_query($conect, $sql);
        $logado = false;
        while($row = mysqli_fetch_row($result)){
            if(strtoupper($row[0]) == strtoupper($login)){
                if($row[1] == md5($senha)){
                    $logado = true;
                }
            }
        } 

        if($logado == true){
            $_SESSION['usuarioPainel'] = $login;
            return '1';
        }else{
            echo 'Nenhum usuario registrado.';
        }

    }
    

    public function register($login, $senha){
        $c = new conectar();
        $conect = $c->conexao();

            $sql = "INSERT INTO garcons (user, pass )
            
            VALUES ('$login', '$senha')";

        return   mysqli_query($conect, $sql);
    }


    public function getWaiter(){             
        $c = new conectar();
        $conect = $c->conexao();
        $sql = "SELECT * from garcons";
        $result = mysqli_query($conect, $sql);
        $user = [];
        while($row = mysqli_fetch_row($result)){
            array_push($user,  
            [
            'id' => $row[0],
            'user' => $row[1]
            ]);
        }                   

    return json_encode($user);

    
}

public function deleteWaiter($id){
    $c = new conectar();
    $conect = $c->conexao();
    $sql =  "DELETE FROM garcons WHERE id = '$id'";


    $result = mysqli_query($conect, $sql);

    echo $result;
}
}


?>