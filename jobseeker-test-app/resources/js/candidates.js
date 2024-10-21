import ReactDOM from "react-dom";
import { Col, Row } from "reactstrap";

import CandidateList from "./components/CandidateList";

const CandidateListIndex = () => {
    return (
        <Row>
            <Col sm="12">
                <CandidateList />
            </Col>
        </Row>
    );
};

export default CandidateListIndex;

if (document.getElementById("candidates-list")) {
    ReactDOM.render(
        <CandidateListIndex />,
        document.getElementById("candidates-list")
    );
}
