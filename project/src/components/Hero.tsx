import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "AI is not the future — it's the present.";
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[70px] pb-[10px] bg-cover bg-center"
      style={{
        backgroundImage: "url('/public/images/Gemini_Generated_Image_nq3siunq3siunq3s.png')", // <-- place your image in /public/images/
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-cyan/20 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-teal/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-cyan/30 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
      <div className="absolute bottom-20 right-40 w-24 h-24 bg-teal/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* SEO Header Structure */}
          <header>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="typing-animation">{typedText}</span>
              <br />
              <span className="gradient-text">BizAIHacks makes it simple,</span>
              <br />
              <span className="gradient-text">affordable & scalable.</span>
            </h1>

            {/* Subheadline */}
            <h2 className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
              Leading AI Solutions Company | AI Agents | AI Calling | Industry AI | Advanced AI | Consulting
            </h2>
          </header>

          {/* Feature Icons */}
          <div className="flex justify-center items-center space-x-8 mb-12">
            <div className="flex items-center space-x-2 text-cyan animate-pulse-slow">
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-medium">24/7 AI Agents</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-gray-600"></div>
            <div className="flex items-center space-x-2 text-teal animate-pulse-slow" style={{animationDelay: '1s'}}>
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-medium">Industry Solutions</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-gray-600"></div>
            <div className="flex items-center space-x-2 text-cyan animate-pulse-slow" style={{animationDelay: '2s'}}>
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-medium">Proven ROI</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button 
              onClick={() => scrollToSection('cta')}
              className="group px-8 py-4 bg-cyan hover:bg-teal text-white font-semibold rounded-full transition-all duration-300 flex items-center space-x-2 hover-glow text-lg"
            >
              <span>Get Started</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection('case-studies')}
              className="group px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10 font-semibold rounded-full transition-all duration-300 flex items-center space-x-2 text-lg"
            >
              <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-4">Trusted by businesses across 10+ industries</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-white font-semibold">50% Cost Reduction</div>
              <div className="w-px h-6 bg-gray-600"></div>
              <div className="text-white font-semibold">3X Faster Results</div>
              <div className="w-px h-6 bg-gray-600"></div>
              <div className="text-white font-semibold">24/7 Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
