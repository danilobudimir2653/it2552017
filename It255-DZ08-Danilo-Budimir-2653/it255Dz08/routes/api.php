<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



Route::get("/getC",["uses"=>"Register@getCountryes"]);
Route::post("/regUser",["uses"=>"Register@saveUser"]);
Route::get("/login",["uses"=>"Login@signIn" ]);
