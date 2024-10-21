// import React from "react";
// import ReactDOM from "react-dom";
// import CandidateList from "./components/CandidateList";
// import CreateCandidate from "./components/CreateCandidate";

// if (document.getElementById("candidates-list")) {
//     ReactDOM.render(
//         <CandidateList />,
//         document.getElementById("candidates-list")
//     );
// }

// if (document.getElementById("create-candidate")) {
//     ReactDOM.render(
//         <CreateCandidate />,
//         document.getElementById("create-candidate")
//     );
// }
import ReactDOM from "react-dom";
import { Col, Row } from "reactstrap";

import CandidateList from "./components/CandidateList";
import CreateCandidate from "./components/CreateCandidate";

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

if (document.getElementById("candidates-container")) {
    ReactDOM.render(
        <CandidateListIndex />,
        document.getElementById("candidates-container")
    );
}
