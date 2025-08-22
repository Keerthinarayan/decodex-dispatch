import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import timelineImage from "@/assets/timeline-scroll.jpg";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

const Timeline = () => {
  const timelineEvents = [
    {
      date: "January 15, 2025",
      time: "10:00 AM",
      title: "Registration Opens",
      description: "Begin your journey into the world of signal mysteries. Registration opens on Unstop.",
      icon: Users,
      status: "upcoming"
    },
    {
      date: "February 1, 2025",
      time: "6:00 PM",
      title: "Opening Ceremony",
      description: "Grand inauguration with keynote speakers from the world of cryptography and signal processing.",
      icon: MapPin,
      status: "upcoming"
    },
    {
      date: "February 2, 2025",
      time: "9:00 AM",
      title: "Round 1: The First Clue",
      description: "Basic signal analysis challenges. Decode simple patterns and frequency domain mysteries.",
      icon: Clock,
      status: "upcoming"
    },
    {
      date: "February 5, 2025",
      time: "2:00 PM",
      title: "Round 2: Deep Investigation",
      description: "Advanced cryptanalysis and complex signal processing challenges for qualified teams.",
      icon: Clock,
      status: "upcoming"
    },
    {
      date: "February 8, 2025",
      time: "11:00 AM",
      title: "Final Round: Master Detective",
      description: "The ultimate test of skill combining all aspects of signal processing and cryptography.",
      icon: Clock,
      status: "upcoming"
    },
    {
      date: "February 10, 2025",
      time: "4:00 PM",
      title: "Awards Ceremony",
      description: "Recognition of the finest signal processing detectives and closing celebration.",
      icon: Calendar,
      status: "upcoming"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-vintage relative">
      <Header />
      
      {/* Background */}
      <div 
        className="fixed inset-0 opacity-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${timelineImage})` }}
      />
      
      <div className="relative z-10 container mx-auto px-6 py-12 pt-32">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-vintage-sepia mb-6">
            Timeline of Events
          </h1>
          <p className="text-xl text-vintage-brass max-w-3xl mx-auto">
            Follow the chronological journey of your investigation. Each phase reveals 
            new mysteries and challenges worthy of the greatest detectives.
          </p>
        </div>
        
        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-vintage-gold via-vintage-brass to-vintage-sepia"></div>
            
            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => {
                const IconComponent = event.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div 
                    key={index} 
                    className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} animate-slide-up`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-vintage-gold rounded-full border-4 border-vintage-parchment shadow-golden z-10 animate-glow">
                      <div className="w-full h-full bg-vintage-brass rounded-full animate-pulse"></div>
                    </div>
                    
                    {/* Event Card */}
                    <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                      <Card className="bg-vintage-parchment/90 border-vintage-brass/40 shadow-vintage hover:shadow-golden transition-all duration-300 group">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                              <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center shadow-golden group-hover:scale-110 transition-transform">
                                <IconComponent className="w-6 h-6 text-vintage-sepia" />
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="text-sm text-vintage-brass mb-1 font-medium">
                                {event.date} • {event.time}
                              </div>
                              <h3 className="text-xl font-display font-semibold text-vintage-sepia mb-2 group-hover:text-vintage-leather transition-colors">
                                {event.title}
                              </h3>
                              <p className="text-vintage-brass leading-relaxed">
                                {event.description}
                              </p>
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
        
        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="max-w-2xl mx-auto bg-vintage-parchment/80 rounded-lg p-8 shadow-vintage border border-vintage-brass/30">
            <h2 className="text-2xl font-display font-semibold text-vintage-sepia mb-4">
              Mark Your Calendar
            </h2>
            <p className="text-vintage-brass mb-6">
              Don't miss any part of this extraordinary journey through the world of signal processing mysteries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://unstop.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-mystery text-vintage-gold font-display font-medium rounded-lg shadow-deep hover:shadow-golden transition-all duration-300 hover:scale-105"
              >
                Register on Unstop
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Timeline;