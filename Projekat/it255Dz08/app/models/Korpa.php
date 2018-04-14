<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;
use App\models\Let;

class Korpa extends Model
{
    protected $table = "korpa_letovi";
    public $timestamps = false;
    protected $primaryKey = "korpa_id";

    protected $fillable=
        ["korpa_id","user_id","let_id"];


    public function users()
    {
        return $this->belongsTo(User::class,'user_id','user_id','user');
    }
    public function flyghts()
    {
        return $this->belongsTo(Let::class,'let_id');
    }





}
