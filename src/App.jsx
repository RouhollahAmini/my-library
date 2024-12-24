import { Link, Outlet } from 'react-router'

import './App.css'

function App() {


    return (
        <>
            <div className='border shadow-lg'>
                <div className='container'>
                    <div className="flex justify-between items-center py-2">
                        <h1 className="text-xl font-bold">
                            کتابخانه من
                        </h1>
                        <nav className='flex gap-3'>
                            <Link to="/">خانه</Link>
                            <Link to="/books">کتاب ها</Link>
                            <Link to="/about">درباره ما</Link>
                        </nav>
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <div className="container">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default App
