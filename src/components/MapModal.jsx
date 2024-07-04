import {Button, Modal} from "react-bootstrap";
import '../styles/MapModal.css';
import Map from "./Map.jsx";

export default function MapModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <Map className="mapBig" />
            </Modal.Body>
            <Modal.Footer>
                {/* eslint-disable-next-line react/prop-types */}
                <Button onClick={props.onHide} className="modalBtn">Zamknij</Button>
            </Modal.Footer>
        </Modal>
    );
}