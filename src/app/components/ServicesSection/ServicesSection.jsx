"use client";

import Link from "next/link";

const servicesData = [
  {
    id: 1,
    title: "Health Talk",
    desc: "Informative sessions on preventive healthcare and healthy living.",
    img: "https://images.unsplash.com/photo-1588776814546-df907c9d31b5?auto=format&fit=crop&w=800&q=80",
    link: "/service/1",
  },
  {
    id: 2,
    title: "Online Doctor Consultation",
    desc: "Talk to certified doctors online from the comfort of your home.",
    img: "https://images.unsplash.com/photo-1580281657523-6f998e48d7b8?auto=format&fit=crop&w=800&q=80",
    link: "/service/2",
  },
  {
    id: 3,
    title: "Covid Testing",
    desc: "Rapid and safe COVID-19 testing at nearby centers.",
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
    link: "/service/3",
  },
  {
    id: 4,
    title: "Meditation",
    desc: "Guided meditation for mental clarity, stress relief, and focus.",
    img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=800&q=80",
    link: "/service/5",
  },
  {
    id: 5,
    title: "Psychiatric Consultation",
    desc: "Professional mental health support and counseling services.",
    img: "https://images.unsplash.com/photo-1588776814438-82f6d4b7fda6?auto=format&fit=crop&w=800&q=80",
    link: "/service/6",
  },
  {
    id: 6,
    title: "Yoga",
    desc: "Strengthen your body, improve flexibility, and enhance peace of mind.",
    img: "https://images.unsplash.com/photo-1552058540-0c64e4a202a1?auto=format&fit=crop&w=800&q=80",
    link: "/service/7",
  },
  {
    id: 7,
    title: "Zumba & Aerobics",
    desc: "Energetic fitness classes combining dance and cardio exercises.",
    img: "https://images.unsplash.com/photo-1599058917211-6fdb1c8272d4?auto=format&fit=crop&w=800&q=80",
    link: "/service/8",
  },
  {
    id: 8,
    title: "Healing Therapy",
    desc: "Holistic therapies to rejuvenate your body and mind.",
    img: "https://images.unsplash.com/photo-1588776814371-83f0ffcc66d7?auto=format&fit=crop&w=800&q=80",
    link: "/service/10",
  },
  {
    id: 9,
    title: "Relationship Constellation",
    desc: "Resolve family and personal emotional blocks effectively.",
    img: "https://images.unsplash.com/photo-1542345812-d98b5cd6cf98?auto=format&fit=crop&w=800&q=80",
    link: "/service/11",
  },
  {
    id: 10,
    title: "Self Negative Talk",
    desc: "Techniques to eliminate negative thoughts and boost confidence.",
    img: "https://images.unsplash.com/photo-1599058917260-79837a5b7f3c?auto=format&fit=crop&w=800&q=80",
    link: "/service/12",
  },
  {
    id: 11,
    title: "Women Hygiene",
    desc: "Education on personal hygiene and health protection for women.",
    img: "https://images.unsplash.com/photo-1588776814534-f3c6890a1a6e?auto=format&fit=crop&w=800&q=80",
    link: "/service/13",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-[#6B3E26] font-semibold uppercase tracking-widest">
            Our Services
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-gray-800">
            Healthcare Services
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            We are dedicated to helping our clients live healthier lives with
            quality healthcare services.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group flex flex-col"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 min-h-[56px]">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm leading-6 flex-grow">
                  {item.desc}
                </p>

                <Link
                  href={item.link}
                  className="mt-5 inline-flex justify-center items-center px-5 py-2 border border-[#6B3E26] text-[#6B3E26] rounded-full text-sm font-semibold hover:bg-[#6B3E26] hover:text-white transition-all duration-300"
                >
                  READ MORE
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}