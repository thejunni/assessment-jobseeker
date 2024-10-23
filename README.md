Project Structure
The project contains the following key components:

Backend (Laravel 8):

Provides CRUD API for candidates, vacancies, and applicants.
Manages database interactions using Eloquent ORM.
Handles server-side logic, authentication (optional), and form validation.
Frontend (React.js):

Provides user interfaces for managing candidates, vacancies, and applicants.
Communicates with the Laravel backend via Axios for API calls.
Utilizes React components to dynamically render data and handle form submissions.

Setup Instructions
Prerequisites
Ensure you have the following installed:

PHP >= 8.0
Composer
Node.js
MySQL Database


API Endpoints
The following API endpoints are available for interacting with candidates, vacancies, and applicants:

1. Candidates API
GET /api/candidates – Retrieve a list of all candidates.
POST /api/candidates – Create a new candidate.
PUT /api/candidates/{id} – Update an existing candidate.
DELETE /api/candidates/{id} – Delete a candidate by ID.
2. Vacancies API
GET /api/vacancy – Retrieve a list of all vacancies.
POST /api/vacancy – Create a new vacancy.
PUT /api/vacancy/{id} – Update an existing vacancy.
DELETE /api/vacancy/{id} – Delete a vacancy by ID.
3. Applicants API
GET /api/applicants – Retrieve a list of all applicants.
POST /api/applicants – Create a new application.
PUT /api/applicants/{id} – Update an existing application.
DELETE /api/applicants/{id} – Delete an application by ID.
