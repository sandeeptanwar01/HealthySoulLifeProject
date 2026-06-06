"use client";

import CountUp from "react-countup";
import {
  FaUserMd,
  FaHome,
  FaMapMarkedAlt,
  FaHeadset,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaUserMd />,
    number: 700000,
    title: "Total Checkups",
  },
  {
    icon: <FaHome />,
    number: 300000,
    title: "Home Visit",
  },
  {
    icon: <FaMapMarkedAlt />,
    number: 1500,
    title: "Cities Covered",
  },
  {
    icon: <FaHeadset />,
    number: 1150,
    title: "Our Providers",
  },
];

export default function FunFactsSection() {
  return (
    <section className="py-20 bg-teal-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-teal-100 text-teal-600 text-3xl">
                {item.icon}
              </div>

              <h3 className="text-3xl font-bold text-gray-800">
                <CountUp
                  end={item.number}
                  duration={3}
                  separator=","
                />
                +
              </h3>

              <p className="mt-2 text-gray-600">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}