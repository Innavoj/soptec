
import React, { useState, useCallback, FormEvent } from 'react';
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { ChatMessage } from '../types';
import { COMPANY_NAME, GEMINI_MODEL_TEXT } from '../constants';
import Button from './Button';
import LoadingSpinner from './LoadingSpinner';

// Ensure API_KEY is available in the environment.
// In a real Vite app, this would be import.meta.env.VITE_API_KEY
// For this environment, we assume process.env.API_KEY is set.
const API_KEY = process.env.API_KEY;

const AIAssistantSection: React.FC<{ id: string }> = ({ id }) => {
  const [userInput, setUserInput] = useState<string>('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const ai = API_KEY ? new GoogleGenAI({ apiKey: API_KEY }) : null;

  const handleSendMessage = useCallback(async () => {
    if (!userInput.trim() || !ai) {
      if (!ai) setError("API Key no configurada. El asistente IA no está disponible.");
      return;
    }

    const newUserMessage: ChatMessage = { id: Date.now().toString(), sender: 'user', text: userInput };
    setChatHistory(prev => [...prev, newUserMessage]);
    setUserInput('');
    setIsLoading(true);
    setError(null);

    const systemInstruction = `Eres un asistente de IA de Soporte Técnico para la empresa ${COMPANY_NAME}. Eres amigable, profesional y tu objetivo es ayudar a los usuarios con sus problemas técnicos. Proporciona respuestas claras y concisas. Si no puedes resolver un problema complejo o necesitas información específica de la cuenta del usuario, sugiere que se pongan en contacto con el equipo de soporte de ${COMPANY_NAME} a través del formulario de contacto o por teléfono. No inventes información. Limita tus respuestas a un máximo de 150 palabras.`;
    
    try {
      const response: GenerateContentResponse = await ai.models.generateContent({
        model: GEMINI_MODEL_TEXT,
        contents: [{ role: "user", parts: [{text: userInput}] }],
        config: {
          systemInstruction: systemInstruction,
          // For low latency as an assistant, disable thinking
          thinkingConfig: { thinkingBudget: 0 } 
        }
      });
      
      const aiResponseText = response.text;
      const newAiMessage: ChatMessage = { id: (Date.now() + 1).toString(), sender: 'ai', text: aiResponseText };
      setChatHistory(prev => [...prev, newAiMessage]);
    } catch (err) {
      console.error("Error al contactar la API de Gemini:", err);
      const errorMessage = err instanceof Error ? err.message : "Ocurrió un error desconocido.";
      setError(`Error del Asistente IA: ${errorMessage}. Por favor, inténtalo más tarde o contacta soporte.`);
      const errorAiMessage: ChatMessage = { id: (Date.now() + 1).toString(), sender: 'ai', text: `Lo siento, no pude procesar tu solicitud en este momento. ${errorMessage}` };
      setChatHistory(prev => [...prev, errorAiMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [userInput, ai]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSendMessage();
  };

  if (!API_KEY) {
    return (
      <section id={id} className="py-16 md:py-24 bg-lightgray">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Asistente IA de {COMPANY_NAME}</h2>
          <p className="text-red-600 font-semibold">El Asistente IA no está disponible. La API Key no está configurada.</p>
        </div>
      </section>
    );
  }

  return (
    <section id={id} className="py-16 md:py-24 bg-lightgray">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-4">Asistente IA de {COMPANY_NAME}</h2>
        <p className="text-center text-darkgraytext mb-12 max-w-xl mx-auto">
          ¿Tienes una pregunta rápida? Nuestro asistente IA está aquí para ayudarte con consultas técnicas comunes.
        </p>
        
        <div className="max-w-2xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-xl">
          <div className="h-96 overflow-y-auto mb-4 p-4 border border-mediumgray rounded-md space-y-4 bg-gray-50">
            {chatHistory.map(msg => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs md:max-w-md lg:max-w-lg p-3 rounded-lg ${msg.sender === 'user' ? 'bg-primary text-white' : 'bg-gray-200 text-secondary'}`}>
                  <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-center items-center py-2">
                <LoadingSpinner /> 
                <span className="ml-2 text-darkgraytext">El asistente está pensando...</span>
              </div>
            )}
          </div>

          {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

          <form onSubmit={handleSubmit} className="flex gap-3">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Escribe tu pregunta aquí..."
              className="flex-grow p-3 border border-mediumgray rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow"
              disabled={isLoading}
            />
            <Button type="submit" variant="primary" disabled={isLoading || !userInput.trim()}>
              {isLoading ? 'Enviando...' : 'Enviar'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AIAssistantSection;
