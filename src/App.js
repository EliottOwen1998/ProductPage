import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';  // Import global styles here
import Header from './components/Header';  // Import Header component
import ProductDetail from './components/ProductDetail';
import ProductPage from './components/ProductPage';
import ProductDetailFromApi from './components/ProductDetailFromApi';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductDetail />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/products-from-api" element={<ProductDetailFromApi />} />
      </Routes>
    </Router>
  );
}

export default App;
