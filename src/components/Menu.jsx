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
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="custom-toggle" />
                <Navbar.Collapse id="responsive-navbar-nav" className="collapse">
                    <Nav className="m-auto">
                        <Nav.Link href="#" className="mx-1">Strona główna</Nav.Link>
                        <Nav.Link href="#" className="mx-1">Galeria</Nav.Link>
                        <Nav.Link href="#" className="mx-1">O firmie</Nav.Link>
                        <Nav.Link href="#" className="mx-1 contact">Kontakt</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    )
}