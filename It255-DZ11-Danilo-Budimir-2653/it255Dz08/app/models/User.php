<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    protected $table = "user";
    public $timestamps = false;
    protected $primaryKey = "user_id";
    protected $fillable = [
        'user_id','firstname','lastname','country_id','sex','mail','password'
    ];


    public function korpa_User()
    {
        return $this->belongsTo('App\models\Korpa');
    }
}
