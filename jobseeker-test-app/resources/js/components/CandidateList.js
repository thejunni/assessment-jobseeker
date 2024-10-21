import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button, Row, Col } from "reactstrap";

const CandidateList = () => {
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        axios
            .get("/api/candidates")
            .then((response) => {
                setCandidates(response.data);
            })
            .catch((error) => {
                console.error("Error fetching candidates:", error);
            });
    }, []);

    const handleAddCandidate = () => {
        window.location.href = "/candidates/create";
    };

    return (
        <div className="container mt-5">
            <Row className="align-items-center mb-4">
                <Col>
                    <h1>Candidates List</h1>
                </Col>
                <Col className="d-flex justify-content-end">
                    <Button color="primary" onClick={handleAddCandidate()}>
                        Add Candidate
                    </Button>
                </Col>
            </Row>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Full Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {candidates.map((candidate) => (
                        <tr key={candidate.candidate_id}>
                            <td>{candidate.candidate_id}</td>
                            <td>{candidate.email}</td>
                            <td>{candidate.full_name}</td>
                            <td>
                                <Button color="warning" className="mr-2">
                                    Edit
                                </Button>
                                <Button color="danger">Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default CandidateList;
