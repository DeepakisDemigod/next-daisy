"use client";

import { useState } from "react";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null); // Removed TypeScript type

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      question: "What is Material Tailwind?",
      answer:
        "Material Tailwind is a framework that enhances Tailwind CSS with additional styles and components.",
    },
    {
      question: "How to use Material Tailwind?",
      answer:
        "You can use Material Tailwind by importing its components into your Tailwind CSS project.",
    },
    {
      question: "What can I do with Material Tailwind?",
      answer:
        "Material Tailwind allows you to quickly build modern, responsive websites with a focus on design.",
    },
  ];

  return (
    <div className="mx-2  md:flex lg:flex xl:flex">
      <div>
        <p className="text-blue-600 text-md  m-4">FAQ</p>
        <h2 className="text-3xl font-bold  m-4">Frequently Asked Questions</h2>
      </div>
      <div className="max-w-2xl mx-auto p-4">
        {items.map((item, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center py-4 "
            >
              <span
                className={`text-md font-bold ${
                  openIndex === index ? "text-blue-500 font-semibold" : ""
                }`}
              >
                {item.question}
              </span>
              <span
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                {openIndex === index ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="#3B82F6"
                    className="w-5 h-5"
                  >
                    <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                  </svg>
                )}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                openIndex === index ? "max-h-40" : "max-h-0"
              }`}
            >
              <div className="py-2 ">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
