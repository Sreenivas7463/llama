"use server";

const LLAMA_API_URL = "https://api.llama-api.com/chat/completions";
export const getLlamaCompletion = async(prompt: string) =>{
    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.LLAMA_API_TOKEN}`,
        "Access-Control-Allow-Origin": "*"
    }

    try{
        const response = await fetch(LLAMA_API_URL, {
            method: "POST",
            headers,
            body: JSON.stringify({
            messages: [{role: "user", content: prompt}],
            })
          
        })

        const data = await response.json();
        
        return data.choices[0].message.content;
    }
    catch(error){
        console.log(error);
        throw (error);
    }
    
    
}