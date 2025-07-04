import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MovieCard from './MovieCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <MovieCard/>
  </StrictMode>,
)
