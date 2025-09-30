import React from "react";

type Partner = {
  name: string;
  logo: string;
};

const partners: Partner[] = [
  { name: "Cisco", logo: "/logos/download (5).png" },
  { name: "TP-Link", logo: "/logos/images.png" },
  { name: "Ubiquiti", logo: "/logos/images (1).png" },
  { name: "Digisol", logo: "/logos/download (6).png" },
  { name: "Netgear", logo: "/logos/download (7).png" },
  { name: "Syrotech", logo: "/logos/download (8).png" },
  { name: "D-Link", logo: "/logos/download (9).png" },
  { name: "Tenda", logo: "/logos/download (10).png" },
  { name: "IBM", logo: "/logos/52.png" },
  { name: "Brevo", logo: "/logos/25.png" },
  { name: "ERP", logo: "/logos/11.png" },
  { name: "Tally", logo: "/logos/16.png" },
];

const BrandPartners: React.FC = () => {
  return (
    <section
      className="bg-white py-16 px-4 sm:px-8 lg:px-16"
      id="brand-partners"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Our Brand Partners
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We proudly collaborate with industry-leading technology brands to
          deliver the most reliable and future-ready solutions.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition duration-300 flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} Logo`}
                className="max-h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPartners;
