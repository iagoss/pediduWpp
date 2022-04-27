<?php

namespace App\Http\Controllers;

use App\User;
use App\UserModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Tymon\JWTAuth\Facades\JWTAuth;

class UserController extends Controller
{
    public static function Login(Request $request)
    {
        if (!isset($request->all()['phone']) || strlen($request->all()['phone']) < 9) {
            return json_encode(array('error' => array('message' => 'Preencha o seu número corretamente!')));
        }

        $phone = preg_replace('/[^0-9]/', '', $request->all()['phone']);
        $searchUser = User::where(['phone' => $phone])->get();

        // case exist user with this number, generate login token
        if (count($searchUser) > 0) {
            $user = User::where('phone', $phone)->first();
            JWTAuth::factory()->setTTL(10080);
            if (!$token = JWTAuth::fromUser($user, $user)) {
                return response()->json(['error' => array('message' => 'Token de acesso invalido, faça login novamente')], 401);
            }

            $user->fidelity = self::Fidelity($user->id);

            return response()->json([compact('token'), $user]);
        }

        // create user in database
        $user = User::create([
            'phone' => $phone,
        ]);

        JWTAuth::factory()->setTTL(10080);
        if (!$token = JWTAuth::fromUser($user, $user)) {
            return response()->json(['error' => array('message' => 'Token de acesso invalido, faça login novamente')], 401);
        }

        $user->fidelity = self::Fidelity($user->id);

        return response()->json([compact('token'), $user]);
    }

    public static function FidelityCoupon(Request $request)
    {
        $token = JWTAuth::getToken();
        $user = JWTAuth::setToken($token)->toUser();

        $points = DB::table('fidelity_points')
            ->where('user_id', $user->id)
            ->where('status', 'unsed')
            ->get();

        $config = DB::table('fidelity_configs')
            ->first();

        if (count($points) >= $config->total_orders) {
            $coupon = Str::random(6);

            DB::table('fidelity_points')
                ->where('user_id', $user->id)
                ->update(['status' => 'used']);

            DB::table('discount_coupon')
                ->insert([
                    'name' => $coupon,
                    'price_min' => $config->discount_min_order,
                    'multiple_usage' => 'no',
                    'usage_max' => 1,
                    'discount_type' => $config->discount_type,
                    'discount' => $config->discount_value,
                    'author' => $user->name,
                    'fidelity' => true
                ]);

            return array(
                'success' => array(
                    'message' => 'Você não possui pontos suficiente!',
                    'data' => array('coupon' => $coupon)
                )
            );
        } else {
            return array('error' => array('message' => 'Você não possui pontos suficiente!'));
        }
    }

    private static function Fidelity($id)
    {
        $points = DB::table('fidelity_points')
            ->where('user_id', $id)
            ->where('status', 'unsed')
            ->get();

        $configs = DB::table('fidelity_configs')->first();

        if (count($points) >= $configs->total_orders) {
            $generateCoupon = true;
        } else {
            $generateCoupon = false;
        }

        return array(
            'buttonStatus' => $generateCoupon,
            'totalPoints' => count($points)
        );
    }

    public static function Auth(Request $request)
    {
        $token = JWTAuth::getToken();
        $user = JWTAuth::setToken($token)->toUser();

        $user->fidelity = self::Fidelity($user->id);

        return response()->json([$request->all(), $user]);
    }

    public static  function Register(Request $request)
    {
        $data = $request->only('name', 'phone', 'address_region_id', 'address_name', 'address_number', 'address_reference');

        if (
            !isset($request->all()['phone']) || strlen($request->all()['phone']) < 9 ||
            !isset($request->all()['name']) || strlen($request->all()['name']) < 4 ||
            !isset($request->all()['address_region_id']) || strlen($request->all()['address_region_id']) < 1 ||
            !isset($request->all()['address_number']) || strlen($request->all()['address_number']) < 1 ||
            !isset($request->all()['address_name']) || strlen($request->all()['address_name']) < 5
        ) {
            return json_encode(array('error' => array('message' => 'Preencha todos os campos corretamente!')));
        }

        $phone = preg_replace('/[^0-9]/', '', $request->all()['phone']);
        $hasRegisted = User::where('phone', $phone)->get();
        if (count($hasRegisted) > 0) {
            return json_encode(array('error' => array('message' => 'Esse número já está cadastrado!')));
        }

        // create user in database
        $create = DB::table('users')->insert([
            'name' => $request->all()['name'],
            'phone' => $phone,
            'address_region_id' => $request->all()['address_region_id'],
            'address_number' => $request->all()['address_number'],
            'address_name' => $request->all()['address_name'],
            'address_reference' => $request->all()['address_reference'],
        ]);

        $user = User::where('phone', $phone)->first();

        JWTAuth::factory()->setTTL(10080);
        if (!$token = JWTAuth::fromUser($user, $user)) {
            return response()->json(['error' => array('message' => 'Erro ao gerar seu token de acesso')], 401);
        }

        $user->fidelity = self::Fidelity($user->id);
        return response()->json([compact('token'), $user]);
    }

    public static function Search(Request $request)
    {
        $phone = preg_replace('/[^0-9]/', '', $request->all()['phone']);
        return UserModel::Search($phone);
    }

    public static function getUser($id)
    {
        $user = User::find($id);
        return $user;
    }
}
