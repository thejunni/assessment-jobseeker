import ReactDOM from "react-dom";
import { Col, Row } from "reactstrap";
import MainNavbar from "./components/Navbar";

import ApplicantList from "./components/Applicants";

const ApplicantListIndex = () => {
    return (
        <Col>
            <MainNavbar />
            <Row>
                <Col sm="12">
                    <ApplicantList />
                </Col>
            </Row>
        </Col>
    );
};

export default ApplicantListIndex;

if (document.getElementById("applicant-list")) {
    ReactDOM.render(
        <ApplicantListIndex />,
        document.getElementById("applicant-list")
    );
}
