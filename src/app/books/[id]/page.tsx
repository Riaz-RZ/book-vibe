import { IBook } from "@/types/book.type";
import Image from "next/image";


export interface IBookDetailsPageProps {
    params: Promise<{
        id: string
    }>;
}

const getBooks = async () => {
    const res = await fetch("http://localhost:3000/booksData.json");
    const data = await res.json();
    return data;
};

const BookDetailsPage = async ({ params }: IBookDetailsPageProps) => {
    const { id } = await params;
    const booksData = await getBooks();
    const book = booksData.find(
        (book: IBook) => String(book.bookId) === String(id),
    );

    console.log(book, "book");



    return (
        <div className="min-h-screen bg-base-200 py-10 px-4">
            <div className="max-w-5xl mx-auto">
                {/* Book Details Card */}
                <div className="card lg:card-side bg-base-100 shadow-xl overflow-hidden">
                    {/* Book Image */}
                    <figure className="lg:w-2/5 bg-gray-100 p-8">
                        <Image 
                        src={book.image} 
                        alt={book.bookName}
                        width={500}
                        height={700} 
                        />
                    </figure>
                    {/* Book Information */}
                    <div className="card-body lg:w-3/5 p-8"> {/* Category / Badge */}
                        <div>
                            <span className="badge badge-primary badge-outline"> Book Details </span>
                        </div>
                        {/* Book Name */}
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
                            {book.bookName}
                        </h1>
                        {/* Author */}
                        <p className="text-lg text-gray-500"> by{" "} <span className="font-semibold text-primary"> {book.author} </span> </p>
                        <div className="divider">
                        </div>
                        {/* Book ID */}
                        <div className="flex items-center gap-3">
                            <span className="font-semibold text-gray-700"> Book ID: </span>
                            <span className="badge badge-neutral"> #{book.bookId} </span>
                        </div>
                        {/* Rating */}
                        <div className="flex items-center gap-2 mt-3">
                            <span className="font-semibold text-gray-700"> Rating: </span>
                            <div className="rating rating-sm">
                                <input type="radio" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                <input type="radio" className="mask mask-star-2 bg-orange-400" aria-label="2 stars" />
                                <input type="radio" className="mask mask-star-2 bg-orange-400" aria-label="3 stars" />
                                <input type="radio" className="mask mask-star-2 bg-orange-400" aria-label="4 stars" defaultChecked />
                                <input type="radio" className="mask mask-star-2 bg-orange-400" aria-label="5 stars" />
                            </div>
                            <span className="text-sm text-gray-500"> 4.5/5 </span>
                        </div> <div className="divider">
                        </div>
                        {/* Review */}
                        <div>
                            <h2 className="text-xl font-bold text-gray-800 mb-3"> About This Book </h2>
                            <p className="text-gray-600 leading-7 text-justify"> {book.review} </p>
                        </div>
                        {/* Buttons */}
                        <div className="card-actions justify-start mt-6 gap-3">
                            <button className="btn btn-primary"> Read </button>
                            <button className="btn btn-outline"> Add to Wishlist </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
};

export default BookDetailsPage;