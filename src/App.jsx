import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import TrustedDeveloper from './TrustedDeveloper';
import WhyChooseUs from './WhyChooseUs';
import GamePortfolio from './GamePortfolio';
import Platforms from './Platforms';
import ClientTestimonials from './ClientTestimonials';
import FAQ from './FAQ';
import LatestNews from './LatestNews';
import Footer from './Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustedDeveloper />
      <WhyChooseUs />
      <GamePortfolio />
      <Platforms />
      <ClientTestimonials />
      <FAQ />
      <LatestNews />
      <Footer />
    </div>
  );
}

export default App;