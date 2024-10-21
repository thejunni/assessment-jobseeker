<?php

namespace App\Http\Controllers;

use App\Models\Candidate;
use Illuminate\Http\Request;

class CandidateController extends Controller
{
    // Show all candidates
    public function index()
    {
        return view('candidates.index');
    }

    public function create()
    {
        return view('candidates.create');
    }

    // Store a newly created candidate
    public function store(Request $request)
    {
        $request->validate([
            'email' => 'required|email|unique:candidates,email',
            'full_name' => 'required',
            'dob' => 'required',
            'pob' => 'required',
            'gender' => 'required|in:M,F',
            'year_exp' => 'required',
            'phone_number' => 'nullable|unique:candidates,phone_number',
            'last_salary' => 'nullable',
        ]);

        $candidate = Candidate::create($request->all());
        return response()->json($candidate, 201);
    }

    // Show a single candidate by id
    public function show($id)
    {
        $candidate = Candidate::findOrFail($id);
        return response()->json($candidate);
    }

    // Update a candidate
    public function update(Request $request, $id)
    {
        $candidate = Candidate::findOrFail($id);

        $request->validate([
            'email' => 'required|email|unique:candidates,email,' . $candidate->candidate_id,
            'phone_number' => 'nullable|unique:candidates,phone_number,' . $candidate->candidate_id,
        ]);

        $candidate->update($request->all());
        return response()->json($candidate, 200);
    }

    // Delete a candidate
    public function destroy($id)
    {
        Candidate::destroy($id);
        return response()->json(null, 204);
    }
}
