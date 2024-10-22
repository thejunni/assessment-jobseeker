<?php

namespace App\Http\Controllers;

use App\Models\Vacancy;
use Illuminate\Http\Request;

class VacancyController extends Controller
{
    // Show all vacancies
    public function index()
    {
        return view('vacancy.index');
    }

    public function getData()
    {
        return response()->json(Vacancy::all());
    }

    public function create()
    {
        return view('vacancy.create');
    }
    // Store a newly created vacancy
    public function store(Request $request)
    {
        $request->validate([
            'vacancy_name' => 'required',
            'min_exp' => 'required|integer',
            'salary' => 'required',
            'description' => 'required',
            'publish_date' => 'required|date',
            'expired_date' => 'required|date',
        ]);

        $vacancy = Vacancy::create($request->all());
        return response()->json($vacancy, 201);
    }

    // Show a single vacancy by id
    public function show($id)
    {
        $vacancy = Vacancy::find($id);

        if (!$vacancy) {
            return response()->json(['error' => 'vacancy not found'], 404);
        }

        return response()->json($vacancy);
    }

    public function formUpdate()
    {
        return view('vacancy.edit');
    }
    // Update a vacancy
    public function update(Request $request, $id)
    {
        $vacancy = Vacancy::findOrFail($id);

        $request->validate([
            'vacancy_name' => 'required',
            'min_exp' => 'required|integer',
            'salary' => 'required',
            'description' => 'required',
            'publish_date' => 'required|date',
            'expired_date' => 'required|date',
        ]);

        $vacancy->update($request->all());
        return response()->json($vacancy, 200);
    }

    // Delete a vacancy
    public function destroy($id)
    {
        $id = intval($id);
        Vacancy::destroy($id);
        return response()->json(null, 204);
    }
}
