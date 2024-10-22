<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vacancy extends Model
{
    use HasFactory;

    protected $fillable = [
        'vacancy_name',
        'min_exp',
        'max_age',
        'salary',
        'description',
        'publish_date',
        'expired_date',
        'flag_status'
    ];

    // Define the primary key for the table
    protected $primaryKey = 'vacancy_id';
}
