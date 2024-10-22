<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Candidate extends Model
{
    use HasFactory;

    // Specify which fields are mass assignable
    protected $fillable = [
        'email',
        'phone_number',
        'full_name',
        'dob',
        'pob',
        'gender',
        'year_exp',
        'last_salary'
    ];

    // Define the primary key for the table
    protected $primaryKey = 'candidate_id';
}
