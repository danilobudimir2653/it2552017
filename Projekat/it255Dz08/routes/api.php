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
Route::post("/login",["uses"=>"Login@signIn" ]);
Route::get("/getFlyghts",["uses"=>"LetController@getFlights" ]);

Route::post('/kupikartu', [
    'uses' => 'LetController@kupiLet',
    'middleware' => 'auth.jwt'
]);

Route::get('/getKorpa', [
    'uses' => 'LetController@getKorpa',
    'middleware' => 'auth.jwt'
]);

Route::delete('/deleteKorpa', [
    'uses' => 'LetController@deleteKorpa',
    'middleware' => 'auth.jwt'
]);





