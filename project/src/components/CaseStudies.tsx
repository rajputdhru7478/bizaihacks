import React, { useState, useEffect } from 'react';
import { 
  Home, 
  ShoppingCart, 
  Leaf, 
  Factory, 
  Heart,
  ChevronLeft,
  ChevronRight,
  TrendingUp
} from 'lucide-react';

const CaseStudies = () => {
  const [currentCase, setCurrentCase] = useState(0);
  const [progressValues, setProgressValues] = useState<{ [key: number]: number }>({});

  const caseStudies = [
    {
      icon: <Home className="h-8 w-8" />,
      title: "Real Estate CRM Revolution",
      industry: "Real Estate",
      challenge: "Manual lead management and poor conversion rates",
      solution: "AI-powered CRM with automated lead scoring and nurturing",
      results: [
        { metric: "Conversions", value: 80, unit: "% increase" },
        { metric: "Cost Reduction", value: 50, unit: "% savings" },
        { metric: "Response Time", value: 85, unit: "% faster" }
      ],
      image: "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=800",
      testimonial: "BizAIHacks transformed our lead management process. We're closing 3x more deals with half the effort.",
      client: "Metro Realty Group"
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "Retail AI Transformation",
      industry: "Retail",
      challenge: "Frequent stock-outs and overstocking issues",
      solution: "Predictive inventory management with demand forecasting",
      results: [
        { metric: "Stock-outs Reduced", value: 40, unit: "% decrease" },
        { metric: "Inventory Turnover", value: 65, unit: "% improvement" },
        { metric: "Profit Margins", value: 25, unit: "% increase" }
      ],
      image: "https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&w=800",
      testimonial: "Our inventory is now perfectly optimized. We've eliminated stockouts while reducing excess inventory by 40%.",
      client: "Fashion Forward Chain"
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Agriculture Drone AI",
      industry: "Agriculture",
      challenge: "Crop monitoring inefficiencies and yield optimization",
      solution: "AI-powered drone monitoring with predictive analytics",
      results: [
        { metric: "Yield Increase", value: 30, unit: "% boost" },
        { metric: "Water Usage", value: 45, unit: "% reduction" },
        { metric: "Early Detection", value: 90, unit: "% accuracy" }
      ],
      image: "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=800",
      testimonial: "The AI system helped us increase yields by 30% while using less water and pesticides.",
      client: "Green Valley Farms"
    },
    {
      icon: <Factory className="h-8 w-8" />,
      title: "Manufacturing AI Optimization",
      industry: "Manufacturing",
      challenge: "Unplanned downtime and maintenance costs",
      solution: "Predictive maintenance with IoT sensors and AI analytics",
      results: [
        { metric: "Downtime Reduction", value: 25, unit: "% decrease" },
        { metric: "Maintenance Costs", value: 35, unit: "% savings" },
        { metric: "Productivity", value: 20, unit: "% increase" }
      ],
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800",
      testimonial: "Predictive maintenance has revolutionized our operations. We prevent failures before they happen.",
      client: "Industrial Solutions Inc."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Healthcare AI Diagnostics",
      industry: "Healthcare",
      challenge: "Late disease detection and diagnostic accuracy",
      solution: "AI-powered diagnostic imaging and early warning systems",
      results: [
        { metric: "Early Detection", value: 18, unit: "% improvement" },
        { metric: "Diagnostic Accuracy", value: 95, unit: "% precision" },
        { metric: "Patient Outcomes", value: 30, unit: "% better" }
      ],
      image: "https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=800",
      testimonial: "AI diagnostics have significantly improved our early detection rates and patient outcomes.",
      client: "Regional Medical Center"
    }
  ];

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCase = () => {
    setCurrentCase((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  // Animate progress bars when case changes
  useEffect(() => {
    const timer = setTimeout(() => {
      const newValues: { [key: number]: number } = {};
      caseStudies[currentCase].results.forEach((result, index) => {
        newValues[index] = result.value;
      });
      setProgressValues(newValues);
    }, 300);

    // Reset progress values
    setProgressValues({});
    
    return () => clearTimeout(timer);
  }, [currentCase]);

  const currentStudy = caseStudies[currentCase];

  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Success Stories
          </h2>
          <div className="w-20 h-1 bg-cyan mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real businesses. Discover how our AI solutions have transformed 
            operations and delivered measurable ROI across various industries.
          </p>
        </div>

        {/* Case Study Display */}
        <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Content Side */}
            <div className="p-8 lg:p-12">
              {/* Industry Badge */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-cyan text-white p-3 rounded-lg">
                  {currentStudy.icon}
                </div>
                <div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide">
                    {currentStudy.industry}
                  </div>
                  <h3 className="text-2xl font-bold text-navy">
                    {currentStudy.title}
                  </h3>
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="mb-8">
                <div className="mb-4">
                  <h4 className="font-semibold text-navy mb-2">Challenge:</h4>
                  <p className="text-gray-600">{currentStudy.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-2">Solution:</h4>
                  <p className="text-gray-600">{currentStudy.solution}</p>
                </div>
              </div>

              {/* Results */}
              <div className="mb-8">
                <h4 className="font-semibold text-navy mb-4">Results:</h4>
                <div className="space-y-4">
                  {currentStudy.results.map((result, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-700">{result.metric}</span>
                        <span className="font-bold text-cyan">
                          {result.value}{result.unit}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-cyan to-teal h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${progressValues[index] || 0}%`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-gradient-to-r from-cyan/10 to-teal/10 rounded-lg p-6 mb-6">
                <p className="text-gray-700 italic mb-4">"{currentStudy.testimonial}"</p>
                <div className="font-semibold text-navy">— {currentStudy.client}</div>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative">
              <img
                src={currentStudy.image}
                alt={`${currentStudy.title} case study`}
                className="w-full h-full object-cover min-h-96"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="text-lg font-semibold mb-2">Industry Impact</div>
                <div className="text-gray-200">Measurable Results, Real ROI</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
            <button
              onClick={prevCase}
              className="bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover-glow"
            >
              <ChevronLeft className="h-6 w-6 text-navy" />
            </button>
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <button
              onClick={nextCase}
              className="bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover-glow"
            >
              <ChevronRight className="h-6 w-6 text-navy" />
            </button>
          </div>
        </div>

        {/* Timeline Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentCase(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentCase ? 'bg-cyan' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up">
          <p className="text-lg text-gray-600 mb-6">
            Ready to become our next success story?
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('cta');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-gradient-to-r from-cyan to-teal text-white font-semibold rounded-full transition-all duration-300 hover-glow flex items-center space-x-2 mx-auto"
          >
            <TrendingUp className="h-5 w-5" />
            <span>Start Your Success Story</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;