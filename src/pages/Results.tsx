import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { VintageButton } from "@/components/ui/vintage-button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { 
  Trophy, 
  Users, 
  Calendar, 
  MapPin, 
  Star, 
  Crown, 
  Award,
  CheckCircle,
  Sparkles,
  Target,
  Zap,
  User,
  AlertTriangle
} from "lucide-react";
import { useState, useEffect } from "react";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";

const Results = () => {
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

  // Confirmed teams data
  const confirmedTeams = [
    { slNo: 1, teamName: "MetaBlaze", leaderName: "Vijay V" },
    { slNo: 2, teamName: "Bunch of Bugs", leaderName: "Priyanshu Raj" },
    { slNo: 3, teamName: "The Debug Ninjas", leaderName: "Vinod S Sambrani" },
    { slNo: 4, teamName: "Think 4ward", leaderName: "Kowshik Rao" },
    { slNo: 5, teamName: "Team LexAI", leaderName: "Banavathu Yoganandha" },
    { slNo: 6, teamName: "Puzzlebyte", leaderName: "Sparsha Swaminathan" },
    { slNo: 7, teamName: "Signotech", leaderName: "B Suraj" },
    { slNo: 8, teamName: "Code Blooded", leaderName: "Pranaya S K" },
    { slNo: 9, teamName: "TeraBhaiHacker", leaderName: "Farhan Ahmed" },
    { slNo: 10, teamName: "Infinitech", leaderName: "Sanath R" },
    { slNo: 11, teamName: "Byte Buzz", leaderName: "Vinaykumar bhavimani" },
    { slNo: 12, teamName: "Fire Bolt", leaderName: "Neha K" },
    { slNo: 13, teamName: "Omega", leaderName: "Yashaswini K P" },
    { slNo: 14, teamName: "Coding Ninjas", leaderName: "Ayush C S" },
    { slNo: 15, teamName: "Team Foul Owls", leaderName: "Tanmay Khaitan" },
    { slNo: 16, teamName: "Nightowls", leaderName: "ANKUR PATHAK" },
    { slNo: 17, teamName: "Royals", leaderName: "Venkatesh R" },
    { slNo: 18, teamName: "Tech Brawlers", leaderName: "Angel Bharadwaj" },
    { slNo: 19, teamName: "Quadcore Brains", leaderName: "Mokshith R" },
    { slNo: 20, teamName: "Illu-Minaati", leaderName: "Kushal Raj G S" },
    { slNo: 21, teamName: "HackHer", leaderName: "Aditi Sahoo" },
    { slNo: 22, teamName: "Nexus", leaderName: "Tanushrii" },
    { slNo: 23, teamName: "Code Red", leaderName: "S Vinay" },
    { slNo: 24, teamName: "Decatron", leaderName: "Yashwanth M"},
    { slNo: 25, teamName: "Algoriders", leaderName: "Gnanashree J" },
    { slNo: 26, teamName: "Triod", leaderName: "Manushree Mahesh Nandihal" },
    { slNo: 27, teamName: "InnoSphere", leaderName: "Priya M" },
    { slNo: 28, teamName: "Aurora", leaderName: "Abdul Hannan" },
    { slNo: 29, teamName: "Comrade", leaderName: "Kishan MC", status: "Waiting" },
    { slNo: 30, teamName: "TechnoBlade", leaderName: "Tanay Tole", status: "Waiting" }
  ];

  const getRankIcon = (slNo: number) => {
    if (slNo === 1) return <Crown className="w-6 h-6 text-vintage-gold" />;
    if (slNo === 2) return <Award className="w-6 h-6 text-vintage-brass" />;
    if (slNo === 3) return <Star className="w-6 h-6 text-vintage-amber" />;
    return <CheckCircle className="w-5 h-5 text-vintage-sepia" />;
  };

  const getRankColor = (slNo: number) => {
    if (slNo === 1) return "from-vintage-gold/30 to-vintage-amber/20 border-vintage-gold/50";
    if (slNo === 2) return "from-vintage-brass/30 to-vintage-gold/20 border-vintage-brass/50";
    if (slNo === 3) return "from-vintage-amber/30 to-vintage-gold/20 border-vintage-amber/50";
    return "from-vintage-smoke/30 to-vintage-parchment/20 border-vintage-brass/30";
  };

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
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-8 sm:py-12 pt-24 sm:pt-32">
        {/* Enhanced Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <div className="relative inline-block mb-6 sm:mb-8">
            <Trophy className="w-16 h-16 sm:w-20 sm:h-20 text-vintage-gold mx-auto animate-float" />
            <div className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 bg-vintage-gold/20 rounded-full animate-ping-slow"></div>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-bold text-vintage-sepia mb-4 sm:mb-6 text-shadow-vintage leading-tight">
            Qualifier Results
          </h1>
          <div className="w-24 sm:w-32 h-1 bg-gradient-gold mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl md:text-2xl text-vintage-brass max-w-4xl mx-auto leading-relaxed px-4">
            Congratulations to the teams who have successfully qualified for 
            <span className="block mt-2 text-vintage-gold font-semibold">The Manhattan Directive - Round 2</span>
          </p>
        </div>

        {/* Qualified Teams List */}
        <div className="max-w-6xl mx-auto animate-vintage-appear">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-vintage-sepia mb-4">
              Qualified Teams
            </h2>
            <p className="text-vintage-brass text-base sm:text-lg">
              Listed in order of qualification
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 mb-12">
            {confirmedTeams.map((team, index) => (
              <Card 
                key={team.slNo} 
                className={`bg-gradient-to-r ${getRankColor(team.slNo)} shadow-vintage hover:shadow-golden transition-all duration-500 animate-slide-up group overflow-hidden`}
                style={{animationDelay: `${index * 50}ms`}}
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3 sm:gap-4 flex-1">
                      <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-vintage-parchment/80 rounded-full border-2 border-vintage-brass/30 group-hover:scale-110 transition-transform duration-300">
                        <div className="flex flex-col items-center">
                          {getRankIcon(team.slNo)}
                          <span className="text-xs sm:text-sm font-bold text-vintage-sepia mt-1">#{team.slNo}</span>
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-display font-bold text-vintage-sepia mb-2 group-hover:text-vintage-leather transition-colors duration-300">
                          {team.teamName}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3">
                          <div className="flex items-center gap-1 text-sm text-vintage-brass bg-vintage-smoke/50 px-2 py-1 rounded-full border border-vintage-brass/20">
                            <User className="w-4 h-4" />
                            <span>Leader: {team.leaderName}</span>
                          </div>
                          {team.status && (
                            <div className="flex items-center gap-1 text-sm text-amber-700 bg-amber-100/80 px-2 py-1 rounded-full border border-amber-300/50">
                              <AlertTriangle className="w-4 h-4" />
                              <span>{team.status}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Event Details Card */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16 animate-slide-up">
          <Card className="bg-gradient-to-br from-vintage-parchment/90 to-vintage-smoke/80 border-vintage-gold/40 shadow-golden">
            <CardContent className="p-6 sm:p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-vintage-sepia mb-4">
                  Round 2: The Manhattan Directive
                </h2>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-vintage-brass">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-vintage-gold" />
                    <span className="font-medium">September 20-21, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-vintage-gold" />
                    <span className="font-medium">BMSITM, Bengaluru</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-vintage-gold" />
                    <span className="font-medium">24-Hour Challenge</span>
                  </div>
                </div>
              </div>
              <p className="text-vintage-brass text-center leading-relaxed">
                The qualified teams will face the ultimate 24-hour signal processing challenge. 
                Prepare for intense decoding, collaborative problem-solving, and the race to unlock the final blueprint.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16 animate-fade-in" style={{animationDelay: '800ms'}}>
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-vintage-parchment/90 to-vintage-smoke/80 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-vintage border border-vintage-brass/30 backdrop-blur-sm relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-vintage-gold/5 to-vintage-amber/5 opacity-50"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 animate-slide-up">
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-vintage-gold" />
                <span className="text-vintage-brass font-medium text-base sm:text-lg">Congratulations!</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-vintage-sepia mb-4 sm:mb-6">
                Ready for The Manhattan Directive?
              </h2>
              <p className="text-lg sm:text-xl text-vintage-brass mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto">
                If your team didn't qualify this time, don't worry! Keep honing your signal processing skills. 
                <span className="block mt-2 text-vintage-gold font-medium">More challenges await in the future!</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <Link to="/timeline">
                  <VintageButton 
                    variant="hero" 
                    size="xl" 
                    className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                  >
                    <span className="flex items-center gap-2 sm:gap-3">
                      <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
                      View Timeline
                    </span>
                  </VintageButton>
                </Link>
                <Link to="/about">
                  <VintageButton 
                    variant="ghost" 
                    size="lg" 
                    className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-vintage-parchment/80 hover:bg-vintage-parchment text-vintage-sepia border-vintage-brass/50 hover:border-vintage-brass hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                  >
                    <span className="flex items-center gap-2 sm:gap-3">
                      <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                      Learn More
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

export default Results;
