import { QUESTIONS_PROMPT } from "@/services/Constants";
import { NextResponse } from "next/server";
import OpenAI from "openai"

export async function POST(req){

    const {jobPosition , jobDescription ,duration,type }= await req.json();
    const FINAL_PROMPT =QUESTIONS_PROMPT
    .replace('{{jobTitle}}',jobPosition)
    .replace('{{jobDescription}}',jobDescription)
    .replace('{{duration}}',duration)
    .replace('{{type}}',type)

    // console.log("final prompt",FINAL_PROMPT);
    try{
        // console.log("ayyaa")
        const openai = new OpenAI({
            baseURL: "https://openrouter.ai/api/v1",
            apiKey: process.env.OPENROUTER_API_KEY,
            
          })
    // console.log("onnnnnn")
          const completion = await openai.chat.completions.create({
            model: "openai/gpt-4o-mini",
            messages: [
              { role: "user", content: FINAL_PROMPT }
            ],
            
          })
          // console.log("completion",completion.choices[0].message)
          return NextResponse.json(completion.choices[0].message)
        
    }
    catch(e)
    {
        // console.log(e);
         return NextResponse.json(e);

    }
    

   
}