<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use JWTAuth;

class Login extends Controller
{
    public function signIn(Request $request)
    {


        $this->validate($request, [
            'mail' => 'required|email',
            'password' => 'required'
        ]);

        $credentials = $request->only('mail', 'password');


        try
        {
            if(!$token = JWTAuth::attempt($credentials))
            {
                return response()->json([
                    'error' => 'Nevalidni podaci!'
                ], 401);
            }
            else
            {
                $user=auth()->user();
            }
        }
        catch (JWTException $e)
        {
            return response()->json([
                'error' => 'Token nije dodeljen'
            ], 500);
        }
        return response()->json([
            'token' => $token,
            "name"=>$user->firstname,
            "lastname"=>$user->lastname
        ], 200);

    }


}
