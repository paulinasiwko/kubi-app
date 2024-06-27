import {Container, Row} from "react-bootstrap";
import GalleryGrid from "../components/GalleryGrid.jsx";


export default function Gallery() {
    return (
        <Container fluid>
            <Row className="text-center m-5 px-lg-5">
                <h3 className="mb-4 text-uppercase fw-semibold">Galeria</h3>
                <div className="m-auto">
                    <p>
                        Zapraszamy do naszej galerii, gdzie znajdziesz projekty zrealizowane z pasją i precyzją.
                        Każde zdjęcie pokazuje naszą dbałość o detale i indywidualne podejście do klientów.
                        Szukasz inspiracji dla swojego wnętrza? Zobacz, jak nasze meble łączą funkcjonalność i estetykę.
                    </p>
                    <p>
                        Sprawdź, co możemy stworzyć również dla Ciebie!
                    </p>
                </div>
            </Row>
            <GalleryGrid/>
        </Container>
    )
}