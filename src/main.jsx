import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DarkModeContextProvider } from "./context/lightModeContext";


createRoot(document.getElementById('root')).render(
  <DarkModeContextProvider>
    <App />
  </DarkModeContextProvider>,
)
