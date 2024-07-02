import {Col, Container, Form, Row, Button} from "react-bootstrap";
import '../styles/Contact.css';

export default function Contact() {
    return (
        <Container fluid className="p-0">
            <Row className="g-0 contactBackground">
                <Col className="m-auto d-flex align-items-center justify-content-end pe-5">
                    <Form className="form">

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Napisz do Nas!</Form.Label>
                            <Form.Control type="email" placeholder="Email*" className="formControl" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Control type="number" placeholder="Nr telefonu (opcjonalnie)" className="formControl" />
                        </Form.Group>

                        <Form.Group className="mb-3 position-relative" controlId="formBasicText">
                            <Form.Control as="textarea" placeholder="Treść wiadomości*" className="formControl textArea" />
                        </Form.Group>

                        <Button type="submit" className="formBtn">
                            WYŚLIJ
                        </Button>
                    </Form>

                </Col>

                <Col className="m-auto d-flex align-items-center justify-content-start ps-5">
                    <div>
                        <h5 className="fw-bold">KUBI - Producent Mebli</h5>
                        <p>Meble na wymiar Jakub Podufalski</p>
                        <p>82-335 Jegłownik, ul. Jasna 6</p>
                        <p>NIP: 5783140291 <br/> REGON: 385226970</p>
                        <p>Tel: (+48) 502-472-763 <br/> E-mail: kubimeble@icloud.com</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}