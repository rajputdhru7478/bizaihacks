import React, { useState } from "react";
import axios from "axios";
import { trackEvent } from "../lib/firebase"; // adjust path

const PartnerFormPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    phone: "",
    gst: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/add-contact", {
        email: formData.email,
        attributes: {
          FULLNAME: formData.name,
          COMPANY_NAME: formData.company,
          INDUSTRY: formData.industry,
          SMS: formData.phone,
          GST_NO: formData.gst,
          MESSAGE: formData.message,
        },
      });

      console.log("Contact added:", res.data);
      alert("✅ Thank you! Your details have been saved to our partner list.");

      // 🔹 Track analytics events
      await trackEvent("partner_form_submit", {
        email: formData.email,
        company: formData.company,
        industry: formData.industry,
      });

      await trackEvent("generate_lead", {
        lead_source: "website_partner_form",
        industry: formData.industry,
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        industry: "",
        phone: "",
        gst: "",
        message: "",
      });
    } catch (error: any) {
      const msg = error.response?.data?.error?.message || "Something went wrong";
      console.error("❌ Error adding contact:", msg);
      alert(msg);
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-10">
        <h1 className="text-4xl font-bold text-navy mb-6 text-center">
          Become a BizAIHacks Partner
        </h1>
        <p className="text-gray-600 text-center mb-10">
          Fill out the form below to collaborate with us and unlock new AI-powered opportunities.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2">Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 border rounded-lg focus:ring-2 focus:ring-cyan focus:outline-none"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 border rounded-lg focus:ring-2 focus:ring-cyan focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          {/* Company */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2">Company Name *</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="p-3 border rounded-lg focus:ring-2 focus:ring-cyan focus:outline-none"
              placeholder="Enter your company name"
            />
          </div>

          {/* Industry */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2">Industry *</label>
            <select
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              required
              className="p-3 border rounded-lg focus:ring-2 focus:ring-cyan focus:outline-none"
            >
              <option value="">Select Industry</option>
              <option value="Security System / CCTV Installer">Security System / CCTV Installer</option>
              <option value="IT Infrastructure Provider">IT Infrastructure Provider</option>
              <option value="Access Control & Biometric Systems">Access Control & Biometric Systems</option>
              <option value="Networking Solutions Provider">Networking Solutions Provider</option>
              <option value="Office Automation Solutions">Office Automation Solutions</option>
              <option value="Branch Interior / Retail Building Integrator">Branch Interior / Retail Building Integrator</option>
              <option value="Factory / Plant Owner">Factory / Plant Owner</option>
              <option value="Manufacturing Consultant">Manufacturing Consultant</option>
              <option value="Industrial Equipment Supplier">Industrial Equipment Supplier</option>
              <option value="Process Automation Specialist">Process Automation Specialist</option>
              <option value="Electrical Contractor">Electrical Contractor</option>
              <option value="Energy Auditor / Power Management Expert">Energy Auditor / Power Management Expert</option>
              <option value="Business Consultant">Business Consultant</option>
              <option value="IT Consultant">IT Consultant</option>
              <option value="ERP / Software Developer">ERP / Software Developer</option>
              <option value="Digital Transformation Consultant">Digital Transformation Consultant</option>
              <option value="Facility Management Company">Facility Management Company</option>
              <option value="Commercial Real Estate Developer">Commercial Real Estate Developer</option>
              <option value="Realty Management Company">Realty Management Company</option>
              <option value="Auditor">Auditor</option>
              <option value="Interior Designer">Interior Designer</option>
              <option value="MEP Consultant">MEP Consultant</option>
              <option value="Construction Project Manager">Construction Project Manager</option>
              <option value="Telecom Service Provider">Telecom Service Provider</option>
              <option value="Data Center Operator">Data Center Operator</option>
              <option value="System Integrator">System Integrator</option>
              <option value="Corporate Training Company">Corporate Training Company</option>
              <option value="Logistics & Fleet Management Company">Logistics & Fleet Management Company</option>
            </select>
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              pattern="^\+?[1-9]\d{7,14}$"
              title="Use international format, e.g., +919876543210"
              className="p-3 border rounded-lg focus:ring-2 focus:ring-cyan focus:outline-none"
              placeholder="+919876543210"
            />
          </div>

          {/* GST/Tax ID */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2">GST/Tax ID</label>
            <input
              type="text"
              name="gst"
              value={formData.gst}
              onChange={handleChange}
              className="p-3 border rounded-lg focus:ring-2 focus:ring-cyan focus:outline-none"
              placeholder="Enter your GST/Tax ID"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-gray-700 font-medium mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="p-3 border rounded-lg focus:ring-2 focus:ring-cyan focus:outline-none"
              placeholder="Tell us how you'd like to partner with us"
            />
          </div>

          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-cyan to-teal text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.6)]"
            >
              Submit Partnership Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PartnerFormPage;
