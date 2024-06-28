import {Container, Image, Row, Col, Button} from "react-bootstrap";
import '../styles/About.css';

export default function About() {
    return (
        <Container fluid className="p-0">
            <Row className="g-0">
                <Image src="/img/background/about-1.jpg" alt="Photo of a minimalistic home office in light tones" className="aboutImg imgMain"/>
                <div className="aboutIntro">
                    <h5 className="fw-semibold pt-md-4 pb-md-3">Kim Jesteśmy?</h5>
                    <p>
                        Od 2020 roku firma <b className="bold">"KUBI - Producent Mebli"</b> dynamicznie się rozwija,
                        oferując najwyższej jakości usługi stolarskie w całej Polsce.
                    </p>
                </div>
            </Row>
            <Row className="text-center m-5 px-lg-5">
                <h5 className="fw-semibold mb-4">Rodzinna Tradycja i Nowoczesność</h5>
                <p>
                    Jesteśmy rodzinną firmą z Jegłownika, która z dumą kontynuuje tradycje stolarskie.
                    Specjalizujemy się w projektowaniu i tworzeniu mebli na wymiar, dostosowanych
                    do indywidualnych potrzeb naszych klientów.
                </p>
                <p>
                    W naszej ofercie znajdują się <b className="bold">zabudowy kuchenne, szafy, garderoby, meble pokojowe,
                    sypialniane oraz RTV</b>. Każdy projekt realizujemy z pasją i dbałością o detale,
                    zapewniając, że nasze meble są zarówno funkcjonalne, jak i estetyczne.
                </p>
            </Row>
            <Row className="greyRow">
                <Col xs={12} md={6} className="px-5 text">
                    <h5 className="fw-semibold mb-4">Doświadczenie i Zaufanie Klientów</h5>
                    <p>
                        Nasze doświadczenie oraz zaangażowanie pozwoliły nam zdobyć zaufanie <b className="bold">setek zadowolonych klientów</b>.
                        Realizujemy zarówno małe, jak i duże projekty, dostosowując się do unikalnych potrzeb i oczekiwań.
                        Naszą pracę wykonujemy solidnie, z najwyższą starannością, co przekłada się na trwałość i jakość naszych produktów.
                    </p>
                </Col>
                <Col xs={12} md={6} className="imgRightSm">
                    <Image src="/img/background/about-2.jpg" alt="Photo of a minimalistic living room with coutch and plants." className="aboutImg imgRight"/>
                </Col>
            </Row>
            <Row className="greyRow">
                <Col xs={12} md={6}>
                    <Image src="/img/background/about-3.jpg" alt="Photo of a minimalistic living room with coutch and plants." className="aboutImg imgLeft"/>
                </Col>
                <Col xs={12} md={6} className="px-5 text">
                    <h5 className="fw-semibold my-4">Najwyższa Jakość Materiałów i Wykonania</h5>
                    <p>
                        Do produkcji naszych mebli używamy wyłącznie materiałów oraz akcesoriów meblowych <b className="bold">najwyższej jakości</b>.
                        Wkładamy dużo pracy i serca w każdy etap realizacji, od projektu, przez dobór materiałów, aż po finalny
                        montaż. Naszym priorytetem jest zadowolenie klientów, dlatego zawsze staramy się przewyższyć ich oczekiwania,
                        oferując rozwiązania, które łączą w sobie nowoczesny design z funkcjonalnością.
                    </p>
                </Col>
            </Row>
            <Row className="text-center m-5 px-lg-5 d-flex justify-content-center align-items-center">
                <h5 className="fw-semibold mb-4">Skontaktuj się z Nami!</h5>
                <p>
                    Jesteście zainteresowani? Skontaktujcie się z nami!
                    Z przyjemnością odpowiemy na wszelkie pytania, udzielimy
                    fachowych porad i rozwiejemy wszelkie wątpliwości.
                </p>
                <p>
                    Nasza firma istnieje, aby realizować Wasze wizje idealnych wnętrz.
                </p>
                <Button className="contactBtn">Kontakt</Button>
            </Row>
        </Container>
    )
}