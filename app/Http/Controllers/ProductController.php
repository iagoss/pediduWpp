<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public static function show($request)    
    {
        $prod = Product::select('id', 'name', 'price', 'price_starting')->find($request);
        $products = [];
        foreach ($prod as  $item) {
            $products[$item->id] = $item;
        }
        return $products;
    }
}
