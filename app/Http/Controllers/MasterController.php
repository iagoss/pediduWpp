<?php

namespace App\Http\Controllers;

use App\MasterModel;
use Illuminate\Http\Request;

class MasterController extends Controller
{
    public static function Configurations(){
        return MasterModel::Configurations();
    }

    public static function Regions(){
        return MasterModel::Regions();
    }

    public static function CardFlags(){
        return MasterModel::CardFlags();
    }

    public static function Deliverys(){
        return MasterModel::Deliverys();
    }

    public static function Pix(){
        return MasterModel::Pix();
    }
}
