"use client";

import React, { useState } from "react";

const faqData = [
  {
    question: "Why health checkups are important",
    answer:
      "Health checkups help in early detection of diseases and improve overall wellness.",
  },
  {
    question: "Employee health benefits",
    answer:
      "Regular employee health checkups increase productivity and reduce health risks.",
  },
  {
    question: "Basic tests included in full body checkup",
    answer:
      "It includes blood sugar, cholesterol, liver, kidney function and other essential tests.",
  },
  {
    question: "Camp health checkup explanation",
    answer:
      "Health camps provide preventive screening and awareness for communities.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f7f6f5] py-20">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            FAQ Highlights
          </h2>
        </div>

        {/* Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1576765607924-3f7b8410a787"
            className="rounded-2xl shadow-lg"
            alt="faq"
          />

          {/* RIGHT FAQ */}
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between px-6 py-5 text-left"
                >
                  <span className="font-medium">{item.question}</span>
                  <span>{openIndex === index ? "−" : "+"}</span>
                </button>

                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-40 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;