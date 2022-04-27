<?php

include_once("../lib/config.php");
include_once("../lib/functions.php");
    if($_POST['sort']) {
        $a = 1;
        foreach($_POST['sort'] as $key => $val){
            $val = (int) $val;
            $sql = $conn->prepare("UPDATE products SET order_numb = ? WHERE id = ?");
            $sql->execute(array($a, $val));
            $a++;
            
        }
        
        echo json_encode(array('success'=>'success'));
        
    }
?>