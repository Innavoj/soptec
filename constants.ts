
import { NavItem, ServiceItem, FAQItem } from './types';
import { ComputerDesktopIcon, ShieldCheckIcon, CloudIcon, WifiIcon, ChatBubbleLeftEllipsisIcon } from './components/icons/FeatureIcons'; // Assuming these exist
import React from 'react';

export const COMPANY_NAME = "Soptec";

export const NavLinks: Record<string, NavItem> = {
  INICIO: { id: "inicio", label: "Inicio", href: "#inicio" },
  SERVICIOS: { id: "servicios", label: "Servicios", href: "#servicios" },
  ASISTENTE_IA: { id: "asistente-ia", label: "Asistente IA", href: "#asistente-ia" },
  FAQ: { id: "faq", label: "FAQ", href: "#faq" },
  CONTACTO: { id: "contacto", label: "Contacto", href: "#contacto" },
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "s1",
    icon: React.createElement(ComputerDesktopIcon, { className: "w-12 h-12 text-primary mb-4" }),
    title: "Soporte TI Remoto y Presencial",
    description: "Soluciones rápidas y efectivas para tus problemas informáticos, tanto a distancia como en tus instalaciones.",
  },
  {
    id: "s2",
    icon: React.createElement(WifiIcon, { className: "w-12 h-12 text-primary mb-4" }),
    title: "Consultoría y Soluciones de Red",
    description: "Diseño, implementación y mantenimiento de redes robustas y seguras para tu empresa.",
  },
  {
    id: "s3",
    icon: React.createElement(ShieldCheckIcon, { className: "w-12 h-12 text-primary mb-4" }),
    title: "Seguridad Cibernética",
    description: "Protegemos tus activos digitales con las últimas tecnologías en ciberseguridad y mejores prácticas.",
  },
  {
    id: "s4",
    icon: React.createElement(CloudIcon, { className: "w-12 h-12 text-primary mb-4" }),
    title: "Servicios en la Nube",
    description: "Migración, gestión y optimización de tus servicios y datos en la nube para mayor flexibilidad y eficiencia.",
  },
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "f1",
    question: "¿Qué tipo de soporte técnico ofrecen?",
    answer: "Ofrecemos una amplia gama de servicios, incluyendo soporte para hardware y software, soluciones de red, ciberseguridad y servicios en la nube para empresas y particulares.",
  },
  {
    id: "f2",
    question: "¿Cómo puedo solicitar soporte?",
    answer: "Puedes solicitar soporte a través de nuestro formulario de contacto en la web, por teléfono o utilizando nuestro Asistente IA para consultas rápidas.",
  },
  {
    id: "f3",
    question: "¿Cuál es su horario de atención?",
    answer: "Nuestro horario de atención estándar es de Lunes a Viernes de 9:00 a 18:00. También ofrecemos planes de soporte extendido 24/7.",
  },
  {
    id: "f4",
    question: "¿Tienen planes de servicio para empresas?",
    answer: "Sí, ofrecemos planes de servicio personalizados para empresas de todos los tamaños, adaptados a sus necesidades específicas de TI.",
  },
];

export const GEMINI_MODEL_TEXT = 'gemini-2.5-flash-preview-04-17';
