<?php

namespace App\Http\Controllers;

use App\Repositories\API\AgentsApiValorantRepository;
use App\Repositories\API\MapsApiValorantRepository;
use Illuminate\Http\Request;

use Inertia\Inertia;

class DashBoardSearchController extends Controller
{
    public function index()
    {
        $maps = MapsApiValorantRepository::allMaps();
        $agents = AgentsApiValorantRepository::allAgents();
       
        return Inertia::render('Dashboard', [
            'agents' => $agents,
            'maps' => $maps
        ]);

    }
}
