import { VintageButton } from "@/components/ui/vintage-button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-detective.jpg";
import { Search, Zap, Users, Calendar, Trophy, ArrowRight, Play } from "lucide-react";

const Hero = () => {
  const features = [
    {
      icon: Search,
      title: "Digital Detective Work",
      description: "Analyze mysterious signals hidden in the frequency domain"
    },
    {
      icon: Zap,
      title: "Signal Processing",
      description: "Master advanced DSP techniques and cryptanalysis methods"
    },
    {
      icon: Users,
      title: "Team Competition",
      description: "Collaborate with fellow detectives or compete solo"
    },
    {
      icon: Trophy,
      title: "IEEE Recognition",
      description: "Earn certificates and prizes from IEEE SPS"
    }
  ];

  const stats = [
    { number: "100+", label: "Participants Expected" },
    { number: "3", label: "Competition Rounds" },
    { number: "5", label: "Days of Mystery" },
    { number: "₹50K", label: "Prize Pool" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden pt-20">
        {/* Background with Parallax Effect */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 animate-float"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-vintage-parchment/90 via-vintage-smoke/80 to-vintage-leather/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-vintage-sepia/20 to-transparent" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-vintage-gold rounded-full animate-float opacity-60"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-vintage-brass rounded-full animate-float delay-700 opacity-40"></div>
          <div className="absolute bottom-1/4 left-1/6 w-3 h-3 bg-vintage-gold/50 rounded-full animate-float delay-1000"></div>
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-vintage-brass rounded-full animate-float delay-500 opacity-70"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 flex items-center min-h-screen">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left animate-vintage-appear">
              <div className="inline-flex items-center px-4 py-2 bg-vintage-gold/20 border border-vintage-brass/30 rounded-full mb-6">
                <Calendar className="w-4 h-4 text-vintage-gold mr-2" />
                <span className="text-vintage-sepia font-medium text-sm">February 1-10, 2025</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-vintage-sepia mb-6 leading-tight">
                <span className="block animate-slide-up">DECODEX</span>
                <span className="block text-3xl md:text-4xl lg:text-5xl text-vintage-brass animate-slide-up delay-200">
                  Capture The Signal
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-vintage-brass mb-6 animate-fade-in delay-300 leading-relaxed">
                Step into the shadows of digital mysteries. Unravel cryptic signals, 
                decode hidden messages, and prove your detective prowess.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up delay-500 mb-8">
                <a 
                  href="https://unstop.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                >
                  <VintageButton variant="register" size="xl" className="group">
                    Register on Unstop
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </VintageButton>
                </a>
                <Link to="/about" className="group">
                  <VintageButton variant="ghost" size="lg">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Trailer
                  </VintageButton>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in delay-700">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="text-2xl md:text-3xl font-display font-bold text-vintage-sepia">
                      {stat.number}
                    </div>
                    <div className="text-sm text-vintage-brass">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - IEEE Badge */}
            <div className="flex justify-center lg:justify-end animate-vintage-appear delay-300">
              <Card className="bg-vintage-parchment/90 border-vintage-gold shadow-golden hover:shadow-deep transition-all duration-500 transform hover:scale-105 max-w-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-golden animate-glow">
                    <span className="text-2xl font-display font-bold text-vintage-sepia">IEEE</span>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-vintage-sepia mb-2">
                    Officially Hosted by
                  </h3>
                  <p className="text-vintage-brass font-medium mb-4">
                    IEEE SPS Live Space
                  </p>
                  <p className="text-sm text-vintage-brass leading-relaxed">
                    In partnership with the world's premier signal processing organization, 
                    bringing you an authentic and professionally recognized competition.
                  </p>
                  <Link to="/collaboration" className="inline-flex items-center text-vintage-gold hover:text-vintage-sepia transition-colors mt-4 font-medium">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-vintage-smoke/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-vintage-sepia mb-6">
              Why Join the Investigation?
            </h2>
            <p className="text-xl text-vintage-brass max-w-3xl mx-auto">
              Sharpen your detective skills with cutting-edge signal processing challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-vintage-parchment/80 border-vintage-brass/30 shadow-vintage hover:shadow-golden transition-all duration-300 group animate-slide-up" style={{animationDelay: `${index * 100}ms`}}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-golden group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-vintage-sepia" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-vintage-sepia mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-vintage-brass text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-mystery relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-vintage-gold/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-vintage-brass/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto animate-vintage-appear">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-vintage-gold mb-6">
              Ready to Begin Your Investigation?
            </h2>
            <p className="text-xl text-vintage-smoke mb-12 leading-relaxed">
              Join fellow signal processing detectives from around the world. 
              Uncover digital mysteries, earn recognition, and prove your expertise 
              in this unique vintage-themed competition.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="https://unstop.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <VintageButton variant="hero" size="xl">
                  Start Your Journey
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
      </section>

      <Footer />
    </div>
  );
};

export default Hero;