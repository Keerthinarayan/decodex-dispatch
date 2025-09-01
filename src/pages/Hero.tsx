import { VintageButton } from "@/components/ui/vintage-button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-detective.jpg";
import { useEffect, useState } from "react";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  
  // Scroll to top when page loads
  useScrollToTop();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section - Full Screen Immersive with Enhanced Parallax */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background with Enhanced Parallax Effect */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-no-repeat transform transition-transform duration-1000 ease-out bg-left md:bg-center"
            style={{ 
              backgroundImage: `url(${heroImage})`,
              transform: `translateY(${scrollY * 0.5}px) scale(1.1)`,
              minHeight: '120vh' // Ensure image covers more than viewport for parallax
            }}
          />
          {/* Multiple gradient layers for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-vintage-parchment/90 via-vintage-smoke/80 to-vintage-leather/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-vintage-ink/20 via-transparent to-transparent" />
        </div>
        
        {/* Enhanced Floating Elements for Parallax - Only background elements move */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Removed all circular floating elements */}
        </div>
        
        {/* Hero Content - With subtle parallax effects */}
        <div className="relative z-10 container mx-auto px-6 flex items-center justify-center min-h-screen pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            
            {/* 1. SPS Logo - Enhanced with subtle parallax and fixed aspect ratio */}
            <div 
              className="mb-6 animate-vintage-appear" 
              style={{
                animationDelay: '100ms',
                transform: `translateY(${scrollY * 0.05}px)` // Very subtle parallax for logo
              }}
            >
              <div className="relative mx-auto w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40">
                <img 
                  src="https://i.imgur.com/kXd5V5O.png" 
                  alt="IEEE SPS Logo" 
                  className="w-full h-full object-contain opacity-90 hover:scale-110 transition-all duration-700 hover:opacity-100"
                />
              </div>
            </div>
            
            {/* 2. DECODEX Title - Enhanced with layered parallax */}
            <h1 
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-vintage-sepia mb-4 leading-tight animate-slide-up" 
              style={{
                animationDelay: '200ms',
                transform: `translateY(${scrollY * 0.08}px)` // Subtle parallax
              }}
            >
              <span className="block hover:text-vintage-gold transition-colors duration-500 drop-shadow-lg">
                DECODEX
              </span>
            </h1>
            
            {/* 3. Capture The Signal - With parallax */}
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-vintage-brass mb-8 animate-slide-up" 
              style={{
                animationDelay: '300ms',
                transform: `translateY(${scrollY * 0.06}px)` // Subtle parallax
              }}
            >
              <span className="drop-shadow-md">Capture The Signal</span>
            </h2>
            
            {/* 4. Event Details - Enhanced with individual parallax */}
            <div 
              className="mb-8 animate-fade-in" 
              style={{
                animationDelay: '400ms',
                transform: `translateY(${scrollY * 0.04}px)` // Very subtle parallax
              }}
            >
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <div 
                  className="px-4 py-2 bg-vintage-parchment/80 border border-vintage-brass/30 rounded-lg backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-lg"
                  style={{ transform: `translateY(${scrollY * 0.02}px)` }}
                >
                  <span className="text-vintage-sepia font-medium text-sm">September 20-21, 2025</span>
                </div>
                <div 
                  className="px-4 py-2 bg-vintage-parchment/80 border border-vintage-brass/30 rounded-lg backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-lg"
                  style={{ transform: `translateY(${scrollY * 0.03}px)` }}
                >
                  <span className="text-vintage-brass font-medium text-sm">BMSITM, Bengaluru</span>
                </div>
                <div 
                  className="px-4 py-2 bg-vintage-parchment/80 border border-vintage-brass/30 rounded-lg backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-lg"
                  style={{ transform: `translateY(${scrollY * 0.01}px)` }}
                >
                  <span className="text-vintage-gold font-bold text-sm">₹50,000 Prize Pool</span>
                </div>
              </div>
            </div>
            
            {/* 5. Action Buttons - Enhanced with hover effects */}
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" 
              style={{
                animationDelay: '500ms',
                transform: `translateY(${scrollY * 0.02}px)` // Very subtle parallax
              }}
            >
              <a 
                href="https://unstop.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <VintageButton 
                  variant="register" 
                  size="xl" 
                  className="group text-lg px-16 py-6 hover:scale-105 transition-all duration-500 hover:shadow-golden transform-gpu"
                  style={{ transform: `translateY(${scrollY * 0.01}px)` }}
                >
                  Register Now
                </VintageButton>
              </a>
              <Link to="/about">
                <VintageButton 
                  variant="ghost" 
                  size="lg" 
                  className="bg-vintage-parchment/80 hover:bg-vintage-parchment text-vintage-sepia border-vintage-brass/50 hover:border-vintage-brass px-16 py-6 hover:scale-105 transition-all duration-500"
                  style={{ transform: `translateY(${scrollY * 0.015}px)` }}
                >
                  Learn More
                </VintageButton>
              </Link>
            </div>
          </div>
        </div>

        {/* Enhanced Floating Geometric Shapes with More Complex Parallax - Squares and rectangles only */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large decorative elements - removed circles, kept squares */}
          <div 
            className="absolute bottom-1/4 right-1/12 w-24 h-24 border border-vintage-brass/15 rotate-45"
            style={{ 
              transform: `translateY(${scrollY * -0.15}px) rotate(${45 + scrollY * 0.08}deg)`
            }}
          ></div>
          
          {/* Medium decorative elements */}
          <div 
            className="absolute top-1/2 left-1/8 w-16 h-16 bg-gradient-to-br from-vintage-gold/5 to-vintage-brass/5 rounded-lg"
            style={{ 
              transform: `translateY(${scrollY * 0.12}px) rotate(${scrollY * -0.05}deg)`
            }}
          ></div>
          
          {/* Small accent elements */}          
          <div 
            className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-vintage-brass/15 rotate-45"
            style={{ 
              transform: `translateY(${scrollY * -0.2}px) rotate(${45 + scrollY * 0.15}deg)`
            }}
          ></div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Hero;