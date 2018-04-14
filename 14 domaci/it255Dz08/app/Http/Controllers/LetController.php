<?php

namespace App\Http\Controllers;

use App\models\Korpa;
use App\models\Let;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\models\User;
use Illuminate\Database\Eloquent\Relations\Relation;


Relation::morphMap([
    'posts' => 'App\Post',
    'videos' => 'App\Video',
]);


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

    function getKorpa()
    {
        $user = JWTAuth::parseToken()->toUser();

        $flyghts = DB::select("Select public.korpa_letovi.korpa_id , public.letovi.mesto_polaska, public.letovi.mesto_dolaska,public.letovi.cena from public.user
                                JOIN public.korpa_letovi ON public.user.user_id = public.korpa_letovi.user_id 
                                JOIN public.letovi ON public.korpa_letovi.let_id = public.letovi.let_id
                                WHERE public.korpa_letovi.user_id = :id",['id'=>$user->user_id]);
       // $flyghts = Korpa::where('user_id',$user->user_id)->select('korpa_id','let_id')->with('flyghts')->get();

        return response()->json($flyghts);
    }

    function deleteKorpa(Request $request)
    {




        try{
            Korpa::destroy($request->input('korpaid'));
            return response()->json('uspesno obrisano, '.$request->input('korpaid'));
        }catch (\Exception $e )
        {
            return response()->json($e->getMessage());
        }


    }
}
