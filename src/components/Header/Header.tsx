import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaCode } from "react-icons/fa";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillFacebook,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#tech", label: "Tech Stack" },
    { href: "#timeline", label: "Journey" },
    { href: "#accomplishments", label: "Achievements" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-md border-b border-secondary/30 shadow-xl"
          : "bg-primary/90 backdrop-blur-sm border-b border-white/10"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center space-x-2 group">
            <FaCode
              size="2rem"
              className="text-secondary group-hover:text-white transition-all duration-300"
            />
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent">
                Angelo Centeno
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-sm text-gray-300 hover:text-secondary transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Side - Social + Mobile Menu */}
          <div className="flex items-center space-x-2">
            {/* Social Links - Hidden on small screens */}
            <div className="hidden md:flex items-center space-x-2">
              <a
                href="https://github.com/japint"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-white hover:text-secondary transition-colors duration-300"
                aria-label="GitHub Profile"
              >
                <AiFillGithub size="1.5rem" />
              </a>
              <a
                href="https://www.linkedin.com/in/angelo-centeno"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-white hover:text-secondary transition-colors duration-300"
                aria-label="LinkedIn Profile"
              >
                <AiFillLinkedin size="1.5rem" />
              </a>
              <a
                href="https://www.facebook.com/japcenteno/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-white hover:text-secondary transition-colors duration-300"
                aria-label="Facebook Profile"
              >
                <AiFillFacebook size="1.5rem" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-1.5 text-white hover:text-secondary transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <AiOutlineClose size="1.2rem" />
              ) : (
                <AiOutlineMenu size="1.2rem" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? "max-h-64 opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-3 border-t border-secondary/20">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left py-2 px-3 text-sm text-gray-300 hover:text-secondary transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Social Links */}
            <div className="flex items-center justify-center space-x-4 mt-4 pt-3 border-t border-secondary/20">
              <a
                href="https://github.com/japint"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white hover:text-secondary transition-colors duration-300"
                aria-label="GitHub Profile"
              >
                <AiFillGithub size="1.5rem" />
              </a>
              <a
                href="https://www.linkedin.com/in/angelo-centeno"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white hover:text-secondary transition-colors duration-300"
                aria-label="LinkedIn Profile"
              >
                <AiFillLinkedin size="1.5rem" />
              </a>
              <a
                href="https://www.facebook.com/japcenteno/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white hover:text-secondary transition-colors duration-300"
                aria-label="Facebook Profile"
              >
                <AiFillFacebook size="1.5rem" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
