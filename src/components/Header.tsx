import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { VintageButton } from "@/components/ui/vintage-button";
import { Menu, X, Search, Home, Info, Clock, Users, HelpCircle, ExternalLink } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: Info },
    { name: "Timeline", href: "/timeline", icon: Clock },
    { name: "Collaboration", href: "/collaboration", icon: Users },
    { name: "FAQ", href: "/faq", icon: HelpCircle },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out animate-header-slide-down ${
      isScrolled 
        ? 'bg-vintage-parchment/95 backdrop-blur-md border-b border-vintage-gold/30 shadow-golden' 
        : 'bg-vintage-parchment/70 backdrop-blur-sm border-b border-vintage-brass/20 shadow-vintage/50'
    }`}>
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-vintage-gold/20 rounded-full animate-twinkle"></div>
        <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-vintage-amber/15 rounded-full animate-twinkle" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-vintage-brass/10 rounded-full animate-twinkle" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Enhanced Logo - Mobile Optimized */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group animate-logo-float">
            <div className="relative">
              <Search className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-vintage-gold transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 animate-icon-pulse" />
              <div className="absolute -inset-1 bg-vintage-gold/10 rounded-full blur transition-all duration-500 group-hover:bg-vintage-gold/30 group-hover:blur-md animate-glow-ring"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-display font-bold text-vintage-sepia transition-all duration-500 group-hover:text-vintage-leather group-hover:scale-105 relative">
                DECODEX
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-vintage-gold/20 to-vintage-amber/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </span>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 animate-nav-items-cascade">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative font-medium transition-all duration-300 hover:scale-105 animate-nav-item group ${
                  isActive(item.href)
                    ? "text-vintage-sepia"
                    : "text-vintage-brass hover:text-vintage-sepia"
                }`}
                style={{animationDelay: `${index * 100}ms`}}
              >
                <span className="relative inline-block hover:drop-shadow-sm">
                  {item.name}
                  {/* Enhanced underline with glow */}
                  <span className={`absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-vintage-gold to-vintage-amber transition-all duration-500 ${
                    isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                  } animate-underline-glow shadow-sm`} />
                </span>
              </Link>
            ))}
          </nav>

          {/* Enhanced CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4 animate-cta-entrance">
            <a
              href="https://unstop.com"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-cta-pulse group"
            >
              <VintageButton 
                variant="register" 
                size="sm" 
                className="hover:scale-110 transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">Register Now</span>
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-vintage-gold/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </VintageButton>
            </a>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2.5 text-vintage-brass hover:text-vintage-sepia transition-all duration-300 hover:scale-110 animate-mobile-button relative group rounded-lg hover:bg-vintage-gold/10"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 animate-spin-in" />
            ) : (
              <Menu className="w-5 h-5 animate-bounce-subtle" />
            )}
            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-vintage-gold/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-vintage-brass/20 animate-mobile-menu-slide relative overflow-hidden bg-vintage-parchment/95 backdrop-blur-md">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-vintage-gold/5 to-vintage-amber/5 opacity-50"></div>
            
            <nav className="flex flex-col space-y-3 relative z-10 px-4">
              {navigation.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`font-medium transition-all duration-300 hover:scale-105 animate-mobile-nav-item group relative px-4 py-3.5 rounded-xl border ${
                      isActive(item.href)
                        ? "text-vintage-sepia bg-gradient-to-r from-vintage-gold/15 to-vintage-amber/10 border-vintage-gold/30 shadow-golden/50"
                        : "text-vintage-brass hover:text-vintage-sepia hover:bg-vintage-gold/5 border-vintage-brass/20 hover:border-vintage-gold/30"
                    }`}
                    style={{animationDelay: `${index * 75}ms`}}
                  >
                    <span className="relative flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                          isActive(item.href)
                            ? "bg-vintage-gold/20 text-vintage-gold"
                            : "bg-vintage-brass/10 text-vintage-brass group-hover:bg-vintage-gold/20 group-hover:text-vintage-gold"
                        }`}>
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span className="text-base font-semibold">{item.name}</span>
                      </div>
                      {/* Active indicator */}
                      {isActive(item.href) && (
                        <div className="w-2.5 h-2.5 bg-vintage-gold rounded-full animate-ping-slow shadow-golden"></div>
                      )}
                      {/* Mobile hover effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-vintage-gold/5 to-vintage-amber/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                    </span>
                  </Link>
                );
              })}
              
              {/* Enhanced Mobile CTA */}
              <div className="pt-4 animate-mobile-cta">
                <a
                  href="https://unstop.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="block group"
                >
                  <VintageButton 
                    variant="register" 
                    size="sm" 
                    className="w-full hover:scale-105 transition-all duration-300 relative overflow-hidden text-center py-3.5 text-base font-semibold shadow-golden hover:shadow-deep"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Register Now
                    </span>
                    {/* Shimmer effect for mobile */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-vintage-gold/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000"></div>
                  </VintageButton>
                </a>
              </div>

              {/* Enhanced Mobile Menu Footer */}
              <div className="pt-4 mt-4 border-t border-vintage-brass/20">
                <div className="text-center space-y-2">
                  <div className="text-sm text-vintage-brass font-medium">
                    <p>IEEE SPS Bangalore Branch</p>
                  </div>
                  <div className="text-xs text-vintage-brass/80">
                    <p>Capture The Signal</p>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-vintage-gold/60">
                    <div className="w-1 h-1 bg-vintage-gold/40 rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium">Live Event</span>
                    <div className="w-1 h-1 bg-vintage-gold/40 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
