import React, { useState, useContext } from "react";
import { Link } from "react-scroll";
import { ThemeContext } from "../context/ThemeContext";
import { Sun, Moon, Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const links = ["home", "about", "skills", "experience", "projects", "contact"];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm shadow-sm transition-all">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        <h1
            className="font-bold text-xl tracking-tight hover:tracking-widest transition-all duration-300 text-dark dark:text-white"
        >
            Divya <span className="text-blue-500">Raj</span>
        </h1>



        <nav className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <Link
              key={link}
              to={link}
              smooth
              duration={500}
              className="capitalize cursor-pointer hover:text-blue-500 transition"
            >
              {link}
            </Link>
          ))}
          <button onClick={toggleTheme}>
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleTheme}>
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-black px-6 pb-4 space-y-4">
          {links.map(link => (
            <Link
              key={link}
              to={link}
              smooth
              duration={500}
              onClick={() => setMenuOpen(false)}
              className="block capitalize cursor-pointer hover:text-blue-500"
            >
              {link}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;