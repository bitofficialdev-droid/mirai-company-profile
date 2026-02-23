"use client";

import { useState } from "react";
import { HomeFeatureModel } from "@/core/entities/home/home_feature_model";

export default function FeatureSection({
  feature,
}: {
  feature?: HomeFeatureModel;
}) {
  const [activeTab, setActiveTab] = useState<"Web" | "Mobile">("Web");

  return (
    <section id="features" className="bg-[#f8fafc] py-24">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#0451bf] md:text-5xl">
            {feature?.title ?? "Fitur Unggulan Kami"}
          </h2>
        </div>

        <div className="mx-auto flex w-fit items-center justify-center rounded-full border border-gray-100 bg-white p-2 shadow-sm">
          <button
            onClick={() => setActiveTab("Web")}
            className={`relative rounded-full px-10 py-3 text-lg font-semibold transition-all duration-300 ease-in-out ${
              activeTab === "Web"
                ? "bg-[#0451bf] text-white shadow-md"
                : "text-gray-500 hover:text-[#0451bf]"
            }`}
          >
            Web
          </button>
          <button
            onClick={() => setActiveTab("Mobile")}
            className={`relative rounded-full px-10 py-3 text-lg font-semibold transition-all duration-300 ease-in-out ${
              activeTab === "Mobile"
                ? "bg-[#0451bf] text-white shadow-md"
                : "text-gray-500 hover:text-[#0451bf]"
            }`}
          >
            Mobile
          </button>
        </div>

        <div className="relative mt-16 min-h-100">
          <div
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              activeTab === "Web"
                ? "z-10 translate-y-0 opacity-100"
                : "pointer-events-none z-0 translate-y-8 opacity-0"
            }`}
          >
            <></>
          </div>

          <div
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              activeTab === "Mobile"
                ? "z-10 translate-y-0 opacity-100"
                : "pointer-events-none z-0 translate-y-8 opacity-0"
            }`}
          >
            <></>
          </div>
        </div>
      </div>
    </section>
  );
}
