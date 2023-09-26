import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { LandingPage } from './pages/LandingPage/Home';
import { Checkout } from './pages/Checkout';
import { Login } from './pages/Login';
import { PlantProvider } from './hooks/usePlant';
import { CartProvider } from './hooks/useCart';

const router = createBrowserRouter([
  {
    path: '/dash',
    element: <App />
  },
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: 'checkout',
    element: <Checkout />
  },
  {
    path: '/login',
    element: <Login />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PlantProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </PlantProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
