import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { UserPorvider } from './contexts/user.context';
import { ProductsProvider } from './contexts/products.context';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserPorvider>
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </UserPorvider>
    </BrowserRouter>
  </React.StrictMode>
);
