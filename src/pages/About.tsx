import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { VintageButton } from "@/components/ui/vintage-button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Clock, Users, Trophy, FileText, Zap, Brain, Target, Sword, Eye, Crown, Award, Download, ExternalLink, Calendar, MapPin, Star, Shield, Zap as ZapIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";

const About = () => {
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

  const competitionHighlights = [
    {
      icon: Clock,
      title: "24-hour Competition",
      description: "Intense round-the-clock challenge",
      color: "from-vintage-gold/20 to-vintage-amber/10"
    },
    {
      icon: Users,
      title: "Units of 3–4",
      description: "Collaborate and compete together",
      color: "from-vintage-brass/20 to-vintage-gold/10"
    },
    {
      icon: Trophy,
      title: "₹50,000 Prize Pool",
      description: "Substantial rewards for winners",
      color: "from-vintage-amber/20 to-vintage-gold/10"
    }
  ];

  const rounds = [
    {
      title: "ROUND 1: QUALIFIER ROUND",
      date: "September 13, 2025",
      time: "11:00 PM to 11:00 AM",
      description: "Qualifier round will be conducted on Unstop. The top 30 teams will qualify for the next round.",
      features: [
        { icon: Zap, text: "Online qualifier on Unstop platform" },
        { icon: Brain, text: "Focused on analytical thinking" },
        { icon: Target, text: "Competitive selection process" },
        { icon: Award, text: "Top 30 teams advance to Manhattan Directive" }
      ],
      color: "from-vintage-amber/30 to-vintage-gold/20"
    },
    {
      title: "ROUND 2: THE MANHATTAN DIRECTIVE",
      date: "September 20 - 21, 2025",
      time: "11:00 AM to 11:00 AM",
      description: "DecodeX 2025 takes you inside a classified mission inspired by the Manhattan Project. Your directive: work in units of 3–4. Every solved piece brings you closer to the secret blueprint — the final key to completing your mission before time runs out.",
      features: [
        { icon: Zap, text: "24-hour nonstop challenge" },
        { icon: Brain, text: "Time-bound decoding challenges" },
        { icon: Target, text: "Solve puzzles and decode transmissions" },
        { icon: Award, text: "Work as a unit to reach the final solution" }
      ],
      color: "from-vintage-sepia/25 to-vintage-brass/20"
    }
  ];

  const documents = [
    {
      title: "Code of Conduct",
      description: "Guidelines for participant behavior and ethics",
      icon: Shield,
      link: "https://drive.google.com/file/d/10sCDjFT2G329_ZCcOHx4YKJQ-kTf9EnE/view",
      status: "available",
      color: "from-vintage-gold/20 to-vintage-amber/10"
    },
    {
      title: "Event Flow",
      description: "Detailed schedule and round progression",
      icon: Calendar,
      link: "https://drive.google.com/file/d/1ySzQYgQMykuw5aEkduBBr08ih8tgmpPl/view",
      status: "available",
      color: "from-vintage-brass/20 to-vintage-gold/10"
    },
    {
      title: "Registration Agreement",
      description: "Terms and conditions for participation",
      icon: FileText,
      link: "https://drive.google.com/file/d/1eBlJuojRuf2IF9W5BNuJ1ZTe_iwHfH03/view",
      status: "available",
      color: "from-vintage-amber/20 to-vintage-gold/10"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-vintage relative overflow-hidden">
      <Header />
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-vintage-gold/20 rounded-full animate-twinkle"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-vintage-amber/15 rounded-full animate-twinkle" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-vintage-brass/10 rounded-full animate-twinkle" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/6 w-1 h-1 bg-vintage-gold/25 rounded-full animate-twinkle" style={{animationDelay: '0.5s'}}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-12 pt-32">
        {/* Enhanced Header Section */}
        <div className="text-center mb-16 md:mb-24 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-vintage-sepia mb-6 md:mb-8 leading-tight animate-slide-up" style={{animationDelay: '200ms'}}>
            About
          </h1>
          <div className="w-24 md:w-40 h-1 bg-gradient-gold mx-auto mb-6 md:mb-8 animate-slide-up" style={{animationDelay: '400ms'}}></div>
          <p className="text-lg md:text-xl text-vintage-brass max-w-4xl md:max-w-5xl mx-auto leading-relaxed animate-fade-in px-4 md:px-0" style={{animationDelay: '600ms'}}>
            DecodeX is a fast-paced decoding challenge hosted by the IEEE Signal Processing Society. 
            Use your skills to analyze, interpret, and decode hidden data from complex signals. 
            <span className="block mt-2 md:mt-3 text-vintage-gold font-medium">Step into the mission and prove your codebreaking edge!!!</span>
          </p>
        </div>

        {/* Enhanced Competition Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
          {competitionHighlights.map((highlight, index) => (
            <Card 
              key={index} 
              className={`bg-gradient-to-br ${highlight.color} border-vintage-gold/30 shadow-golden hover:shadow-deep transition-all duration-500 animate-slide-up group overflow-hidden backdrop-blur-sm`} 
              style={{animationDelay: `${index * 150}ms`}}
            >
              <CardHeader className="text-center pb-4 md:pb-6 pt-6 md:pt-8 px-4 md:px-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-vintage-gold to-vintage-amber rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-golden">
                  <highlight.icon className="w-8 h-8 md:w-10 md:h-10 text-vintage-sepia" />
                </div>
                <CardTitle className="text-lg md:text-2xl font-display font-bold text-vintage-sepia mb-2 md:mb-3">{highlight.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center pb-6 md:pb-8 px-4 md:px-6">
                <p className="text-vintage-brass text-base md:text-lg font-medium">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Competition Format */}
        <div className="mb-16 md:mb-24">
          <div className="text-center mb-12 md:mb-20 animate-fade-in px-4 md:px-0" style={{animationDelay: '600ms'}}>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-vintage-sepia mb-4 md:mb-6">
              Competition Format
            </h2>
            <div className="w-20 md:w-32 h-1 bg-gradient-gold mx-auto mb-6 md:mb-8"></div>
            <p className="text-lg md:text-xl text-vintage-brass max-w-3xl mx-auto leading-relaxed">
              Two challenging rounds that will test your signal processing and analytical skills. 
              From online qualifiers to the intense Manhattan Directive challenge.
            </p>
          </div>
          
          <div className="space-y-8 md:space-y-16">
            {rounds.map((round, index) => (
              <Card 
                key={index} 
                className={`bg-gradient-to-r ${round.color} border-vintage-brass/30 shadow-vintage hover:shadow-golden transition-all duration-500 animate-slide-up overflow-hidden backdrop-blur-sm mx-4 md:mx-0`} 
                style={{animationDelay: `${800 + index * 200}ms`}}
              >
                <CardHeader className="text-center pb-6 md:pb-8 pt-8 md:pt-10 px-4 md:px-6">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-vintage-sepia mb-4 md:mb-6">{round.title}</h3>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 text-vintage-brass font-medium text-base md:text-lg">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 md:w-5 md:h-5 text-vintage-gold" />
                      <span>{round.date}</span>
                    </div>
                    <div className="hidden sm:block w-1 h-1 bg-vintage-gold rounded-full"></div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 md:w-5 md:h-5 text-vintage-gold" />
                      <span>{round.time}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="text-center pb-8 md:pb-10 px-4 md:px-6">
                  <p className="text-vintage-brass text-lg md:text-xl leading-relaxed mb-8 md:mb-10 max-w-4xl md:max-w-5xl mx-auto">
                    {round.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
                    {round.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3 md:space-x-4 text-left p-3 md:p-4 bg-vintage-parchment/30 rounded-lg border border-vintage-brass/20">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-vintage-gold to-vintage-amber rounded-full flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-4 h-4 md:w-5 md:h-5 text-vintage-sepia" />
                        </div>
                        <span className="text-vintage-brass text-sm md:text-base font-medium">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Important Documents */}
        <div className="mb-16 md:mb-24">
          <div className="text-center mb-10 md:mb-16 animate-fade-in px-4 md:px-0" style={{animationDelay: '1400ms'}}>
            <div className="inline-flex items-center gap-2 md:gap-3 mb-4 md:mb-6 animate-slide-up">
              <FileText className="w-6 h-6 md:w-8 md:h-8 text-vintage-gold" />
              <span className="text-vintage-brass font-medium text-base md:text-lg">Essential Resources</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-vintage-sepia mb-4 md:mb-6">
              Important Documents
            </h2>
            <div className="w-24 md:w-32 h-1 bg-gradient-gold mx-auto mb-6 md:mb-8"></div>
            <p className="text-lg md:text-xl text-vintage-brass max-w-3xl mx-auto leading-relaxed">
              Access all the essential documents you need to participate . 
              Download and review these materials carefully before registration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0">
            {documents.map((doc, index) => (
              <Card 
                key={index} 
                className={`bg-gradient-to-br ${doc.color} border-vintage-brass/30 shadow-vintage hover:shadow-golden transition-all duration-500 animate-slide-up group overflow-hidden backdrop-blur-sm`} 
                style={{animationDelay: `${1600 + index * 150}ms`}}
              >
                <CardHeader className="text-center pb-4 md:pb-6 pt-6 md:pt-8 px-4 md:px-6">
                  <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-vintage-gold to-vintage-amber rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-golden`}>
                    <doc.icon className="w-8 h-8 md:w-10 md:h-10 text-vintage-sepia" />
                  </div>
                  <CardTitle className="text-lg md:text-xl font-display font-bold text-vintage-sepia mb-2 md:mb-3">{doc.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center pb-6 md:pb-8 px-4 md:px-6">
                  <p className="text-vintage-brass text-sm md:text-base mb-4 md:mb-6 leading-relaxed">{doc.description}</p>
                  
                  {doc.status === "available" ? (
                    <a 
                      href={doc.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-vintage-gold to-vintage-amber text-vintage-sepia font-display font-semibold rounded-lg shadow-golden hover:shadow-deep transition-all duration-300 hover:scale-105 group text-sm md:text-base"
                    >
                      <Download className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform duration-300" />
                      View Document
                      <ExternalLink className="w-3 h-3 md:w-4 md:h-4 group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  ) : (
                    <div className="inline-flex items-center justify-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-vintage-brass/20 text-vintage-brass font-display font-medium rounded-lg border border-vintage-brass/30 text-sm md:text-base">
                      <Clock className="w-4 h-4 md:w-5 md:h-5" />
                      Coming Soon
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center animate-fade-in px-4 md:px-0" style={{animationDelay: '2000ms'}}>
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-vintage-parchment/90 to-vintage-smoke/80 rounded-xl md:rounded-2xl p-8 md:p-12 shadow-vintage border border-vintage-brass/30 backdrop-blur-sm relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-vintage-gold/5 to-vintage-amber/5 opacity-50"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 md:gap-3 mb-6 md:mb-8 animate-slide-up">
                <Star className="w-6 h-6 md:w-8 md:h-8 text-vintage-gold" />
                <span className="text-vintage-brass font-medium text-base md:text-lg">Ready to Begin?</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-display font-bold text-vintage-sepia mb-4 md:mb-6">
                Ready to Accept the Challenge?
              </h2>
              <p className="text-lg md:text-xl text-vintage-brass mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto">
                Join hundreds of signal processing enthusiasts in this ultimate decoding challenge. 
                <span className="block mt-2 text-vintage-gold font-medium">Your journey to becoming a master detective starts here!</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                <a 
                  href="https://unstop.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                >
                  <VintageButton 
                    variant="register" 
                    size="xl" 
                    className="px-8 md:px-12 py-4 md:py-6 text-base md:text-lg hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                  >
                    <span className="flex items-center gap-2 md:gap-3">
                      <ZapIcon className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-300" />
                      Register Now
                      <ZapIcon className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-300" />
                    </span>
                  </VintageButton>
                </a>
                <Link to="/timeline">
                  <VintageButton 
                    variant="ghost" 
                    size="lg" 
                    className="px-6 md:px-10 py-4 md:py-6 text-base md:text-lg bg-vintage-parchment/80 hover:bg-vintage-parchment text-vintage-sepia border-vintage-brass/50 hover:border-vintage-brass hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                  >
                    <span className="flex items-center gap-2 md:gap-3">
                      <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                      View Timeline
                    </span>
                  </VintageButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;