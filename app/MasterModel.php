<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class MasterModel extends Model
{
    public static function Configurations(){
        $query = DB::table('configurations')
            ->select('name', 'color', 'logo', 'description', 'opened', 'banner', 'informations', 'nav', 'whatsapp', 'delivery_time', 'withdraw_time', 'cancellable')
            ->get();

        foreach ($query as $config){
            //fidelity
            $fidelity = DB::table('fidelity_configs')->first();
            $config->fidelity = $fidelity;

            //relase
            $resale = DB::table('resale_config')->first();
            $config->resale = $resale;

            //coupon
            $coupon = DB::table('discount_coupon')
                ->select('name', 'price_min', 'discount_type', 'discount', 'final_date')
                ->where('show_page', 'true')
                ->where('status', 'active')
                ->get();

            foreach ($coupon as $data){
                if($data->final_date != NULL){
                    $data->final_date = date('d/m/Y', strtotime($data->final_date));
                }
            }

            $config->coupon = $coupon;
        }

        return $query;
    }

    public static function Regions(){
        return DB::table('delivery_regions')
            ->where('status', 'active')
            ->orderBy('name', 'asc')
            ->get();
    }

    public static function CardFlags(){
        return DB::table('delivery_cards')
            ->where('status', 'active')
            ->orderBy('name', 'asc')
            ->get();
    }

    public static function Deliverys(){
        return DB::table('delivery_methodos')
            ->where('status', 'active')
            ->orderBy('name', 'asc')
            ->get();
    }

    public static function Pix(){
        return DB::table('pix')
            ->get();
    }
}
