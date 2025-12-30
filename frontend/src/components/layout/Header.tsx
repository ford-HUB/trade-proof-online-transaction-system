import { useState } from "react";
import { Link } from "react-router-dom";
import LogoText from "../../../public/logo-text.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "How It Works", path: "/" },
    { name: "Safety & Security", path: "/" },
    { name: "Support", path: "/" },
    { name: "Login", path: "/" },
    { name: "Register", path: "/", isButton: true },
  ];

  return (
    <header className="shadow-sm w-full px-4 py-4 md:px-6 lg:px-8">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <h1 className="font-bold text-xl md:text-2xl lg:text-3xl text-indigo-900 flex items-center">
            Trade
            <span>
              <img 
                src={LogoText} 
                alt="logo" 
                className="w-6 md:w-7 lg:w-8"
              />
            </span>
            roof
          </h1>
        </div>

        {/* Desktop & Tablet Navigation */}
        <nav className="hidden md:flex items-center">
          <ul className="flex items-center gap-4 lg:gap-6">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.isButton ? (
                  <Link 
                    to={item.path}
                    className="bg-indigo-900 text-white px-4 py-2 rounded-md font-semibold hover:bg-indigo-800 transition-colors duration-200 text-sm lg:text-base"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <Link 
                    to={item.path}
                    className="text-indigo-900 font-semibold hover:text-indigo-800 hover:underline transition-colors duration-200 text-sm lg:text-base"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-indigo-900 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-indigo-900 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-indigo-900 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <nav className="pt-4 pb-6 border-t border-gray-200 mt-4">
          <ul className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <li key={item.name} onClick={() => setIsMenuOpen(false)}>
                {item.isButton ? (
                  <Link 
                    to={item.path}
                    className="block bg-indigo-900 text-white px-4 py-3 rounded-md font-semibold hover:bg-indigo-800 transition-colors duration-200 text-center"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <Link 
                    to={item.path}
                    className="block text-indigo-900 font-semibold hover:text-indigo-800 hover:underline transition-colors duration-200 py-2"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}