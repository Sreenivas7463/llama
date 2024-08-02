"use client";
import Image from "next/image";

import { getLlamaCompletion } from "@/lib/llama";
import { useState } from "react";

export default function Home() {
     const [prompt, setPrompt] = useState<string>("");
     const [aiResult, setAiResult] = useState<string>("");
     const [loading, setLoading] = useState<boolean>(false);
     const completion = async() =>{
      setLoading(true);
      const completion = await getLlamaCompletion(prompt);
      console.log(completion);
      setLoading(false);
      setAiResult(completion);
     }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-5 w-96">
        <textarea 
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full h-24 p-4 text-blue-950 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        placeholder="Enter your prompt here..."
        />
        <button onClick={completion} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Llama Completion
        </button>
        {loading ? (
          <div className="bg-gray-100 p-4 rounded-md w-96 text-slate-900 whitespace-normal">
            <p>Fetching Llama results...</p>
           
          </div>
        ) : (
         aiResult && (
            <div className="bg-gray-100 p-4 rounded-md w-96 text-slate-900 whitespace-normal">
              <p>{aiResult}</p> 
            </div>
        ))
        }

       
      </div>
    </main>
  );
}
