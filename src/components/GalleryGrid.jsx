import {Row} from "react-bootstrap";
import '../styles/GalleryGrid.css';
import GalleryGridElement from "./GalleryGridElement.jsx";
import { Link } from "react-router-dom";

export default function GalleryGrid() {
    return (
        <Row id="galleryGrid" className="text-center g-0">
            <Link to={"/wardrobe"}><GalleryGridElement id="wardrobe" title="Szafy i garderoby" /></Link>
            <Link to={"/rtv"}><GalleryGridElement id="rtv" title="Meble pokojowe i RTV" /></Link>
            <Link to={"/bathroom"}><GalleryGridElement id="bathroom" title="Łazienki" /></Link>
            <Link to={"/kitchen"}><GalleryGridElement id="kitchen" title="Kuchnie" /></Link>
        </Row>
    )
}