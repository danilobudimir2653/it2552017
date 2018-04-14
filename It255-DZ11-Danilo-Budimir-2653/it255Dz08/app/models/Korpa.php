<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;

class Korpa extends Model
{
    protected $table = "korpa_letovi";
    public $timestamps = false;
    protected $primaryKey = "korpa_id";

    protected $fillable=
        ["korpa_id","user_id","let_id"];


    public function users()
    {
        return $this->hasMany('App\models\User');
    }
    public function flyghts()
    {
        return $this->hasMany('App\modles\Let');
    }

}
