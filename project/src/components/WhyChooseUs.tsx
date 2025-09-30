import React from 'react';
import { 
  CheckCircle, 
  DollarSign, 
  TrendingUp, 
  Users, 
  Award 
} from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Complete AI Stack",
      description: "End-to-end AI solutions from strategy to implementation and ongoing support."
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Affordable Solutions",
      description: "Cost-effective AI implementations that deliver ROI from day one."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Scalable Architecture",
      description: "Future-ready solutions that grow with your business needs."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Industry Expertise",
      description: "Deep domain knowledge across 10+ industries and specialized use cases."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Proven Results",
      description: "Track record of successful implementations with measurable business outcomes."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Why Choose BizAIHacks?
            </h2>
            <div className="w-20 h-1 bg-cyan mb-8"></div>
            
            <div className="space-y-8">
              {reasons.map((reason, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-cyan/10 group-hover:bg-cyan text-cyan group-hover:text-white p-3 rounded-lg transition-all duration-300">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-cyan transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <button 
                onClick={() => {
                  const element = document.getElementById('cta');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-navy hover:bg-cyan text-white font-semibold rounded-full transition-all duration-300 hover-glow"
              >
                Experience the Difference
              </button>
            </div>
          </div>

          {/* Visual */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Futuristic AI brain technology and innovation"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan/20 to-teal/20 rounded-lg"></div>
              
              {/* Floating Stats */}
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-6 animate-float">
                <div className="text-2xl font-bold text-navy">10+</div>
                <div className="text-gray-600 text-sm">Industries Served</div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 animate-float" style={{animationDelay: '2s'}}>
                <div className="text-2xl font-bold text-cyan">50%</div>
                <div className="text-gray-600 text-sm">Average Cost Savings</div>
              </div>
              
              <div className="absolute top-1/2 -right-8 bg-white rounded-xl shadow-xl p-6 animate-float" style={{animationDelay: '4s'}}>
                <div className="text-2xl font-bold text-teal">24/7</div>
                <div className="text-gray-600 text-sm">AI Operations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;