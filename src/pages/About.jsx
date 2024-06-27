import {Container, Image, Row, Col } from "react-bootstrap";
import about1 from "../assets/img/background/about-1.jpg";
import about2 from "../assets/img/background/about-2.jpg";
import about3 from "../assets/img/background/about-3.jpg";
import '../styles/About.css';

export default function About() {
    return (
        <Container fluid className="p-0">
            <Row className="g-0">
                <Image src={about1} alt="Photo of a minimalistic home office in light tones" className="aboutImg imgMain"/>
                <div className="aboutIntro">
                    <h5 className="fw-semibold py-4">Kim Jesteśmy?</h5>
                    <p>
                        Od 2020 roku firma "KUBI - Producent Mebli" dynamicznie się rozwija,
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
                    W naszej ofercie znajdują się zabudowy kuchenne, szafy, garderoby, meble pokojowe,
                    sypialniane oraz RTV. Każdy projekt realizujemy z pasją i dbałością o detale,
                    zapewniając, że nasze meble są zarówno funkcjonalne, jak i estetyczne.
                </p>
            </Row>
            <Row className="greyRow">
                <Col xs={12} md={6} className="px-5">
                    <h5 className="fw-semibold mb-4">Doświadczenie i Zaufanie Klientów</h5>
                    <p>
                        Nasze doświadczenie oraz zaangażowanie pozwoliły nam zdobyć zaufanie
                        setek zadowolonych klientów. Realizujemy zarówno małe, jak i duże projekty,
                        dostosowując się do unikalnych potrzeb i oczekiwań. Naszą pracę wykonujemy solidnie,
                        z najwyższą starannością, co przekłada się na trwałość i jakość naszych produktów.
                    </p>
                </Col>
                <Col xs={12} md={6}>
                    <Image src={about2} alt="Photo of a minimalistic living room with coutch and plants." className="aboutImg imgRight"/>
                </Col>
            </Row>
            <Row className="greyRow">
                <Col xs={12} md={6}>
                    <Image src={about3} alt="Photo of a minimalistic living room with coutch and plants." className="aboutImg imgLeft"/>
                </Col>
                <Col xs={12} md={6} className="px-5">
                    <h5 className="fw-semibold mb-4">Najwyższa Jakość Materiałów i Wykonania</h5>
                    <p>
                        Do produkcji naszych mebli używamy wyłącznie materiałów oraz akcesoriów meblowych najwyższej jakości.
                        Wkładamy dużo pracy i serca w każdy etap realizacji, od projektu, przez dobór materiałów, aż po finalny
                        montaż. Naszym priorytetem jest zadowolenie klientów, dlatego zawsze staramy się przewyższyć ich oczekiwania,
                        oferując rozwiązania, które łączą w sobie nowoczesny design z funkcjonalnością.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}