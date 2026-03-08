import React from 'react';
import ReactDOM from 'react-dom/client';
import { CookiesProvider } from "react-cookie";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import HomePage from './landing page/home/HomePage';
import SignUp from './landing page/signup/SignUp';
import Login from './landing page/login/Login';
import Pricing from './landing page/pricing/PricingPage';
import Product from './landing page/products/ProductsPage';
import Support from './landing page/support/SupportPage';
import About from './landing page/about/AboutPage';
import NotFound from './landing page/NotFound';
import Navbar from './landing page/Navbar';
import Footer from './landing page/Footer';
import '../src/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CookiesProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />

    </BrowserRouter>
  </CookiesProvider>
);
