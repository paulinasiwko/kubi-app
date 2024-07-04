import { Container, Row} from "react-bootstrap";
import '../styles/Footer.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import FooterElement from "./FooterElement.jsx";

export default function Footer() {
    return (
        <Container fluid className="footer g-0">
            <Row className="footerRow">
                <FooterElement icon="bi bi-geo-alt-fill icon" text="ul. Jasna 6, 82-335 Jegłownik" />
                <FooterElement icon="bi bi-telephone-fill icon" text="(+48) 502-472-763" />
                <FooterElement icon="bi bi-envelope-fill icon" text="kubimeble@icloud.com" />
                <FooterElement href="https://www.facebook.com/profile.php?id=100063485287584" icon="bi bi-facebook icon facebook" />
            </Row>
        </Container>
    )
}