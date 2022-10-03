import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './css/common.css';
import Scroll from './components/Scroll';
import App from './App';
import AppData from './App_data';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Scroll />
      <AppData/>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
