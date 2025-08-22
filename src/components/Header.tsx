import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { VintageButton } from "@/components/ui/vintage-button";
import { Menu, X, Search, BookOpen } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Timeline", href: "/timeline" },
    { name: "Collaboration", href: "/collaboration" },
    { name: "FAQ", href: "/faq" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full z-50 bg-vintage-parchment/95 backdrop-blur-md border-b border-vintage-brass/30 shadow-vintage">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Search className="w-8 h-8 text-vintage-gold group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute -inset-1 bg-vintage-gold/20 rounded-full blur group-hover:blur-md transition-all duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-display font-bold text-vintage-sepia group-hover:text-vintage-leather transition-colors">
                DECODEX
              </span>
              <span className="text-xs text-vintage-brass font-medium tracking-wider">
                CAPTURE THE SIGNAL
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative font-medium transition-colors duration-300 ${
                  isActive(item.href)
                    ? "text-vintage-sepia"
                    : "text-vintage-brass hover:text-vintage-sepia"
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-gold rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://unstop.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <VintageButton variant="register" size="sm">
                Register Now
              </VintageButton>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-vintage-brass hover:text-vintage-sepia transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-vintage-brass/30 animate-slide-up">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium transition-colors duration-300 ${
                    isActive(item.href)
                      ? "text-vintage-sepia"
                      : "text-vintage-brass hover:text-vintage-sepia"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <a
                  href="https://unstop.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <VintageButton variant="register" size="sm" className="w-full">
                    Register Now
                  </VintageButton>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;