import ReactDOM from "react-dom";
import { Col, Row } from "reactstrap";
import MainNavbar from "./components/Navbar";

import EditApplicants from "./components/EditApplicants";

const EditApplicantListForm = () => {
    return (
        <Col>
            <MainNavbar />
            <Row>
                <Col sm="12">
                    <EditApplicants />
                </Col>
            </Row>
        </Col>
    );
};

export default EditApplicantListForm;

if (document.getElementById("edit-applicants")) {
    ReactDOM.render(
        <EditApplicantListForm />,
        document.getElementById("edit-applicants")
    );
}
