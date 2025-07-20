import React, { createContext } from 'react'

export const datacontext = createContext()

const Usercontext = ({children}) => {
    function speak(text){
        let textSpeak = new SpeechSynthesisUtterance(text)
        textSpeak.volume = 1;
        textSpeak.rate = 1;
        textSpeak.pitch = 1;
        textSpeak.lang = "hi-GB";
        window.speechSynthesis.speak(textSpeak);

    }
    let value = {
        speak
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