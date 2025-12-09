import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Hello from './companents/Hello.tsx'
import MyButton from './companents/MyButton.tsx'
import UseState from './companents/UseState.tsx'
import UseEffect from './companents/UseEffect.tsx'
import { BrowserRouter } from 'react-router'
import ReactRouter from './companents/ReactRouter.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Hello ad="Sıla" />
    <MyButton>Click Me</MyButton>
    <UseState />
    <UseEffect />

    <BrowserRouter>
      <ReactRouter />
    </BrowserRouter>

  </StrictMode>,
)
