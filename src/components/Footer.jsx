import {Col, Container, Row} from "react-bootstrap";
import '../styles/Footer.css';
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Footer() {
    return (
        <Container fluid className="footer g-0">
            <Row className="footerRow">
                <Col><i className="bi bi-geo-alt-fill icon"></i></Col>
                <Col><i className="bi bi-telephone-fill icon"></i></Col>
                <Col><i className="bi bi-envelope-fill icon"></i></Col>
                <Col><i className="bi bi-facebook icon"></i></Col>
            </Row>
        </Container>
    )
}