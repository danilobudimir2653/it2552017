<?php

namespace App\Http\Controllers;

use App\models\Korpa;
use App\models\Let;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;




class LetController extends Controller
{
    function getFlights()
    {

        return response()->json(Let::all());
    }

    function kupiLet(Request $request)
    {
        $user = JWTAuth::parseToken()->toUser();

        $korpa = new Korpa([
            "user_id"=>$user->user_id,
            "let_id"=>$request->input("let_id")

        ]);

        try{
            $korpa->save();
            return response()->json(["ok" => "uspelo"]);
        }catch (\Exception $e)
        {
            return response()->json(["eror"=>"greska"]);
        }




    }
}
