import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import ProductPortfolio from "./components/ProductPortfolio";
import IndustrySolutions from "./components/IndustrySolutions";
import CaseStudies from "./components/CaseStudies";
import WhyChooseUs from "./components/WhyChooseUs";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";

import { trackPageView } from "./lib/firebase"; // ✅ Firebase analytics helper

// Pages
import PartnerFormPage from "./pages/partnerform";
import BrandPartnerPage from "./pages/brandpartners";
import CookiePage from "./pages/cookie";
import TermPage from "./pages/termsofservice";
import PagePrivacy from "./pages/privacy";

function App() {
  const location = useLocation();

  // ✅ Track page view whenever the route changes
  useEffect(() => {
    trackPageView(location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-poppins">
      {/* ✅ Navbar always visible */}
      <Navbar />

      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Services />
              <ProductPortfolio />
              <IndustrySolutions />
              <CaseStudies />
              <WhyChooseUs />
              <CTA />
            </>
          }
        />

        {/* Static Pages */}
        <Route path="/privacy" element={<PagePrivacy />} />
        <Route path="/termsofservice" element={<TermPage />} />
        <Route path="/cookie" element={<CookiePage />} />
        <Route path="/brandpartners" element={<BrandPartnerPage />} />
        <Route path="/partnerform" element={<PartnerFormPage />} />
      </Routes>

      {/* ✅ Footer always visible */}
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}

export default App;
