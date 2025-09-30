import React from "react";

const TermsOfService = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

      <p className="mb-4">
        Welcome to <strong>BizAIHacks</strong>! By accessing our website or using our services, you agree to be bound by the following Terms of Service. Please read them carefully before using our site.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">1. Acceptance of Terms</h2>
      <p className="mb-4">
        By using our website, services, or tools, you confirm that you have read, understood, and agree to comply with these Terms of Service and all applicable laws and regulations. If you do not agree, please do not use our platform.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">2. Use of Services</h2>
      <p className="mb-4">
        You agree to use our services only for lawful purposes. You may not use the platform to:
      </p>
      <ul className="list-disc ml-6 space-y-2 mb-4">
        <li>Transmit or post harmful, fraudulent, or illegal content.</li>
        <li>Violate the rights of others, including intellectual property rights.</li>
        <li>Engage in unauthorized access or disruption of our systems.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">3. Intellectual Property</h2>
      <p className="mb-4">
        All content on this website, including text, graphics, logos, images, and software, is the property of Soltech TechServices Pvt Ltd and is protected by copyright, trademark, and other applicable laws.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">4. Privacy</h2>
      <p className="mb-4">
        Your privacy is important to us. Please review our <a href="/privacy-policy" className="text-cyan-600 underline">Privacy Policy</a> to understand how we collect, use, and protect your personal information.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">5. Third-Party Services</h2>
      <p className="mb-4">
        We may integrate third-party tools or services. We are not responsible for the content, policies, or practices of any third-party websites or services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">6. Limitation of Liability</h2>
      <p className="mb-4">
        We are not liable for any indirect, incidental, or consequential damages resulting from your use or inability to use our services. Our total liability is limited to the amount you have paid us (if any) for our services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">7. Modifications</h2>
      <p className="mb-4">
        We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated revision date. Continued use of the site constitutes acceptance of those changes.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">8. Termination</h2>
      <p className="mb-4">
        We may suspend or terminate your access to the platform without notice if you violate these Terms or engage in conduct we deem harmful to our users or reputation.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">9. Governing Law</h2>
      <p className="mb-4">
        These Terms are governed by and construed in accordance with the laws of India. Any disputes arising shall be subject to the jurisdiction of the courts in Gujarat, India.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">10. Contact Us</h2>
      <p className="mb-4">
        If you have any questions about these Terms, please contact us at: <br />
        <strong>Email:</strong> support@bizaihacks.com <br />
        <strong>Phone:</strong> +91-84888 48393
      </p>
    </section>
  );
};

export default TermsOfService;
