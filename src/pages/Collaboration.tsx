import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Users, Globe, BookOpen, Handshake } from "lucide-react";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";

const Collaboration = () => {
  // Scroll to top when page loads
  useScrollToTop();
  
  const partners = [
    {
      name: "IEEE SPS Bangalore Branch",
      logo: "https://imagizer.imageshack.com/img922/4906/SqkKwK.jpg"
    },
    {
      name: "IEEE Student Branch",
      logo: "https://imagizer.imageshack.com/img922/5916/bPX6yo.jpg"
    },
    {
      name: "BMS Institute of Technology & Management",
      logo: "https://imagizer.imageshack.com/img922/8858/quoUee.png"
    },
    {
      name: "Institute Innovation Council (IIC)",
      logo: "https://imagizer.imageshack.com/img922/8859/DTw5Tv.png"
    },
    {
      name: "IEEE Bangalore Section",
      logo: "https://live.staticflickr.com/65535/54543935199_b36c7d9072_z.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-vintage">
      <Header />
      
      <div className="container mx-auto px-6 py-12 pt-32">
        {/* Header with Enhanced Animation */}
        <div className="text-center mb-20 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-vintage-sepia mb-8 leading-tight animate-slide-up">
            In Collaboration With
          </h1>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8 animate-slide-up" style={{animationDelay: '200ms'}}></div>
          <p className="text-xl text-vintage-brass max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '400ms'}}>
            Together with these prestigious organizations, we create an unparalleled 
            platform for innovation and learning in signal processing.
          </p>
        </div>

        {/* Partners Grid with Enhanced Animations */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
            {partners.map((partner, index) => (
              <Card 
                key={index} 
                className="bg-vintage-parchment/90 border-vintage-brass/30 shadow-vintage hover:shadow-golden transition-all duration-500 animate-vintage-appear group overflow-hidden" 
                style={{animationDelay: `${index * 200}ms`}}
              >
                <CardHeader className="text-center pb-8 pt-8">
                  <div className="w-44 h-44 mx-auto mb-6 rounded-xl overflow-hidden shadow-vintage bg-white p-6 group-hover:scale-105 transition-transform duration-500">
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <CardTitle className="text-xl font-display font-semibold text-vintage-sepia group-hover:text-vintage-gold transition-colors duration-300">
                    {partner.name}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Minimalistic Features Section */}
        <div className="max-w-4xl mx-auto text-center animate-fade-in" style={{animationDelay: '800ms'}}>
          <div className="w-16 h-1 bg-gradient-gold mx-auto mb-12"></div>
          <h2 className="text-3xl font-display font-semibold text-vintage-sepia mb-8">
            A Legacy of Innovation
          </h2>
          <p className="text-vintage-brass text-lg leading-relaxed">
            This collaboration brings together the time-honored traditions of scholarly pursuit 
            with cutting-edge technology, merging classical signal processing theory with modern computational techniques.
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Collaboration;