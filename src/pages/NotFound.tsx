import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { VintageButton } from "@/components/ui/vintage-button";
import { Link } from "react-router-dom";
import { Search, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-vintage flex flex-col">
      <Header />
      
      <div className="flex-1 flex items-center justify-center px-6 pt-20">
        <div className="text-center max-w-2xl mx-auto animate-vintage-appear">
          <div className="relative mb-8">
            <Search className="w-32 h-32 text-vintage-brass mx-auto opacity-30 animate-float" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl font-display font-bold text-vintage-sepia">404</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-display font-bold text-vintage-sepia mb-6">
            Mystery Unsolved
          </h1>
          
          <p className="text-xl text-vintage-brass mb-8 leading-relaxed">
            The page you seek has vanished like a cryptic signal in the night. 
            Even our finest detectives couldn't trace this route through the digital archives.
          </p>
          
          <p className="text-vintage-brass/80 mb-8 font-medium">
            Path: <code className="bg-vintage-smoke/50 px-2 py-1 rounded text-vintage-sepia">{location.pathname}</code>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <VintageButton variant="hero" size="lg">
                <Home className="w-5 h-5 mr-2" />
                Return to Base
              </VintageButton>
            </Link>
            <Link to="/about">
              <VintageButton variant="ghost" size="lg">
                Continue Investigation
              </VintageButton>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
