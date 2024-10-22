import ReactDOM from "react-dom";
import { Col, Row } from "reactstrap";
import MainNavbar from "./components/Navbar";

import CreateVacancyForm from "./components/CreateVacancy";
import CreateApplicants from "./components/CreateApplicants";

const ApplicantListForm = () => {
    return (
        <Col>
            <MainNavbar />
            <Row>
                <Col sm="12">
                    <CreateApplicants />
                </Col>
            </Row>
        </Col>
    );
};

export default ApplicantListForm;

if (document.getElementById("create-applicants")) {
    ReactDOM.render(
        <ApplicantListForm />,
        document.getElementById("create-applicants")
    );
}
