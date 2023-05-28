import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/pages/App/App';
import Chat from './components/pages/Chat/Chat';
import Main from './components/pages/Main/Main';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
    {/* <Chat /> */}
    {/* <Main /> */}
  </React.StrictMode>
);
