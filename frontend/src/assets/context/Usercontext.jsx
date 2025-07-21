import React, { createContext, useState } from 'react'
import run from '../../gemini';

export const datacontext = createContext()



const Usercontext = ({children}) => {   // function to speak the text

  const [speaking, setSpeaking] = useState(false); // ai bolra hai y nahi 

  const [prompt , setPrompt] = useState(""); // prompt jo hum bolre hai woh

  const [response, setResponse] = useState(false); // response jo AI de rha hai woh

    function speak(text){ // jo hum text p likhre hai wo ai bolra hai 
        let textSpeak = new SpeechSynthesisUtterance(text)
        textSpeak.volume = 1;
        textSpeak.rate = 1;
        textSpeak.pitch = 1;
        textSpeak.lang = "hi-GB";
        window.speechSynthesis.speak(textSpeak);
    }

    async function aiResponse(prompt){
    let text =   await run(prompt);
      setPrompt(text);
      speak(text);
      setResponse(true);
    }

    let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    let recognition = new speechRecognition();
    recognition.onresult = (event) => {
      let currIndex = event.resultIndex;
      let transcript = event.results[currIndex][0].transcript;
      setPrompt(transcript);
      aiResponse(transcript);
    }


    let value = {
        recognition,
        speaking,
        setSpeaking,
        prompt, 
        setPrompt,
        response
    }
  return (
    <div>
        <datacontext.Provider value={value}>
        {children}
        </datacontext.Provider>
    </div>
  )
}

export default Usercontext