"use client";

import { useState } from "react";
import Image from "next/image";
import { HomeFeatureModel } from "@/core/entities/home/home_feature_model";

export default function FeatureSection({
  feature,
}: {
  feature?: HomeFeatureModel;
}) {
  const [activeTab, setActiveTab] = useState<"Web" | "Mobile">("Web");
  const [activeWebIndex, setActiveWebIndex] = useState(0);
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);

  const getTrackTransform = (activeIndex: number, itemWidthPercent: number) => {
    return `translateX(calc(50% - (${activeIndex} * ${itemWidthPercent}%) - (${itemWidthPercent}% / 2)))`;
  };

  return (
    <section id="features" className="overflow-hidden bg-[#f8fafc] py-24">
      <div className="container mx-auto">
        <div className="mb-12 px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#0451bf] md:text-5xl">
            {feature?.title ?? "Fitur Unggulan Kami"}
          </h2>
        </div>

        <div className="relative z-20 mx-auto mb-16 flex w-fit items-center justify-center rounded-full border border-gray-100 bg-white p-2 shadow-sm">
          {["Web", "Mobile"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as "Web" | "Mobile")}
              className={`relative cursor-pointer rounded-full px-10 py-3 text-lg font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? "bg-[#0451bf] text-white shadow-md"
                  : "text-gray-500 hover:text-[#0451bf]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="relative min-h-125 w-full">
          <div
            className={`transition-all duration-300 ${activeTab === "Web" ? "translate-y-0 opacity-100" : "pointer-events-none absolute inset-0 translate-y-10 opacity-0"}`}
          >
            <div className="mb-8 px-6 text-center">
              <p className="mx-auto max-w-2xl text-gray-500">
                {feature?.dekstop?.[activeWebIndex]?.label ?? "-"}
              </p>
            </div>
            <div className="relative w-full overflow-visible">
              <div
                className="flex transition-transform duration-500 ease-out will-change-transform"
                style={{ transform: getTrackTransform(activeWebIndex, 50) }}
              >
                {feature?.dekstop?.map((item, index) => (
                  <div
                    key={item.id}
                    onClick={() => setActiveWebIndex(index)}
                    className={`relative shrink-0 px-4 transition-all duration-500 ease-out ${index === activeWebIndex ? "z-10 scale-110" : "scale-100 opacity-50 blur-[1px]"}`}
                    style={{ width: "50%" }}
                  >
                    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-white shadow-2xl">
                      <div
                        className={`absolute inset-0 z-10 rounded-2xl border-4 transition-colors duration-500 ${index === activeWebIndex ? "border-[#0451bf]" : "border-transparent"}`}
                      />
                      <Image
                        src={item.image ?? "-"}
                        alt={item.label ?? "-"}
                        fill
                        className="object-cover"
                        sizes="50vw"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 flex justify-center gap-2">
              {feature?.dekstop?.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveWebIndex(i)}
                  className={`h-3 rounded-full transition-all duration-300 ${i === activeWebIndex ? "w-10 bg-[#0451bf]" : "w-3 bg-gray-300"}`}
                />
              ))}
            </div>
          </div>

          <div
            className={`transition-all duration-300 ${activeTab === "Mobile" ? "translate-y-0 opacity-100" : "pointer-events-none absolute inset-0 translate-y-10 opacity-0"}`}
          >
            <div className="mb-8 px-6 text-center">
              <p className="mx-auto max-w-2xl text-gray-500">
                {feature?.mobile?.[activeMobileIndex]?.label ?? "-"}
              </p>
            </div>
            <div className="relative w-full overflow-visible">
              <div
                className="flex transition-transform duration-500 ease-out will-change-transform"
                style={{ transform: getTrackTransform(activeMobileIndex, 20) }}
              >
                {feature?.mobile?.map((item, index) => (
                  <div
                    key={item.id}
                    onClick={() => setActiveMobileIndex(index)}
                    className={`relative shrink-0 px-2 transition-all duration-500 ease-out ${index === activeMobileIndex ? "z-10 scale-110" : "scale-100 opacity-50 blur-[1px]"}`}
                    style={{ width: "20%" }}
                  >
                    <div className="relative aspect-9/18 w-full overflow-hidden rounded-4xl bg-white shadow-2xl">
                      <div
                        className={`absolute inset-0 z-10 rounded-4xl border-[3px] transition-colors duration-500 ${index === activeMobileIndex ? "border-[#0451bf]" : "border-transparent"}`}
                      />
                      <Image
                        src={item.image ?? "-"}
                        alt={item.label ?? "-"}
                        fill
                        className="object-cover"
                        sizes="20vw"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 flex justify-center gap-2">
              {feature?.mobile?.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveMobileIndex(i)}
                  className={`h-3 rounded-full transition-all duration-300 ${i === activeMobileIndex ? "w-10 bg-[#0451bf]" : "w-3 bg-gray-300"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
