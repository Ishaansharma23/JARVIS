import React, { useContext, useEffect, useState } from 'react'
import jarvis from './assets/giphy.gif'
import { FaMicrophoneAlt } from "react-icons/fa";
import { datacontext } from './assets/context/Usercontext';
import speakimg from './assets/speak.gif';
import Aivoice from './assets/aiVoice.gif';

const App = () => {
  const { recognition, speaking, setSpeaking, prompt, response } = useContext(datacontext);


  return (
    <div className='h-screen w-full bg-black font-[Nunito_Sans] text-white flex justify-center items-center flex-col'>
      <div className='img -mt-[250px]'>
        <img src={jarvis} alt="Jarvis" />
      </div>
      <div className='text flex flex-col items-center'>
        <h1 className='text-4xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent mb-4'>
          Hi, I'm JARVIS
        </h1>

        {!speaking ? (
          <button
            onClick={() => {
              setSpeaking(true);
              recognition.start();
            }}
            className='border-2 border-zinc-700 bg-blue-300 text-black text-2xl rounded-4xl px-5 py-1 flex justify-center items-center gap-1 -ml-2 shadow-lg shadow-cyan-400/90'
          >
            Click Here <FaMicrophoneAlt />
          </button>
        ) : (
          <div className='flex flex-col items-center'>
            {!response? <img src={speakimg} className='w-20' /> : <img src={Aivoice} className='w-20 h-20' /> }
            <p className='w-full text-center text-2xl font-semibold mt-2'>{prompt}</p>
          </div>
        )}



      </div>
    </div>
  )
}

export default App
