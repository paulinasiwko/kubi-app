import Menu from "../components/Menu.jsx";
import '../styles/Homepage.css';
import backgroundImg from "../assets/img/background/homepage2.jpg";
import {Col, Container, Image, Row} from "react-bootstrap";
import Footer from "../components/Footer.jsx";


export default function Homepage() {

    return (
        <>
            <Menu />
            <Container fluid className="p-0">
                <Row className="g-0">
                    <Image src={backgroundImg} alt="Photo of a living room" className="backgroundImg" />
                    <div className="cardContainer">
                        <h5 className="homepageCard">Poznaj sztukę wyrafinowanego meblarstwa</h5>
                    </div>
                </Row>
                <Row className="text-center m-5">
                    <h3 className="mb-4 text-uppercase fw-semibold">Kategorie</h3>
                    <div className="">
                        <p>
                            Każdy z naszych projektów powstaje z myślą o Tobie – Twoich potrzebach i marzeniach.
                            Bez względu na to, czy szukasz idealnej kuchni, czy funkcjonalnych rozwiązań do biura
                            – u nas znajdziesz to, czego potrzebujesz.
                        </p>
                        <p>
                            Przeglądaj nasze kategorie produktów i znajdź inspirację do stworzenia wymarzonego wnętrza.
                        </p>
                        <p>
                            Zaufaj nam, a my pomożemy Ci w realizacji Twojej wizji, dbając o każdy detal.
                        </p>
                    </div>
                </Row>
                <Row id="galleryGrid" className="text-center g-0">
                    <Col id="wardrobe" className="galleryGridArea">
                        <p className="heading">Szafy i garderoby</p>
                    </Col>
                    <Col id="rtv" className="galleryGridArea">
                        <p className="heading">Meble pokojowe i RTV</p>
                    </Col>
                    <Col id="bathroom" className="galleryGridArea">
                        <p className="heading">Łazienki</p>
                    </Col>
                    <Col id="kitchen" className="galleryGridArea">
                        <p className="heading">Kuchnie</p>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}
