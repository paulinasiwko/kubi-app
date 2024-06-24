import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/logo-removed-background.png';
import '../styles/Menu.css';

export default function Menu() {

    return (
        <Navbar collapseOnSelect expand="md" className="menu">
                <Navbar.Brand href="#">
                    <img src={logo} alt="Logo: KUBI - producent mebli" className="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="me-4"/>
                <Navbar.Collapse id="responsive-navbar-nav" className="menu-options">
                    <Nav className="mr-auto">
                        <Nav.Link href="#">Strona główna</Nav.Link>
                        <Nav.Link href="#">Galeria</Nav.Link>
                        <Nav.Link href="#">O firmie</Nav.Link>
                        <Nav.Link href="#" className="contact">Kontakt</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    )
}