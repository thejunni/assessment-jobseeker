<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateApplicantsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('applicants', function (Blueprint $table) {
            $table->id('applicant_id');
            $table->foreignId('vacancy_id')->constrained('vacancies')->onDelete('cascade');
            $table->foreignId('candidate_id')->constrained('candidates')->onDelete('cascade');
            $table->dateTime('apply_date');
            $table->integer('apply_status')->default(0); // 0: pending, 1: processed, 2: passed, 3: failed
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('applicants');
    }
}
