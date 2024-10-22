import ReactDOM from "react-dom";
import { Col, Row } from "reactstrap";
import MainNavbar from "./components/Navbar";

import VacancyList from "./components/VacancyList";

const VacancyListIndex = () => {
    return (
        <Col>
            <MainNavbar />
            <Row>
                <Col sm="12">
                    <VacancyList />
                </Col>
            </Row>
        </Col>
    );
};

export default VacancyListIndex;

if (document.getElementById("vacancy-list")) {
    ReactDOM.render(
        <VacancyListIndex />,
        document.getElementById("vacancy-list")
    );
}
