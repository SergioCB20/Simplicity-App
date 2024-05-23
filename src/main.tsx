import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppContextProvider } from './context/appContext.tsx'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </AppContextProvider> 
)
