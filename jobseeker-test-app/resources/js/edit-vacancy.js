import ReactDOM from "react-dom";
import { Col, Row } from "reactstrap";
import MainNavbar from "./components/Navbar";

import EditVacancyForm from "./components/EditVacancy";

const EditVacancyListForm = () => {
    return (
        <Col>
            <MainNavbar />
            <Row>
                <Col sm="12">
                    <EditVacancyForm />
                </Col>
            </Row>
        </Col>
    );
};

export default EditVacancyListForm;

if (document.getElementById("edit-vacancy")) {
    ReactDOM.render(
        <EditVacancyListForm />,
        document.getElementById("edit-vacancy")
    );
}
