import { useState, useEffect } from "react";
import { X, Trophy, ExternalLink } from "lucide-react";
import { VintageButton } from "@/components/ui/vintage-button";
import { Link } from "react-router-dom";

const ResultsPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after a short delay on every page refresh
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = (e) => {
    // Prevent event bubbling
    e?.stopPropagation();
    setIsVisible(false);
  };

  const handleViewResults = () => {
    setIsVisible(false);
  };

  const handleOverlayClick = (e) => {
    // Close popup if clicking on the overlay background
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={handleOverlayClick}
    >
      <div className="relative max-w-md w-full bg-gradient-to-br from-vintage-parchment to-vintage-smoke rounded-2xl shadow-deep border-2 border-vintage-gold/40 overflow-hidden animate-vintage-appear">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-vintage-gold/10 to-vintage-amber/10 opacity-50"></div>
        
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-vintage-brass/20 hover:bg-vintage-brass/40 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        >
          <X className="w-4 h-4 text-vintage-sepia group-hover:text-vintage-leather" />
        </button>

        <div className="relative z-10 p-6 text-center">
          {/* Icon */}
          <div className="relative mb-6">
            <Trophy className="w-16 h-16 text-vintage-gold mx-auto animate-float" />
            <div className="absolute inset-0 w-16 h-16 bg-vintage-gold/20 rounded-full animate-ping-slow mx-auto"></div>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-display font-bold text-vintage-sepia mb-3 leading-tight">
             Results Announced!
          </h2>

          {/* Message */}
          <p className="text-vintage-brass mb-6 leading-relaxed">
            The qualifier round results are now live! Check if your team has qualified for 
            <span className="block mt-1 font-semibold text-vintage-gold">The Manhattan Directive</span>
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            <Link to="/results" onClick={handleViewResults}>
              <VintageButton 
                variant="hero" 
                size="lg" 
                className="w-full hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  <Trophy className="w-5 h-5" />
                  View Results
                  <ExternalLink className="w-4 h-4" />
                </span>
              </VintageButton>
            </Link>
            
            <button
              onClick={handleClose}
              className="text-vintage-brass hover:text-vintage-sepia transition-colors duration-300 text-sm font-medium"
            >
              Maybe Later
            </button>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-2 left-4 w-1 h-1 bg-vintage-gold/30 rounded-full animate-twinkle"></div>
          <div className="absolute bottom-4 right-6 w-1.5 h-1.5 bg-vintage-amber/20 rounded-full animate-twinkle" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPopup;
