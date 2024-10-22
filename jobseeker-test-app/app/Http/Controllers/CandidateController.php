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

    public function getData()
    {
        return response()->json(Candidate::all());
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
        $candidate = Candidate::find($id);

        if (!$candidate) {
            return response()->json(['error' => 'Candidate not found'], 404);
        }

        return response()->json($candidate);
    }


    public function formUpdate()
    {
        return view('candidates.edit');
    }
    public function update(Request $request, $id)
    {
        $candidate = Candidate::findOrFail($id);

        $request->validate([
            'email' => 'required|email|unique:candidates,email,' . $candidate->candidate_id . ',candidate_id',
            'full_name' => 'required',
            'dob' => 'required|date',
            'pob' => 'required',
            'gender' => 'required|in:M,F',
            'year_exp' => 'required|numeric',
            'phone_number' => 'nullable|unique:candidates,phone_number,' . $candidate->candidate_id . ',candidate_id',
        ]);

        $candidate->update($request->all());

        return response()->json([
            'message' => 'Kandidat berhasil diperbarui',
            'data' => $candidate
        ], 200);
    }

    // Delete a candidate
    public function destroy($id)
    {
        $id = intval($id);
        Candidate::destroy($id);
        return response()->json(null, 204);
    }
}
