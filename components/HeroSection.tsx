
import React from 'react';
import { COMPANY_NAME, NavLinks } from '../constants';
import Button from './Button';

interface HeroSectionProps {
  id: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ id }) => {
  return (
    <section id={id} className="bg-cover bg-center py-20 md:py-32" style={{ backgroundImage: "url('https://picsum.photos/1600/900?grayscale&blur=2')" }}>
      <div className="absolute inset-0 bg-secondary opacity-60"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Soporte Técnico Experto, <span className="text-accent">Cuando Más lo Necesitas</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
          En {COMPANY_NAME}, ofrecemos soluciones tecnológicas integrales para mantener tu negocio funcionando sin interrupciones. Desde soporte TI hasta ciberseguridad avanzada.
        </p>
        <div className="space-x-4">
          <Button href={`#${NavLinks.CONTACTO.id}`} variant="primary" size="lg">
            Obtener Soporte
          </Button>
          <Button href={`#${NavLinks.SERVICIOS.id}`} variant="outlineWhite" size="lg">
            Explorar Servicios
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
