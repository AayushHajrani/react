import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Weatherprovider } from './context/Weather.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Weatherprovider>
    <App />
    </Weatherprovider>
  </StrictMode>,
)
