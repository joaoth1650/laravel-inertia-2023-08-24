<?php

namespace App\Http\Controllers;
use Inertia\Inertia;


class exempleController extends Controller
{
    public function index()
    {
        return Inertia::render('Exemple', [
          'lista' => [
            'uno',
            'due',
            'tre',
            'quattro',
            'cinque',
            'sei'
          ]
        ]);
    } 
}
