import {Button, Carousel, Container, Row} from "react-bootstrap";
import {useState} from "react";

// eslint-disable-next-line react/prop-types
export default function SingleGallery({ title, description }) {

    const [kitchenImg, setKitchenImg] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setKitchenImg(selectedIndex);
    };

    const handlePrev = () => {
        setKitchenImg((prevIndex) => (prevIndex === 0 ? 70 - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setKitchenImg((prevIndex) => (prevIndex === 70 - 1 ? 0 : prevIndex + 1));
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
                    <Carousel.Item key={kitchenImg}>
                        <img className="d-block w-100" src={`/kitchen/${kitchenImg}.jpg`} alt={`Slajd ${kitchenImg} - zdjęcie realizacji kuchni`} />
                    </Carousel.Item>
                </Carousel>
                <Button variant="primary" onClick={handleNext}>Następne</Button>
                <Button variant="primary" onClick={handlePrev}>Poprzednie</Button>
            </Row>
        </Container>
    )
}