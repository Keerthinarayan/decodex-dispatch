import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { VintageButton } from "@/components/ui/vintage-button";
import { Link } from "react-router-dom";
import signalImage from "@/assets/signal-vintage.jpg";
import { Search, Radio, Zap, Trophy } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-vintage relative">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center border-b border-vintage-brass/30">
        <Link to="/" className="text-2xl font-display font-bold text-vintage-sepia hover:text-vintage-gold transition-colors">
          DECODEX
        </Link>
        <div className="flex space-x-6">
          <Link to="/" className="text-vintage-brass hover:text-vintage-gold transition-colors font-medium">Home</Link>
          <Link to="/timeline" className="text-vintage-brass hover:text-vintage-gold transition-colors font-medium">Timeline</Link>
          <Link to="/faq" className="text-vintage-brass hover:text-vintage-gold transition-colors font-medium">FAQ</Link>
        </div>
      </nav>
      
      <div className="container mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-vintage-sepia mb-6">
            About The Challenge
          </h1>
          <p className="text-xl text-vintage-brass max-w-3xl mx-auto">
            Embark on a journey through the enigmatic world of signal processing, 
            where Victorian ingenuity meets modern digital mysteries.
          </p>
        </div>
        
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-up">
            <img 
              src={signalImage} 
              alt="Vintage Signal Processing" 
              className="rounded-lg shadow-vintage w-full h-auto"
            />
          </div>
          
          <div className="space-y-6 animate-slide-up delay-200">
            <h2 className="text-3xl font-display font-semibold text-vintage-sepia mb-4">
              What is Capture The Signal?
            </h2>
            <p className="text-vintage-brass text-lg leading-relaxed">
              Step into the boots of a Victorian-era detective armed with modern signal processing 
              techniques. Decodex challenges participants to uncover hidden messages, analyze 
              mysterious transmissions, and solve cryptographic puzzles that would make even 
              Sherlock Holmes proud.
            </p>
            <p className="text-vintage-brass text-lg leading-relaxed">
              Using the power of digital signal processing, machine learning, and cryptanalysis, 
              you'll navigate through increasingly complex challenges that test your analytical 
              prowess and technical expertise.
            </p>
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: Search,
              title: "Detective Skills",
              description: "Analyze clues hidden in signal patterns and frequency domains"
            },
            {
              icon: Radio,
              title: "Signal Processing",
              description: "Master FFT, filtering, and spectral analysis techniques"
            },
            {
              icon: Zap,
              title: "Cryptanalysis",
              description: "Decrypt coded messages using classical and modern methods"
            },
            {
              icon: Trophy,
              title: "Competition",
              description: "Compete with the finest minds in signal processing"
            }
          ].map((feature, index) => (
            <Card key={index} className="bg-vintage-parchment/80 border-vintage-brass/30 shadow-vintage hover:shadow-golden transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
              <CardHeader className="text-center">
                <feature.icon className="w-12 h-12 text-vintage-gold mx-auto mb-2" />
                <CardTitle className="text-vintage-sepia font-display">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-vintage-brass text-sm text-center">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center animate-slide-up">
          <h2 className="text-3xl font-display font-semibold text-vintage-sepia mb-6">
            Ready to Accept the Challenge?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://example.com/register" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <VintageButton variant="register" size="lg">
                Register Now
              </VintageButton>
            </a>
            <Link to="/timeline">
              <VintageButton variant="ghost" size="lg">
                View Timeline
              </VintageButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;