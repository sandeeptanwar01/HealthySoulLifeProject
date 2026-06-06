import React from "react";

const partners = [
  { id: 1, image: "https://www.vectorlogo.zone/logos/airbnb/airbnb-ar21.svg" },
  { id: 2, image: "https://www.vectorlogo.zone/logos/uber/uber-ar21.svg" },
  { id: 3, image: "https://www.vectorlogo.zone/logos/spotify/spotify-ar21.svg" },
  { id: 4, image: "https://www.vectorlogo.zone/logos/dropbox/dropbox-ar21.svg" },
  { id: 5, image: "https://www.vectorlogo.zone/logos/stripe/stripe-ar21.svg" },
  { id: 6, image: "https://www.vectorlogo.zone/logos/zoomus/zoomus-ar21.svg" },
  { id: 7, image: "https://www.vectorlogo.zone/logos/github/github-ar21.svg" },
  { id: 8, image: "https://www.vectorlogo.zone/logos/atlassian/atlassian-ar21.svg" },
  { id: 9, image: "https://www.vectorlogo.zone/logos/figma/figma-ar21.svg" },
];
const NetworkPartners = () => {
  return (
    <section className="bg-[#f4f9fd] py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-900">
            Our Network Partners
          </h2>

          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Some of our trusted network providers that service the entire
            country of India.
          </p>
        </div>

        {/* Partners */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="group relative bg-white h-36 flex items-center justify-center overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <img
                src={partner.image}
                alt={`Partner ${partner.id}`}
                className="max-h-20 w-auto object-contain z-10"
              />

              {/* Top Left */}
              <span className="absolute top-3 left-3 w-12 h-12 border-l-4 border-t-4 border-green-600 opacity-0 -translate-x-3 -translate-y-3 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500"></span>

              {/* Top Right */}
              <span className="absolute top-3 right-3 w-12 h-12 border-r-4 border-t-4 border-green-600 opacity-0 translate-x-3 -translate-y-3 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500"></span>

              {/* Bottom Left */}
              <span className="absolute bottom-3 left-3 w-12 h-12 border-l-4 border-b-4 border-green-600 opacity-0 -translate-x-3 translate-y-3 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500"></span>

              {/* Bottom Right */}
              <span className="absolute bottom-3 right-3 w-12 h-12 border-r-4 border-b-4 border-green-600 opacity-0 translate-x-3 translate-y-3 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NetworkPartners;