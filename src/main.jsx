import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// React Bootstrap Configuration
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Layout from "./pages/Layout.jsx";
import Homepage from "./pages/Homepage.jsx";
import Gallery from "./pages/Gallery.jsx";
import About from "./pages/About.jsx";
import SingleGallery from "./components/SingleGallery.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Layout page={<SingleGallery title="Kuchnie" description="tekst" />} />
  </React.StrictMode>,
)

