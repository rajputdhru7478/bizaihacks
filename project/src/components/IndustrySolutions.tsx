import React, { useState } from 'react';
import { 
  ShoppingCart, 
  Leaf, 
  Factory, 
  Heart, 
  Banknote 
} from 'lucide-react';

const IndustrySolutions = () => {
  const [activeTab, setActiveTab] = useState('retail');

  const industries = {
    retail: {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "Retail & E-commerce",
      description: "Transform your retail operations with AI-powered inventory management, personalized recommendations, and customer analytics.",
      image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800",
      solutions: [
        "Inventory Optimization & Demand Forecasting",
        "Personalized Product Recommendations",
        "Customer Behavior Analytics",
        "Automated Customer Support",
        "Dynamic Pricing Strategies"
      ],
      stats: { improvement: "40%", metric: "fewer stock-outs" }
    },
    agriculture: {
      icon: <Leaf className="h-8 w-8" />,
      title: "Agriculture & Farming",
      description: "Revolutionize farming with precision agriculture, crop monitoring, and yield optimization using advanced AI technologies.",
      image: "https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=800",
      solutions: [
        "Crop Health Monitoring via Drones",
        "Weather-Based Yield Prediction",
        "Soil Analysis & Nutrient Optimization",
        "Automated Irrigation Systems",
        "Pest & Disease Early Detection"
      ],
      stats: { improvement: "30%", metric: "yield increase" }
    },
    manufacturing: {
      icon: <Factory className="h-8 w-8" />,
      title: "Manufacturing & Industry",
      description: "Optimize production processes, reduce downtime, and enhance quality control with intelligent manufacturing solutions.",
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800",
      solutions: [
        "Predictive Maintenance Systems",
        "Quality Control Automation",
        "Production Line Optimization",
        "Supply Chain Intelligence",
        "Safety Monitoring & Alerts"
      ],
      stats: { improvement: "25%", metric: "less downtime" }
    },
    healthcare: {
      icon: <Heart className="h-8 w-8" />,
      title: "Healthcare & Medical",
      description: "Enhance patient care, streamline operations, and improve diagnostic accuracy with AI-powered healthcare solutions.",
      image: "https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=800",
      solutions: [
        "Medical Image Analysis & Diagnostics",
        "Patient Risk Assessment",
        "Drug Discovery Acceleration",
        "Electronic Health Records Optimization",
        "Telemedicine & Remote Monitoring"
      ],
      stats: { improvement: "18%", metric: "better early detection" }
    },
    finance: {
      icon: <Banknote className="h-8 w-8" />,
      title: "Finance & Banking",
      description: "Secure financial operations, detect fraud, and enhance customer experiences with intelligent financial AI systems.",
      image: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=800",
      solutions: [
        "Fraud Detection & Prevention",
        "Credit Risk Assessment",
        "Algorithmic Trading Strategies",
        "Customer Service Automation",
        "Regulatory Compliance Monitoring"
      ],
      stats: { improvement: "60%", metric: "fraud reduction" }
    }
  };

  const tabKeys = Object.keys(industries) as Array<keyof typeof industries>;

  return (
    <section id="industries" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Industry Solutions
          </h2>
          <div className="w-20 h-1 bg-cyan mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized AI solutions tailored for your industry's unique challenges and opportunities.
          </p>
        </div>

        {/* Industry Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          <div className="bg-gray-100 rounded-full p-2 inline-flex">
            {tabKeys.map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === key
                    ? 'bg-cyan text-white shadow-lg'
                    : 'text-gray-600 hover:text-navy'
                }`}
              >
                {industries[key].icon}
                <span className="hidden sm:block">{industries[key].title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Industry Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
            <h3 className="text-3xl font-bold text-navy mb-6">
              {industries[activeTab as keyof typeof industries].title}
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {industries[activeTab as keyof typeof industries].description}
            </p>

            {/* Solutions List */}
            <div className="space-y-4 mb-8">
              {industries[activeTab as keyof typeof industries].solutions.map((solution, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-gray-700">{solution}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="bg-gradient-to-r from-cyan to-teal text-white p-6 rounded-lg mb-8">
              <div className="text-3xl font-bold mb-2">
                {industries[activeTab as keyof typeof industries].stats.improvement}
              </div>
              <div className="text-cyan-100">
                {industries[activeTab as keyof typeof industries].stats.metric}
              </div>
            </div>

            <button 
              onClick={() => {
                const element = document.getElementById('cta');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-navy hover:bg-cyan text-white font-semibold rounded-full transition-all duration-300 hover-glow"
            >
              Explore {industries[activeTab as keyof typeof industries].title} Solutions
            </button>
          </div>

          {/* Visual */}
          <div className="animate-slide-in-right">
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <img
                src={industries[activeTab as keyof typeof industries].image}
                alt={`${industries[activeTab as keyof typeof industries].title} AI solutions`}
                className="w-full h-96 object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="text-2xl font-bold mb-2">
                  AI-Powered {industries[activeTab as keyof typeof industries].title.split(' ')[0]}
                </div>
                <div className="text-gray-200">
                  Next-generation solutions for modern businesses
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySolutions;