import Link from "next/link";
import logo from "@/assets/navbar-logo-design.jpg"
import Image from "next/image";

const Navbar = () => {
    const links = <>
        <li><Link href="/listed-books">Listed Books</Link></li>
        <li><Link href="/pages-to-read">Pages to Read</Link></li>
    </>
    return (

        <section className="container mx-auto">
            <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>

                <div className="flex items-center gap-2">
                    <Image src={logo} alt="Book Vibe logo" className="max-w-15"/>
                    <h1 className="text-2xl font-bold text-green-500">Book Vibe</h1>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn bg-green-500 text-white">Sign In</button>
                <button className="btn bg-[#59C6D2] text-white ms-4">Sign Up</button>
            </div>
        </div>
        </section>
    );
};

export default Navbar;