import {Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import '../styles/Contact.css';
import 'leaflet/dist/leaflet.css';
import Map from "../components/Map.jsx";
import MapModal from "../components/MapModal.jsx";
import ContactForm from "../components/ContactForm.jsx";

export default function Contact() {
    const [modalShow,setModalShow] = useState(false);

    return (
            <Container fluid className="p-0">
                <Row className="g-0 contactBackground">
                    <Container className="px-lg-5 d-flex flex-column flex-md-row justify-content-center align-items-center">
                        <Col xs={12} md={6} className="d-flex align-items-center justify-content-center p-3 whiteBackground lighter">
                            <ContactForm />
                        </Col>

                        <Col xs={12} md={6} className="d-flex flex-column align-items-center justify-content-center p-3 whiteBackground darker">
                            <Row className="contactInfo">
                                <h5 className="fw-bold">KUBI - Producent Mebli</h5>
                                <p>Meble na wymiar Jakub Podufalski</p>
                                <p>82-335 Jegłownik, ul. Jasna 6</p>
                                <p>NIP: 5783140291 <br/> REGON: 385226970</p>
                                <p>Tel: (+48) 502-472-763 <br/> E-mail: kubimeble@icloud.com</p>
                            </Row>
                            <Row className="d-flex align-items-end justify-content-center mt-4 mapRow">
                                <Col>
                                    <h5 className="mapText">Jesteśmy tutaj!</h5>
                                </Col>
                                <Col onClick={() => setModalShow(true)}>
                                    <Map className="mapSmall" />
                                </Col>
                            </Row>
                        </Col>
                        <MapModal show={modalShow} onHide={() => setModalShow(false)} />
                    </Container>
                </Row>
            </Container>
            )
}