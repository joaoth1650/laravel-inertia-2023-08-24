<?php

namespace App\Repositories\API;

class MapsApiValorantRepository extends AbstractAPIRepository
{
    public static function allMaps()
    {
        // $endpoint = config('mercado_livre.api_url') . "/products/{$catalog_id}";
        $endpoint = config('valorant.api_url') . "/maps";
        $result = self::httpJson()->get($endpoint);
        return $result->successful() ? $result->json()['data'] : null;  
    }
    public static function getMap(string $mapUuid)
    {
      $endpoint = config('valorant.api_url') . "/maps/{$mapUuid}";
      $result = self::httpJson()->get($endpoint);
      return $result->successful() ? $result->json()['data'] : null;  
    }
   

}

