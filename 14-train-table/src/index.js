import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import TrainTable from './components/TrainTable/TrainTable';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TrainTable />
  </React.StrictMode>
);
