import React from "react";
import { Calendar, MessageSquare, ArrowRight, Sparkles, Shield, Globe, Activity } from "lucide-react";
import ContactForm from "./ContactForm";

const CTA = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section id="cta" className="relative py-28 overflow-hidden text-center">
        {/* Gradient + Pattern Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-black"></div>
        <div className="absolute inset-0 ai-pattern opacity-20"></div>

        {/* Floating Glow Orbs */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-cyan/20 blur-3xl rounded-full animate-float"></div>
        <div className="absolute top-1/2 right-16 w-32 h-32 bg-teal/20 blur-3xl rounded-full animate-float-slow"></div>
        <div className="absolute bottom-20 left-1/2 w-20 h-20 bg-cyan/30 blur-2xl rounded-full animate-float" style={{ animationDelay: "2s" }}></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-cyan/20 backdrop-blur rounded-full mb-8 animate-pulse">
              <Sparkles className="h-10 w-10 text-cyan" />
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Supercharge Your Business{" "}
              <span className="gradient-text block">with Next-Gen AI</span>
            </h2>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              From chatbots to advanced AI agents — scale faster, operate smarter,
              and unlock growth with BizAIHacks. Get a <span className="text-cyan font-semibold">free consultation</span> today.
            </p>

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
              <div className="p-6 bg-white/5 backdrop-blur rounded-xl border border-white/10 hover:border-cyan transition">
                <Calendar className="mx-auto h-8 w-8 text-cyan mb-3" />
                <h4 className="text-white font-semibold text-lg">Free Consultation</h4>
                <p className="text-gray-400 text-sm mt-1">No hidden fees, no strings attached</p>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur rounded-xl border border-white/10 hover:border-teal transition">
                <Activity className="mx-auto h-8 w-8 text-teal mb-3" />
                <h4 className="text-white font-semibold text-lg">24h Response</h4>
                <p className="text-gray-400 text-sm mt-1">Quick onboarding & instant support</p>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur rounded-xl border border-white/10 hover:border-cyan transition">
                <Globe className="mx-auto h-8 w-8 text-cyan mb-3" />
                <h4 className="text-white font-semibold text-lg">Custom AI Strategy</h4>
                <p className="text-gray-400 text-sm mt-1">Tailored roadmap for your industry</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => window.open("https://meet.brevo.com/soltech/aicallingagents", "_blank")}
                className="group px-10 py-4 bg-gradient-to-r from-cyan to-teal text-white font-semibold rounded-full transition-all duration-300 flex items-center space-x-3 hover:scale-105 hover:shadow-[0_0_25px_rgba(0,212,255,0.6)] text-lg"
              >
                <Calendar className="h-6 w-6 group-hover:rotate-12 transition-transform" />
                <span>Schedule Free Demo</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={scrollToContact}
                className="group px-10 py-4 border-2 border-white/40 hover:border-teal text-white hover:bg-teal font-semibold rounded-full transition-all duration-300 flex items-center space-x-3 text-lg"
              >
                <MessageSquare className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span>Contact Us</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-20 pt-8 border-t border-white/20">
              <p className="text-gray-400 text-sm mb-6 uppercase tracking-wide">Trusted by industry leaders worldwide</p>
              <div className="flex flex-wrap justify-center items-center gap-10 opacity-80">
                <div className="flex items-center space-x-2 text-white font-semibold">
                  <Shield className="h-5 w-5 text-cyan" /> <span>Enterprise Security</span>
                </div>
                <div className="flex items-center space-x-2 text-white font-semibold">
                  <Globe className="h-5 w-5 text-teal" /> <span>GDPR Compliant</span>
                </div>
                <div className="flex items-center space-x-2 text-white font-semibold">
                  <Activity className="h-5 w-5 text-cyan" /> <span>99.9% Uptime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-2xl p-10 animate-fade-in-up">
            <h3 className="text-3xl font-bold text-navy mb-6 text-center">Let’s Get in Touch</h3>
            <p className="text-gray-600 text-center mb-10">
              Fill out the form and our team will reach out to you within 24 hours.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
