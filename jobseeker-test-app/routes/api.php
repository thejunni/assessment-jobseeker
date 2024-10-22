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

Route::prefix('candidates')->group(function () {
    Route::get('/', [CandidateController::class, 'getData'])->name('candidates.getData');
    Route::post('/store', [CandidateController::class, 'store'])->name('candidates.store');
    Route::get('/{id}', [CandidateController::class, 'show'])->name('candidates.show');
    Route::put('/update/{id}', [CandidateController::class, 'update'])->name('candidates.update');
    Route::delete('/{id}', [CandidateController::class, 'destroy'])->name('candidates.destroy');
});

Route::prefix('vacancy')->group(function () {
    Route::get('/', [VacancyController::class, 'getData'])->name('vacancy.getData');
    Route::post('/store', [VacancyController::class, 'store'])->name('vacancy.store');
    Route::get('/{id}', [VacancyController::class, 'show'])->name('vacancy.show');
    Route::put('/update/{id}', [VacancyController::class, 'update'])->name('vacancy.update');
    Route::delete('/{id}', [VacancyController::class, 'destroy'])->name('vacancy.destroy');
});

Route::prefix('applicants')->group(function () {
    Route::get('/', [ApplicantController::class, 'getData'])->name('applicant.getData');
    Route::post('/store', [ApplicantController::class, 'store'])->name('applicant.store');
    Route::get('/{id}', [ApplicantController::class, 'show'])->name('applicant.show');
    Route::put('/update/{id}', [ApplicantController::class, 'update'])->name('applicant.update');
    Route::delete('/{id}', [ApplicantController::class, 'destroy'])->name('applicant.destroy');
});
