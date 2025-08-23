import { VintageButton } from "@/components/ui/vintage-button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-detective.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

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
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transform transition-transform duration-1000 ease-out"
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
          <div 
            className="absolute top-1/4 left-1/6 w-2 h-2 bg-vintage-gold/40 rounded-full animate-parallax-slow"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          ></div>
          <div 
            className="absolute top-1/3 right-1/4 w-1 h-1 bg-vintage-brass/30 rounded-full animate-parallax-medium"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          ></div>
          <div 
            className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-vintage-gold/20 rounded-full animate-parallax-fast"
            style={{ transform: `translateY(${scrollY * 0.4}px)` }}
          ></div>
          {/* Additional floating elements */}
          <div 
            className="absolute top-1/2 right-1/3 w-1 h-1 bg-vintage-amber/25 rounded-full animate-parallax-slow"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          ></div>
          <div 
            className="absolute bottom-1/4 right-1/6 w-2.5 h-2.5 bg-vintage-gold/15 rounded-full animate-parallax-medium"
            style={{ transform: `translateY(${scrollY * 0.25}px)` }}
          ></div>
          {/* More parallax elements for depth */}
          <div 
            className="absolute top-1/6 left-1/3 w-1.5 h-1.5 bg-vintage-brass/20 rounded-full animate-parallax-fast"
            style={{ transform: `translateY(${scrollY * 0.35}px)` }}
          ></div>
          <div 
            className="absolute bottom-1/2 right-1/5 w-1 h-1 bg-vintage-gold/30 rounded-full animate-parallax-slow"
            style={{ transform: `translateY(${scrollY * 0.15}px)` }}
          ></div>
        </div>
        
        {/* Hero Content - Stationary (no scroll transforms) */}
        <div className="relative z-10 container mx-auto px-6 flex items-center justify-center min-h-screen pt-20">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            
            {/* 1. SPS Logo - Stationary */}
            <div 
              className="mb-6 animate-vintage-appear" 
              style={{
                animationDelay: '100ms'
              }}
            >
              <img 
                src="https://i.imgur.com/kXd5V5O.png" 
                alt="IEEE SPS Logo" 
                className="w-28 h-28 mx-auto opacity-90 hover:scale-110 transition-transform duration-700 hover:opacity-100"
              />
            </div>
            
            {/* 2. DECODEX Title - Stationary */}
            <h1 
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-vintage-sepia mb-4 leading-tight animate-slide-up" 
              style={{
                animationDelay: '200ms'
              }}
            >
              <span className="block hover:text-vintage-gold transition-colors duration-500">DECODEX</span>
            </h1>
            
            {/* 3. Capture The Signal - Stationary */}
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-vintage-brass mb-8 animate-slide-up" 
              style={{
                animationDelay: '300ms'
              }}
            >
              Capture The Signal
            </h2>
            
            {/* 4. Event Details - Stationary */}
            <div 
              className="mb-8 animate-fade-in" 
              style={{
                animationDelay: '400ms'
              }}
            >
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <div className="px-4 py-2 bg-vintage-parchment/80 border border-vintage-brass/30 rounded-lg backdrop-blur-sm">
                  <span className="text-vintage-sepia font-medium text-sm">September 20-21, 2025</span>
                </div>
                <div className="px-4 py-2 bg-vintage-parchment/80 border border-vintage-brass/30 rounded-lg backdrop-blur-sm">
                  <span className="text-vintage-brass font-medium text-sm">BMSITM, Bengaluru</span>
                </div>
                <div className="px-4 py-2 bg-vintage-parchment/80 border border-vintage-brass/30 rounded-lg backdrop-blur-sm">
                  <span className="text-vintage-gold font-bold text-sm">₹50,000 Prize Pool</span>
                </div>
              </div>
            </div>
            
            {/* 5. Action Buttons - Stationary */}
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" 
              style={{
                animationDelay: '500ms'
              }}
            >
              <a 
                href="https://unstop.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <VintageButton variant="register" size="xl" className="group text-lg px-16 py-6 hover:scale-105 transition-all duration-500 hover:shadow-golden">
                  Register Now
                </VintageButton>
              </a>
              <Link to="/about">
                <VintageButton variant="ghost" size="lg" className="bg-vintage-parchment/80 hover:bg-vintage-parchment text-vintage-sepia border-vintage-brass/50 hover:border-vintage-brass px-16 py-6">
                  Learn More
                </VintageButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Hero;