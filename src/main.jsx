import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'

import './index.css'

import App from './App.jsx'
import About from './components/About.jsx'
import Books from './components/Books.jsx'
import Book from './components/Book.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} >
                    <Route path='/about' element={<About />} />
                    <Route path='/books' element={<Books />} >
                        <Route index element={
                            <p className='m-auto font-medium text-lg'>
                                لطفا کتاب مورد نظر خود را انتخاب کنید
                            </p>
                        } />
                        <Route path=':bookId' element={<Book />} />
                    </Route>

                    <Route path='*' element={
                        <p className='text-center'>
                            مسیر مسدود است. لطفا برگردید.
                            <span className='text-3xl'>⛔</span>
                        </p>
                    } />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
