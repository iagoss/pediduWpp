<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class UserModel extends Model
{
    public static function Search($phone) {
        $query = DB::table('users')
            ->where('phone', $phone)
            ->get();

        if (count($query) < 1){
            return array('error' => array('message' => 'Usuário não encontrado'));
        }

        foreach ($query as $user) {
            if($user->address_region_id){
                $region = DB::table('delivery_regions')
                    ->where('id', $user->address_region_id)
                    ->first();

                $user->region_data = ['label' => $region->name, 'value' => $region->id];
            }
        }

        return $query;
    }
}
