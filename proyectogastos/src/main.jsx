import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import ProviderApp from './context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProviderApp>
      <App />
    </ProviderApp>
  </React.StrictMode>,
);
