import { Linkedin, Twitter, Github, Mail, MapPin, Calendar, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-mystery text-vintage-parchment relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Top Row: Brand + Description */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 animate-fade-in">
          {/* Brand & Description */}
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center">
              <span className="text-lg font-display font-bold text-vintage-sepia">D</span>
            </div>
            <div className="max-w-xs">
              <h3 className="text-xl font-display font-bold text-vintage-gold leading-none mb-2">DECODEX</h3>
              <p className="text-sm text-vintage-smoke leading-relaxed">
                The 24-hour flagship event by IEEE SPS, challenging participants to decode, develop, and innovate.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-3">
            <h4 className="text-sm font-display font-semibold text-vintage-gold">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/about" className="text-sm text-vintage-smoke hover:text-vintage-gold transition-colors">About</Link>
              <Link to="/timeline" className="text-sm text-vintage-smoke hover:text-vintage-gold transition-colors">Timeline</Link>
              <Link to="/faq" className="text-sm text-vintage-smoke hover:text-vintage-gold transition-colors">FAQ</Link>
              <a href="https://unstop.com" target="_blank" rel="noopener noreferrer" className="text-sm text-vintage-smoke hover:text-vintage-gold transition-colors">Register</a>
            </div>
          </div>

          {/* Event Details */}
          <div className="flex flex-col space-y-3">
            <h4 className="text-sm font-display font-semibold text-vintage-gold">Event Details</h4>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-vintage-gold" />
                <span className="text-sm text-vintage-smoke">September 20-21, 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-vintage-gold" />
                <span className="text-sm text-vintage-smoke">BMS Institute Of Technology & Management, Bengaluru</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-3">
            <h4 className="text-sm font-display font-semibold text-vintage-gold">Contact Us</h4>
            <div className="flex flex-col space-y-2">
              <a href="mailto:core.team@decodex.one" className="text-sm text-vintage-smoke hover:text-vintage-gold transition-colors">core.team@decodex.one</a>
              <div className="text-sm text-vintage-smoke">
                <div className="font-medium">Smriti</div>
                <a href="tel:+917389296975" className="hover:text-vintage-gold transition-colors">+91 7389296975</a>
              </div>
              <div className="text-sm text-vintage-smoke">
                <div className="font-medium">Chinmay</div>
                <a href="tel:+918618978745" className="hover:text-vintage-gold transition-colors">+91 8618978745</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-6 border-t border-vintage-brass/20 pt-4 flex flex-col sm:flex-row items-center justify-between text-vintage-smoke animate-fade-in" style={{animationDelay: '100ms'}}>
          <p className="text-xs">© {currentYear} IEEE SPS Live Space</p>
          <div className="flex items-center space-x-3 mt-2 sm:mt-0">
            <span className="text-xs">Follow us:</span>
            <div className="flex space-x-2">
              <a href="#" className="w-7 h-7 bg-vintage-leather/30 rounded-full flex items-center justify-center hover:bg-vintage-gold hover:text-vintage-sepia transition-all">
                <Linkedin className="w-4 h-4 text-vintage-gold" />
              </a>
              <a href="#" className="w-7 h-7 bg-vintage-leather/30 rounded-full flex items-center justify-center hover:bg-vintage-gold hover:text-vintage-sepia transition-all">
                <Twitter className="w-4 h-4 text-vintage-gold" />
              </a>
              <a href="#" className="w-7 h-7 bg-vintage-leather/30 rounded-full flex items-center justify-center hover:bg-vintage-gold hover:text-vintage-sepia transition-all">
                <Github className="w-4 h-4 text-vintage-gold" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;