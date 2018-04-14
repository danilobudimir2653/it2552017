<?php

namespace App\Http\Controllers;

use App\models\Let;
use Illuminate\Http\Request;

class LetController extends Controller
{
    function getFlights()
    {

        return response()->json(Let::all());
    }
}
