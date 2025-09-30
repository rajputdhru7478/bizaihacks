import React from 'react';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      image: "/public/images/Gemini_Generated_Image_hqqmtlhqqmtlhqqm.png", // Add relevant illustration in public/images
      title: "Core AI Services",
      description: "Comprehensive AI solutions including chatbots, automation, and intelligent workflows tailored to your business needs.",
      features: ["Custom AI Development", "Process Automation", "Data Analytics"],
      color: "from-cyan to-blue-500"
    },
    {
      image: "/public/images/Gemini_Generated_Image_in4bfsin4bfsin4b.png",
      title: "AI Chatbot Agents",
      description: "Intelligent virtual assistants that handle customer support, lead generation, and business operations 24/7.",
      features: ["24/7 Customer Support", "Lead Qualification", "Task Automation"],
      color: "from-teal to-emerald-500"
    },
    {
      image: "/public/images/Gemini_Generated_Image_rz25y5rz25y5rz25.png",
      title: "AI Voice Agents",
      description: "Advanced voice AI that conducts natural conversations for sales, support, and appointment scheduling.",
      features: ["Natural Voice Calls", "Appointment Booking", "Follow-up Automation"],
      color: "from-cyan to-indigo-500"
    },
    {
      image: "/public/images/Gemini_Generated_Image_2btplw2btplw2btp.png",
      title: "Industry AI Solutions",
      description: "Specialized AI applications designed for specific industries including retail, healthcare, and finance.",
      features: ["Industry-Specific Models", "Compliance Ready", "Scalable Architecture"],
      color: "from-teal to-blue-600"
    },
    {
      image: "/public/images/Gemini_Generated_Image_ty6wpqty6wpqty6w.png",
      title: "Advanced AI Solutions",
      description: "Cutting-edge AI technologies including machine learning, computer vision, and predictive analytics.",
      features: ["Machine Learning", "Computer Vision", "Predictive Analytics"],
      color: "from-cyan to-sky-500"
    },
    {
      image: "/public/images/Gemini_Generated_Image_25x7tm25x7tm25x7.png",
      title: "AI Consulting",
      description: "Expert guidance on AI strategy, implementation roadmaps, and digital transformation initiatives.",
      features: ["Strategy Development", "Implementation Planning", "ROI Optimization"],
      color: "from-teal to-green-500"
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-white relative z-10">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Our AI Services
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan to-teal mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our wide range of AI-powered solutions designed to 
            transform your operations, enhance customer experiences, 
            and drive sustainable business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 rounded-t-2xl overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-40`}></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-cyan transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
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

        {/* Bottom CTA */}
        <div className="text-center mt-20 animate-fade-in-up">
          <p className="text-lg text-gray-600 mb-6">
            Ready to transform your business with AI?
          </p>
          <button 
            onClick={() => scrollToSection('cta')}
            className="px-10 py-4 bg-cyan hover:bg-teal text-white font-semibold rounded-full transition-all duration-300 hover-glow text-lg"
          >
            Get Your Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
