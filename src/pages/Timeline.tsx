import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import timelineImage from "@/assets/timeline-scroll.jpg";
import { Calendar, Clock, MapPin, Users, Star, Zap, Target, Crown, Award } from "lucide-react";
import { useState, useEffect } from "react";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";

const Timeline = () => {
  const [activeEvent, setActiveEvent] = useState<number | null>(null);
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

  const timelineEvents = [
    {
      date: "September 2, 2025",
      time: "11:00 AM",
      title: "Registration Opens",
      description: "Begin your journey into the world of signal mysteries. Registration opens on Unstop.",
      icon: Users,
      status: "upcoming",
      color: "from-vintage-gold/30 to-vintage-amber/20"
    },
    {
      date: "September 13, 2025",
      time: "6:00 PM",
      title: "Qualifier Round",
      description: "Qualifier round will be conducted on Unstop. The top 30 teams will qualify for the next round.",
      icon: MapPin,
      status: "upcoming",
      color: "from-vintage-brass/30 to-vintage-gold/20"
    },
    {
      date: "September 20, 2025",
      time: "10:00 AM",
      title: "Opening Ceremony",
      description: "Grand inauguration with keynote speakers from the world of cryptography and signal processing.",
      icon: Clock,
      status: "upcoming",
      color: "from-vintage-amber/30 to-vintage-gold/20"
    },
    {
      date: "September 20 - 21, 2025",
      time: "11:00 AM",
      title: "Manhattan Directive",
      description: "The Manhattan Directive is the central theme of DecodeX 2025. Units will face time-bound decoding challenges that demand focus, logic, and collaboration.",
      achievements: ["24-hour nonstop challenge", "Solve puzzles and decode transmissions", "Work as a unit to reach the final solution"],
      icon: Clock,
      status: "upcoming",
      color: "from-vintage-sepia/30 to-vintage-brass/20"
    },
    {
      date: "September 21, 2025",
      time: "11:00 AM",
      title: "Awards Ceremony",
      description: "Recognition of the finest signal processing detectives and closing celebration.",
      icon: Calendar,
      status: "upcoming",
      color: "from-vintage-amber/30 to-vintage-gold/20"
    }
    
  ];

  return (
    <div className="min-h-screen bg-gradient-vintage relative overflow-hidden">
      <Header />
      
      {/* Enhanced Background with Parallax */}
      <div 
        className="fixed inset-0 opacity-5 bg-cover bg-center transform transition-transform duration-1000 ease-out"
        style={{ 
          backgroundImage: `url(${timelineImage})`,
          transform: `translateY(${scrollY * 0.3}px) scale(1.1)`
        }}
      />
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-vintage-gold/20 rounded-full animate-twinkle"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-vintage-amber/15 rounded-full animate-twinkle" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-vintage-brass/10 rounded-full animate-twinkle" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/6 w-1 h-1 bg-vintage-gold/25 rounded-full animate-twinkle" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-vintage-amber/20 rounded-full animate-twinkle" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/6 left-1/3 w-1.5 h-1.5 bg-vintage-brass/20 rounded-full animate-twinkle" style={{animationDelay: '0.8s'}}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-12 pt-32">
        {/* Enhanced Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-6 animate-slide-up">
            <Clock className="w-8 h-8 text-vintage-gold" />
            <span className="text-vintage-brass font-medium text-lg">Event Schedule</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-vintage-sepia mb-8 leading-tight animate-slide-up" style={{animationDelay: '200ms'}}>
            Timeline of Events
          </h1>
          <div className="w-32 h-1 bg-gradient-gold mx-auto mb-8 animate-slide-up" style={{animationDelay: '400ms'}}></div>
          <p className="text-xl text-vintage-brass max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '600ms'}}>
            Follow the chronological journey of your investigation. Each phase reveals 
            new mysteries and challenges worthy of the greatest detectives. 
            <span className="block mt-2 text-vintage-gold font-medium">Ready to decode the signals?</span>
          </p>
        </div>
        
        {/* Enhanced Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Enhanced Timeline Line */}
            <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full">
              <div className="w-full h-full bg-gradient-to-b from-vintage-gold via-vintage-brass to-vintage-sepia animate-pulse-subtle"></div>
              {/* Glowing effect */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-vintage-gold/20 via-vintage-brass/20 to-vintage-sepia/20 blur-sm animate-glow-pulse"></div>
            </div>
            
            {/* Timeline Events */}
            <div className="space-y-16">
              {timelineEvents.map((event, index) => {
                const IconComponent = event.icon;
                const isEven = index % 2 === 0;
                const isActive = activeEvent === index;
                
                return (
                  <div 
                    key={index} 
                    className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} animate-slide-up group`}
                    style={{ animationDelay: `${index * 200}ms` }}
                    onMouseEnter={() => setActiveEvent(index)}
                    onMouseLeave={() => setActiveEvent(null)}
                  >
                    {/* Enhanced Timeline Dot */}
                    <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-r from-vintage-gold to-vintage-amber rounded-full border-4 border-vintage-parchment shadow-golden z-10 transition-all duration-500 group-hover:scale-125">
                      <div className="w-full h-full bg-gradient-to-r from-vintage-brass to-vintage-gold rounded-full animate-pulse"></div>
                      {/* Active state glow */}
                      {isActive && (
                        <div className="absolute inset-0 w-full h-full bg-vintage-gold/40 rounded-full animate-ping-slow"></div>
                      )}
                    </div>
                    
                    {/* Enhanced Event Card */}
                    <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                      <Card className={`bg-vintage-parchment/95 border-vintage-brass/40 shadow-vintage hover:shadow-golden transition-all duration-500 group/card overflow-hidden backdrop-blur-sm ${
                        isActive ? 'scale-105 border-vintage-gold/60' : ''
                      }`}>
                        {/* Card background pattern */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-0 group-hover/card:opacity-100 transition-opacity duration-500`}></div>
                        
                        <CardContent className="p-6 relative z-10">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                              <div className={`w-14 h-14 bg-gradient-to-r from-vintage-gold to-vintage-amber rounded-full flex items-center justify-center shadow-golden group-hover/card:scale-110 transition-all duration-500 relative overflow-hidden`}>
                                <IconComponent className="w-7 h-7 text-vintage-sepia" />
                                {/* Icon glow effect */}
                                <div className="absolute inset-0 bg-vintage-gold/20 rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 blur-sm"></div>
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="text-sm text-vintage-brass mb-2 font-medium flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {event.date} • {event.time}
                              </div>
                              <h3 className="text-xl font-display font-semibold text-vintage-sepia mb-3 group-hover/card:text-vintage-leather transition-colors duration-300">
                                {event.title}
                              </h3>
                                                             <p className="text-vintage-brass leading-relaxed mb-4">
                                 {event.description}
                               </p>
                               
                               {/* Achievements list - only show if achievements exist */}
                               {event.achievements && (
                                 <div className="space-y-2">
                                   {event.achievements.map((achievement, idx) => (
                                     <div key={idx} className="flex items-center gap-2 text-sm text-vintage-brass">
                                       <div className="w-1.5 h-1.5 bg-vintage-gold rounded-full animate-ping-slow" style={{animationDelay: `${idx * 200}ms`}}></div>
                                       <span>{achievement}</span>
                                     </div>
                                   ))}
                                 </div>
                               )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Enhanced Bottom CTA */}
        <div className="text-center mt-20 animate-fade-in" style={{animationDelay: '800ms'}}>
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-vintage-parchment/90 to-vintage-smoke/80 rounded-2xl p-8 shadow-vintage border border-vintage-brass/30 backdrop-blur-sm relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-vintage-gold/5 to-vintage-amber/5 opacity-50"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 mb-6 animate-slide-up">
                <Target className="w-8 h-8 text-vintage-gold" />
                <span className="text-vintage-brass font-medium text-lg">Ready to Begin?</span>
              </div>
              <h2 className="text-3xl font-display font-semibold text-vintage-sepia mb-4">
                Mark Your Calendar
              </h2>
              <p className="text-vintage-brass mb-8 text-lg leading-relaxed">
                Don't miss any part of this extraordinary journey through the world of signal processing mysteries. 
                <span className="block mt-2 text-vintage-gold font-medium">The adventure awaits!</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://unstop.com/p/decodex-2025-encrypted-classified-unlocked-bms-institute-of-technology-and-management-bmsitm-bangalore-1546795" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-vintage-gold to-vintage-amber text-vintage-sepia font-display font-semibold rounded-xl shadow-deep hover:shadow-golden transition-all duration-300 hover:scale-105 group"
                >
                  <Star className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  Register on Unstop
                  <Zap className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <Link 
                  to="/about"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-vintage-parchment/80 text-vintage-sepia font-display font-medium rounded-xl border border-vintage-brass/30 hover:border-vintage-gold/50 transition-all duration-300 hover:scale-105 group"
                >
                  <Crown className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  Learn More
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

export default Timeline;
