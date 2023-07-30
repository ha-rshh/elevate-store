import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ProductsProvider } from './context/ProductsContext';
import { CartProvider } from './context/CartContext';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
  <ProductsProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ProductsProvider>
);
