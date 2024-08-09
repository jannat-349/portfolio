import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Researches from './pages/Researches';
import Achievements from './pages/Achievements';


const App = () => {
  return (
    <Router basename="/portfolio">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/researches" element={<Researches />} />
        <Route path="/achievements" element={<Achievements />} />
        
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
