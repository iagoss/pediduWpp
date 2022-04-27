<?php 



    class conectar{
        private $servidor = "localhost";//endereço do Mysql
        private $usuario = "root";//login Para acessar o Mysql
        private $senha = "";//senha do Mysql
        private $bd = "delivery";//nome do banco para realizar a conexão

        private $servidorhost = "localhost";//endereço do Mysql
        private $usuariohost = "ambientpedidu_db";//login Para acessar o Mysql
        private $senhahost = "vBnhTiOx0C";//senha do Mysql
        private $bdhost = "ambientpedidu_db";//nome do banco para realizar a conexão

        public function conexao(){
          $conetar = ConexaoSin::getInstance();
          $conexao = $conetar->conect();
          return $conexao;   
        }

        
        public function conexaoPDO(){
            $pdo = new PDO('mysql:host=localhost,dbname=delivery', $this->usuario, $this->senha );
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }
    }
    class ConexaoSin
        {
            private static $instance;
            private  $serve;
            private  $login;
            private  $senha;
            private  $db;
            private  $temconexao = false;

            public  function conect(){
                if ($this->temconexao == false){
                    $this->setVars();
                }
                $conexao = mysqli_connect($this->serve,$this->login,$this->senha,$this->db);
                return $conexao;
            }
            public  function setVars(){
                include_once '../../admin/lib/config.php';
                $this->serve =  $conn_servidor;
                $this->login = $conn_usuario;
                $this->senha = $conn_senha;
                $this->db = $conn_db;
                $this->temconexao = True;
                
            }
            private function __construct()
            {
            }

            private function __clone()
            {
            }

            private function __wakeup()
            {
            }

            public static function getInstance()
            {
                if(self::$instance === null){
                    self::$instance = new self;
                }
                return self::$instance;
            }
        }   
?>