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
      answer: "Decodex is a Capture The Signal competition focusing on digital signal processing, cryptanalysis, and pattern recognition. It's open to students, professionals, and enthusiasts in engineering, computer science, mathematics, and related fields. No specific prerequisites are required, though basic knowledge of signal processing concepts is helpful."
    },
    {
      question: "How do I register for the competition?",
      answer: "Registration is available through Unstop platform. Simply click the 'Register on Unstop' button on our website, create an account if you don't have one, and complete the registration process. Early registration is recommended as spots are limited. You'll receive a confirmation email with your participant ID and further instructions."
    },
    {
      question: "What tools and software will I need?",
      answer: "Participants can use any programming language and tools they're comfortable with. Popular choices include Python with NumPy/SciPy, MATLAB, R, or even C/C++. We recommend having access to signal processing libraries, FFT implementations, and basic cryptographic tools. All challenges will be platform-agnostic. A stable internet connection and a modern web browser are required for the competition platform."
    },
    {
      question: "What types of challenges can I expect?",
      answer: "Expect a variety of signal processing mysteries including frequency domain analysis, digital filter design, pattern recognition in noisy signals, cryptographic puzzles, steganography detection, and modulation scheme identification. Challenges increase in complexity through each round. Each challenge is designed to test both theoretical knowledge and practical implementation skills."
    },
    {
      question: "Is this competition team-based or individual?",
      answer: "Both! You can participate individually or form teams of up to 3 members. Team collaboration is encouraged as it mirrors real-world signal processing work environments. Mixed teams from different institutions are welcome. Team registration must be completed together, and all team members must meet eligibility requirements."
    },
    {
      question: "What are the prizes and recognition?",
      answer: "Winners receive certificates from IEEE SPS, cash prizes, and recognition in the signal processing community. Top performers may also receive internship opportunities and invitations to IEEE SPS events. All participants receive participation certificates. Special awards are given for innovative solutions and creative approaches."
    },
    {
      question: "Do I need prior experience in competitive programming?",
      answer: "While competitive programming experience is helpful, it's not mandatory. Decodex focuses more on signal processing knowledge, analytical thinking, and problem-solving skills rather than pure algorithmic speed. The vintage theme adds a unique twist to traditional challenges. We welcome participants of all experience levels."
    },
    {
      question: "How are submissions evaluated?",
      answer: "Submissions are evaluated based on correctness, efficiency, code quality, and approach creativity. Partial credit is awarded for partially correct solutions. Detailed explanations of your methodology can earn additional points. Judges include industry experts and academic professionals from the signal processing field."
    },
    {
      question: "What is the competition schedule and format?",
      answer: "The competition consists of three rounds: Qualifier (2 hours), Semi-Final (3 hours), and Final (4 hours). Each round features progressively challenging problems. The qualifier is online and open to all registered participants. Semi-finals and finals may have additional requirements and are conducted under strict supervision."
    },
    {
      question: "Can I use external resources during the competition?",
      answer: "During the competition, you may use standard documentation, textbooks, and online references. However, direct communication with other participants, using pre-written solutions, or accessing competition-specific resources is strictly prohibited. All submissions are checked for originality."
    },
    {
      question: "What happens if I encounter technical issues?",
      answer: "Technical support is available throughout the competition via our dedicated support channel. If you experience issues, immediately contact support with your participant ID and a description of the problem. We have backup systems and will ensure fair competition for all participants."
    },
    {
      question: "Are there practice materials available?",
      answer: "Yes! We provide sample problems, tutorials, and practice challenges on our platform. These materials cover fundamental concepts and give you a feel for the competition format. We also host webinars and Q&A sessions with previous winners and organizers."
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
            Detective's Handbook
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
                <VintageButton variant="hero" size="lg" className="w-full sm:w-auto">
                  Contact Support
                </VintageButton>
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