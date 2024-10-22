import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button, Row, Col, Card, CardBody } from "reactstrap";
import Swal from "sweetalert2";

const ApplicantList = () => {
    const [applicants, setApplicants] = useState([]);

    useEffect(() => {
        fetchApplicants();
    }, []);

    const fetchApplicants = () => {
        axios
            .get("/api/applicants")
            .then((response) => {
                setApplicants(response.data);
            })
            .catch((error) => {
                console.error("Error fetching applicant data:", error);
            });
    };

    const getStatusText = (status) => {
        switch (status) {
            case 0:
                return "Pending";
            case 1:
                return "Processing";
            case 2:
                return "Passed";
            case 3:
                return "Failed";
            default:
                return "Unknown";
        }
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.isConfirmed) {
                axios
                    .delete(`/api/applicants/${id}`)
                    .then(() => {
                        Swal.fire(
                            "Deleted!",
                            "Applicant data has been deleted.",
                            "success"
                        );
                        fetchApplicants();
                    })
                    .catch((error) => {
                        console.error("Error deleting applicant data:", error);
                        Swal.fire(
                            "Error!",
                            "An error occurred while deleting applicant data.",
                            "error"
                        );
                    });
            }
        });
    };

    return (
        <div className="container mt-5">
            <Card>
                <CardBody>
                    <Row className="align-items-center mb-4">
                        <Col>
                            <h1>Applicant List</h1>
                        </Col>
                        <Col className="text-end">
                            <Button
                                color="primary"
                                onClick={() =>
                                    (window.location.href =
                                        "/applicants/create")
                                }
                            >
                                Add Applicant
                            </Button>
                        </Col>
                    </Row>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Vacancy ID</th>
                                <th>Candidate ID</th>
                                <th>Application Date</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applicants.map((applicant) => (
                                <tr key={applicant.applicant_id}>
                                    <td>{applicants.indexOf(applicant) + 1}</td>
                                    <td>{applicant.vacancy_id}</td>
                                    <td>{applicant.candidate_id}</td>
                                    <td>
                                        {new Date(
                                            applicant.apply_date
                                        ).toLocaleDateString()}
                                    </td>
                                    <td>
                                        {getStatusText(applicant.apply_status)}
                                    </td>
                                    <td>
                                        <Button
                                            color="primary"
                                            className="me-2"
                                            onClick={() =>
                                                (window.location.href = `/applicants/update/${applicant.applicant_id}`)
                                            }
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            color="danger"
                                            onClick={() =>
                                                handleDelete(
                                                    applicant.applicant_id
                                                )
                                            }
                                        >
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        </div>
    );
};

export default ApplicantList;
