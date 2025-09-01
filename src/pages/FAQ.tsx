import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { VintageButton } from "@/components/ui/vintage-button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { 
  HelpCircle, 
  BookOpen, 
  Users, 
  Award, 
  Brain
} from "lucide-react";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";

const FAQ = () => {
  // Scroll to top when page loads
  useScrollToTop();
  
  const faqs = [
    {
      question: "What is Decodex and who can participate?",
      answer: "Decodex is basically a party where signals go to hide, and you have to find them. Anyone who loves breaking codes, crunching signals, or just wants bragging rights can join. Students, pros, or that one math nerd who thinks Fourier was underrated – all welcome!"
    },
    {
      question: "How do I register for the competition?",
      answer: "Easy. Smash the 'Register on Unstop' button like you’re trying to get concert tickets. Make an account (if you don’t already live there), and boom—you’re in. Register early though, because FOMO is real. A confirmation email will arrive faster than you can say 'fast Fourier transform.'"
    },
    {
      question: "What tools and software will I need?",
      answer: "Two laptops per team. Yes, two. Why? Because when one laptop blue-screens mid-FFT, the other one becomes the hero Gotham deserves.At least one windows or ubuntu laptop, and the other Any OS works—Windows, Ubuntu, macOS… even if you dare with Arch Linux (but then you’re on your own)."
    },
    {
      question: "What types of challenges can I expect?",
      answer: "Expect brain-twisters like: ‘Is this noise, or my neighbor’s bad WiFi?’ You’ll decode signals, design filters, play detective with steganography, and maybe question your life choices when a sine wave looks like spaghetti. Difficulty levels: Easy, Medium, Crying-in-the-lab."
    },
    {
      question: "Is this competition team-based or individual?",
      answer: "Teams of 3 to 4 are encouraged. Think Avengers, but instead of saving the world, you’re saving signals from noise. Pro tip: recruit someone who knows how to order food quickly."
    },
    {
      question: "What are the prizes and recognition?",
      answer: "Winners get 50k INR, shiny certificates from IEEE SPS, and eternal bragging rights. Participation certs for everyone—because hey, showing up is half the battle. Extra brownie points for wild, creative, or meme-worthy solutions."
    },
    {
      question: "Do I need prior experience in competitive programming?",
      answer: "Nope. This isn’t about speed-typing code like a movie hacker. It’s about outsmarting signals, spotting patterns, and flexing those DSP muscles. Beginners, pros, and people who think Nyquist is a pastry—all are welcome."
    },
    {
      question: "Can I use external resources during the competition?",
      answer: "Yep! Google is your friend. StackOverflow is your therapist. Just don’t hire a psychic or ask ChatGPT to solve the entire thing for you… unless you bribe it with coffee."
    },
    {
      question: "What happens if I encounter technical issues?",
      answer: "We’ve got tech support superheroes on standby. Just drop your participant ID, describe the issue, and we’ll fix it before your signal turns into static. Backup systems are ready, so don’t panic (yet)."
    },
    {
      question: "Are there practice materials available?",
      answer: "NOPE. We believe in the raw thrill of the unknown. No warm-up, no tutorials, just straight into the signal jungle. Think of it as DSP Hunger Games—may the odds be ever in your frequency."
    }
  ];
  

  return (
    <div className="min-h-screen bg-gradient-vintage">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 pt-24 sm:pt-32">
        {/* Enhanced Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <div className="relative inline-block mb-6 sm:mb-8">
            <HelpCircle className="w-16 h-16 sm:w-20 sm:h-20 text-vintage-gold mx-auto animate-float" />
            <div className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 bg-vintage-gold/20 rounded-full animate-ping-slow"></div>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-bold text-vintage-sepia mb-4 sm:mb-6 text-shadow-vintage leading-tight">
            Participant's Handbook
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-vintage-brass max-w-4xl mx-auto leading-relaxed px-4">
            Unravel the mysteries before the competition begins. Find answers to 
            common inquiries about this extraordinary signal processing adventure.
          </p>
        </div>
        
        {/* Enhanced Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {[
            { icon: Users, title: "Open Registration", desc: "All skill levels welcome", color: "from-vintage-gold/20 to-vintage-amber/20" },
            { icon: BookOpen, title: "Multiple Rounds", desc: "Progressive difficulty levels", color: "from-vintage-brass/20 to-vintage-sepia/20" },
            { icon: Award, title: "IEEE Certified", desc: "Official recognition & prizes", color: "from-vintage-amber/20 to-vintage-gold/20" },
            { icon: Brain, title: "Skill Development", desc: "Learn while competing", color: "from-vintage-sepia/20 to-vintage-leather/20" }
          ].map((stat, index) => (
            <Card key={index} className={`text-center bg-gradient-to-br ${stat.color} border-vintage-brass/30 shadow-vintage hover:shadow-golden transition-all duration-500 hover:scale-105 animate-slide-up`} style={{animationDelay: `${index * 150}ms`}}>
              <CardHeader className="pb-2 sm:pb-3 px-3 sm:px-4">
                <stat.icon className="w-10 h-10 sm:w-14 sm:h-14 text-vintage-sepia mx-auto mb-2 sm:mb-3" />
                <CardTitle className="text-vintage-sepia font-display text-sm sm:text-lg md:text-xl leading-tight">{stat.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-3 sm:px-4 pb-3 sm:pb-4">
                <p className="text-vintage-brass font-medium text-xs sm:text-sm">{stat.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Enhanced FAQ Accordion */}
        <div className="max-w-4xl mx-auto animate-vintage-appear">
          <Card className="bg-vintage-parchment/90 shadow-deep border-vintage-brass/40">
            <CardHeader className="text-center pb-4 sm:pb-6 px-4 sm:px-6">
              <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold text-vintage-sepia mb-2 leading-tight">
                Frequently Asked Questions
              </CardTitle>
              <p className="text-vintage-brass text-base sm:text-lg">
                Essential information for aspiring signal detectives
              </p>
            </CardHeader>
            <CardContent className="px-4 sm:px-6">
              <Accordion type="single" collapsible className="w-full space-y-3 sm:space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border-vintage-brass/20 bg-vintage-smoke/20 rounded-lg overflow-hidden hover:bg-vintage-smoke/30 transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left text-vintage-sepia hover:text-vintage-leather font-medium text-base sm:text-lg hover:no-underline px-4 sm:px-6 py-3 sm:py-4">
                      <div className="flex items-start gap-3 sm:gap-4 w-full">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-2 h-2 bg-vintage-gold rounded-full"></div>
                        </div>
                        <span className="flex-1 leading-relaxed">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-vintage-brass leading-relaxed text-sm sm:text-base px-4 sm:px-6 pb-3 sm:pb-4">
                      <p className="text-base sm:text-lg leading-relaxed">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* Additional Help Section */}
        <div className="mt-12 sm:mt-16 text-center animate-fade-in">
          <Card className="max-w-2xl mx-auto bg-gradient-to-br from-vintage-parchment/90 to-vintage-smoke/80 border-vintage-gold/40 shadow-golden">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-display font-semibold text-vintage-sepia mb-4">
                Still Have Questions?
              </h2>
              <p className="text-vintage-brass mb-6 text-sm sm:text-base leading-relaxed">
                Our team of experienced signal processing professionals is ready to assist 
                you on your detective journey. Don't let unanswered questions hold you back 
                from this extraordinary adventure.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a 
                  href="tel:+917411730741" 
                  className="w-full sm:w-auto"
                >
                  <VintageButton variant="hero" size="lg" className="w-full">
                    Contact Support
                  </VintageButton>
                </a>
                                 <Link to="/about" className="w-full sm:w-auto">
                   <VintageButton variant="detective" size="lg" className="w-full">
                     Learn More
                   </VintageButton>
                 </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FAQ;
