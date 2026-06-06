"use client";

import React, { useState } from "react";

const testimonials = [
  {
    name: "Adarsh H",
    role: "Patient",
    image: "https://i.pravatar.cc/100?img=1",
    rating: 5,
    text: "The services from Healthyy SoulLife are excellent. Highly recommended for health checkups.",
  },
  {
    name: "Abhinav S",
    role: "Patient",
    image: "https://i.pravatar.cc/100?img=2",
    rating: 4,
    text: "Very friendly staff and smooth experience. Good diagnostic support.",
  },
  {
    name: "Allwyn S",
    role: "Patient",
    image: "https://i.pravatar.cc/100?img=3",
    rating: 5,
    text: "Great health checkup experience. Team was very supportive.",
  },
];

const FeedbackSection = () => {
  const [active, setActive] = useState(0);

  const next = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span
        key={i}
        className={`text-lg ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-24">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-green-600 font-semibold tracking-wide">
            Feedback
          </span>
          <h2 className="text-4xl font-bold mt-2 text-gray-900">
            Our Happy Clients Say About Us
          </h2>
          <p className="text-gray-500 mt-3">
            Real feedback from our valued patients
          </p>
        </div>

        {/* CARD */}
        <div className="relative bg-white/70 backdrop-blur-lg border border-gray-200 shadow-xl rounded-3xl p-12 text-center overflow-hidden">

          {/* Decorative circles */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-100 rounded-full blur-2xl opacity-40"></div>
          <div className="absolute -bottom-10 -right-10 w-52 h-52 bg-green-100 rounded-full blur-2xl opacity-40"></div>

          {/* LEFT BUTTON */}
          <button
            onClick={prev}
            className="absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border bg-white shadow-md flex items-center justify-center hover:bg-green-600 hover:text-white transition"
          >
            ←
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={next}
            className="absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border bg-white shadow-md flex items-center justify-center hover:bg-green-600 hover:text-white transition"
          >
            →
          </button>

          {/* AVATAR */}
          <div className="flex justify-center mb-4">
            <div className="p-1 rounded-full ring-4 ring-green-300 shadow-md">
              <img
                src={testimonials[active].image}
                alt="client"
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
          </div>

          {/* NAME + ROLE */}
          <h3 className="text-xl font-semibold text-gray-900">
            {testimonials[active].name}
          </h3>

          <p className="text-gray-500 text-sm">
            {testimonials[active].role}
          </p>

          {/* ⭐ STARS */}
          <div className="flex justify-center mt-2">
            {renderStars(testimonials[active].rating)}
          </div>

          {/* TEXT BOX */}
          <div className="mt-6 bg-white shadow-sm border border-gray-100 rounded-2xl p-6 max-w-xl mx-auto">
            <p className="text-gray-700 leading-relaxed">
              {testimonials[active].text}
            </p>
          </div>

          {/* DOT INDICATOR */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <div
                key={i}
                className={`transition-all duration-300 ${
                  i === active
                    ? "w-6 h-2 bg-green-600 rounded-full"
                    : "w-2 h-2 bg-gray-300 rounded-full"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;