import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { VintageButton } from "@/components/ui/vintage-button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Clock, Users, Trophy, FileText, Zap, Brain, Target, Sword, Eye, Crown, Award } from "lucide-react";

const About = () => {
  const competitionHighlights = [
    {
      icon: Clock,
      title: "24-hour Competition",
      description: "Intense round-the-clock challenge"
    },
    {
      icon: Users,
      title: "Teams of 3–4",
      description: "Collaborate and compete together"
    },
    {
      icon: Trophy,
      title: "₹50,000 Prize Pool",
      description: "Substantial rewards for winners"
    }
  ];

  const rounds = [
    {
      title: "ROUND 1: PUZZLE RUSH",
      date: "September 20, 2025",
      time: "10:00 AM - 4:00 PM",
      description: "Think fast. Solve faster. The game kicks off with a wild set of mind-melting puzzles a leaderboard based battle where every correct answer counts. Only the sharpest teams make it through",
      features: [
        { icon: Zap, text: "Rapid-fire logic and puzzle challenges" },
        { icon: Brain, text: "Focused on analytical thinking" },
        { icon: Target, text: "Leaderboard based elimination" },
        { icon: Award, text: "Only the top 50% move on" }
      ],
      color: "from-vintage-amber/30 to-vintage-gold/20"
    },
    {
      title: "ROUND 2: THE ALL-NIGHTER",
      date: "September 20 - September 21, 2025",
      time: "5:00 PM - 7:00 AM",
      description: "It's midnight madness – where things get serious. This all-nighter throws challenging puzzles, conceptual problems, and a sprinkle of microcontroller-based logic games into the mix. Teamwork? Essential. Sleep? Optional.",
      features: [
        { icon: Zap, text: "Higher-difficulty problems" },
        { icon: Brain, text: "Mixed with microcontroller-based logics" },
        { icon: Target, text: "Leaderboard based elimination" },
        { icon: Award, text: "Only 16 teams survive to the final showdown" }
      ],
      color: "from-vintage-sepia/25 to-vintage-brass/20"
    },
    {
      title: "ROUND 3: THE FINAL STANDOFF",
      date: "September 21, 2025",
      time: "8:00 AM - 12:00 PM",
      description: "It's bracket time. The top 16 clash in an intense head-to-head format. One-on-one matchups. Win or get eliminated. Only the smartest and fastest teams climb to the top.",
      features: [
        { icon: Sword, text: "1v1 bracket duels – lose and you're out" },
        { icon: Eye, text: "No prior hardware knowledge required – just GPT-powered reasoning" },
        { icon: Crown, text: "Top 3 emerge victorious" },
        { icon: Trophy, text: "Glory, bragging rights, and ultimate CTS domination" }
      ],
      color: "from-vintage-gold/25 to-vintage-amber/20"
    }
  ];

  const documents = [
    {
      title: "Code of Conduct",
      description: "Guidelines for participant behavior and ethics",
      icon: FileText,
      link: "https://drive.google.com/file/d/10sCDjFT2G329_ZCcOHx4YKJQ-kTf9EnE/view"
    },
    {
      title: "Event Flow",
      description: "Detailed schedule and round progression",
      icon: Clock,
      link: "#"
    },
    {
      title: "Registration Agreement",
      description: "Terms and conditions for participation",
      icon: FileText,
      link: "https://drive.google.com/file/d/1eBlJuojRuf2IF9W5BNuJ1ZTe_iwHfH03/view"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-vintage relative">
      <Header />
      
      <div className="container mx-auto px-6 py-12 pt-32">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-vintage-sepia mb-8 leading-tight animate-slide-up">
            Capture The Signal 2.0
          </h1>
          <div className="w-32 h-1 bg-gradient-gold mx-auto mb-8 animate-slide-up" style={{animationDelay: '200ms'}}></div>
          <p className="text-xl text-vintage-brass max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '400ms'}}>
            Capture The Signal is a fast-paced decoding challenge hosted by the IEEE Signal Processing Society. 
            Use your signal processing skills to analyze, interpret, and decode hidden data from complex signals. 
            Get ready to crack the code!
          </p>
        </div>

        {/* Competition Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {competitionHighlights.map((highlight, index) => (
            <Card key={index} className="bg-vintage-parchment/90 border-vintage-gold/30 shadow-golden hover:shadow-deep transition-all duration-500 animate-slide-up group" style={{animationDelay: `${index * 150}ms`}}>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <highlight.icon className="w-8 h-8 text-vintage-sepia" />
                </div>
                <CardTitle className="text-xl font-display font-bold text-vintage-sepia">{highlight.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-vintage-brass text-sm">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Competition Format */}
        <div className="mb-20">
          <div className="text-center mb-16 animate-fade-in" style={{animationDelay: '600ms'}}>
            <h2 className="text-4xl font-display font-bold text-vintage-sepia mb-6">
              Competition Format
            </h2>
            <div className="w-24 h-1 bg-gradient-gold mx-auto"></div>
          </div>
          
          <div className="space-y-12">
            {rounds.map((round, index) => (
              <Card key={index} className={`bg-gradient-to-r ${round.color} border-vintage-brass/30 shadow-vintage hover:shadow-golden transition-all duration-500 animate-slide-up overflow-hidden`} style={{animationDelay: `${800 + index * 200}ms`}}>
                <CardHeader className="text-center pb-6">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-vintage-sepia mb-4">{round.title}</h3>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-vintage-brass font-medium">
                    <span>{round.date}</span>
                    <span className="hidden sm:block">|</span>
                    <span>{round.time}</span>
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-vintage-brass text-lg leading-relaxed mb-8 max-w-4xl mx-auto">
                    {round.description}
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {round.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3 text-left">
                        <feature.icon className="w-5 h-5 text-vintage-gold flex-shrink-0" />
                        <span className="text-vintage-brass text-sm">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Important Documents */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-fade-in" style={{animationDelay: '1400ms'}}>
            <h2 className="text-3xl font-display font-bold text-vintage-sepia mb-6">
              Important Documents
            </h2>
            <p className="text-vintage-brass text-lg mb-8">
              Please select a document below to view or download it.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {documents.map((doc, index) => (
              <Card key={index} className="bg-vintage-parchment/90 border-vintage-brass/30 shadow-vintage hover:shadow-golden transition-all duration-500 animate-slide-up group cursor-pointer" style={{animationDelay: `${1600 + index * 150}ms`}}>
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-vintage-leather/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <doc.icon className="w-8 h-8 text-vintage-gold" />
                  </div>
                  <CardTitle className="text-lg font-display font-semibold text-vintage-sepia">{doc.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-vintage-brass text-sm">{doc.description}</p>
                  {doc.link !== "#" ? (
                    <a 
                      href={doc.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-vintage-gold hover:text-vintage-sepia transition-colors duration-300 font-medium"
                    >
                      View Document →
                    </a>
                  ) : (
                    <div className="mt-4 text-vintage-gold text-xs font-medium">
                      (Link will be uploaded)
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in" style={{animationDelay: '2000ms'}}>
          <h2 className="text-3xl font-display font-semibold text-vintage-sepia mb-8">
            Ready to Accept the Challenge?
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://unstop.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <VintageButton variant="register" size="xl" className="px-12 py-6">
                Register Now
              </VintageButton>
            </a>
            <Link to="/timeline">
              <VintageButton variant="ghost" size="lg" className="px-8 py-6">
                View Timeline
              </VintageButton>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;