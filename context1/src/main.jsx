import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Cartprovider } from './context/Cart.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Cartprovider>
  <App/>
  </Cartprovider>
    
  </StrictMode>,
)
