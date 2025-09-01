import { Linkedin, Twitter, Github, Mail, MapPin, Calendar, Phone, Sparkles, Star, Zap } from "lucide-react";
import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-gradient-mystery text-vintage-parchment relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-vintage-gold/20 rounded-full animate-twinkle"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-vintage-amber/15 rounded-full animate-twinkle" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-vintage-brass/10 rounded-full animate-twinkle" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/6 w-1 h-1 bg-vintage-gold/25 rounded-full animate-twinkle" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-vintage-amber/20 rounded-full animate-twinkle" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Top Row: Brand + Description */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 animate-fade-in">
          {/* Enhanced Brand & Description */}
          <div className="flex items-start space-x-3 group">
            <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center relative overflow-hidden animate-logo-float">
              <span className="text-lg font-display font-bold text-vintage-sepia relative z-10">D</span>
              {/* Rotating background pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-vintage-amber to-vintage-gold opacity-20 animate-spin-in"></div>
              {/* Hover sparkle effect */}
              <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-twinkle">
                <Sparkles className="w-2 h-2 text-vintage-amber" />
              </div>
            </div>
            <div className="max-w-xs">
              <h3 className="text-xl font-display font-bold text-vintage-gold leading-none mb-2 group-hover:text-vintage-amber transition-colors duration-300">
                DECODEX
              </h3>
              <p className="text-sm text-vintage-smoke leading-relaxed group-hover:text-vintage-parchment transition-colors duration-300">
                The 24-hour flagship event by IEEE SPS, challenging participants to decode, develop, and innovate.
              </p>
            </div>
          </div>

          {/* Enhanced Quick Links */}
          <div className="flex flex-col space-y-3 group">
            <h4 className="text-sm font-display font-semibold text-vintage-gold flex items-center gap-2">
              <Star className="w-3 h-3 animate-twinkle" />
              Quick Links
            </h4>
            <div className="flex flex-col space-y-2">
              {[
                { to: "/about", text: "About" },
                { to: "/timeline", text: "Timeline" },
                { to: "/faq", text: "FAQ" },
                { to: "https://unstop.com", text: "Register", external: true }
              ].map((link, index) => (
                <Link 
                  key={link.text}
                  to={link.to} 
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="text-sm text-vintage-smoke hover:text-vintage-gold transition-all duration-300 group/link relative overflow-hidden"
                  style={{animationDelay: `${index * 50}ms`}}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {link.text}
                    <div className="w-1 h-1 bg-vintage-gold rounded-full opacity-0 group-hover/link:opacity-100 transition-all duration-300 group-hover/link:animate-ping-slow"></div>
                  </span>
                  {/* Hover underline effect */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-vintage-gold to-vintage-amber transition-all duration-300 group-hover/link:w-full"></div>
                </Link>
              ))}
            </div>
          </div>

          {/* Enhanced Event Details */}
          <div className="flex flex-col space-y-3 group">
            <h4 className="text-sm font-display font-semibold text-vintage-gold flex items-center gap-2">
              <Zap className="w-3 h-3 animate-pulse-subtle" />
              Event Details
            </h4>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2 group/item">
                <Calendar className="w-4 h-4 text-vintage-gold group-hover/item:scale-110 transition-transform duration-300" />
                <span className="text-sm text-vintage-smoke group-hover/item:text-vintage-parchment transition-colors duration-300">
                  September 20-21, 2025
                </span>
              </div>
              <div className="flex items-center space-x-2 group/item">
                <a 
                  href="https://maps.google.com/?q=BMS+Institute+Of+Technology+Management+Bengaluru" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 group/location hover:text-vintage-gold transition-colors duration-300"
                >
                  <MapPin className="w-4 h-4 text-vintage-gold group-hover/location:scale-110 transition-transform duration-300" />
                  <span className="text-sm text-vintage-smoke group-hover/location:text-vintage-parchment transition-colors duration-300">
                    BMS Institute Of Technology & Management, Bengaluru
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Info */}
          <div className="flex flex-col space-y-3 group">
            <h4 className="text-sm font-display font-semibold text-vintage-gold flex items-center gap-2">
              <Mail className="w-3 h-3 animate-bounce-subtle" />
              Contact Us
            </h4>
            <div className="flex flex-col space-y-2">
              <a 
                href="mailto:core.team@decodex.one" 
                className="text-sm text-vintage-smoke hover:text-vintage-gold transition-all duration-300 group/email relative overflow-hidden"
              >
                <span className="relative z-10">core.team@decodex.one</span>
                {/* Hover underline effect */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-vintage-gold to-vintage-amber transition-all duration-300 group-hover/email:w-full"></div>
              </a>
              <div className="text-sm text-vintage-smoke group/contact">
                <div className="font-medium group-hover/contact:text-vintage-gold transition-colors duration-300">Smriti</div>
                <a 
                  href="tel:+917389296975" 
                  className="hover:text-vintage-gold transition-colors duration-300 group/phone relative overflow-hidden"
                >
                  <span className="relative z-10">+91 7389296975</span>
                  {/* Hover underline effect */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-vintage-gold to-vintage-amber transition-all duration-300 group-hover/phone:w-full"></div>
                </a>
              </div>
              <div className="text-sm text-vintage-smoke group/contact">
                <div className="font-medium group-hover/contact:text-vintage-gold transition-colors duration-300">Deepak</div>
                <a 
                  href="tel:+917411730741" 
                  className="hover:text-vintage-gold transition-colors duration-300 group/phone relative overflow-hidden"
                >
                  <span className="relative z-10">+91 7411730741</span>
                  {/* Hover underline effect */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-vintage-gold to-vintage-amber transition-all duration-300 group-hover/phone:w-full"></div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Row */}
        <div className="mt-6 border-t border-vintage-brass/20 pt-4 flex flex-col sm:flex-row items-center justify-between text-vintage-smoke animate-fade-in relative" style={{animationDelay: '100ms'}}>
          {/* Live time display */}
          <div className="flex items-center gap-4 mb-2 sm:mb-0">
            <p className="text-xs">© {currentYear} IEEE Signal Processing Society</p>
            <div className="flex items-center gap-2 text-xs text-vintage-gold/70">
              <div className="w-1.5 h-1.5 bg-vintage-gold rounded-full animate-ping-slow"></div>
              <span>Live</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <span className="text-xs">Follow us:</span>
            <div className="flex space-x-2">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/ieeespsbmsitm/", label: "LinkedIn" },
                { icon: Instagram, href: "https://www.instagram.com/sps_bmsit/", label: "Instagram" }
              ].map((social, index) => (
                <a 
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 bg-vintage-leather/30 rounded-full flex items-center justify-center hover:bg-vintage-gold hover:text-vintage-sepia transition-all duration-300 group relative overflow-hidden"
                  style={{animationDelay: `${200 + index * 100}ms`}}
                >
                  <social.icon className="w-4 h-4 text-vintage-gold group-hover:scale-110 transition-transform duration-300" />
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-vintage-gold/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
