<!DOCTYPE html>
<html>
<head>
    <title>Job Portal</title>
    <link href="{{ mix('css/app.css') }}" rel="stylesheet" type="text/css">
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
        }
        .container {
            text-align: center;
        }
        .btn {
            display: inline-block;
            padding: 10px 20px;
            margin: 10px;
            font-size: 18px;
            color: #fff;
            background-color: #007bff;
            border: none;
            border-radius: 5px;
            text-decoration: none;
            transition: background-color 0.3s;
        }
        .btn:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to Job Portal</h1>
        <a href="/applicants" class="btn">Applicants</a>
        <a href="/candidates" class="btn">Candidates</a>
        <a href="/vacancy" class="btn">Vacancies</a>
    </div>
</body>
</html>
