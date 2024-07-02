import {Col, Container, Row} from "react-bootstrap";
import '../styles/Footer.css';
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Footer() {
    return (
        <Container fluid className="footer g-0">
            <Row className="footerRow">
                <Col xs={12} sm={6} md={3} className="footerCol">
                    <i className="bi bi-geo-alt-fill icon"></i>
                    <p>ul. Jasna 6, 82-335 Jegłownik</p>
                </Col>
                <Col xs={12} sm={6} md={3} className="footerCol">
                    <i className="bi bi-telephone-fill icon"></i>
                    <p>(+48) 502-472-763</p>
                </Col>
                <Col xs={12} sm={6} md={3} className="footerCol">
                    <i className="bi bi-envelope-fill icon"></i>
                    <p>kubimeble@icloud.com</p>
                </Col>
                <Col xs={12} sm={6} md={3} className="footerCol">
                    <a href="https://www.facebook.com/profile.php?id=100063485287584">
                        <i className="bi bi-facebook icon facebook"></i>
                    </a>
                </Col>
            </Row>
        </Container>
    )
}