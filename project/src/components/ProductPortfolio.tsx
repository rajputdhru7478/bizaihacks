import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const ProductPortfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      image: "/images/products/ChatGPT Image Sep 24, 2025, 11_30_24 AM.png",
      name: "BizAIHacks Chatbot",
      description: "Intelligent conversational AI that handles customer inquiries with human-like responses and seamless escalation.",
      features: ["Natural Language Processing", "Multi-language Support", "24/7 Availability"],
      category: "Customer Support"
    },
    {
      image: "/images/products/ChatGPT Image Sep 24, 2025, 11_34_11 AM.png",
      name: "AI Voice Agent",
      description: "Advanced voice AI for natural phone conversations, appointment booking, and customer service automation.",
      features: ["Natural Voice Synthesis", "Call Analytics", "CRM Integration"],
      category: "Communication"
    },
    {
      image: "/images/products/ChatGPT Image Sep 24, 2025, 11_36_41 AM.png",
      name: "LeadGen AI",
      description: "Automated lead generation and qualification system that identifies and nurtures potential customers.",
      features: ["Lead Scoring", "Automated Outreach", "Pipeline Management"],
      category: "Sales"
    },
    {
      image: "/images/products/ChatGPT Image Sep 24, 2025, 11_40_09 AM.png",
      name: "SalesFlow AI",
      description: "End-to-end sales process automation with predictive analytics and performance optimization.",
      features: ["Sales Forecasting", "Deal Optimization", "Performance Tracking"],
      category: "Sales"
    },
    {
      image: "/images/products/ChatGPT Image Sep 24, 2025, 11_43_28 AM.png",
      name: "Retail360 AI",
      description: "Comprehensive retail solution with inventory optimization, demand forecasting, and customer insights.",
      features: ["Inventory Management", "Demand Prediction", "Customer Analytics"],
      category: "Retail"
    },
    {
      image: "/images/products/ChatGPT Image Sep 24, 2025, 11_46_59 AM.png",
      name: "AgriSense AI",
      description: "Agricultural intelligence platform for crop monitoring, yield prediction, and resource optimization.",
      features: ["Crop Monitoring", "Weather Integration", "Yield Optimization"],
      category: "Agriculture"
    },
    {
      image: "/images/products/ChatGPT Image Sep 24, 2025, 11_54_17 AM.png",
      name: "PredictPro AI",
      description: "Advanced predictive analytics platform for business forecasting and risk assessment.",
      features: ["Predictive Modeling", "Risk Analysis", "Business Intelligence"],
      category: "Analytics"
    },
    {
      image: "/images/products/ChatGPT Image Sep 24, 2025, 11_57_23 AM.png",
      name: "MediBot AI",
      description: "Healthcare AI assistant for patient support, appointment scheduling, and medical information.",
      features: ["Patient Support", "Medical Q&A", "Appointment Management"],
      category: "Healthcare"
    },
    {
      image: "/images/products/ChatGPT Image Sep 24, 2025, 12_00_39 PM.png",
      name: "CreditScore AI",
      description: "Financial analysis platform for credit assessment, fraud detection, and risk management.",
      features: ["Credit Analysis", "Fraud Detection", "Risk Scoring"],
      category: "Finance"
    },
    {
      image: "/images/products/ChatGPT Image Sep 24, 2025, 12_04_13 PM.png",
      name: "VisionAI Security",
      description: "Computer vision platform for security monitoring, anomaly detection, and access control.",
      features: ["Object Detection", "Anomaly Detection", "Real-time Monitoring"],
      category: "Security"
    },
    {
      image: "/images/products/ChatGPT Image Sep 24, 2025, 12_06_26 PM.png",
      name: "GenX AI Studio",
      description: "Creative AI platform for content generation, design automation, and marketing materials.",
      features: ["Content Generation", "Design Automation", "Brand Consistency"],
      category: "Creative"
    }
  ];

  const itemsPerPage = 3;
  const maxIndex = Math.ceil(products.length / itemsPerPage) - 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const getCurrentProducts = () => {
    const start = currentIndex * itemsPerPage;
    return products.slice(start, start + itemsPerPage);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            AI Product Portfolio
          </h2>
          <div className="w-20 h-1 bg-cyan mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive suite of AI-powered products designed to solve 
            real-world business challenges across multiple industries.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-cyan hover:text-white transition-all duration-300"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-cyan hover:text-white transition-all duration-300"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
            {getCurrentProducts().map((product, index) => (
              <div
                key={product.name}
                className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Product Image */}
                <div className="relative h-48 w-full rounded-t-xl overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan to-teal opacity-30"></div>
                </div>

                <div className="p-8">
                  {/* Category Badge */}
                  <div className="inline-block px-3 py-1 bg-cyan/10 text-cyan text-sm font-semibold rounded-full mb-4">
                    {product.category}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-navy mb-4">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-cyan rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button 
                    onClick={() => scrollToSection('cta')}
                    className="group/btn w-full bg-gray-50 hover:bg-cyan text-gray-700 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxIndex + 1 }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-cyan' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up">
          <p className="text-lg text-gray-600 mb-6">
            Need a custom AI solution for your specific requirements?
          </p>
          <button 
            onClick={() => scrollToSection('cta')}
            className="px-8 py-4 bg-gradient-to-r from-cyan to-teal text-white font-semibold rounded-full transition-all duration-300 hover-glow"
          >
            Discuss Custom Solutions
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductPortfolio;
