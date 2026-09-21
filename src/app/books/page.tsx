import BookCard from "@/components/shared/BookCard";
import { IBook } from "@/types/book.type";


const getBooks = async () => {
    const res = await fetch("http://localhost:3000/booksData.json");
    const data = await res.json();
    return data;
};

const Books = async () => {
    const booksData = await getBooks();

    return (
        <section className="container mx-auto px-4 py-10">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">
                    All Books
                </h1>

                <p className="mt-2 text-gray-500">
                    Explore our collection of amazing books
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {booksData.map((book:IBook, bookId:number) => {
                   return <BookCard key={bookId} book={book}/>
                })}
            </div>
        </section>
    );
};

export default Books;