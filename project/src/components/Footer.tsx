import React from 'react';
import { Link } from "react-router-dom";
import { 
  Brain, 
  Mail, 
  Phone, 
  Globe, 
  Linkedin, 
  Instagram, 
  Facebook,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-navy text-white">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-cyan" />
              <span className="text-2xl font-bold">BizAIHacks</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Transform your business with intelligent AI solutions. 
              Making artificial intelligence accessible, affordable, and scalable for all.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-gray-700 hover:bg-cyan text-white p-3 rounded-full transition-all duration-300 hover-glow"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-gray-700 hover:bg-cyan text-white p-3 rounded-full transition-all duration-300 hover-glow"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-gray-700 hover:bg-cyan text-white p-3 rounded-full transition-all duration-300 hover-glow"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-cyan transition-colors flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-cyan transition-colors flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="text-gray-300 hover:text-cyan transition-colors flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                  Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('case-studies')}
                  className="text-gray-300 hover:text-cyan transition-colors flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                  Case Studies
                </button>
              </li>
              <li>
                <Link
    to="/brandpartners"
    className="text-gray-300 hover:text-cyan transition-colors flex items-center group"
  >
    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
    Brand Partner
  </Link>
              </li>
              <li>
  <Link
    to="/partnerform"
    className="text-gray-300 hover:text-cyan transition-colors flex items-center group"
  >
    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
    Become Partner
  </Link>
</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">AI Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-300">AI Agents</li>
              <li className="text-gray-300">AI Calling</li>
              <li className="text-gray-300">Industry Solutions</li>
              <li className="text-gray-300">Advanced AI</li>
              <li className="text-gray-300">AI Consulting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-cyan" />
                <span className="text-gray-300">contact@bizaihacks.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-cyan" />
                <span className="text-gray-300">+91 84888 48393</span>
              </li>
              <li className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-cyan" />
                <span className="text-gray-300">www.bizaihacks.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 BizAIHacks - <a href='https://soltechtechservices.com/'>Soltech TechServices PVT LTD.</a> All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-cyan text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/termsofservice" className="text-gray-400 hover:text-cyan text-sm transition-colors">
                Terms of Service
              </a>
              <a href="/cookie" className="text-gray-400 hover:text-cyan text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;