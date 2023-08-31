<?php

namespace App\Http\Controllers;

use App\Repositories\API\MapsApiValorantRepository;
use Inertia\Inertia;


class MapsController extends Controller
{
    public function MapSingle($mapUuid)
    {
      $result = MapsApiValorantRepository::getMap($mapUuid);
      return Inertia::render('Map', [
        'map' => $result
      ]);
    } 
    public function allMaps(){
      $result = MapsApiValorantRepository::allMaps();

      return Inertia::render('Maps', [
        'maps' => $result
      ]);
    }
}
