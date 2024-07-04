import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/Menu.css';
import { Link } from "react-router-dom";

export default function Menu() {

    return (
        <Navbar collapseOnSelect expand="md" className="menu">
                <Navbar.Brand as={Link} to={"/"}>
                    <img src="/img/logo-removed-background.png" alt="Logo: KUBI - producent mebli" className="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="custom-toggle" />
                <Navbar.Collapse id="responsive-navbar-nav" className="collapse">
                    <Nav className="m-auto nav">
                        <Nav.Link as={Link} to={"/"} className="menuItem">Strona główna</Nav.Link>
                        <Nav.Link as={Link} to={"/gallery"} className="menuItem">Galeria</Nav.Link>
                        <Nav.Link as={Link} to={"/about"} className="menuItem">O firmie</Nav.Link>
                        <Nav.Link as={Link} to={"/contact"} className="contact">Kontakt</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    )
}