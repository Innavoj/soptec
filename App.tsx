
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AIAssistantSection from './components/AIAssistantSection';
import FAQSection from './components/FAQSection';
import ContactFormSection from './components/ContactFormSection';
import Footer from './components/Footer';
import { NavLinks } from './constants'; // Import NavLinks

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection id={NavLinks.INICIO.id} />
        <ServicesSection id={NavLinks.SERVICIOS.id} />
        <AIAssistantSection id={NavLinks.ASISTENTE_IA.id} />
        <FAQSection id={NavLinks.FAQ.id} />
        <ContactFormSection id={NavLinks.CONTACTO.id} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
