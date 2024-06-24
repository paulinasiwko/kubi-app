import Menu from "../components/Menu.jsx";
import {Figure, FigureCaption, FigureImage} from "react-bootstrap";


export default function Homepage() {;

    return (
        <>
            <Menu />
            <Figure>
                <FigureImage src="../src/assets/img/background/homepage.jpg" alt="Photo of a living room" />
                <FigureCaption>
                    Poznaj sztukę wyrafinowanego meblarstwa
                </FigureCaption>
            </Figure>

        </>
    )
}
