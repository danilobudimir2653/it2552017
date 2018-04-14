<?php

namespace App\Providers;

use App\models\Korpa;
use App\models\Let;
use App\models\User;
use Illuminate\Support\ServiceProvider;
use Illuminate\Database\Eloquent\Relations\Relation;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        /*Relation::morphMap([
            'user' => User::class,
            'let' => Let::class,

        ]);*/
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
