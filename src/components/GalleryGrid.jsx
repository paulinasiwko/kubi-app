import {Col, Row} from "react-bootstrap";
import '../styles/GalleryGrid.css';

export default function GalleryGrid() {
    return (
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
    )
}