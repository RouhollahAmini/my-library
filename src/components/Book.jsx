import { useParams, useNavigate, useLocation } from "react-router";
import { getBook, deleteBook } from "../data/data";

const Book = () => {
    const params = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const book = getBook(parseInt(params.bookId));

    if (book) {
        return (
            <div className="bg-slate-200 mx-5 mt-5 sm:mt-0 p-4 rounded-lg shadow-md">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2>
                        نام کتاب :
                        <span className="font-medium text-lg"> {book.name} </span>
                    </h2>
                    <p>
                        شناسه کتاب :
                        <span className="font-medium text-lg"> {book.number} </span>
                    </p>
                    <p>
                        قیمت کتاب :
                        <span className="font-medium text-lg"> {book.amount} تومان </span>
                    </p>
                    <p>
                        تاریخ انتشار کتاب :
                        <span className="font-medium text-lg"> {book.due} </span>
                    </p>
                    <button
                    onClick={() => {deleteBook(book.number); navigate('/books' + location.search);}}
                    className="bg-red-500 text-sm text-white p-2 mt-2 w-full border-none outline-none rounded-lg">
                        حذف کتاب
                    </button>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="w-full text-center bg-slate-200 mx-5 mt-5 sm:mt-0 p-4 rounded-lg shadow-md">
                <div className="bg-white p-4 rounded-lg shadow-md">

                    <p>
                        <span className="font-medium text-lg"> ❗❓ </span>
                        چنین کتابی یافت نشد دوست من، راست شو بگو دنبال چی میگردی
                        <span className="font-medium text-lg"> ❗❓ </span>
                    </p>

                </div>
            </div>
        )
    }


}

export default Book;