import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/custom.scss'
import './styles/index.css'

import App from './pages/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
