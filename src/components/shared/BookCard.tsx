import { IBook } from "@/types/book.type";
import Image from "next/image";
import Link from "next/link";

export interface IBooksCardProps {
    book: IBook
}

const BookCard = ({ book }: IBooksCardProps) => {
    return (
        <div className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
            {/* Book Image */}
            <div className="relative flex h-72 items-center justify-center bg-gray-100 p-6">
                <Image
                    src={book.image}
                    alt={book.bookName}
                    width={200}
                    height={260}
                    className="h-full w-auto rounded-lg object-cover shadow-md transition-transform duration-300 group-hover:scale-105"
                />

                {/* Rating */}
                <div className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-sm font-semibold shadow-md">
                    ⭐ {book.rating}
                </div>
            </div>

            {/* Card Content */}
            <div className="p-5">

                {/* Category */}
                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
                    {book.category}
                </span>

                {/* Book Name */}
                <h2 className="mt-3 line-clamp-1 text-xl font-bold text-gray-800">
                    {book.bookName}
                </h2>

                {/* Author */}
                <p className="mt-1 text-sm text-gray-500">
                    By{" "}
                    <span className="font-medium text-gray-700">
                        {book.author}
                    </span>
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {book.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Bottom Info */}
                <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
                    <div>
                        <p className="text-xs text-gray-400">
                            Pages
                        </p>
                        <p className="font-semibold text-gray-700">
                            {book.totalPages}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-gray-400">
                            Published
                        </p>
                        <p className="font-semibold text-gray-700">
                            {book.yearOfPublishing}
                        </p>
                    </div>

                    <Link href={`/books/${book.bookId}`}>
                        <button className="rounded-xl bg-green-600 px-4 py-2 font-medium text-white transition hover:bg-green-700">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BookCard;