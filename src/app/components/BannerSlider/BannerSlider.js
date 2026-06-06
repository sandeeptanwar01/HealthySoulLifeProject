"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
    title: "Welcome to HSL",
    desc: "Your Health Is Our Priority",
  },
  {
    image: "https://images.unsplash.com/photo-1580281657527-47f249e8f2d5",
    title: "Fitness Activities",
    desc: "We Help You Get Fit For Better Tomorrow",
  },
  {
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561",
    title: "Online Doctor Consultation",
    desc: "Connect Anytime, Anywhere",
  },
  {
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309",
    title: "Health Checkup",
    desc: "Complete Health Packages At Best Price",
  },
];

export default function BannerSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[600px] overflow-hidden">

      {/* Slide */}
      <div
        className="w-full h-full bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: `url(${slides[index].image})`,
        }}
      >
        {/* Overlay */}
        <div className="w-full h-full bg-black/60 flex items-center">

          <div className="container mx-auto px-4 text-white max-w-2xl">

            <span className="text-green-300 uppercase font-semibold">
              {slides[index].title}
            </span>

            <h1 className="text-4xl md:text-6xl font-bold mt-4">
              {slides[index].desc}
            </h1>

            <p className="mt-4 text-gray-200">
              We Provide You With Best Healthcare Services
            </p>

            <div className="mt-6">
              <Link
                href="/contact"
                className="bg-[#2EC5B5] px-6 py-3 rounded-md"
              >
                Book Appointment 🔔
              </Link>
            </div>

          </div>

        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>

    </div>
  );
}