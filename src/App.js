import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../src/components/Header.js';
import Footer from '../src/components/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from '../src/pages/Home.js';
import Projects from '../src/pages/Projects.js';
import Resume from '../src/pages/Resume.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="content-container">
          <h1 className="ombre-text">Daisha Drayton</h1>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}



export default App;
