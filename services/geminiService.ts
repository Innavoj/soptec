
// This file is largely a placeholder as the Gemini API interaction logic
// is directly implemented within AIAssistantSection.tsx for simplicity in this example.
// In a larger application, you would centralize API calls here.

import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { GEMINI_MODEL_TEXT } from "../constants";

// Ensure API_KEY is available in the environment.
// For this environment, we assume process.env.API_KEY is set.
const API_KEY = process.env.API_KEY;

let ai: GoogleGenAI | null = null;
if (API_KEY) {
  ai = new GoogleGenAI({ apiKey: API_KEY });
} else {
  console.warn("API_KEY no encontrada. El servicio Gemini no estará disponible.");
}

/**
 * Generates content using the Gemini API.
 * This is an example function; the actual implementation for the AI Assistant
 * is within AIAssistantSection.tsx to manage state (chatHistory, isLoading, etc.) directly.
 */
export const fetchGeminiResponse = async (prompt: string, systemInstruction?: string): Promise<string> => {
  if (!ai) {
    return "Error: El servicio de IA no está configurado correctamente (falta API Key).";
  }

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
        model: GEMINI_MODEL_TEXT,
        contents: [{ role: "user", parts: [{text: prompt}] }],
        config: systemInstruction ? { systemInstruction } : undefined,
    });
    return response.text;
  } catch (error) {
    console.error("Error al generar contenido con Gemini:", error);
    if (error instanceof Error) {
        return `Error de API: ${error.message}`;
    }
    return "Error desconocido al contactar la API de Gemini.";
  }
};

// Example of how you might parse JSON if the model was asked to return JSON
// This is not used by the current AI Assistant which expects text.
export const fetchStructuredGeminiResponse = async <T,>(prompt: string, systemInstruction?: string): Promise<T | string> => {
  if (!ai) {
    return "Error: El servicio de IA no está configurado correctamente (falta API Key).";
  }

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: GEMINI_MODEL_TEXT,
      contents: [{ role: "user", parts: [{text: prompt}] }],
      config: {
        responseMimeType: "application/json",
        ...(systemInstruction && { systemInstruction }),
      }
    });
    
    let jsonStr = response.text.trim();
    const fenceRegex = /^```(\w*)?\s*\n?(.*?)\n?\s*```$/s; // Matches ```json ... ``` or ``` ... ```
    const match = jsonStr.match(fenceRegex);
    if (match && match[2]) {
      jsonStr = match[2].trim();
    }

    try {
      return JSON.parse(jsonStr) as T;
    } catch (parseError) {
      console.error("Error al parsear la respuesta JSON de Gemini:", parseError);
      return `Error al procesar la respuesta del servidor: El formato JSON no es válido. Respuesta recibida: ${jsonStr}`;
    }
  } catch (error) {
    console.error("Error al generar contenido estructurado con Gemini:", error);
     if (error instanceof Error) {
        return `Error de API: ${error.message}`;
    }
    return "Error desconocido al contactar la API de Gemini.";
  }
};
