<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Kola;
use function MongoDB\BSON\toJSON;

class Cars extends Controller
{

    function getCars(Request $request)
    {
        if($request->input("model")==="bmw")
            return response()->json(Kola::$bmw);
        else if ($request->input("model")==="mercedes")
            return response()->json(Kola::$mercedes);
        else return response()->json(["err"=>"greska"]);

    }

    function setCars(Request $request)
    {
        if($request->input("auto")==="bmw")
        {

            array_push(Kola::$bmw, [$request->input('model'), $request->input('snaga'), $request->input('zapremina')]);

            return response()->json(["status"=>"success","arr"=>Kola::$bmw]);
        }
        else if ($request->input("auto")==="mercedes")
        {
            array_push(Kola::$mercedes, [$request->input('model'), $request->input('snaga'), $request->input('zapremina')]);
            return response()->json(["status"=>"success","arr"=>Kola::$mercedes]);

        }
        else return response()->json(["status"=>"eror]);





    }
}
