import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HeroUIProvider } from '@heroui/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroUIProvider>
      <div className="light text-foreground bg-background">
        <App />
      </div>
    </HeroUIProvider>
  </StrictMode>,
)
