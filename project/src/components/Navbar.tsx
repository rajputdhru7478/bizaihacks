import React, { useState, useEffect } from "react";
import { Menu, X, Brain, ChevronDown } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    if (location.pathname === "/") {
      // Already on homepage → smooth scroll
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    } else {
      // On /partnerform → go back to homepage with hash
      navigate(`/#${id}`);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <Brain
              className={`h-8 w-8 ${isScrolled ? "text-navy" : "text-cyan"}`}
            />
            <span
              className={`text-xl font-bold ${
                isScrolled ? "text-navy" : "text-white"
              }`}
            >
              BizAIHacks
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => handleNavClick("hero")}
              className={`font-medium transition-colors hover:text-cyan ${
                isScrolled ? "text-navy" : "text-white"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("about")}
              className={`font-medium transition-colors hover:text-cyan ${
                isScrolled ? "text-navy" : "text-white"
              }`}
            >
              About
            </button>
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavClick("services")}
                className={`font-medium transition-colors hover:text-cyan flex items-center ${
                  isScrolled ? "text-navy" : "text-white"
                }`}
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === "services" && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2">
                  <button
                    onClick={() => handleNavClick("services")}
                    className="block w-full text-left px-4 py-2 text-navy hover:bg-gray-50"
                  >
                    AI Services
                  </button>
                  <button
                    onClick={() => handleNavClick("products")}
                    className="block w-full text-left px-4 py-2 text-navy hover:bg-gray-50"
                  >
                    Products
                  </button>
                  <button
                    onClick={() => handleNavClick("industries")}
                    className="block w-full text-left px-4 py-2 text-navy hover:bg-gray-50"
                  >
                    Industries
                  </button>
                </div>
              )}
            </div>
            <button
              onClick={() => handleNavClick("case-studies")}
              className={`font-medium transition-colors hover:text-cyan ${
                isScrolled ? "text-navy" : "text-white"
              }`}
            >
              Case Studies
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className={`font-medium transition-colors hover:text-cyan ${
                isScrolled ? "text-navy" : "text-white"
              }`}
            >
              Contact
            </button>
            <button
              onClick={() => handleNavClick("contact-form")}
              className={`font-medium transition-colors hover:text-cyan ${
                isScrolled ? "text-navy" : "text-white"
              }`}
            >
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
  onClick={() => window.open("https://meet.brevo.com/soltech/aicallingagents", "_blank")}
  className="px-6 py-2 border border-cyan text-cyan hover:bg-cyan hover:text-white transition-all duration-300 rounded-full font-medium"
>
  Book Demo
</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-md ${
              isScrolled ? "text-navy" : "text-white"
            }`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 py-4 bg-white rounded-lg shadow-xl">
            <div className="flex flex-col space-y-4 px-6">
              <button
                onClick={() => handleNavClick("hero")}
                className="text-navy font-medium text-left hover:text-cyan transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick("about")}
                className="text-navy font-medium text-left hover:text-cyan transition-colors"
              >
                About
              </button>
              <button
                onClick={() => handleNavClick("services")}
                className="text-navy font-medium text-left hover:text-cyan transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => handleNavClick("products")}
                className="text-navy font-medium text-left hover:text-cyan transition-colors"
              >
                Products
              </button>
              <button
                onClick={() => handleNavClick("industries")}
                className="text-navy font-medium text-left hover:text-cyan transition-colors"
              >
                Industries
              </button>
              <button
                onClick={() => handleNavClick("case-studies")}
                className="text-navy font-medium text-left hover:text-cyan transition-colors"
              >
                Case Studies
              </button>
              <button
                onClick={() => handleNavClick("contact")}
                className="text-navy font-medium text-left hover:text-cyan transition-colors"
              >
                Contact
              </button>
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <button
  onClick={() => window.open("https://meet.brevo.com/soltech/aicallingagents", "_blank")}
  className="px-6 py-2 border border-cyan text-cyan hover:bg-cyan hover:text-white transition-all duration-300 rounded-full font-medium"
>
  Book Demo
</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
