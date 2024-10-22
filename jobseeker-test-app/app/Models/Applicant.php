<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Applicant extends Model
{
    use HasFactory;

    protected $fillable = [
        'vacancy_id',
        'candidate_id',
        'apply_date',
        'apply_status'
    ];

    // Define the primary key for the table
    protected $primaryKey = 'applicant_id';
}
