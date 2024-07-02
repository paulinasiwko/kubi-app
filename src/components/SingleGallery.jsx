import {Button, Carousel, Container, Row, Col} from "react-bootstrap";
import { useState } from "react";
import '../styles/SingleGallery.css';

// eslint-disable-next-line react/prop-types
export default function SingleGallery({ title, description, folderName }) {
    const [bigGalleryImage, setBigGalleryImage] = useState(0);
    const [smallGalleryStartIndex, setSmallGalleryStartIndex] = useState(0);
    const totalImages = 70;

    const handleSelect = (selectedIndex) => {
        setBigGalleryImage(selectedIndex);
        setSmallGalleryStartIndex(selectedIndex);
    };

    const handlePrev = () => {
        const newIndex = bigGalleryImage === 0 ? totalImages - 1 : bigGalleryImage - 1;
        setBigGalleryImage(newIndex);
        setSmallGalleryStartIndex(newIndex);
    };

    const handleNext = () => {
        const newIndex = bigGalleryImage === totalImages - 1 ? 0 : bigGalleryImage + 1;
        setBigGalleryImage(newIndex);
        setSmallGalleryStartIndex(newIndex);
    };

    const handleSmallPrev = () => {
        setSmallGalleryStartIndex((prevIndex) => (prevIndex === 0 ? totalImages - 1 : prevIndex - 1));
    };

    const handleSmallNext = () => {
        setSmallGalleryStartIndex((prevIndex) => (prevIndex === totalImages - 1 ? 0 : prevIndex + 1));
    };

    const getSmallGalleryImage = (offset) => {
        const index = (smallGalleryStartIndex + offset) % totalImages;
        return `/img/${folderName}/${index}.jpg`;
    };

    const handleSmallImageClick = (index) => {
        setBigGalleryImage(index);
    }

    return (
        <Container fluid>
            <Row className="text-center m-5 px-lg-5">
                <h3 className="mb-4 text-uppercase fw-semibold">{title}</h3>
                <div className="m-auto px-lg-5">
                    <p>{description}</p>
                </div>
            </Row>
            <Row className="d-flex flex-row justify-content-center align-items-center mb-5 text-center">
                <Col xs={2} md={1}>
                    <Button className="carouselBtn" onClick={handlePrev}>
                        <i className="bi bi-arrow-left"></i>
                    </Button>
                </Col>
                <Col xs={8} md={10}>
                    <Carousel fade activeIndex={bigGalleryImage} onSelect={handleSelect} controls={false} indicators={false} interval={null}>
                        {Array.from({ length: totalImages }).map((_, i) => (
                            <Carousel.Item key={i} className="d-flex justify-content-center align-items-center">
                                <div className="gallery bigGallery" style={{ backgroundImage: `url(/img/${folderName}/${i}.jpg)` }}></div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
                <Col xs={2} md={1}>
                    <Button className="carouselBtn" onClick={handleNext}>
                        <i className="bi bi-arrow-right"></i>
                    </Button>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center align-content-center text-center mb-5 pt-4">
                <Col xs={2} md={1}>
                    <Button className="carouselBtn small" onClick={handleSmallPrev}>
                        <i className="bi bi-arrow-left"></i>
                    </Button>
                </Col>
                {[0, 1, 2, 3, 4].map((offset) => (
                    <Col xs={2} md={2} key={offset}>
                        <div className="gallery smallGallery" style={{ backgroundImage: `url(${getSmallGalleryImage(offset)})`}} onClick={() => handleSmallImageClick((smallGalleryStartIndex + offset))}></div>
                    </Col>
                ))}
                <Col xs={2} md={1}>
                    <Button className="carouselBtn small" onClick={handleSmallNext}>
                        <i className="bi bi-arrow-right"></i>
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}