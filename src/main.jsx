import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Homepage from "./pages/Homepage.jsx";

// React Bootstrap Configuration
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>,
)

