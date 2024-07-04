import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'leaflet/dist/leaflet.css';

// React Bootstrap Configuration
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Layout from "./pages/Layout.jsx";
import Homepage from "./pages/Homepage.jsx";
import Gallery from "./pages/Gallery.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import SingleGallery from "./components/SingleGallery.jsx";
import GalleryGrid from "./components/GalleryGrid.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/*<Layout page={<GalleryGrid />} />*/}
      {/*<Layout page={<About />} />*/}
      {/*<Layout page={<Homepage />} />*/}
      <Layout page={<Contact />} />
      {/*<Layout page={<SingleGallery title="Kuchnie"*/}
      {/*                             description="Zobacz, jak tworzymy kuchnie na wymiar, które doskonale łączą praktyczność z elegancją. Nasze realizacje odzwierciedlają różnorodne style i potrzeby naszych klientów. Przekonaj się, jak możemy przekształcić Twoją kuchnię w serce domu, gdzie każdy detal ma znaczenie."*/}
      {/*                             folderName="kitchen" />} />*/}
  </React.StrictMode>,
)

