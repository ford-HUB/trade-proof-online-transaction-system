import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'sonner'
import Collector from './Collector'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Collector/>
      <Toaster richColors position='top-right'/>
    </BrowserRouter>
  </StrictMode>,
)
