import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Usercontext from './assets/context/Usercontext.jsx'

createRoot(document.getElementById('root')).render(
  <Usercontext>
    <App />
    </Usercontext>
)
