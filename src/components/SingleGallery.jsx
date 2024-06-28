import {Carousel, Container, Row} from "react-bootstrap";

// eslint-disable-next-line react/prop-types
export default function SingleGallery({ title, description, images }) {
    return (
        <Container fluid>
            <Row className="text-center m-5 px-lg-5">
                <h3 className="mb-4 text-uppercase fw-semibold">{title}</h3>
                <div className="m-auto">
                    <p>
                        {description}
                    </p>
                </div>
            </Row>
            <Row>
                <Carousel fade>
                    {/* eslint-disable-next-line react/prop-types */}
                    {images.map((image, index) => (
                        <Carousel.Item key={index}>
                            <img className="d-block w-100" src={image.src} alt={`Slide ${index}`} />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Row>
        </Container>
    )
}