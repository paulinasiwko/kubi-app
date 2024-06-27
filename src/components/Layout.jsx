import Menu from "./Menu.jsx";
import Footer from "./Footer.jsx";

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