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
          <div className="absolute inset-0 backdrop-blur-sm bg-brown-800/5" />
          <div className="absolute inset-0 bg-gradient-to-br from-vintage-parchment/90 via-vintage-smoke/80 to-vintage-leather/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-vintage-ink/20 via-transparent to-transparent" />
        </div>
        
        {/* Enhanced Floating Elements for Parallax - Only background elements move */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Removed all circular floating elements */}
        </div>
        
        {/* Hero Content - With subtle parallax effects */}
        <div className="relative z-10 container mx-auto px-6 flex items-center justify-center min-h-screen pt-20 pb-16">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            
            {/* 1. SPS Logo - Further reduced margin-bottom */}
            <div 
  className="mb-0 animate-vintage-appear"
  style={{
    animationDelay: '100ms',
    transform: `translateY(${scrollY * 0.05}px)`
  }}
>
  <div className="relative mx-auto w-[160px] h-[160px] md:w-[180px] md:h-[180px] lg:w-[180px] lg:h-[180px]">
    <img 
      src="https://i.imgur.com/UFzdnS0.png" 
      alt="IEEE SPS Logo" 
      className="w-full h-full object-contain opacity-90 hover:scale-110 transition-all duration-700 hover:opacity-100"
    />
  </div>
</div>
            
            {/* 2. DECODEX Logo - Tighter spacing */}
            <div 
               className="animate-slide-up -mt-4 mb-1"  // Adjusted margins for tighter spacing
              style={{
                animationDelay: '200ms',
                transform: `translateY(${scrollY * 0.08}px)` // Subtle parallax
              }}
            >
              <img 
                src="https://i.imgur.com/le3uKIO.png" 
                alt="DECODEX Logo" 
                className="mx-auto h-64 md:h-80 lg:h-96 object-contain hover:scale-105 transition-all duration-500 drop-shadow-lg"
              />
            </div>
            

            
            {/* 4. Event Details - Consistent spacing */}
            <div 
              className="mb-8 animate-fade-in"  // Consistent spacing
              style={{
                animationDelay: '400ms'
              }}
            >
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <div 
                  className="px-4 py-2 bg-vintage-parchment/80 border border-vintage-brass/30 rounded-lg backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-lg"
                >
                  <span className="text-vintage-sepia font-bold text-sm relative">
                    September 20-21, 2025
                    <div className="absolute inset-0 bg-vintage-gold/10 rounded-lg animate-pulse"></div>
                  </span>
                </div>
                <div 
                  className="px-4 py-2 bg-vintage-parchment/80 border border-vintage-brass/30 rounded-lg backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-lg relative overflow-hidden"
                >
                  <span className="text-vintage-brass font-bold text-sm relative z-10">BMSITM, Bengaluru</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-vintage-amber/5 to-vintage-gold/5 animate-pulse"></div>
                </div>
                <div 
                  className="px-4 py-2 bg-gradient-to-r from-vintage-gold/20 to-vintage-amber/20 border-2 border-vintage-gold/50 rounded-lg backdrop-blur-sm hover:scale-110 transition-all duration-300 hover:shadow-golden relative overflow-hidden group"
                >
                  <span className="text-vintage-sepia font-bold text-sm relative z-10 drop-shadow-sm">₹50,000 Prize Pool</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-vintage-gold/30 to-vintage-amber/30 animate-pulse group-hover:animate-none"></div>
                  <div className="absolute -inset-1 bg-vintage-gold/20 rounded-lg blur-sm animate-glow-pulse"></div>
                </div>
              </div>
            </div>
            
            {/* 5. Action Buttons - Consistent spacing */}
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" 
              style={{
                animationDelay: '500ms'
              }}
            >
              <a 
                href="https://unstop.com/p/decodex-2025-encrypted-classified-unlocked-bms-institute-of-technology-and-management-bmsitm-bangalore-1546795" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <VintageButton 
                  variant="register" 
                  size="xl" 
                  className="group text-lg px-16 py-6 hover:scale-105 transition-all duration-500 hover:shadow-golden transform-gpu"
                >
                  Register Now
                </VintageButton>
              </a>
              <Link to="/about">
                <VintageButton 
                  variant="ghost" 
                  size="lg" 
                  className="bg-vintage-parchment/80 hover:bg-vintage-parchment text-vintage-sepia border-vintage-brass/50 hover:border-vintage-brass px-16 py-6 hover:scale-105 transition-all duration-500"
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
