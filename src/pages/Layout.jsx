import Menu from "../components/Menu.jsx";
import Footer from "../components/Footer.jsx";

// eslint-disable-next-line react/prop-types
export default function Layout({ page }) {
    return (
        <>
            <Menu />
            {page}
            <Footer />
        </>
    )
}