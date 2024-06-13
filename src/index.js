import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/general.css';
import './styles/header.css';
import './styles/footer.css';
import './styles/news-page.css';
import './js/user-sign-in';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  

  </React.StrictMode>
);


reportWebVitals();
