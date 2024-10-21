import ReactDOM from "react-dom";
import { Col, Row } from "reactstrap";

import CreateCandidate from "./components/CreateCandidate";

const CandidateListForm = () => {
    return (
        <Row>
            <Col sm="12">
                <CreateCandidate />
            </Col>
        </Row>
    );
};

export default CandidateListForm;

if (document.getElementById("create-candidate")) {
    ReactDOM.render(
        <CandidateListForm />,
        document.getElementById("create-candidate")
    );
}
