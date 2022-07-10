<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\User as UserModel;
use Illuminate\Support\Facades\DB;

class UserController extends BaseController
{


    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    
    /**
     * @return \Illuminate\Http\JsonResponse|object
     */
    public function getUsers()
    {
        try {
            $Users = UserModel::get();
            return response()->json($Users)->setStatusCode(200);
        } catch (Exception $e) {
            return response()->json($Users)->setStatusCode(500);
        }
    }
}

// Test database connection
//        if(DB::connection()->getDatabaseName())
//        {
//            echo "conncted sucessfully to database ".DB::connection()->getDatabaseName();
//        }
