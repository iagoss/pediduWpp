<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class ProductsModel extends Model
{
    public static function Categories($id){
        $query = DB::table('products_categories')
            ->select('id', 'name', 'icon')
            ->orderBy('order_numb', 'ASC')
            ->where('status', 'active')
            ->where(function($query) {
                $query->where('time_ini', '<=', date('H:i'))
                ->where('time_end', '>=', date('H:i'));
            })
            ->where(function($query) use($id){
                if($id != 'all'){
                    $query->where('id', $id);
                }
            })
            ->get();
        // $query = DB::table('products_categories')
        //     ->select('id', 'name', 'icon')
        //     ->orderBy('order_numb', 'ASC')
        //     ->where('status', 'active')
        //     ->where('time_ini', '>=', date('H:i'))
        //     ->where('time_end', '>=', date('H:i'))
        //     ->where(function($query) use($id){
        //         if($id != 'all'){
        //             $query->where('id', $id);
        //         }
        //     })
        //     ->get();

        return $query;
    }

    public static function Products($id = 'all'){
        $categories = self::Categories($id);

        foreach ($categories as $category){
            $day = "%[".date('w')."]%";
            $products = DB::table('products')
                ->select('id', 'name', 'description', 'image', 'price', 'price_starting')
                ->where(function($query) {
                    $query->where('time_ini', '<=', date('H:i'))
                    ->where('time_end', '>=', date('H:i'));
                })
                ->where('cat_id', $category->id)
                ->where('status', 'active')
                ->where('dias', 'like', $day)
                ->orderBy('order_numb', 'ASC')
                ->orderBy('id', 'DESC')
                ->get();

            $category->products = $products;
        }

        return $categories;
    }

    public static function Product($id){
        $query = DB::table('products')
            ->where('id', $id)
            ->get();

        foreach ($query as $product){
            $additionals = array_filter(explode(',', $product->additional));
            $additionalArray = [];

            foreach ($additionals as $add){
                $additional = DB::table('products_additional')
                    ->where('id', $add)
                    ->get();

                foreach ($additional as $addd){
                    $addd->additional = json_decode($addd->additional);

                    $order = 0;
                    foreach ($addd->additional as $ad){
                        if(!isset($ad->order)){
                            $ad->order = $order;
                        }

                        if($addd->type == 'multiple'){
                            $ad->checked = false;
                        }else{
                            $ad->add = 0;
                        }

                        $order++;

                    }

                    usort($addd->additional, function($a, $b) {
                        return $a->order > $b->order ? 1 : -1;
                    });
                }


                $additionalArray[] = $additional[0];
            }

            $product->additional = $additionalArray;
        }

        return $query;
    }
}
