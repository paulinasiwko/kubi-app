import Menu from "../components/Menu.jsx";
import '../styles/Homepage.css';
import backgroundImg from "../assets/img/background/homepage2.jpg";
import {Container, Image, Row} from "react-bootstrap";


export default function Homepage() {

    return (
        <>
            <Menu />
            <Container fluid className="p-0">
                <Row className="g-0">
                    <Image src={backgroundImg} alt="Photo of a living room" className="backgroundImg" />
                    <h5 className="homepageCard">Poznaj sztukę wyrafinowanego meblarstwa</h5>
                </Row>
            </Container>

        </>
    )
}
