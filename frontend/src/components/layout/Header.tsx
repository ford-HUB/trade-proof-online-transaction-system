import { useState } from "react";
import { Link } from "react-router-dom";
import LogoText from "../../../public/logo-text.png";

interface HeaderProps {
  homeId?: string;
  howItWorksId?: string;
  safetySecurityId?: string;
  supportId?: string;
  loginPath?: string;
  registerPath?: string;
}

interface NavItem {
  name: string;
  target?: string;
  path?: string;
  isButton?: boolean;
}

export default function Header({
  homeId,
  howItWorksId,
  safetySecurityId,
  supportId,
  loginPath,
  registerPath,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { name: "Home", target: homeId },
    { name: "How It Works", target: howItWorksId },
    { name: "Safety & Security", target: safetySecurityId },
    { name: "Support", target: supportId },
    { name: "Login", path: loginPath },
    { name: "Register", path: registerPath, isButton: true },
  ];

  const scrollToSection = (id?: string) => {
  if (!id) return;

  const section = document.getElementById(id);
  if (!section) return;

  const headerOffset = 96; // height of sticky header
  const elementPosition = section.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });

  setIsMenuOpen(false);
};


  return (
    <header className="shadow-sm w-full px-4 py-4 md:px-6 lg:px-8 sticky top-0 bg-white z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="font-bold text-xl md:text-2xl lg:text-3xl text-indigo-900 flex items-center">
          Trade
          <img src={LogoText} alt="logo" className="w-6 md:w-7 lg:w-8" />
          roof
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.target ? (
                  <button
                    onClick={() => scrollToSection(item.target)}
                    className="text-indigo-900 font-semibold hover:text-indigo-800 hover:underline transition"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    to={item.path!}
                    className={
                      item.isButton
                        ? "bg-indigo-900 text-white px-4 py-2 rounded-md font-semibold hover:bg-indigo-800 transition"
                        : "text-indigo-900 font-semibold hover:text-indigo-800 hover:underline transition"
                    }
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden w-8 h-8 flex flex-col justify-center items-center space-y-1.5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-indigo-900 transition ${isMenuOpen && "rotate-45 translate-y-2"}`} />
          <span className={`w-6 h-0.5 bg-indigo-900 transition ${isMenuOpen && "opacity-0"}`} />
          <span className={`w-6 h-0.5 bg-indigo-900 transition ${isMenuOpen && "-rotate-45 -translate-y-2"}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 border-t pt-4">
          <ul className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.target ? (
                  <button
                    onClick={() => scrollToSection(item.target)}
                    className="block w-full text-left text-indigo-900 font-semibold hover:underline"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    to={item.path!}
                    onClick={() => setIsMenuOpen(false)}
                    className={
                      item.isButton
                        ? "block bg-indigo-900 text-white px-4 py-3 rounded-md font-semibold text-center"
                        : "block text-indigo-900 font-semibold hover:underline"
                    }
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
