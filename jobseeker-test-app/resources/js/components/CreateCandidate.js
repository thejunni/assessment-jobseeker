import React, { useState } from "react";
import axios from "axios";
import {
    Container,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Alert,
    Col,
} from "reactstrap";
import { ArrowLeft } from "react-feather";

const CreateCandidate = () => {
    const [formData, setFormData] = useState({
        email: "",
        full_name: "",
        dob: "",
        pob: "",
        gender: "",
        year_exp: "",
        phone_number: "",
        last_salary: "",
    });
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("/api/candidates/store", formData)
            .then((response) => {
                setSuccess(true);
                setError("");
                setFormData({
                    email: "",
                    full_name: "",
                    dob: "",
                    pob: "",
                    gender: "",
                    year_exp: "",
                    phone_number: "",
                    last_salary: "",
                });
                window.location.href = "/candidates";
            })
            .catch((error) => {
                console.error("Error creating candidate:", error);
                setError("Failed to create candidate. Please try again.");
                setSuccess(false);
            });
    };

    const handleAddCandidate = () => {
        window.location.href = "/candidates";
    };

    return (
        <Container className="mt-5">
            <h1 className="mb-4">Create Candidate</h1>
            <Col className="d-flex justify-content-start mb-3">
                <Button color="primary" onClick={handleAddCandidate}>
                    <ArrowLeft />
                </Button>
            </Col>
            {success && (
                <Alert color="success">Candidate created successfully!</Alert>
            )}
            {error && <Alert color="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email"
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="full_name">Full Name</Label>
                    <Input
                        type="text"
                        name="full_name"
                        id="full_name"
                        value={formData.full_name}
                        onChange={handleChange}
                        placeholder="Enter full name"
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="dob">Date of Birth</Label>
                    <Input
                        type="date"
                        name="dob"
                        id="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="pob">Place of Birth</Label>
                    <Input
                        type="text"
                        name="pob"
                        id="pob"
                        value={formData.pob}
                        onChange={handleChange}
                        placeholder="Enter place of birth"
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="gender">Gender</Label>
                    <Input
                        type="select"
                        name="gender"
                        id="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Gender</option>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="year_exp">Years of Experience</Label>
                    <Input
                        type="number"
                        name="year_exp"
                        id="year_exp"
                        value={formData.year_exp}
                        onChange={handleChange}
                        placeholder="Enter years of experience"
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="phone_number">Phone Number</Label>
                    <Input
                        type="text"
                        name="phone_number"
                        id="phone_number"
                        value={formData.phone_number}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="last_salary">Last Salary</Label>
                    <Input
                        type="text"
                        name="last_salary"
                        id="last_salary"
                        value={formData.last_salary}
                        onChange={handleChange}
                        placeholder="Enter last salary"
                    />
                </FormGroup>
                <Button color="primary" type="submit">
                    Create Candidate
                </Button>
            </Form>
        </Container>
    );
};

export default CreateCandidate;
