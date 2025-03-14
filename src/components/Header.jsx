import { useState } from "react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="overflow-x-hidden">
            {/* Navbar */}
            <div className="flex justify-between items-center px-4 fixed top-0 left-0 w-full z-50
                backdrop-blur-md shadow-md pb-3 py-2 md:py-3"
            >
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img className="h-9 cursor-pointer" src="/src/assets/react.svg" alt="Logo" />
                    <p className="text-sm font-medium text-gray-500">v19</p>
                </div>

                {/* Search Bar - Hidden on Small Screens */}
                <div className="hidden md:flex bg-gray-300/20 w-52 md:w-60 lg:w-72 rounded-xl h-10 items-center px-4 justify-between">
                    <span className="text-gray-600">Search</span>
                    <span className="text-gray-400 text-sm">Ctrl + K</span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                    {/* Nav Links */}
                    <div className="flex gap-5 text-gray-800">
                        <p className="text-lg rounded-xl px-2 hover:bg-gray-400 cursor-pointer">Learn</p>
                        <p className="text-lg rounded-xl px-2 hover:bg-gray-400 cursor-pointer">Reference</p>
                        <p className="text-lg rounded-xl px-2 hover:bg-gray-400 cursor-pointer">Community</p>
                        <p className="text-lg rounded-xl px-2 hover:bg-gray-400 cursor-pointer">Blog</p>
                    </div>

                    {/* Icons */}
                    <div className="flex gap-4 items-center">
                        <i className="ri-moon-line text-2xl hover:bg-gray-400 p-2 rounded-xl cursor-pointer"></i>
                        <img className="w-6 h-6 hover:bg-gray-400 p-1 rounded-xl cursor-pointer" src="/src/assets/langguage.svg" alt="Language" />
                        <i className="ri-github-fill text-2xl hover:bg-gray-400 p-2 rounded-xl cursor-pointer"></i>
                    </div>
                </div>

                {/* Hamburger Menu for Small Screens */}
                <button className="md:hidden text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? "✖" : "☰"}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="md:hidden absolute top-14 left-0 w-full bg-white shadow-md p-4">
                    <div className="flex flex-col gap-3">
                        <p className="text-lg hover:bg-gray-400 p-2 cursor-pointer">Learn</p>
                        <p className="text-lg hover:bg-gray-400 p-2 cursor-pointer">Reference</p>
                        <p className="text-lg hover:bg-gray-400 p-2 cursor-pointer">Community</p>
                        <p className="text-lg hover:bg-gray-400 p-2 cursor-pointer">Blog</p>
                    </div>
                    <div className="flex gap-5 items-center mt-3">
                        <i className="ri-moon-line text-2xl hover:bg-gray-400 p-2 rounded-xl cursor-pointer"></i>
                        <img className="w-6 h-18  hover:bg-gray-400 p-1 rounded-xl cursor-pointer" src="/src/assets/langguage.svg" alt="Language" />
                        <i className="ri-github-fill text-2xl hover:bg-gray-400 p-2 rounded-xl cursor-pointer"></i>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
