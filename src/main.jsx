import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Auto from './functions/Auto.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Auto /> */}
    <App />
  </StrictMode>,
)
