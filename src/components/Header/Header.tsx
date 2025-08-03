import Link from "next/link";
import React, { useState } from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineMenu,
  AiOutlineClose,
  AiFillFacebook,
} from "react-icons/ai";
import { FaCode } from "react-icons/fa";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { href: "#projects", label: "Projects" },
    { href: "#tech", label: "Technologies" },
    { href: "#about", label: "About" },
  ];

  const socialLinks = [
    {
      href: "https://github.com/japint",
      icon: AiFillGithub,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/angelo-centeno",
      icon: AiFillLinkedin,
      label: "LinkedIn",
    },
    {
      href: "https://www.facebook.com/japcenteno/",
      icon: AiFillFacebook,
      label: "Facebook",
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 text-white hover:text-secondary transition-colors duration-200"
          >
            <FaCode size="2rem" className="text-secondary" />
            <span className="text-xl font-bold bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent">
              Angelo Centeno
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-white hover:text-secondary transition-colors duration-200 font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-secondary transition-colors duration-200"
                  aria-label={social.label}
                >
                  <IconComponent size="1.8rem" />
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-secondary transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <AiOutlineClose size="1.5rem" />
            ) : (
              <AiOutlineMenu size="1.5rem" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block text-white hover:text-secondary transition-colors duration-200 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-4 mt-6 pt-4 border-t border-white/10">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-secondary transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <IconComponent size="1.8rem" />
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
