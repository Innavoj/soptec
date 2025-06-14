
import React, { useState } from 'react';
import { FAQ_DATA } from '../constants';
import { FAQItem } from '../types';
import { ChevronDownIcon } from './icons/ChevronDownIcon';

interface FAQAccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQAccordionItem: React.FC<FAQAccordionItemProps> = ({ item, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-mediumgray">
      <button
        onClick={toggleOpen}
        className="w-full flex justify-between items-center py-5 px-1 text-left hover:bg-gray-50 transition-colors"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-secondary">{item.question}</h3>
        <ChevronDownIcon className={`w-6 h-6 text-primary transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="pb-5 px-1 text-darkgraytext">
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  );
};


const FAQSection: React.FC<{ id: string }> = ({ id }) => {
  const [openFAQId, setOpenFAQId] = useState<string | null>(null);

  const toggleFAQ = (faqId: string) => {
    setOpenFAQId(openFAQId === faqId ? null : faqId);
  };

  return (
    <section id={id} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-4">Preguntas Frecuentes</h2>
        <p className="text-center text-darkgraytext mb-12 max-w-xl mx-auto">
          Encuentra respuestas rápidas a las consultas más comunes sobre nuestros servicios y soporte.
        </p>
        <div className="max-w-3xl mx-auto">
          {FAQ_DATA.map((faq) => (
            <FAQAccordionItem
              key={faq.id}
              item={faq}
              isOpen={openFAQId === faq.id}
              toggleOpen={() => toggleFAQ(faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
