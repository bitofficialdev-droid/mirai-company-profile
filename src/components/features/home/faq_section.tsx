"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { HomeFaqModel } from "@/core/entities/home/home_faq_model";

export default function FAQSection({ item }: { item?: HomeFaqModel }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-24">
      <div className="container mx-auto px-6 lg:px-28">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#0451bf] md:text-5xl">
            {item?.title ?? "-"}
          </h2>
          <p className="mx-auto max-w-2xl text-gray-500">
            {item?.description ?? "-"}
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-4">
          {item?.faqs?.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-[#0451bf]/30 bg-[#0451bf]/5 shadow-lg"
                    : "border-[#0451bf]/10 bg-[#0451bf]/2 hover:bg-[#0451bf]/5"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between p-5 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <Icon
                      icon="ph:question-bold"
                      className={`h-6 w-6 transition-colors ${
                        isOpen ? "text-[#0451bf]" : "text-[#0451bf]/60"
                      }`}
                    />
                    <span
                      className={`text-lg font-semibold transition-colors ${
                        isOpen ? "text-[#0451bf]" : "text-gray-700"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>

                  <Icon
                    icon="ph:caret-down-bold"
                    className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#0451bf]" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-[#0451bf]/10 p-5 pt-0 leading-relaxed text-gray-600">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
