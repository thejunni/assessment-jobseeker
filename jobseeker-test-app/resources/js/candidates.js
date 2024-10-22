import ReactDOM from "react-dom";
import { Col, Row } from "reactstrap";
import MainNavbar from "./components/Navbar";

import CandidateList from "./components/CandidateList";

const CandidateListIndex = () => {
    return (
        <Col>
            <MainNavbar />
            <Row>
                <Col sm="12">
                    <CandidateList />
                </Col>
            </Row>
        </Col>
    );
};

export default CandidateListIndex;

if (document.getElementById("candidates-list")) {
    ReactDOM.render(
        <CandidateListIndex />,
        document.getElementById("candidates-list")
    );
}
