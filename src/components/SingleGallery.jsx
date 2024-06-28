import {Button, Carousel, Container, Row} from "react-bootstrap";
import {useState} from "react";

// eslint-disable-next-line react/prop-types
export default function SingleGallery({ title, description }) {

    const [kitchenImg, setKitchenImg] = useState(0);
    const totalImages = 70;

    const handleSelect = (selectedIndex, e) => {
        setKitchenImg(selectedIndex);
    };

    const handlePrev = () => {
        setKitchenImg((prevIndex) => (prevIndex === 0 ? totalImages - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setKitchenImg((prevIndex) => (prevIndex === totalImages - 1 ? 0 : prevIndex + 1));
    };

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
                <Carousel fade activeIndex={kitchenImg} onSelect={handleSelect} controls={false} indicators={false}>
                    {Array.from({ length: totalImages }).map((_, i) => (
                        <Carousel.Item key={i}>
                            <img className="d-block w-100" src={`/kitchen/${i}.jpg`} alt={`Slajd ${i} - zdjęcie realizacji kuchni`} />
                        </Carousel.Item>
                    ))}
                </Carousel>
                <Button variant="primary" onClick={handleNext}>Następne</Button>
                <Button variant="primary" onClick={handlePrev}>Poprzednie</Button>
            </Row>
        </Container>
    )
}