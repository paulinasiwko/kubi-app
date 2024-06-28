import '../styles/Homepage.css';
import { Container, Image, Row} from "react-bootstrap";
import GalleryGrid from "../components/GalleryGrid.jsx";


export default function Homepage() {

    return (
        <Container fluid className="p-0">
            <Row className="g-0">
                <Image src="/img/background/homepage2.jpg" alt="Photo of a living room" className="backgroundImg" />
                <div className="cardContainer">
                    <h5 className="homepageCard">Poznaj sztukę wyrafinowanego meblarstwa</h5>
                </div>
            </Row>
            <Row className="text-center m-5 px-lg-5">
                <h3 className="mb-4 text-uppercase fw-semibold">Kategorie</h3>
                <div className="m-auto">
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
            <GalleryGrid />
        </Container>
    )
}
