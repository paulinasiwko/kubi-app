import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// React Bootstrap Configuration
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Layout from "./components/Layout.jsx";
import Homepage from "./pages/Homepage.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<Homepage />*/}
      <Layout page={<Homepage />} />
  </React.StrictMode>,
)

