import Menu from "./Menu.jsx";
import Footer from "./Footer.jsx";

export default function Layout(page) {
    return (
        <>
            <Menu />
            {page}
            <Footer />
        </>
    )
}