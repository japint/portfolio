import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiFillFacebook,
} from "react-icons/ai";
import { FaCode } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

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
    {
      href: "mailto:jap1centeno@gmail.com",
      icon: AiFillMail,
      label: "Email",
    },
  ];

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#tech", label: "Technologies" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="bg-primary/90 border-t border-white/10 mt-20">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <FaCode size="2rem" className="text-secondary" />
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent">
                Angelo Centeno
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-sm">
              Full-Stack Web Developer passionate about creating exceptional
              digital experiences through innovative PERN stack development.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-secondary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Connect</h3>
            <p className="text-gray-300">
              Let's connect and build something amazing together!
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <p>📍 Based in Germany</p>
              <p>📧 jap1centeno@gmail.com</p>
              <p>📱 +49 157 3470 8799</p>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/5 rounded-lg text-white hover:text-secondary hover:bg-white/10 transition-all duration-200"
                    aria-label={social.label}
                  >
                    <IconComponent size="1.5rem" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © {currentYear} Angelo Centeno. Made with ❤️ using Next.js &
              Tailwind CSS
            </p>
            <p className="text-gray-400 text-center md:text-right">
              Designed & Built by{" "}
              <span className="text-secondary font-medium">Angelo Centeno</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
