
import React, { useState, FormEvent } from 'react';
import Button from './Button';
import Modal from './Modal';

const ContactFormSection: React.FC<{ id: string }> = ({ id }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormError(null);
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFormError("Por favor, completa todos los campos.");
      return;
    }
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form data submitted:', formData);
    setIsSubmitting(false);
    setShowSuccessModal(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <section id={id} className="py-16 md:py-24 bg-lightgray">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-4">Contáctanos</h2>
          <p className="text-center text-darkgraytext mb-12 max-w-xl mx-auto">
            ¿Tienes alguna pregunta o necesitas soporte especializado? Completa el formulario y nos pondremos en contacto contigo.
          </p>
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-secondary">Nombre Completo</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-mediumgray rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary">Correo Electrónico</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-mediumgray rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-secondary">Asunto</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-mediumgray rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary">Mensaje</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-mediumgray rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  required
                />
              </div>
              {formError && <p className="text-red-500 text-sm">{formError}</p>}
              <div>
                <Button type="submit" variant="primary" fullWidth disabled={isSubmitting}>
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Modal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="Mensaje Enviado"
      >
        <p className="text-sm text-darkgraytext">
          Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos a la brevedad.
        </p>
        <div className="mt-4">
          <Button onClick={() => setShowSuccessModal(false)} variant="primary">
            Cerrar
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default ContactFormSection;
