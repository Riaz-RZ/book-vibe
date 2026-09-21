
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/navbar-logo-design.jpg";

const Navbar = () => {
    const links = (
        <>
            <li>
                <Link
                    href="/books"
                    className="font-medium text-gray-700 hover:text-green-600 transition-colors"
                >
                    Books
                </Link>
            </li>
            <li>
                <Link
                    href="/listed-books"
                    className="font-medium text-gray-700 hover:text-green-600 transition-colors"
                >
                    Listed Books
                </Link>
            </li>

            <li>
                <Link
                    href="/pages-to-read"
                    className="font-medium text-gray-700 hover:text-green-600 transition-colors"
                >
                    Pages to Read
                </Link>
            </li>
        </>
    );

    return (
        <header className="container relative z-50 mx-auto px-4 pt-4">
            <nav className="rounded-2xl border border-gray-100 bg-white/90 shadow-sm backdrop-blur-md">

                <div className="navbar min-h-20 px-4 md:px-6">

                    {/* Logo + Mobile Menu */}
                    <div className="navbar-start">

                        {/* Mobile Menu */}
                        <div className="dropdown lg:hidden">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost btn-circle"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </div>

                            <ul
                                tabIndex={-1}
                                className="menu menu-sm dropdown-content z-100 mt-3 w-56 rounded-2xl border border-gray-100 bg-white p-3 shadow-xl"
                            >
                                {links}
                            </ul>
                        </div>

                        {/* Logo */}
                        <Link
                            href="/"
                            className="ml-1 flex items-center gap-2 md:ml-2"
                        >
                            <Image
                                src={logo}
                                alt="Book Vibe logo"
                                width={48}
                                height={48}
                                className="rounded-xl object-cover"
                            />

                            <h1 className="text-xl font-bold tracking-tight md:text-2xl">
                                <span className="text-green-600">
                                    Book
                                </span>{" "}
                                <span className="text-gray-800">
                                    Vibe
                                </span>
                            </h1>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal gap-2">
                            {links}
                        </ul>
                    </div>

                    {/* Buttons */}
                    <div className="navbar-end gap-2">
                        <Link
                            href="/login"
                            className="hidden rounded-xl px-5 py-2.5 font-semibold text-gray-700 transition-all hover:bg-green-50 hover:text-green-600 sm:block"
                        >
                            Sign In
                        </Link>

                        <Link
                            href="/register"
                            className="rounded-xl bg-green-600 px-5 py-2.5 font-semibold text-white shadow-md shadow-green-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-700 hover:shadow-lg"
                        >
                            Sign Up
                        </Link>
                    </div>

                </div>
            </nav>
        </header>
    );
};

export default Navbar;