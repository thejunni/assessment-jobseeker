<?php

namespace App\Http\Controllers;

use App\Models\Applicant;
use Illuminate\Http\Request;

class ApplicantController extends Controller
{
    // Show all applicants
    public function index()
    {
        return view('applicants.index');
    }

    public function getData()
    {
        return response()->json(Applicant::all());
    }

    // Store a newly created applicant
    public function create()
    {
        return view('applicants.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'vacancy_id' => 'required|exists:vacancies,vacancy_id',
            'candidate_id' => 'required|exists:candidates,candidate_id',
            'apply_date' => 'required|date',
            'apply_status' => 'required|integer|in:0,1,2,3', // pending/processed/passed/failed
        ]);

        $applicant = Applicant::create($request->all());
        return response()->json($applicant, 201);
    }

    // Show a single applicant by id
    public function show($id)
    {
        $applicant = Applicant::find($id);

        if (!$applicant) {
            return response()->json(['error' => 'applic$applicant not found'], 404);
        }

        return response()->json($applicant);
    }

    public function formUpdate()
    {
        return view('applicants.edit');
    }
    // Update an applicant
    public function update(Request $request, $id)
    {
        $applicant = Applicant::findOrFail($id);

        $request->validate([
            'vacancy_id' => 'required|exists:vacancies,vacancy_id',
            'candidate_id' => 'required|exists:candidates,candidate_id',
            'apply_status' => 'required|integer|in:0,1,2,3', // pending/processed/passed/failed
        ]);

        $applicant->update($request->all());
        return response()->json($applicant, 200);
    }

    // Delete an applicant
    public function destroy($id)
    {
        $id = intval($id);
        Applicant::destroy($id);
        return response()->json(null, 204);
    }
}
