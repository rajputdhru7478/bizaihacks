import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+919265567309"; // 🔹 Replace with your WhatsApp Business number
    const message = encodeURIComponent(
      "Hi! I'm interested in learning more about BizAIHacks AI solutions. Can you help me get started?"
    );
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="group bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300 animate-pulse"
        aria-label="Contact us on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <MessageCircle className="h-7 w-7 group-hover:rotate-12 transition-transform duration-300" />
      </button>
    </div>
  );
};

export default WhatsAppButton;
