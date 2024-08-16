import { NextResponse } from 'next/server';
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const systemPrompt = `You are a flashcard creator, you take in text and create multiple flashcards from it. 
Make sure to create exactly 10 flashcards. Both front and back should be one sentence long. 
You should return in the following JSON format: 
{
  "flashcards": [
    {"front": "Front of the card", "back": "Back of the card"}
  ]
}`;

export async function POST(req) {
    // Read the request data
    const data = await req.text();
  
  
    const messages = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: data },
    ];
  
    // Request completion from GenAI
    const completion = await genAI.getGenerativeModel({
      messages: messages,
      model: 'gemini-1.5-flash',
      response_format: 'json',
    });
  
    // Parse the JSON response from the GenAI API
    const flashcards = JSON.parse(completion.choices[0].message.content);
  
    // Return the flashcards as a JSON response
    return NextResponse.json(flashcards.flashcards);
}