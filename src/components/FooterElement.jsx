import {Col} from "react-bootstrap";
import '../styles/Footer.css';
import "bootstrap-icons/font/bootstrap-icons.css";

// eslint-disable-next-line react/prop-types
export default function FooterElement({href, icon, text}) {
    return (
        <Col xs={12} sm={6} md={3} className="footerCol">
            <a href={href}>
                <i className={icon}></i>
            </a>
            <p>{text}</p>
        </Col>
    )
}