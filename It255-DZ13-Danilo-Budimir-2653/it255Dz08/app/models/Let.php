<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;

class Let extends Model
{
    protected $table = "letovi";
    public $timestamps = false;
    protected $primaryKey = "let_id";


    protected $fillable =[
        "let_id", "mesto_polaska", "mesto_dolaska", "cena"
    ];

    public function korpa_letovi()
    {
        return $this->belongsTo(Korpa::class,'let_id');
    }


}
