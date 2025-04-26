import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header';
import ProductDetail from './components/ProductDetail';
import ProductPage from './components/ProductPage';

function App() {
  return (
    <Router>
      <Header />
    <Routes>
        <Route path="/" element={<ProductDetail />} />  {/* Home page */}
        <Route path="/product/:id" element={<ProductPage />} />  {/* Product detail page */}
    </Routes>
</Router>
  );
}

export default App;
