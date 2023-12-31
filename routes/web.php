<?php

use App\Http\Controllers\AgentsController;
use App\Http\Controllers\DashBoardSearchController;
use App\Http\Controllers\MapsController;
use App\Http\Controllers\ExempleController;
use App\Http\Controllers\ProfileController;
use App\Repositories\API\AgentsApiValorantRepository;
use App\Repositories\API\MapsApiValorantRepository;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/teste', function () {
    return AgentsApiValorantRepository::allAgents();
});




Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', [DashBoardSearchController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/exemple',[ExempleController::class,'index'], function () {
        
    });
    ////agents
    Route::get('/agente/{agentUuid}', [AgentsController::class, 'agentSingle'])->name('agente.single');
    Route::get('/agentes', [AgentsController::class, 'allAgents'])->name('agente.all');
    ////maps
     Route::get('/map/{mapUuid}', [MapsController::class, 'mapSingle'])->name('map.single');

    Route::get('/maps', [MapsController::class, 'allMaps'])->name('map.all');
    


});

require __DIR__.'/auth.php';
