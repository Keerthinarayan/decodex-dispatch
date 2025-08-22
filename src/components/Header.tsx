import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { VintageButton } from "@/components/ui/vintage-button";
import { Menu, X, Search } from "lucide-react";

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
    <header className="fixed top-0 w-full z-50 bg-vintage-parchment/70 backdrop-blur-sm border-b border-vintage-brass/20 shadow-vintage/50 animate-fade-in">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Search className="w-8 h-8 text-vintage-gold transition-transform duration-300 group-hover:rotate-12" />
              <div className="absolute -inset-1 bg-vintage-gold/10 rounded-full blur transition-all duration-300 group-hover:bg-vintage-gold/20 group-hover:blur-md"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-display font-bold text-vintage-sepia transition-colors group-hover:text-vintage-leather">
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
                <span className="relative inline-block">
                  {item.name}
                  <span className={`absolute left-0 -bottom-1 h-0.5 bg-gradient-gold transition-all duration-300 ${
                    isActive(item.href) ? "w-full" : "w-0 group/link-hover:w-full"
                  }`} />
                </span>
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
          <div className="md:hidden py-6 border-top border-vintage-brass/20 animate-slide-up">
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