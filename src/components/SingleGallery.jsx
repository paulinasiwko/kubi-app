import {Button, Carousel, Container, Row, Col} from "react-bootstrap";
import { useState} from "react";
import '../styles/SingleGallery.css';

// eslint-disable-next-line react/prop-types
export default function SingleGallery({ title, description }) {

    const [kitchenImg, setKitchenImg] = useState(0);
    const totalImages = 70;

    const handleSelect = (selectedIndex) => {
        setKitchenImg(selectedIndex);
    };

    const handlePrev = () => {
        setKitchenImg((prevIndex) => (prevIndex === 0 ? totalImages - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setKitchenImg((prevIndex) => (prevIndex === totalImages - 1 ? 0 : prevIndex + 1));
    };

    const getSmallGalleryImage = (offset) => {
        const index = (kitchenImg + offset);
        return `/img/kitchen/${index}.jpg`;
    }

    return (
        <Container fluid>
            <Row className="text-center m-5 px-lg-5">
                <h3 className="mb-4 text-uppercase fw-semibold">{title}</h3>
                <div className="m-auto px-lg-5">
                    <p>
                        {description}
                    </p>
                </div>
            </Row>
            <Row className="d-flex flex-row justify-content-center align-items-center mb-5 text-center">
                <Col>
                    <Button className="carouselBtn" onClick={handlePrev}>
                        <i className="bi bi-arrow-left"></i>
                    </Button>
                </Col>
                <Col>
                    <Carousel fade activeIndex={kitchenImg} onSelect={handleSelect} controls={false} indicators={false} interval={null}>
                        {Array.from({ length: totalImages }).map((_, i) => (
                            <Carousel.Item key={i} className="d-flex justify-content-center align-items-center">
                                <div className="gallery bigGallery" style={{backgroundImage: `url(/img/kitchen/${i}.jpg)`}}></div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
                <Col>
                <Button className="carouselBtn" onClick={handleNext}>
                        <i className="bi bi-arrow-right"></i>
                    </Button>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center align-content-center text-center mb-5 pt-4">
                <Col>
                    <Button className="carouselBtn small">
                        <i className="bi bi-arrow-left"></i>
                    </Button>
                </Col>
                {[0, 1, 2, 3, 4].map((offset) => (
                    <Col key={offset}>
                        <div className="gallery smallGallery" style={{ backgroundImage: `url(${getSmallGalleryImage(offset)})`}}></div>
                    </Col>
                ))}


                {/*<Col>*/}
                {/*    <div className="gallery smallGallery" style={{ backgroundImage: `url(/img/kitchen/${kitchenImg}.jpg)` }}></div>*/}
                {/*</Col>*/}
                {/*<Col>*/}
                {/*    <div className="gallery smallGallery" style={{ backgroundImage: `url(/img/kitchen/${kitchenImg}.jpg)` }}></div>*/}
                {/*</Col>*/}
                {/*<Col>*/}
                {/*    <div className="gallery smallGallery" style={{ backgroundImage: `url(/img/kitchen/${kitchenImg}.jpg)` }}></div>*/}
                {/*</Col>*/}
                {/*<Col>*/}
                {/*    <div className="gallery smallGallery" style={{ backgroundImage: `url(/img/kitchen/${kitchenImg}.jpg)` }}></div>*/}
                {/*</Col>*/}
                {/*<Col>*/}
                {/*    <div className="gallery smallGallery" style={{ backgroundImage: `url(/img/kitchen/${kitchenImg}.jpg)` }}></div>*/}
                {/*</Col>*/}
                <Col>
                    <Button className="carouselBtn small">
                        <i className="bi bi-arrow-right"></i>
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}