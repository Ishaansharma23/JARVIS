import React from 'react'
import jarvis from './assets/giphy.gif'
import { FaMicrophoneAlt } from "react-icons/fa";

const App = () => {
  return (
    <div className='h-screen w-full bg-black font-[Nunito_Sans] text-white flex justify-center items-center flex-col'>
      <div className='img -mt-[250px]'>
        <img src={jarvis} alt="Jarvis" />
      </div>
      <div className='text flex flex-col items-center'>
        <h1 className='text-4xl font-bold bg-gradient-to-r from-white  to-blue-300 bg-clip-text text-transparent mb-4'>Hi, I'm JARVIS</h1>
        <button className='border-2 border-zinc-700 bg-blue-300 text-black text-2xl rounded-4xl px-5 py-1 flex justify-center items-center gap-1 -ml-2 shadow-lg shadow-cyan-400/90'>
          Click Here <FaMicrophoneAlt />
        </button>
      </div>
    </div>
  )
}

export default App
