import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../src/components/Header.js';
import Footer from '../src/components/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from '../src/pages/Home.js';
import Projects from '../src/pages/Projects.js';
import Resume from '../src/pages/Resume.js';
import About from './pages/About.js';
import { useMediaQuery } from 'react-responsive';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
