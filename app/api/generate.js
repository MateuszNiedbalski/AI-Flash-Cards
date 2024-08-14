import { NextResponse } from 'next/server'
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const systemPrompt = ""

// Gemini model with systemInstruction
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: systemPrompt,
});

export async function POST(req) {
    // Initialise GenAI 
    const genai = new GenAI(); 
  
    // Read the request data
    const data = await req.text();
  
    const messages = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: data },
    ];
  
    // Request completion from GenAI
    const completion = await genai.chat.completions.create({
      messages: messages,
      model: 'gemini-1.5-flash',
      response_format: 'json', 
    });
  
    // Parse the JSON response from the GenAI API
    const flashcards = JSON.parse(completion.choices[0].message.content);
  
    // Return the flashcards as a JSON response
    return NextResponse.json(flashcards.flashcards);
  }