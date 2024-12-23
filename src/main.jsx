import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'

import './index.css'

import App from './App.jsx'
import About from './components/About.jsx'
import Books from './components/Books.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route path='/about' element={<About />} />
          <Route path='/books' element={<Books />} />

        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
