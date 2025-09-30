import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    company_name: "",
    email_id: "",
    custom_lead_interest: "",
    notes: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // 🚀 CHANGE THESE
  const ERP_URL = "http://45.149.206.178"; // your ERPNext base URL
  const API_KEY = "7757dd170c6bb02";          // from ERPNext user
  const API_SECRET = "8d77e22fd447311";    // from ERPNext user

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Step 1: Check if email already exists
      const checkLead = await fetch(
        `${ERP_URL}/api/resource/Lead?filters=[["email_id","=","${formData.email_id}"]]`,
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `token ${API_KEY}:${API_SECRET}`
          }
        }
      );
      const checkResult = await checkLead.json();

      if (checkResult.data && checkResult.data.length > 0) {
        // Email already exists → show popup
        alert("❌ This email already exists. Please use a different email address.");
        setLoading(false);
        return;
      }

      // Step 2: Create a new Lead
      const payload = {
        first_name: formData.first_name,
        last_name: formData.last_name,
        company_name: formData.company_name,
        email_id: formData.email_id,
        custom_lead_interest: formData.custom_lead_interest,
        custom_message: formData.notes, // ✅ Make sure this field exists in Lead Doctype
        status: "Open"
      };

      const response = await fetch(`${ERP_URL}/api/resource/Lead`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `token ${API_KEY}:${API_SECRET}`
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(errText);
      }

      setSuccess(true);
      setFormData({
        first_name: "",
        last_name: "",
        company_name: "",
        email_id: "",
        custom_lead_interest: "",
        notes: ""
      });
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center shadow-md">
        <h3 className="text-xl font-semibold text-green-700">✅ Thank you!</h3>
        <p className="text-gray-600 mt-2">
          Your lead has been submitted successfully. Our team will contact you soon.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="mt-4 px-6 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 transition"
        >
          Send Another
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8">
      <h2 className="text-2xl font-bold text-center text-navy mb-6">
        Contact Us
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* First & Last Name */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              First Name *
            </label>
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-cyan-500"
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Last Name *
            </label>
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-cyan-500"
              placeholder="Enter your last name"
            />
          </div>
        </div>

        {/* Company & Email */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Company Name
            </label>
            <input
              type="text"
              name="company_name"
              value={formData.company_name}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-cyan-500"
              placeholder="Enter your company name"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              name="email_id"
              value={formData.email_id}
              onChange={handleChange}
              required
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-cyan-500"
              placeholder="Enter your email address"
            />
          </div>
        </div>

        {/* Lead Interest */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Service of Interest *
          </label>
          <select
            name="custom_lead_interest"
            value={formData.custom_lead_interest}
            onChange={handleChange}
            required
            className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-cyan-500"
          >
            <option value="">Select a service</option>
            <option value="AI Agents">AI Chatbot Agents</option>
            <option value="AI Calling Agents">AI Calling Agents</option>
            <option value="Industry AI Solutions">Industry AI Solutions</option>
            <option value="Advanced AI Solutions">Advanced AI Solutions</option>
            <option value="AI Consulting">AI Consulting</option>
            <option value="Custom AI Development">Custom AI Development</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Message / Notes *
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            required
            rows={4}
            className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-cyan-500 resize-none"
            placeholder="Tell us about your requirements..."
          />
        </div>

        {/* Submit */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:from-purple-600 hover:to-indigo-600 transition duration-300 flex items-center justify-center space-x-2"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>🚀</span>
                <span>Submit Form</span>
              </>
            )}
          </button>
        </div>

        {/* Error */}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {/* Privacy Note */}
        <p className="text-xs text-gray-500 text-center mt-2">
          By submitting this form, you agree to our Privacy Policy.  
          We’ll never share your information with third parties.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
