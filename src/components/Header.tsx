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
    <header className="fixed top-0 w-full z-50 bg-vintage-parchment/70 backdrop-blur-sm border-b border-vintage-brass/20 shadow-vintage/50 animate-header-slide-down">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group animate-logo-float">
            <div className="relative">
              <Search className="w-8 h-8 text-vintage-gold transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 animate-icon-pulse" />
              <div className="absolute -inset-1 bg-vintage-gold/10 rounded-full blur transition-all duration-500 group-hover:bg-vintage-gold/30 group-hover:blur-md animate-glow-ring"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-display font-bold text-vintage-sepia transition-all duration-500 group-hover:text-vintage-leather group-hover:scale-105">
                DECODEX
              </span>
              <span className="text-xs text-vintage-brass font-medium tracking-wider transition-all duration-300 group-hover:text-vintage-gold group-hover:tracking-widest">
                CAPTURE THE SIGNAL
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 animate-nav-items-cascade">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative font-medium transition-all duration-300 hover:scale-105 animate-nav-item ${
                  isActive(item.href)
                    ? "text-vintage-sepia"
                    : "text-vintage-brass hover:text-vintage-sepia"
                }`}
                style={{animationDelay: `${navigation.indexOf(item) * 100}ms`}}
              >
                <span className="relative inline-block hover:drop-shadow-sm">
                  {item.name}
                  <span className={`absolute left-0 -bottom-1 h-0.5 bg-gradient-gold transition-all duration-500 ${
                    isActive(item.href) ? "w-full" : "w-0 group/link-hover:w-full"
                  } animate-underline-glow`} />
                </span>
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4 animate-cta-entrance">
            <a
              href="https://unstop.com"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-cta-pulse"
            >
              <VintageButton variant="register" size="sm" className="hover:scale-110 transition-all duration-300">
                Register Now
              </VintageButton>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-vintage-brass hover:text-vintage-sepia transition-all duration-300 hover:scale-110 animate-mobile-button"
          >
            {isMenuOpen ? <X className="w-6 h-6 animate-spin-in" /> : <Menu className="w-6 h-6 animate-bounce-subtle" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-top border-vintage-brass/20 animate-mobile-menu-slide">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium transition-all duration-300 hover:scale-105 animate-mobile-nav-item ${
                    isActive(item.href)
                      ? "text-vintage-sepia"
                      : "text-vintage-brass hover:text-vintage-sepia"
                  }`}
                  style={{animationDelay: `${navigation.indexOf(item) * 50}ms`}}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 animate-mobile-cta">
                <a
                  href="https://unstop.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <VintageButton variant="register" size="sm" className="w-full hover:scale-105 transition-all duration-300">
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