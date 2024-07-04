import {Row} from "react-bootstrap";
import '../styles/GalleryGrid.css';
import GalleryGridElement from "./GalleryGridElement.jsx";

export default function GalleryGrid() {
    return (
        <Row id="galleryGrid" className="text-center g-0">
            <GalleryGridElement id="wardrobe" title="Szafy i garderoby" />
            <GalleryGridElement id="rtv" title="Meble pokojowe i RTV" />
            <GalleryGridElement id="bathroom" title="Łazienki" />
            <GalleryGridElement id="kitchen" title="Kuchnie" />
        </Row>
    )
}