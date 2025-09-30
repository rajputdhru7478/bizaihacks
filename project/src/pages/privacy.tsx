import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        At <strong>BizAIHacks</strong>, your privacy is our priority. This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our website or use our services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">1. Information We Collect</h2>
      <p className="mb-4">We may collect the following information:</p>
      <ul className="list-disc ml-6 space-y-2 mb-4">
        <li>Your name, email address, phone number, and company details.</li>
        <li>Messages and form submissions.</li>
        <li>Usage data such as browser type, IP address, and device information.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">2. How We Use Your Information</h2>
      <p className="mb-4">
        We use your data to:
      </p>
      <ul className="list-disc ml-6 space-y-2 mb-4">
        <li>Respond to your inquiries and provide customer support.</li>
        <li>Process demo requests, service bookings, and partnerships.</li>
        <li>Send important updates, newsletters, or marketing content (if opted-in).</li>
        <li>Improve our website experience and service offerings.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">3. Cookies</h2>
      <p className="mb-4">
        We use cookies to enhance your browsing experience. You can disable cookies in your browser settings, but doing so may limit some functionality on our site. See our <a href="/cookies" className="text-cyan-600 underline">Cookie Policy</a> for more details.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">4. Data Sharing</h2>
      <p className="mb-4">
        We do not sell or rent your personal information. We may share your data with:
      </p>
      <ul className="list-disc ml-6 space-y-2 mb-4">
        <li>Trusted service providers (e.g., email, CRM, analytics) under confidentiality agreements.</li>
        <li>Government or legal authorities if required by law.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">5. Data Security</h2>
      <p className="mb-4">
        We implement industry-standard security practices to protect your data. However, no digital transmission or storage is 100% secure.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">6. Your Rights</h2>
      <p className="mb-4">
        You have the right to:
      </p>
      <ul className="list-disc ml-6 space-y-2 mb-4">
        <li>Access and review your personal data.</li>
        <li>Request data correction or deletion.</li>
        <li>Withdraw consent at any time.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">7. Third-Party Links</h2>
      <p className="mb-4">
        Our site may contain links to third-party websites. We are not responsible for their privacy practices or content. Please review their policies separately.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">8. Changes to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy at any time. Changes will be posted here with a revised “Last updated” date.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">9. Contact Us</h2>
      <p className="mb-4">
        If you have any questions or concerns about this policy, please contact us at: <br />
        <strong>Email:</strong> support@bizaihacks.com <br />
        <strong>Phone:</strong> +91-84888 48393
      </p>

      <p className="text-sm text-gray-500 mt-8">Last updated: September 2025</p>
    </section>
  );
};

export default PrivacyPolicy;
