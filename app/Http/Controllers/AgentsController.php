<?php

namespace App\Http\Controllers;

use App\Repositories\API\AgentsApiValorantRepository;
use Inertia\Inertia;


class AgentsController extends Controller
{
    public function agentSingle($agentUuid)
    {
      $result = AgentsApiValorantRepository::getAgent($agentUuid);
      return Inertia::render('Agent', [
        'agent' => $result
      ]);
    } 
    public function allAgents(){
      $result = AgentsApiValorantRepository::allAgents();

      return Inertia::render('Agents', [
        'agents' => $result
      ]);
    }
}
