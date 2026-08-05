import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Mission from './components/Mission';
import GlobalFamiliesHome from './components/GlobalFamiliesHome';
import WhenYouGetHere from './components/WhenYouGetHere';
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
import Contact from './components/Contact';

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
      <Mission />
      <GlobalFamiliesHome />
      <WhenYouGetHere />
      {/* <About /> */}
      {/* <Services /> */}
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
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
