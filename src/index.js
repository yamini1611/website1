import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/navbar';
import Homepage from './components/homepage';
import Footer from './components/footer';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Navbar />
    <Homepage />
    <Footer /> 
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
