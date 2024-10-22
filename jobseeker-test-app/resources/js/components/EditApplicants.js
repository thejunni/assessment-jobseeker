import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { ArrowLeft } from "react-feather";
import { Button, Col } from "reactstrap";

const EditApplicants = () => {
    const id = window.location.pathname.split("/").pop();
    const [vacancies, setVacancies] = useState([]);
    const [candidates, setCandidates] = useState([]);
    const [formData, setFormData] = useState({
        vacancy_id: "",
        candidate_id: "",
        apply_date: "",
        apply_status: 0,
    });

    useEffect(() => {
        fetchVacancies();
        fetchCandidates();
        fetchApplicantData();
    }, []);

    const fetchVacancies = async () => {
        try {
            const response = await axios.get("/api/vacancy");
            setVacancies(response.data);
        } catch (error) {
            console.error("Error fetching vacancy data:", error);
        }
    };

    const fetchCandidates = async () => {
        try {
            const response = await axios.get("/api/candidates");
            setCandidates(response.data);
        } catch (error) {
            console.error("Error fetching candidate data:", error);
        }
    };

    const fetchApplicantData = async () => {
        try {
            const response = await axios.get(`/api/applicants/${id}`);
            setFormData(response.data);
        } catch (error) {
            console.error("Error fetching applicant data:", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "vacancy_id" || name === "candidate_id") {
            setFormData({ ...formData, [name]: parseInt(value) });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`/api/applicants/update/${id}`, formData);
            Swal.fire({
                title: "Berhasil!",
                text: "Data applicant berhasil diperbarui.",
                icon: "success",
                confirmButtonText: "OK",
            }).then(() => {
                window.location.href = "/applicants";
            });
        } catch (error) {
            console.error("Error updating applicant:", error);
            Swal.fire({
                title: "Gagal!",
                text: "Gagal memperbarui data applicant.",
                icon: "error",
                confirmButtonText: "OK",
            });
        }
    };

    const getStatusText = (status) => {
        switch (parseInt(status)) {
            case 0:
                return "Pending";
            case 1:
                return "Processed";
            case 2:
                return "Passed";
            case 3:
                return "Failed";
            default:
                return "Unknown";
        }
    };

    const handleBack = () => {
        window.location.href = "/applicants";
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Edit Applicant</h2>
            <Col className="d-flex justify-content-start mb-3">
                <Button color="primary" onClick={handleBack}>
                    <ArrowLeft />
                </Button>
            </Col>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="vacancy_id" className="form-label">
                        Vacancy:
                    </label>
                    <select
                        id="vacancy_id"
                        name="vacancy_id"
                        value={formData.vacancy_id}
                        onChange={handleChange}
                        required
                        className="form-select"
                    >
                        <option value="">Select Vacancy</option>
                        {vacancies.map((vacancy) => (
                            <option
                                key={vacancy.vacancy_id}
                                value={vacancy.vacancy_id}
                            >
                                {vacancy.vacancy_name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="candidate_id" className="form-label">
                        Candidate:
                    </label>
                    <select
                        id="candidate_id"
                        name="candidate_id"
                        value={formData.candidate_id}
                        onChange={handleChange}
                        required
                        className="form-select"
                    >
                        <option value="">Select Candidate</option>
                        {candidates.map((candidate) => (
                            <option
                                key={candidate.candidate_id}
                                value={candidate.candidate_id}
                            >
                                {candidate.full_name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="apply_date" className="form-label">
                        Applicant Date:
                    </label>
                    <input
                        type="date"
                        id="apply_date"
                        name="apply_date"
                        value={formData.apply_date}
                        onChange={handleChange}
                        required
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="apply_status" className="form-label">
                        Application Status:
                    </label>
                    <select
                        id="apply_status"
                        name="apply_status"
                        value={formData.apply_status}
                        onChange={handleChange}
                        required
                        className="form-select"
                    >
                        <option value="0">Pending</option>
                        <option value="1">Processed</option>
                        <option value="2">Passed</option>
                        <option value="3">Failed</option>
                    </select>
                    <small className="form-text text-muted">
                        Current status: {getStatusText(formData.apply_status)}
                    </small>
                </div>
                <button type="submit" className="btn btn-primary">
                    Update Applicant
                </button>
            </form>
        </div>
    );
};

export default EditApplicants;
