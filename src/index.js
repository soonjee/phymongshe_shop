import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Scroll from './components/Scroll';
import '../src/css/reset.css';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Scroll />
      <App />
    </React.StrictMode>
  </BrowserRouter>
);