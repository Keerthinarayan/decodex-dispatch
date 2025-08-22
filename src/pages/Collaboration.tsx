import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import ieeeImage from "@/assets/ieee-vintage.jpg";
import { Award, Users, Globe, BookOpen } from "lucide-react";

const Collaboration = () => {
  return (
    <div className="min-h-screen bg-gradient-vintage">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center border-b border-vintage-brass/30">
        <Link to="/" className="text-2xl font-display font-bold text-vintage-sepia hover:text-vintage-gold transition-colors">
          DECODEX
        </Link>
        <div className="flex space-x-6">
          <Link to="/" className="text-vintage-brass hover:text-vintage-gold transition-colors font-medium">Home</Link>
          <Link to="/about" className="text-vintage-brass hover:text-vintage-gold transition-colors font-medium">About</Link>
          <Link to="/timeline" className="text-vintage-brass hover:text-vintage-gold transition-colors font-medium">Timeline</Link>
          <Link to="/faq" className="text-vintage-brass hover:text-vintage-gold transition-colors font-medium">FAQ</Link>
        </div>
      </nav>
      
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-vintage-sepia mb-6">
            In Collaboration With
          </h1>
          <p className="text-xl text-vintage-brass max-w-3xl mx-auto">
            Proudly organized by the prestigious IEEE Signal Processing Society Live Space, 
            bringing together the finest minds in signal processing and digital communications.
          </p>
        </div>
        
        {/* Main Collaboration Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-vintage-parchment/90 border-vintage-gold shadow-golden hover:shadow-deep transition-all duration-300 animate-vintage-appear">
            <CardHeader className="text-center pb-6">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-vintage">
                <img 
                  src={ieeeImage} 
                  alt="IEEE SPS Live Space" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardTitle className="text-4xl font-display font-bold text-vintage-sepia mb-4">
                IEEE SPS LIVE SPACE
              </CardTitle>
              <p className="text-lg text-vintage-brass">
                Institute of Electrical and Electronics Engineers<br />
                Signal Processing Society - Live Space Chapter
              </p>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-vintage-sepia text-lg leading-relaxed mb-6">
                The IEEE Signal Processing Society is the world's premier organization for signal 
                processing engineers and researchers. With a rich heritage dating back to 1948, 
                the SPS Live Space chapter continues this tradition of excellence in the digital age, 
                fostering innovation and collaboration in signal processing, machine learning, 
                and communications technologies.
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: Award,
              title: "Excellence",
              description: "Recognized globally for outstanding contributions to signal processing"
            },
            {
              icon: Users,
              title: "Community",
              description: "Connecting thousands of professionals and researchers worldwide"
            },
            {
              icon: Globe,
              title: "Global Reach",
              description: "International presence with local chapters in major cities"
            },
            {
              icon: BookOpen,
              title: "Education",
              description: "Advancing knowledge through workshops, conferences, and competitions"
            }
          ].map((feature, index) => (
            <Card key={index} className="bg-vintage-parchment/80 border-vintage-brass/30 shadow-vintage hover:shadow-golden transition-all duration-300 animate-slide-up" style={{animationDelay: `${index * 100}ms`}}>
              <CardHeader className="text-center">
                <feature.icon className="w-12 h-12 text-vintage-gold mx-auto mb-2" />
                <CardTitle className="text-vintage-sepia font-display text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-vintage-brass text-sm text-center">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Partnership Details */}
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl font-display font-semibold text-vintage-sepia mb-6">
            A Legacy of Innovation
          </h2>
          <p className="text-vintage-brass text-lg leading-relaxed mb-8">
            This collaboration brings together the time-honored traditions of scholarly pursuit 
            with cutting-edge technology. Like the great detective stories of old, where 
            observation meets deduction, IEEE SPS Live Space merges classical signal processing 
            theory with modern computational techniques.
          </p>
          <div className="border-t border-vintage-brass/30 pt-8">
            <p className="text-vintage-sepia font-display font-medium">
              "Advancing the theory and application of signal processing and fostering the 
              scientific understanding of the field"
            </p>
            <p className="text-vintage-brass text-sm mt-2">IEEE Signal Processing Society Mission</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaboration;