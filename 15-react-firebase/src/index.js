import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/reset.css'
import './styles/main.css'
import Login from './components/pages/Login/Login';
import Dashboard from './components/pages/Dashboard/Dashboard';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

// Stworz komponent Dashboard, który będzie realizował następujace załozenia:

// 1. Stworz Formularz z polami author i message
// 2. Stworz Liste, ktora będzie renderowała wiadomości dodane w formularzu
// 3. Po uzupelnieniu formularza, dodaj zawartosc wiadomosc do listy
// 4. Dodaj walidacje ze pole message musi miec minimum 4 znaki
// 5. Dane zapisuj i odczytuj z localStorage
const config = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={config} />
  </React.StrictMode>
);


