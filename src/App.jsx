import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { About, Contact, Newsletter, Latest, Archive, Services, Home } from './views';
import { Header, Footer, Navbar } from './components';
import './App.css';

const App = () => {
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  };

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/newsletter/latest" element={<Latest />} />
        <Route path="/newsletter/archives" element={<Archive />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
