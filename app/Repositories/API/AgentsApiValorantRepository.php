<?php

namespace App\Repositories\API;

class AgentsApiValorantRepository extends AbstractAPIRepository
{
    public static function allAgents()
    {
        // $endpoint = config('mercado_livre.api_url') . "/products/{$catalog_id}";
        $endpoint = config('valorant.api_url') . "/agents" . "?isPlayableCharacter=true";
        $result = self::httpJson()->get($endpoint);
        return $result->successful() ? $result->json()['data'] : null;  
    }
    public static function getAgent(string $agentUuid)
    {
      $endpoint = config('valorant.api_url') . "/agents/{$agentUuid}";
      $result = self::httpJson()->get($endpoint);
      return $result->successful() ? $result->json()['data'] : null;  
    }
   

}

