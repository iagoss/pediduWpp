<?php

use Illuminate\Support\Facades\Route;

Route::get('/configurations', 'MasterController@Configurations');
Route::get('/products', 'ProductsController@Products');
Route::get('/deliverys', 'MasterController@Deliverys');
Route::get('/regions', 'MasterController@Regions');
Route::get('/card_flags', 'MasterController@CardFlags');
Route::get('/pix', 'MasterController@Pix');

Route::post('/product', 'ProductsController@Product');

Route::post('/login', 'UserController@Login');
Route::post('/register', 'UserController@Register');
Route::post('/auth', 'UserController@Auth');
Route::post('/fidelity_coupon', 'UserController@FidelityCoupon')->middleware(['jwt.auth', 'sessions']);

Route::post('/coupon', 'ProductsController@Coupon')->middleware(['jwt.auth', 'sessions']);
Route::post('/buy', 'ProductsController@Buy')->middleware(['jwt.auth', 'sessions']);
Route::post('/order', 'ProductsController@Order')->middleware(['jwt.auth', 'sessions']);
Route::post('/order_cancell', 'ProductsController@OrderCancell')->middleware(['jwt.auth', 'sessions']);
Route::post('/order_list', 'ProductsController@OrderList')->middleware('jwt.auth');

Route::group(['prefix' => 'pdv'], function(){
    Route::post('/search_user', 'UserController@Search');
    Route::post('/buy', 'ProductsController@BuyPDV');
});

Route::get('/order/{id}', 'OrderController@show');