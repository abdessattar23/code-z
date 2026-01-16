
import { GoogleGenAI } from "@google/genai";

const SYSTEM_PROMPT = `
You are the CodeZ AI Assistant. CodeZ is an elite IT team of 5 members:
- Adil Ait Elhoussine: Full-stack Developer (Java/Spring/Laravel)
- SalahEddine Daha: Front-end Lead (Full-stack Node.js)
- Mohammed Abdessetar Elyagoubi: Full-stack Developer (Java/Spring/Laravel)
- Abdelkouddous ElAlami: Full-stack Developer (Java/Spring/Laravel)
- Ismail Baguni: Full-stack Developer (Java/Spring/Laravel)

They specialize in building SaaS apps and winning hackathons.
Key achievements:
- Won YouCode Hackathon 2025 with "Sanad" (Breast cancer detection AI).
- Currently participating in Sofrecom Hackathon with "EcoShift" (B2B AI Carbon Footprint tracker).

Projects details:
1. Sanad: Web/Mobile for early cancer detection.
2. EcoShift: Advanced B2B tracker with AI agents and complex backend.

Be professional, tech-savvy, and enthusiastic. Use technical terms like "Spring Boot", "Laravel", "MVC architecture", "Node.js scalability", and "SaaS" when appropriate.
`;

export async function askCodeZ(question: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
      },
    });
    return response.text || "I'm having trouble processing that right now. The team is probably busy coding!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The AI agent is currently offline. Please try again later.";
  }
}
