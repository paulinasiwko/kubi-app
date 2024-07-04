import {Row} from "react-bootstrap";
import '../styles/GalleryGrid.css';
import GalleryGridElement from "./GalleryGridElement.jsx";
import { Link } from "react-router-dom";

export default function GalleryGrid() {
    return (
        <Row id="galleryGrid" className="text-center g-0">
            <Link to={"/wardrobe"} className="gridItem galleryGridArea" id="wardrobe"><GalleryGridElement title="Szafy i garderoby" /></Link>
            <Link to={"/rtv"} className="gridItem galleryGridArea" id="rtv"><GalleryGridElement title="Meble pokojowe i RTV" /></Link>
            <Link to={"/bathroom"} className="gridItem galleryGridArea" id="bathroom"><GalleryGridElement title="Łazienki" /></Link>
            <Link to={"/kitchen"} className="gridItem galleryGridArea" id="kitchen"><GalleryGridElement title="Kuchnie" /></Link>
        </Row>
    )
}