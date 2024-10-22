import ReactDOM from "react-dom";
import { Col, Row } from "reactstrap";
import MainNavbar from "./components/Navbar";

import CreateVacancyForm from "./components/CreateVacancy";

const VacancyListForm = () => {
    return (
        <Col>
            <MainNavbar />
            <Row>
                <Col sm="12">
                    <CreateVacancyForm />
                </Col>
            </Row>
        </Col>
    );
};

export default VacancyListForm;

if (document.getElementById("create-vacancy")) {
    ReactDOM.render(
        <VacancyListForm />,
        document.getElementById("create-vacancy")
    );
}
