import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppProvider from './provider/AppProvider';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>   
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>  
  </React.StrictMode>
);


reportWebVitals();
