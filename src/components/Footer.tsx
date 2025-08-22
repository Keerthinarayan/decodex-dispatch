import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Globe, Linkedin, Twitter, Github } from "lucide-react";
import ieeeImage from "@/assets/ieee-vintage.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    competition: [
      { name: "About Decodex", href: "/about" },
      { name: "Event Timeline", href: "/timeline" },
      { name: "FAQ", href: "/faq" },
      { name: "Registration", href: "https://unstop.com", external: true },
    ],
    organization: [
      { name: "IEEE SPS", href: "/collaboration" },
      { name: "Live Space Chapter", href: "/collaboration" },
      { name: "Contact Us", href: "#contact" },
      { name: "Support", href: "#support" },
    ],
    resources: [
      { name: "Signal Processing", href: "#resources" },
      { name: "Cryptography", href: "#resources" },
      { name: "Competition Rules", href: "#rules" },
      { name: "Past Events", href: "#archives" },
    ],
  };

  return (
    <footer className="bg-gradient-mystery text-vintage-parchment relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-vintage-gold/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-vintage-brass/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                <span className="text-xl font-display font-bold text-vintage-sepia">D</span>
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-vintage-gold">DECODEX</h3>
                <p className="text-sm text-vintage-smoke">Capture The Signal</p>
              </div>
            </div>
            <p className="text-vintage-smoke leading-relaxed mb-6">
              Unravel the mysteries of digital signal processing in this vintage-themed 
              competition that challenges the finest detective minds.
            </p>
            
            {/* IEEE Partnership */}
            <div className="flex items-center space-x-3 p-4 bg-vintage-leather/30 rounded-lg border border-vintage-brass/20">
              <img 
                src={ieeeImage} 
                alt="IEEE SPS" 
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-medium text-vintage-gold">In Partnership With</p>
                <p className="text-xs text-vintage-smoke">IEEE SPS Live Space</p>
              </div>
            </div>
          </div>

          {/* Competition Links */}
          <div>
            <h4 className="text-lg font-display font-semibold text-vintage-gold mb-6">Competition</h4>
            <ul className="space-y-3">
              {footerLinks.competition.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-vintage-smoke hover:text-vintage-gold transition-colors duration-300 flex items-center group"
                    >
                      {link.name}
                      <Globe className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-vintage-smoke hover:text-vintage-gold transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Organization Links */}
          <div>
            <h4 className="text-lg font-display font-semibold text-vintage-gold mb-6">Organization</h4>
            <ul className="space-y-3">
              {footerLinks.organization.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-vintage-smoke hover:text-vintage-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Contact */}
          <div>
            <h4 className="text-lg font-display font-semibold text-vintage-gold mb-6">Resources</h4>
            <ul className="space-y-3 mb-6">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-vintage-smoke hover:text-vintage-gold transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-vintage-smoke">
                <Mail className="w-4 h-4 text-vintage-gold" />
                <span className="text-sm">decodex@ieee-sps.org</span>
              </div>
              <div className="flex items-center space-x-3 text-vintage-smoke">
                <MapPin className="w-4 h-4 text-vintage-gold" />
                <span className="text-sm">IEEE SPS Live Space</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="border-t border-vintage-brass/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Links */}
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <span className="text-sm text-vintage-smoke">Follow Us:</span>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-vintage-leather/30 rounded-full flex items-center justify-center hover:bg-vintage-gold hover:text-vintage-sepia transition-all duration-300 group"
                >
                  <Linkedin className="w-5 h-5 text-vintage-gold group-hover:text-vintage-sepia" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-vintage-leather/30 rounded-full flex items-center justify-center hover:bg-vintage-gold hover:text-vintage-sepia transition-all duration-300 group"
                >
                  <Twitter className="w-5 h-5 text-vintage-gold group-hover:text-vintage-sepia" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-vintage-leather/30 rounded-full flex items-center justify-center hover:bg-vintage-gold hover:text-vintage-sepia transition-all duration-300 group"
                >
                  <Github className="w-5 h-5 text-vintage-gold group-hover:text-vintage-sepia" />
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-sm text-vintage-smoke">
                © {currentYear} IEEE SPS Live Space. All rights reserved.
              </p>
              <p className="text-xs text-vintage-smoke/70 mt-1">
                Decodex Competition Platform
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;