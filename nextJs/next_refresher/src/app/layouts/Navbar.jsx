// Navbar.js
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-lg">Your Logo</div>
                <div className="hidden md:flex space-x-4">
                    <Link href="/" className="text-white hover:text-gray-300">Home</Link>
                    <Link href="/pages/about" className="text-white hover:text-gray-300">About</Link>
                    <Link href="/pages/contact" className="text-white hover:text-gray-300">Contact Us</Link>
                </div>
                <div className="md:hidden">
                    {/* Add a responsive menu button for small screens */}
                    <button className="text-white focus:outline-none">
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
