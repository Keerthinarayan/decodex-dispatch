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
import { HelpCircle, BookOpen, Users, Award } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Decodex and who can participate?",
      answer: "Decodex is a Capture The Signal competition focusing on digital signal processing, cryptanalysis, and pattern recognition. It's open to students, professionals, and enthusiasts in engineering, computer science, mathematics, and related fields. No specific prerequisites are required, though basic knowledge of signal processing concepts is helpful."
    },
    {
      question: "How do I register for the competition?",
      answer: "Registration is available through Unstop platform. Simply click the 'Register on Unstop' button on our website, create an account if you don't have one, and complete the registration process. Early registration is recommended as spots are limited."
    },
    {
      question: "What tools and software will I need?",
      answer: "Participants can use any programming language and tools they're comfortable with. Popular choices include Python with NumPy/SciPy, MATLAB, R, or even C/C++. We recommend having access to signal processing libraries, FFT implementations, and basic cryptographic tools. All challenges will be platform-agnostic."
    },
    {
      question: "What types of challenges can I expect?",
      answer: "Expect a variety of signal processing mysteries including frequency domain analysis, digital filter design, pattern recognition in noisy signals, cryptographic puzzles, steganography detection, and modulation scheme identification. Challenges increase in complexity through each round."
    },
    {
      question: "Is this competition team-based or individual?",
      answer: "Both! You can participate individually or form teams of up to 3 members. Team collaboration is encouraged as it mirrors real-world signal processing work environments. Mixed teams from different institutions are welcome."
    },
    {
      question: "What are the prizes and recognition?",
      answer: "Winners receive certificates from IEEE SPS, cash prizes, and recognition in the signal processing community. Top performers may also receive internship opportunities and invitations to IEEE SPS events. All participants receive participation certificates."
    },
    {
      question: "Do I need prior experience in competitive programming?",
      answer: "While competitive programming experience is helpful, it's not mandatory. Decodex focuses more on signal processing knowledge, analytical thinking, and problem-solving skills rather than pure algorithmic speed. The vintage theme adds a unique twist to traditional challenges."
    },
    {
      question: "How are submissions evaluated?",
      answer: "Submissions are evaluated based on correctness, efficiency, code quality, and approach creativity. Partial credit is awarded for partially correct solutions. Detailed explanations of your methodology can earn additional points."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-vintage">
      <Header />
      
      <div className="container mx-auto px-6 py-12 pt-32">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <HelpCircle className="w-16 h-16 text-vintage-gold mx-auto mb-6 animate-float" />
          <h1 className="text-5xl md:text-6xl font-display font-bold text-vintage-sepia mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-vintage-brass max-w-3xl mx-auto">
            Unravel the mysteries before the competition begins. Find answers to 
            common inquiries about this extraordinary signal processing adventure.
          </p>
        </div>
        
        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: Users, title: "Open Registration", desc: "All skill levels welcome" },
            { icon: BookOpen, title: "Multiple Rounds", desc: "Progressive difficulty levels" },
            { icon: Award, title: "IEEE Certified", desc: "Official recognition & prizes" }
          ].map((stat, index) => (
            <Card key={index} className="text-center bg-vintage-parchment/80 border-vintage-brass/30 shadow-vintage hover:shadow-golden transition-all duration-300 animate-slide-up" style={{animationDelay: `${index * 100}ms`}}>
              <CardHeader>
                <stat.icon className="w-12 h-12 text-vintage-gold mx-auto mb-2" />
                <CardTitle className="text-vintage-sepia font-display text-lg">{stat.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-vintage-brass">{stat.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto animate-vintage-appear">
          <Card className="bg-vintage-parchment/90 shadow-deep border-vintage-brass/40">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-display font-semibold text-vintage-sepia">
                Detective's Handbook
              </CardTitle>
              <p className="text-vintage-brass">Essential information for aspiring signal detectives</p>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border-vintage-brass/20"
                  >
                    <AccordionTrigger className="text-left text-vintage-sepia hover:text-vintage-leather font-medium text-lg hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-vintage-brass leading-relaxed text-base pt-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
        
        {/* Additional Help Section */}
        <div className="mt-16 text-center animate-fade-in">
          <Card className="max-w-2xl mx-auto bg-gradient-to-br from-vintage-parchment/90 to-vintage-smoke/80 border-vintage-gold/40 shadow-golden">
            <CardContent className="p-8">
              <h2 className="text-2xl font-display font-semibold text-vintage-sepia mb-4">
                Still Have Questions?
              </h2>
              <p className="text-vintage-brass mb-6">
                Our team of experienced signal processing professionals is ready to assist 
                you on your detective journey. Don't let unanswered questions hold you back 
                from this extraordinary adventure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <VintageButton variant="hero" size="lg">
                  Contact Support
                </VintageButton>
                <Link to="/about">
                  <VintageButton variant="ghost" size="lg">
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