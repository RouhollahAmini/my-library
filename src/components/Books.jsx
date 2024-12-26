import { NavLink, Outlet, useSearchParams, useLocation } from "react-router";
import { getBooks } from "../data/data";

const Books = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    

    const books = getBooks();

    return (
        <div className="flex flex-col sm:items-start sm:flex-row py-5">
            <nav className="flex flex-col">
                <input  type="text"
                    value={searchParams.get("filter") || ""}
                    onChange={(event) => {
                        let searched = event.target.value;
                        if (searched) {
                            setSearchParams({ filter: searched });
                        } else {
                            setSearchParams({});
                        }
                    }}
                    className="border shadow-md outline-none rounded-lg px-5 py-1" placeholder="جتستجوی کتاب ها ..." />
                <div className="mt-3 space-y-3 text-center">
                    {
                    books.filter((book) => {
                        let filter = searchParams.get("filter");
                        if (!filter) return true;
                        let name = book.name.toLowerCase();
                        return name.startsWith(filter.toLowerCase());
                    })
                        .map((book) => (
                            <NavLink className={({ isActive }) =>
                                isActive ? "block text-red-500" : "block"
                            } to={`/books/${book.number}${location.search}`} key={book.number}>
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