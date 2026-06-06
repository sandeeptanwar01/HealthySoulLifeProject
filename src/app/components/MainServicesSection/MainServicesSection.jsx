import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Pre-policy health checkup",
    desc: "It is the medical evaluation that health insurers require before offering coverage to a person.",
    link: "/MainService/index/1",
  },
  {
    id: 2,
    title: "Annual health checkup",
    desc: "It helps identify health issues early and improves long-term wellness.",
    link: "/MainService/index/3",
  },
  {
    id: 3,
    title: "Pre-health checkup",
    desc: "Ensures physical and mental fitness for job performance.",
    link: "/MainService/index/2",
  },
  {
    id: 4,
    title: "Health camp",
    desc: "Encourages long-term health awareness and preventive care in communities.",
    link: "/MainService/index/4",
  },
];

function ServiceCard({ title, desc, link }) {
  return (
    <div className="bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
      {/* Icon */}
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[20px] bg-teal-400">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-white"
        >
          <path
            d="M12 2a4 4 0 100 8 4 4 0 000-8zm0 10c-4.4 0-8 2-8 4.5V22h16v-5.5C20 14 16.4 12 12 12z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* Title */}
      <h3 className="text-[28px] font-bold leading-[1.1] text-slate-900">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-4 text-[15px] leading-7 text-gray-500">
        {desc}
      </p>

      {/* Link */}
      <Link
        href={link}
        className="mt-5 inline-flex items-center gap-1 text-base font-semibold text-slate-900 hover:gap-2 transition-all"
      >
        Read more
        <ArrowRight size={18} />
      </Link>
    </div>
  );
}

export default function MainServicesSection() {
  return (
    <section className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-teal-500 font-semibold uppercase tracking-wider">
            Main Features
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">
            Our Main Services
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-7">
            We examine your health, address your concerns, and advise you on
            health screenings and other services.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item) => (
            <ServiceCard
              key={item.id}
              title={item.title}
              desc={item.desc}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}