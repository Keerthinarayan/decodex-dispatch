import { VintageButton } from "@/components/ui/vintage-button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-detective.jpg";

const Hero = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-vintage" />
      
      {/* Navigation */}
      <nav className="relative z-10 p-6 flex justify-between items-center">
        <div className="text-2xl font-display font-bold text-vintage-sepia animate-fade-in">
          DECODEX
        </div>
        <div className="flex space-x-6">
          <Link to="/about" className="text-vintage-brass hover:text-vintage-gold transition-colors font-medium">About</Link>
          <Link to="/timeline" className="text-vintage-brass hover:text-vintage-gold transition-colors font-medium">Timeline</Link>
          <Link to="/faq" className="text-vintage-brass hover:text-vintage-gold transition-colors font-medium">FAQ</Link>
        </div>
      </nav>
      
      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-6">
        <div className="max-w-4xl mx-auto text-center animate-vintage-appear">
          <h1 className="text-6xl md:text-8xl font-display font-bold text-vintage-sepia mb-6 animate-slide-up">
            DECODEX
          </h1>
          <p className="text-xl md:text-2xl text-vintage-brass mb-4 animate-slide-up delay-200">
            Capture The Signal Championship
          </p>
          <p className="text-lg text-vintage-sepia mb-8 max-w-2xl mx-auto animate-fade-in delay-300">
            Step into the shadows of digital mysteries. Unravel cryptic signals, 
            decode hidden messages, and prove your detective prowess in this vintage-themed 
            signal processing challenge.
          </p>
          
          {/* Hosted by IEEE */}
          <div className="mb-8 animate-fade-in delay-400">
            <p className="text-vintage-brass text-sm mb-2">Hosted by</p>
            <div className="text-xl font-display font-semibold text-vintage-sepia">
              IEEE SPS LIVE SPACE
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up delay-500">
            <a 
              href="https://unstop.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <VintageButton variant="register" size="xl">
                Register on Unstop
              </VintageButton>
            </a>
            <Link to="/about">
              <VintageButton variant="ghost" size="lg">
                Learn More
              </VintageButton>
            </Link>
          </div>
          
          {/* Decorative Elements */}
          <div className="mt-12 flex justify-center space-x-8 animate-float">
            <div className="w-2 h-2 bg-vintage-gold rounded-full animate-glow"></div>
            <div className="w-3 h-3 bg-vintage-brass rounded-full animate-glow delay-100"></div>
            <div className="w-2 h-2 bg-vintage-gold rounded-full animate-glow delay-200"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-vintage-brass rounded-full flex justify-center">
          <div className="w-1 h-2 bg-vintage-brass rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;