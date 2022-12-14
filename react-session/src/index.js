import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/brands.min.css';
import '@fortawesome/fontawesome-free/css/solid.min.css';
import './index.css';
import App from './App';
import { AuthProvider } from './store/AuthProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
