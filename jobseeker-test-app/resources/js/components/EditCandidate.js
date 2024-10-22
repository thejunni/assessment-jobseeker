// resources/js/components/EditCandidate.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditCandidate = () => {
    // const { id } = useParams(); // Get the candidate ID from the URL
    // console.log(id);
    const id = window.location.pathname.split("/").pop();
    console.log("ID kandidat:", id);

    const [candidate, setCandidate] = useState({
        email: "",
        phone_number: "",
        full_name: "",
        dob: "",
        pob: "",
        gender: "",
        year_exp: "",
        last_salary: "",
    });

    const [errors, setErrors] = useState({});

    // Fetch the candidate data when the component loads
    useEffect(() => {
        axios
            .get(`/api/candidates-id/${id}`)
            .then((response) => {
                setCandidate(response.data);
            })
            .catch((error) => {
                console.error(
                    "There was an error fetching the candidate data!",
                    error
                );
            });
    }, [id]);

    // Handle form input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCandidate({ ...candidate, [name]: value });
    };

    // Handle form submission for updating the candidate
    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .put(`/api/candidates-update/${id}`, candidate)
            .then((response) => {
                alert("Candidate updated successfully!");
                window.location.href = "/candidates"; // Redirect to candidates list
            })
            .catch((error) => {
                if (error.response && error.response.data.errors) {
                    setErrors(error.response.data.errors);
                } else {
                    console.error(
                        "There was an error updating the candidate!",
                        error
                    );
                }
            });
    };

    return (
        <div className="container mt-5">
            <h1>Edit Candidate</h1>
            <form onSubmit={handleSubmit} className="mt-4">
                <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input
                        type="email"
                        name="email"
                        className={`form-control ${
                            errors.email ? "is-invalid" : ""
                        }`}
                        value={candidate.email}
                        onChange={handleInputChange}
                    />
                    {errors.email && (
                        <div className="invalid-feedback">
                            {errors.email[0]}
                        </div>
                    )}
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone Number:</label>
                    <input
                        type="text"
                        name="phone_number"
                        className={`form-control ${
                            errors.phone_number ? "is-invalid" : ""
                        }`}
                        value={candidate.phone_number}
                        onChange={handleInputChange}
                    />
                    {errors.phone_number && (
                        <div className="invalid-feedback">
                            {errors.phone_number[0]}
                        </div>
                    )}
                </div>
                <div className="mb-3">
                    <label className="form-label">Full Name:</label>
                    <input
                        type="text"
                        name="full_name"
                        className={`form-control ${
                            errors.full_name ? "is-invalid" : ""
                        }`}
                        value={candidate.full_name}
                        onChange={handleInputChange}
                    />
                    {errors.full_name && (
                        <div className="invalid-feedback">
                            {errors.full_name[0]}
                        </div>
                    )}
                </div>
                <div className="mb-3">
                    <label className="form-label">Date of Birth:</label>
                    <input
                        type="date"
                        name="dob"
                        className={`form-control ${
                            errors.dob ? "is-invalid" : ""
                        }`}
                        value={candidate.dob}
                        onChange={handleInputChange}
                    />
                    {errors.dob && (
                        <div className="invalid-feedback">{errors.dob[0]}</div>
                    )}
                </div>
                <div className="mb-3">
                    <label className="form-label">Place of Birth:</label>
                    <input
                        type="text"
                        name="pob"
                        className={`form-control ${
                            errors.pob ? "is-invalid" : ""
                        }`}
                        value={candidate.pob}
                        onChange={handleInputChange}
                    />
                    {errors.pob && (
                        <div className="invalid-feedback">{errors.pob[0]}</div>
                    )}
                </div>
                <div className="mb-3">
                    <label className="form-label">Gender:</label>
                    <select
                        name="gender"
                        className={`form-select ${
                            errors.gender ? "is-invalid" : ""
                        }`}
                        value={candidate.gender}
                        onChange={handleInputChange}
                    >
                        <option value="">Select Gender</option>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                    </select>
                    {errors.gender && (
                        <div className="invalid-feedback">
                            {errors.gender[0]}
                        </div>
                    )}
                </div>
                <div className="mb-3">
                    <label className="form-label">Years of Experience:</label>
                    <input
                        type="text"
                        name="year_exp"
                        className={`form-control ${
                            errors.year_exp ? "is-invalid" : ""
                        }`}
                        value={candidate.year_exp}
                        onChange={handleInputChange}
                    />
                    {errors.year_exp && (
                        <div className="invalid-feedback">
                            {errors.year_exp[0]}
                        </div>
                    )}
                </div>
                <div className="mb-3">
                    <label className="form-label">Last Salary:</label>
                    <input
                        type="text"
                        name="last_salary"
                        className="form-control"
                        value={candidate.last_salary}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Update Candidate
                </button>
            </form>
        </div>
    );
};

export default EditCandidate;
