<?php

namespace App\Http\Controllers;

use App\models\Country;
use App\models\User;
use Illuminate\Http\Request;

class Register extends Controller
{
    public function saveUser(Request $request)
    {
        $this->validate(
            $request,[
                'mail'=>'required|unique:user|email',
                'firstname'=>'required',
                'lastname'=>'required',
                'country_id'=>'required',
                'password'=>'required'
            ]
        );

        $user = new User([
            'firstname'=>$request->input('firstname'),
            'lastname'=>$request->input('lastname'),
            'mail'=>$request->input('mail'),
            'sex'=>$request->input('sex'),
            'country_id'=>$request->input('country_id'),
            'password'=>bcrypt($request->input('password'))
        ]);

        $user->save();

        return response()->json(['message'=>'uspesno ste se registrovali']);


    }

    public function getCountryes()
    {
        $countryes = Country::all();
        return response()->json($countryes);
    }
}
