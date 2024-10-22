import ReactDOM from "react-dom";
import { Col, Row } from "reactstrap";
import MainNavbar from "./components/Navbar";

import EditCandidate from "./components/EditCandidate";

const CandidateEditForm = () => {
    return (
        <Col>
            <MainNavbar />
            <Row>
                <Col sm="12">
                    <EditCandidate />
                </Col>
            </Row>
        </Col>
    );
};

export default CandidateEditForm;

if (document.getElementById("edit-candidate")) {
    ReactDOM.render(
        <CandidateEditForm />,
        document.getElementById("edit-candidate")
    );
}
