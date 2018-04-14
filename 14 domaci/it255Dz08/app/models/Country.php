<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    protected $table = "countryes";
    public $timestamps = false;
    protected $primaryKey = "country_id";

    protected $fillable =[

        'country_id','country_name'
    ];
}
