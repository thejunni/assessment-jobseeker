<?php

use App\Http\Controllers\ApplicantController;
use App\Http\Controllers\CandidateController;
use App\Http\Controllers\VacancyController;
use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('welcome');
});
// Route::resource('candidates', CandidateController::class);
// Route::resource('vacancies', VacancyController::class);
// Route::resource('applicants', ApplicantController::class);

Route::get('/candidates', [CandidateController::class, 'index'])->name('index');
Route::get('/candidates/create', [CandidateController::class, 'create'])->name('create');
Route::get('/candidates/update/{id}', [CandidateController::class, 'formUpdate'])->name('formUpdate');
