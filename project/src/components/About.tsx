import React, { useEffect, useState } from 'react';
import { Users, Target, Award, TrendingUp } from 'lucide-react';

const About = () => {
  const [counters, setCounters] = useState({ industries: 0, agents: 0, savings: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const industriesTarget = 10;
        const agentsTarget = 24;
        const savingsTarget = 50;
        
        const duration = 2000;
        const increment = 50;
        const industriesStep = industriesTarget / (duration / increment);
        const agentsStep = agentsTarget / (duration / increment);
        const savingsStep = savingsTarget / (duration / increment);
        
        let current = 0;
        const counterInterval = setInterval(() => {
          current += increment;
          if (current >= duration) {
            setCounters({ 
              industries: industriesTarget, 
              agents: agentsTarget, 
              savings: savingsTarget 
            });
            clearInterval(counterInterval);
          } else {
            setCounters({
              industries: Math.min(Math.floor((current / duration) * industriesTarget), industriesTarget),
              agents: Math.min(Math.floor((current / duration) * agentsTarget), agentsTarget),
              savings: Math.min(Math.floor((current / duration) * savingsTarget), savingsTarget)
            });
          }
        }, increment);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Who We Are
            </h2>
            <div className="w-20 h-1 bg-cyan mb-6"></div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              BizAIHacks, under Soltech TechServices, is a leading <strong>AI Services Company</strong> 
              that transforms businesses through intelligent automation and advanced AI solutions. 
              We specialize in making AI accessible, affordable, and scalable for companies of all sizes.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our mission is to bridge the gap between cutting-edge AI technology and practical 
              business applications, helping you harness the power of artificial intelligence 
              to drive growth, efficiency, and innovation.
            </p>
            
            {/* Key Values */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <Target className="h-6 w-6 text-cyan" />
                <span className="font-semibold text-navy">Results-Driven</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-6 w-6 text-teal" />
                <span className="font-semibold text-navy">Client-Focused</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="h-6 w-6 text-cyan" />
                <span className="font-semibold text-navy">Industry Expertise</span>
              </div>
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-6 w-6 text-teal" />
                <span className="font-semibold text-navy">Scalable Solutions</span>
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="AI team collaboration and technology innovation"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy/20 to-transparent rounded-lg"></div>
            </div>

            {/* Animated Counters */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-lg hover-glow">
                <div className="text-3xl font-bold text-navy counter-animation">
                  {counters.industries}+
                </div>
                <div className="text-gray-600 font-medium">Industries</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-lg hover-glow">
                <div className="text-3xl font-bold text-cyan counter-animation">
                  {counters.agents}/7
                </div>
                <div className="text-gray-600 font-medium">AI Agents</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-lg hover-glow">
                <div className="text-3xl font-bold text-teal counter-animation">
                  {counters.savings}%
                </div>
                <div className="text-gray-600 font-medium">Cost Savings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;