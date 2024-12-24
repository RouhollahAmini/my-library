import { useParams } from "react-router";
import { getBook } from "../data/data";

const Book = () => {
    const params = useParams();
    
    const book = getBook(parseInt(params.bookId));

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
            </div>
        </div>
    )
}

export default Book;