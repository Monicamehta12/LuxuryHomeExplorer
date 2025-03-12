import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MortgageCalculator from './pages/Buying/MortgageCalculator';
import Listings from './pages/Buying/Listings';
import BuyingGuide from './pages/Buying/BuyingGuide';
import SellingGuide from './pages/Selling/SellingGuide';
import FreeHomeEvaluation from './pages/Selling/FreeHomeEvaluation';
import RealEstateReport from './pages/Information/RealEstateReport';
import ScrollTop from './components/ScrollTop';

const App = () => {
  return (
    <Router>
      <ScrollTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage /> } />
        <Route path="/buying/mortgage-calculator" element={<MortgageCalculator />} />
        <Route path="/buying/listings" element={<Listings />} />
        <Route path="/buying/buying-guide" element={<BuyingGuide />} />
        <Route path="/selling/selling-guide" element={<SellingGuide />} />
        <Route path="/selling/free-home-evaluation" element={<FreeHomeEvaluation />} />
        <Route path="/information/real-estate-report" element={<RealEstateReport />} />
        {/* Redirect unknown routes to HomePage */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
