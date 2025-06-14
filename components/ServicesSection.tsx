
import React from 'react';
import { SERVICES_DATA } from '../constants';
import Card from './Card';

interface ServicesSectionProps {
  id: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-4">Nuestros Servicios</h2>
        <p className="text-center text-darkgraytext mb-12 max-w-xl mx-auto">
          Soluciones personalizadas para optimizar tu infraestructura tecnológica y asegurar la continuidad de tu negocio.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES_DATA.map((service) => (
            <Card key={service.id} className="flex flex-col items-center text-center">
              {service.icon}
              <h3 className="text-xl font-semibold text-secondary mb-2">{service.title}</h3>
              <p className="text-darkgraytext text-sm">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
