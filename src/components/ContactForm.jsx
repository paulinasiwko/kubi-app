import {Alert, Button, Form} from "react-bootstrap";
import {useState} from "react";
import emailjs from "@emailjs/browser";
import '../styles/ContactForm.css';

export default function ContactForm() {
    const [show, setShow] = useState(true);
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");

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
        <>
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
        </>
    );
}