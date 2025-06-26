import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Homepage } from './Homepage';
import { Product } from './Product';
import ProductPage from './ProductPage';
import AdminLayout from './admin/AdminLayout';

// Assuming these admin pages exist. Create similar components for your needs.
import Dashboard from './admin/Dashboard';
import Products from './admin/Products';
import Orders from './admin/Orders';
import Customers from './admin/Customers';
import AddProduct from './admin/AddProduct';
import Cart from './Cart';
import Signin from './Signin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Homepage/><Product/></>} />
        <Route path="/product" element={<><Homepage/><ProductPage/></>} />
        <Route path="/cart" element={<Cart />}/>
        <Route path="/signin" element={<Signin />}/>
        <Route path="/admin" element={<AdminLayout/>}>
          {/* Nested routes for admin */}
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />
          <Route path="add-product" element={<AddProduct />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
