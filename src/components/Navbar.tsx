import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // scrolling down → hide
      } else {
        setShowNavbar(true); // scrolling up → show
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-white/10 backdrop-blur-lg shadow-lg z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-white text-2xl font-bold">Logo</h1>

        <div className="hidden md:flex space-x-8 text-white font-medium">
          <a href="#home" className="hover:text-gray-300">Home</a>
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#features" className="hover:text-gray-300">Features</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>

        <div className="hidden md:block">
          <button className="px-4 py-2 bg-white/20 rounded-xl text-white hover:bg-white/30 transition">
            Login
          </button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-lg text-white px-6 py-4 space-y-4">
          <a href="#home" className="block hover:text-gray-300">Home</a>
          <a href="#about" className="block hover:text-gray-300">About</a>
          <a href="#features" className="block hover:text-gray-300">Features</a>
          <a href="#contact" className="block hover:text-gray-300">Contact</a>
          <button className="w-full px-4 py-2 bg-white/20 rounded-xl text-white hover:bg-white/30 transition">
            Login
          </button>
        </div>
      )}
    </nav>
  );
}
