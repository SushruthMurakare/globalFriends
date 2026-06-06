import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Services from './components/Services';
import Stats from './components/Stats';
import Testimonial from './components/Testimonial';
import CTA from './components/CTA';
import Footer from './components/Footer';
import GlobalFamilies from './components/GlobalFamilies';
import Resources from './components/Resources';
import ResourceDetail from './components/ResourceDetail';
import Gallery from './components/Gallery';

function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    const el = document.getElementById(id);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 80);
    }
  }, [hash]);

  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      {/* <About /> */}
      <Services />
      {/* <Stats /> */}
      <Testimonial />
      <CTA />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/global-families" element={<GlobalFamilies />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/:category" element={<ResourceDetail />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
