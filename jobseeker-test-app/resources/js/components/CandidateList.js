import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button, Row, Col } from "reactstrap";
import Swal from "sweetalert2";

const CandidateList = () => {
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        axios
            .get("/api/candidates")
            .then((response) => {
                setCandidates(response?.data);
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
                    <Button color="primary" onClick={handleAddCandidate}>
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
                        <tr key={candidate?.candidate_id}>
                            <td>{candidate?.candidate_id}</td>
                            <td>{candidate?.email}</td>
                            <td>{candidate?.full_name}</td>
                            <td>
                                <Button
                                    color="primary"
                                    className="mr-2"
                                    onClick={() =>
                                        (window.location.href = `/candidates/update/${candidate.candidate_id}`)
                                    }
                                >
                                    Edit
                                </Button>
                                <Button
                                    color="danger"
                                    onClick={() => {
                                        Swal.fire({
                                            title: "Apakah Anda yakin?",
                                            text: "Anda tidak akan dapat mengembalikan ini!",
                                            icon: "warning",
                                            showCancelButton: true,
                                            confirmButtonColor: "#3085d6",
                                            cancelButtonColor: "#d33",
                                            confirmButtonText: "Ya, hapus!",
                                            cancelButtonText: "Batal",
                                        }).then((result) => {
                                            if (result.isConfirmed) {
                                                axios
                                                    .delete(
                                                        `/api/candidates-delete/${candidate.candidate_id}`
                                                    )
                                                    .then(() => {
                                                        Swal.fire(
                                                            "Terhapus!",
                                                            "Kandidat telah dihapus.",
                                                            "success"
                                                        );
                                                        // Refresh daftar kandidat
                                                        setCandidates(
                                                            candidates.filter(
                                                                (c) =>
                                                                    c.candidate_id !==
                                                                    candidate.candidate_id
                                                            )
                                                        );
                                                    })
                                                    .catch((error) => {
                                                        console.error(
                                                            "Error menghapus kandidat:",
                                                            error
                                                        );
                                                        Swal.fire(
                                                            "Error!",
                                                            "Terjadi kesalahan saat menghapus kandidat.",
                                                            "error"
                                                        );
                                                    });
                                            }
                                        });
                                    }}
                                >
                                    Hapus
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default CandidateList;
