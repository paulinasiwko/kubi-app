import {Col, Container, Form, Row, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';
import Map from "../components/Map.jsx";
import MapModal from "../components/MapModal.jsx";

export default function Contact() {
    const [show, setShow] = useState(true);
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");
    const [modalShow,setModalShow] = useState(false);

    const re = /^[0-9\b]+$/;

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm("service_qarojxn", "template_tsysrsj", e.target, {publicKey: "MmKBPLfAJvZH6gRig"});
        setShow(false);
        setEmail("");
        setPhoneNumber("");
        setMessage("");
    }

    return (
            <Container fluid className="p-0">
                <Row className="g-0 contactBackground">
                    <Container className="px-lg-5 d-flex flex-column flex-md-row justify-content-center align-items-center">
                        <Col xs={12} md={6} className="d-flex align-items-center justify-content-center p-3 whiteBackground lighter">
                            <Form className="form" onSubmit={sendEmail}>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className="formLabel">Napisz do Nas!</Form.Label>
                                    <Form.Control value={email} name="email" onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email*" className="formControl" required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPhone">
                                    <Form.Control value={phoneNumber}
                                                  name="phone"
                                                  onChange={(e) => {
                                                      if (e.target.value === "" || re.test(e.target.value)) {
                                                          setPhoneNumber(e.target.value);
                                                      }
                                                  }}
                                                  type="number" placeholder="Nr telefonu (opcjonalnie)" className="formControl" />
                                </Form.Group>

                                <Form.Group className="mb-3 position-relative" controlId="formBasicText">
                                    <Form.Control value={message} name="message" onChange={(e) => setMessage(e.target.value)} as="textarea" placeholder="Treść wiadomości*" className="formControl textArea" required />
                                </Form.Group>

                                {show ? (
                                    <Button type="submit" className="formBtn">
                                        WYŚLIJ
                                    </Button>
                                ) : (
                                    <Alert variant="success" onClose={() => setShow(true)} dismissible>
                                        <p>Wysłano!</p>
                                    </Alert>
                                )}
                            </Form>
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