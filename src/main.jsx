import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'leaflet/dist/leaflet.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// React Bootstrap Configuration
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Layout from "./pages/Layout.jsx";
import Homepage from "./pages/Homepage.jsx";
import Gallery from "./pages/Gallery.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import SingleGallery from "./components/SingleGallery.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout page={<Homepage />} />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/gallery",
        element: <Layout page={<Gallery />} />,
    },
    {
        path: "/about",
        element: <Layout page={<About />} />,
    },
    {
        path: "/contact",
        element: <Layout page={<Contact />} />,
    },
    {
        path: "/kitchen",
        element: <Layout page={<SingleGallery title="Kuchnie"
                                              description="Zobacz, jak tworzymy kuchnie na wymiar, które doskonale łączą praktyczność z elegancją. Nasze realizacje odzwierciedlają różnorodne style i potrzeby naszych klientów. Przekonaj się, jak możemy przekształcić Twoją kuchnię w serce domu, gdzie każdy detal ma znaczenie."
                                              folderName="kitchen" />} />,
    },
    {
        path: "/bathroom",
        element: <Layout page={<SingleGallery title="Łazienki"
                                              description="Odkryj nasze realizacje łazienek na wymiar, gdzie funkcjonalność spotyka się z luksusem. Każdy projekt jest starannie przemyślany, aby sprostać indywidualnym potrzebom naszych klientów. Przeglądaj naszą galerię, by zobaczyć, jak możemy przemienić Twoją łazienkę w elegancką i wygodną przestrzeń relaksu."
                                              folderName="bathroom" />} />,
    },
    {
        path: "/rtv",
        element: <Layout page={<SingleGallery title="Meble pokojowe i RTV"
                                              description="Przeglądaj naszą galerię mebli pokojowych i RTV na wymiar, gdzie nowoczesny design spotyka się z funkcjonalnością. Nasze realizacje  tworzą przestrzenie, które są zarówno piękne, jak i praktyczne. Każdy projekt łączy estetykę z wygodą, idealnie komponując się z wnętrzem. Zainspiruj się naszymi pomysłami i zobacz, jak możemy odmienić Twój salon."
                                              folderName="rtv" />} />,
    },
    {
        path: "/wardrobe",
        element: <Layout page={<SingleGallery title="Szafy i garderoby"
                                              description="Zapraszamy do naszej galerii szaf i garderób na wymiar. Nasze realizacje są tworzone z myślą o maksymalnym wykorzystaniu przestrzeni i dostosowane do potrzeb klientów. Każdy projekt łączy praktyczne rozwiązania z estetyką, tworząc uporządkowane i stylowe wnętrza. Zainspiruj się naszymi pomysłami i zobacz, jak możemy zorganizować Twoją przestrzeń."
                                              folderName="wardrobe" />} />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)

