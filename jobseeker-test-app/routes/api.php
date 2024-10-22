<?php

use App\Http\Controllers\ApplicantController;
use App\Http\Controllers\CandidateController;
use App\Http\Controllers\VacancyController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::resource('candidates', CandidateController::class);
// Route::resource('vacancies', VacancyController::class);
// Route::resource('applicants', ApplicantController::class);

Route::get('/candidates', [CandidateController::class, 'getData'])->name('getData');
Route::post('/candidates-store', [CandidateController::class, 'store'])->name('store');
Route::get('/candidates-id/{id}', [CandidateController::class, 'show'])->name('show');
Route::put('/candidates-update/{id}', [CandidateController::class, 'update'])->name('update');
Route::delete('/candidates-delete/{id}', [CandidateController::class, 'destroy'])->name('destroy');
