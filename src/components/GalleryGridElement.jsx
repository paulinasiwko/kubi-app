import {Col} from "react-bootstrap";
import '../styles/GalleryGrid.css';

// eslint-disable-next-line react/prop-types
export default function GalleryGridElement({id, title}) {
    return (
        <Col id={id} className="galleryGridArea">
            <p className="heading">{title}</p>
        </Col>
    )
}