import { Link, Outlet } from 'react-router'

import './App.css'

function App() {


  return (
    <>
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
        <Outlet />
      </div>
    </>
  )
}

export default App
