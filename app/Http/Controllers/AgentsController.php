<?php

namespace App\Http\Controllers;

use App\Repositories\API\AgentsApiValorantRepository;
use Inertia\Inertia;


class AgentsController extends Controller
{
    public function agentSingle()
    {
      $id = "41fb69c1-4189-7b37-f117-bcaf1e96f1bf";
      $result = AgentsApiValorantRepository::getAgent($id);
      return Inertia::render('Agent', [
        'agent' => $result
      ]);
    } 
    public function allAgents(){
      return Inertia::render('Agents', [
      
      ]);
}
