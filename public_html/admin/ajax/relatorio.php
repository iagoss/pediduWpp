<?php

include_once("../lib/config.php");
include_once("../lib/functions.php");

if(isset($_POST['data_ini']))
{
    $dados = array();
    $data_ini = $_POST['data_ini'] == 0 ? date('Y-m-d H:i:s', strtotime('-1 day')) : date('Y-m-d H:i:s', strtotime(str_replace('T', ' ', $_POST['data_ini'])));
    $data_end = $_POST['data_end'] == 0 ?  date('Y-m-d H:i:s') : date('Y-m-d H:i:s', strtotime(str_replace('T', ' ', $_POST['data_end'])));
    
    $dados['data_ini'] = date('d/m/Y H:i', strtotime($data_ini));
    $dados['data_end'] = date('d/m/Y H:i', strtotime($data_end));
    
    $sql = $conn->prepare("SELECT * FROM orders WHERE (created_at BETWEEN ? AND ?) AND status != 'cancelled'  ORDER BY product_price ASC");
    $sql->bindValue(1, $data_ini);
    $sql->bindValue(2, $data_end);
    $sql->execute();
    
    
    $dados['quant_order']['retirado'] = $dados['quant_order']['delivery'] = $dados['valor_order']['retirado'] = $dados['valor_order']['delivery'] = 0;
    while($row = $sql->fetch())
    {
        $tipoOrder = $row['delivery_option'] == 1 ? 'delivery' : 'retirado';
        //CONTAR PEDIDOS E ASSOCIAR A CADA TIPO (DELIVERY E RETIRADO)
        $dados['quant_order'][$tipoOrder]++;
        //SOMAR VALORES E ASSOCIAR A CADA TIPO (DELIVERY E RETIRADO);
        $dados['valor_order'][$tipoOrder] = $dados['valor_order'][$tipoOrder] + $row['product_price'];
        //SOMAR VALORES DAS ENTREGAS
        $dados['valor_order']['frete'] = $dados['valor_order']['frete'] + $row['delivery_price'];
        //SOMAR QUANTIDADE DE PEDIDOS POR CLIENTE
        $count_pedidos_clientes[$row['id_user']]++;
        
        $user = $conn->query("SELECT address_region_id FROM users WHERE id={$row['id_user']} LIMIT 1")->fetch();
        //SOMAR QUANTIDADE DE PEDIDOS POR REGIÃO
        !empty($user['address_region_id']) ? $count_pedidos_regiao[$user['address_region_id']]++ : '';
        
        //DECODIFICAR JSON DOS PEDIDOS
        $pedidos[] = json_decode($row['purchase'], true);
    }
    arsort($count_pedidos_clientes);
    arsort($count_pedidos_regiao);
    $i=0;
    //PERCORRER ARRAY USUARIO E LISTAR INFORMAÇÕES
    foreach($count_pedidos_clientes as $key => $val)
    {
        $cliente = $conn->query("SELECT * FROM users WHERE id = {$key}")->fetch();
        $dados['clientes'][$i]['quant_pedidos'] = $val;
        $dados['clientes'][$i]['nome'] = $cliente['name'] == NULL ? 'Sem nome' : $cliente['name'];
        $dados['clientes'][$i]['phone'] = $cliente['phone'];
        $dados['clientes'][$i]['data_cadastro'] = date('d/m/Y', strtotime($cliente['created_at']));
        $dados['clientes'][$i]['endereco'] = $cliente['address_name'].(!empty($cliente['address_number']) ? ' Nº '.$cliente['address_number'] : 'S/N');
        $i++;
    }
    
    //PERCORRER ARRAY REGIAO E LISTAR INFORMAÇÕES
    $i=0;
    foreach($count_pedidos_regiao as $key => $val)
    {
        $regiao = $conn->query("SELECT * FROM delivery_regions WHERE id = {$key}")->fetch();
        $dados['regiao'][$i]['quant_pedidos'] = $val;
        $dados['regiao'][$i]['nome'] = $regiao['name'];
        $i++;
    }
    
    //PERCORRER ARRAY PEDIDOS
    foreach($pedidos as $key => $arr)
    {
        foreach($arr as $produto)
        {   
            $prod = $conn->query("SELECT cat_id FROM products WHERE id = {$produto['product_id']}")->fetch();
            $count_categorias[$prod['cat_id']]++;
            // CONTAR PRODUTOS POR ID;
            $count_produtos[$produto['product_id']] = $count_produtos[$produto['product_id']] + $produto['product_quantity'];
            foreach($produto['additional'] as $adicionais)
            {
                $count_adicionais[$produto['product_id']][$adicionais['name']] = $count_adicionais[$produto['product_id']][$adicionais['name']] + $adicionais['qty'];
            }
        }
    }
    
    arsort($count_produtos);
    arsort($count_categorias);
    
    $j = 0;
    foreach($count_produtos as $key => $arr)
    {
        $prod = $conn->query("SELECT name,cat_id FROM products WHERE id = {$key}")->fetch();
        $ar_pedidos[$prod['cat_id']][$j]['product_id'] = $key;
        $ar_pedidos[$prod['cat_id']][$j]['quant_produtos'] = $arr;
        $ar_pedidos[$prod['cat_id']][$j]['nome'] = $prod['name'];
        
        
        arsort($count_adicionais[$key]);
        $k = 0;
        foreach($count_adicionais[$key] as $nome_adicional => $quant_adicional)
        {
            
            $ar_pedidos[$prod['cat_id']][$j]['adicionais'][$k]['nome'] = $nome_adicional;
            $ar_pedidos[$prod['cat_id']][$j]['adicionais'][$k]['quant_adicional'] = $quant_adicional;
            $k++;
        }
        
        $j++;
    }
    
    $i = 0;
    foreach($count_categorias as $cat_id => $quant_cat)
    {
        $cat = $conn->query("SELECT name FROM products_categories WHERE id = {$cat_id}")->fetch();
        $dados['categorias'][$i]['cat_nome'] = $cat['name'];
        $dados['categorias'][$i]['quant_cat'] = $quant_cat;
        $dados['categorias'][$i]['pedidos'] = $ar_pedidos[$cat_id];
        $i++;
    }
        
    
    echo json_encode($dados);
}
