<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::factory()
            ->times(50)
            ->create();

//        User::factory()
//            ->count(50)
//            ->create();

//        DB::table('users')->insert([
//            'first_name' => Str::random(10),
//            'last_name'=> Str::random(10),
//            'email' => Str::random(10).'@gmail.com',
//        ]);

    }
}
