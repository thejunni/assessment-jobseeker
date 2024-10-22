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

Route::prefix('candidates')->group(function () {
    Route::get('/', [CandidateController::class, 'index'])->name('candidates.index');
    Route::get('/create', [CandidateController::class, 'create'])->name('candidates.create');
    Route::get('/update/{id}', [CandidateController::class, 'formUpdate'])->name('candidates.formUpdate');
});

Route::prefix('vacancy')->group(function () {
    Route::get('/', [VacancyController::class, 'index'])->name('vacancy.index');
    Route::get('/create', [VacancyController::class, 'create'])->name('vacancy.create');
    Route::get('/update/{id}', [VacancyController::class, 'formUpdate'])->name('vacancy.formUpdate');
});

Route::prefix('applicants')->group(function () {
    Route::get('/', [ApplicantController::class, 'index'])->name('applicant.index');
    Route::get('/create', [ApplicantController::class, 'create'])->name('applicant.create');
    Route::get('/update/{id}', [ApplicantController::class, 'formUpdate'])->name('applicant.formUpdate');
});
