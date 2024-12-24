import { NavLink, Outlet } from "react-router";
import { getBooks } from "../data/data";

const Books = () => {
    const books = getBooks();

    return (
        <div className="flex flex-col sm:items-start sm:flex-row py-5">
            <nav className="flex flex-col">
                <input className="border shadow-md outline-none rounded-lg px-5 py-1" type="text" placeholder="جتستجوی کتاب ها ..." />
                <div className="mt-3 space-y-3 text-center">
                    {
                        books.map((book) => (
                            <NavLink className={({ isActive }) => 
                                isActive ? "block text-red-500" : "block"
                            } to={`/books/${book.number}`} key={book.number}>
                                {book.name}
                            </NavLink>
                        ))
                    }

                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default Books;