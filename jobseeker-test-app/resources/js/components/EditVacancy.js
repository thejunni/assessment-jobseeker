import React, { useState, useEffect } from "react";
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Container,
    Row,
    Col,
    Alert,
} from "reactstrap";
import axios from "axios";
import Swal from "sweetalert2";
import { ArrowLeft } from "react-feather";

const EditVacancyForm = () => {
    const id = window.location.pathname.split("/").pop();
    const [vacancy, setVacancy] = useState({
        vacancy_name: "",
        max_age: "",
        min_exp: "",
        salary: "",
        description: "",
        publish_date: "",
        expired_date: "",
        flag_status: "",
    });

    const [error, setError] = useState("");

    useEffect(() => {
        axios
            .get(`/api/vacancy/id/${id}`)
            .then((response) => {
                setVacancy(response.data);
            })
            .catch((error) => {
                console.error("Error fetching vacancy data:", error);
                setError("Failed to fetch vacancy data. Please try again.");
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setVacancy((prevVacancy) => ({
            ...prevVacancy,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .put(`/api/vacancy/update/${id}`, vacancy)
            .then((response) => {
                Swal.fire({
                    title: "Success!",
                    text: "Vacancy updated successfully.",
                    icon: "success",
                    confirmButtonText: "OK",
                }).then(() => {
                    window.location.href = "/vacancy";
                });
            })
            .catch((error) => {
                console.error(
                    "An error occurred while updating the vacancy:",
                    error
                );
                setError("Failed to update vacancy. Please try again.");
            });
    };

    const handleBack = () => {
        window.location.href = "/vacancy";
    };

    return (
        <Container className="mt-5">
            <h1 className="mb-4">Edit Vacancy</h1>
            <Col className="d-flex justify-content-start mb-3">
                <Button color="primary" onClick={handleBack}>
                    <ArrowLeft />
                </Button>
            </Col>
            {error && <Alert color="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="vacancy_name">Vacancy Name</Label>
                            <Input
                                type="text"
                                name="vacancy_name"
                                id="vacancy_name"
                                value={vacancy.vacancy_name}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="max_age">Maximum Age</Label>
                            <Input
                                type="number"
                                name="max_age"
                                id="max_age"
                                value={vacancy.max_age}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="min_exp">
                                Minimum Experience (years)
                            </Label>
                            <Input
                                type="number"
                                name="min_exp"
                                id="min_exp"
                                value={vacancy.min_exp}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="salary">Salary</Label>
                            <Input
                                type="text"
                                name="salary"
                                id="salary"
                                value={vacancy.salary}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for="description">Description</Label>
                    <Input
                        type="textarea"
                        name="description"
                        id="description"
                        value={vacancy.description}
                        onChange={handleChange}
                        rows={3}
                        required
                    />
                </FormGroup>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="publish_date">Publish Date</Label>
                            <Input
                                type="date"
                                name="publish_date"
                                id="publish_date"
                                value={
                                    vacancy.publish_date
                                        ? new Date(vacancy.publish_date)
                                              .toISOString()
                                              .split("T")[0]
                                        : ""
                                }
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="expired_date">Expiry Date</Label>
                            <Input
                                type="date"
                                name="expired_date"
                                id="expired_date"
                                value={
                                    vacancy.expired_date
                                        ? new Date(vacancy.expired_date)
                                              .toISOString()
                                              .split("T")[0]
                                        : ""
                                }
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for="flag_status">Status</Label>
                    <Input
                        type="select"
                        name="flag_status"
                        id="flag_status"
                        value={vacancy.flag_status}
                        onChange={handleChange}
                        required
                    >
                        <option value="1">Active</option>
                        <option value="0">Inactive</option>
                    </Input>
                </FormGroup>
                <Button color="primary" type="submit">
                    Update Vacancy
                </Button>
            </Form>
        </Container>
    );
};

export default EditVacancyForm;
