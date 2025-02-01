import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Auto from './functions/Auto.jsx'
import Auto2 from './functions/Auto2.jsx'
import Auto3 from './functions/Auto3.jsx'
import AppRoute from './Routes/AppRoute.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Auto /> */}
    {/* <Auto2 /> */}
    {/* <App /> */}
    <AppRoute />
    {/* <Auto3 /> */}
  </StrictMode>,
)
