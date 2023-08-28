<?php

declare (strict_types = 1);
namespace App\Repositories\API;

use Illuminate\Http\Client\PendingRequest;
use Illuminate\Support\Facades\Http;

class AbstractAPIRepository
{
    public static function http(string $token = null): PendingRequest
    {
        $req = Http::timeout(5)->retry(2, 300, throw :false);
        return empty($token) ? $req : $req->withToken($token);
    }

    public static function httpJson(string $token = null): PendingRequest
    {
        return self::http($token)->acceptJson()->asJson();
    }
}
