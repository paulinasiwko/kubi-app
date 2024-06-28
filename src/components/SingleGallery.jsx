import {Carousel, Container, Row} from "react-bootstrap";
import {useState} from "react";

// eslint-disable-next-line react/prop-types
export default function SingleGallery({ title, description }) {

    const [kitchenImg, setKitchenImg] = useState(0);

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
                    <Carousel.Item key={kitchenImg}>
                        <img className="d-block w-100" src={`/kitchen/${kitchenImg}.jpg`} alt={`Slide ${kitchenImg}`} />
                    </Carousel.Item>
                </Carousel>


                {/*<Carousel fade>*/}
                {/*    /!* eslint-disable-next-line react/prop-types *!/*/}
                {/*    {images.map((image, index) => (*/}
                {/*        <Carousel.Item key={index}>*/}
                {/*            <img className="d-block w-100" src={image.src} alt={`Slide ${index}`} />*/}
                {/*        </Carousel.Item>*/}
                {/*    ))}*/}
                {/*</Carousel>*/}
            </Row>
        </Container>
    )
}