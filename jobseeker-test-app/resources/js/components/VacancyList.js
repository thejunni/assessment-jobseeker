import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button, Row, Col } from "reactstrap";
import Swal from "sweetalert2";

const VacancyList = () => {
    const [vacancy, setVacanies] = useState([]);

    useEffect(() => {
        axios
            .get("/api/vacancy")
            .then((response) => {
                setVacanies(response?.data);
            })
            .catch((error) => {
                console.error("Error fetching candidates:", error);
            });
    }, []);

    const handleAddVacancy = () => {
        window.location.href = "/vacancy/create";
    };

    return (
        <div className="container mt-5">
            <Row className="align-items-center mb-4">
                <Col>
                    <h1>Vacancy List</h1>
                </Col>
                <Col className="d-flex justify-content-end">
                    <Button color="primary" onClick={handleAddVacancy}>
                        Add Vacancy
                    </Button>
                </Col>
            </Row>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Vacancy Name</th>
                        <th>Max Age</th>
                        <th>Minimal Experience</th>
                        <th>Salary</th>
                        <th>Description</th>
                        <th>Publish Date</th>
                        <th>Expired Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {vacancy?.map((vacancies) => (
                        <tr key={vacancies?.vacancy_id}>
                            <td>{vacancy.indexOf(vacancies) + 1}</td>
                            <td>{vacancies?.vacancy_name}</td>
                            <td>{vacancies?.max_age}</td>
                            <td>{vacancies?.min_exp}</td>
                            <td>{vacancies?.salary}</td>
                            <td>{vacancies?.description}</td>
                            <td>{vacancies?.publish_date}</td>
                            <td>{vacancies?.expired_date}</td>
                            <td>
                                {vacancies?.flag_status === 1
                                    ? "Active"
                                    : "Inactive"}
                            </td>
                            <td>
                                <Button
                                    color="primary"
                                    className="mr-2"
                                    onClick={() =>
                                        (window.location.href = `/vacancy/update/${vacancies?.vacancy_id}`)
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
                                                        `/api/vacancy-delete/${vacancies.vacancy_id}`
                                                    )
                                                    .then(() => {
                                                        Swal.fire(
                                                            "Terhapus!",
                                                            "Kandidat telah dihapus.",
                                                            "success"
                                                        );
                                                        // Refresh daftar kandidat
                                                        setVacanies(
                                                            vacancy.filter(
                                                                (c) =>
                                                                    c.vacancy_id !==
                                                                    vacancies.vacancy_id
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

export default VacancyList;
