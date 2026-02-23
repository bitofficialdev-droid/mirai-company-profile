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

  const webData = [
    {
      id: 1,
      title: "Lorem Ipsum Web 1",
      desc: "Dolor sit amet, consectetur adipiscing elit.",
      img: "https://picsum.photos/seed/web1/800/450",
    },
    {
      id: 2,
      title: "Consectetur Web 2",
      desc: "Quis nostrud exercitation ullamco.",
      img: "https://picsum.photos/seed/web2/800/450",
    },
    {
      id: 3,
      title: "Sed Do Eiusmod 3",
      desc: "Velit esse cillum dolore eu fugiat nulla.",
      img: "https://picsum.photos/seed/web3/800/450",
    },
    {
      id: 4,
      title: "Tempor Incididunt 4",
      desc: "Excepteur sint occaecat cupidatat non.",
      img: "https://picsum.photos/seed/web4/800/450",
    },
    {
      id: 5,
      title: "Magna Aliqua 5",
      desc: "Sunt in culpa qui officia deserunt mollit.",
      img: "https://picsum.photos/seed/web5/800/450",
    },
  ];

  const mobileData = [
    {
      id: 1,
      title: "Mobile UI 1",
      desc: "Nemo enim ipsam voluptatem quia voluptas.",
      img: "https://picsum.photos/seed/mob1/400/800",
    },
    {
      id: 2,
      title: "Mobile UI 2",
      desc: "Neque porro quisquam est, qui dolorem.",
      img: "https://picsum.photos/seed/mob2/400/800",
    },
    {
      id: 3,
      title: "Mobile UI 3",
      desc: "Itaque earum rerum hic tenetur a sapiente.",
      img: "https://picsum.photos/seed/mob3/400/800",
    },
    {
      id: 4,
      title: "Mobile UI 4",
      desc: "At vero eos et accusamus et iusto odio.",
      img: "https://picsum.photos/seed/mob4/400/800",
    },
    {
      id: 5,
      title: "Mobile UI 5",
      desc: "Ducimus qui blanditiis praesentium.",
      img: "https://picsum.photos/seed/mob5/400/800",
    },
  ];

  // Fungsi untuk menghitung pergeseran track agar item aktif selalu di tengah
  // 100 / jumlah_item_tampilan adalah basisnya
  const getTrackTransform = (activeIndex: number, itemWidthPercent: number) => {
    // Kita geser track berdasarkan index aktif dikali lebar item
    return `translateX(calc(50% - (${activeIndex} * ${itemWidthPercent}%) - (${itemWidthPercent}% / 2)))`;
  };

  return (
    <section id="features" className="overflow-hidden bg-[#f8fafc] py-24">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-12 px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#0451bf] md:text-5xl">
            {feature?.title ?? "Fitur Unggulan Kami"}
          </h2>
        </div>

        {/* Tab Switcher */}
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

        {/* Carousel Area */}
        <div className="relative min-h-125 w-full">
          {/* WEB SLIDER */}
          <div
            className={`transition-all duration-700 ${activeTab === "Web" ? "translate-y-0 opacity-100" : "pointer-events-none absolute inset-0 translate-y-10 opacity-0"}`}
          >
            <div className="mb-10 h-20 px-6 text-center">
              <h3 className="text-2xl font-bold text-gray-800">
                {webData[activeWebIndex].title}
              </h3>
              <p className="mx-auto max-w-2xl text-gray-500">
                {webData[activeWebIndex].desc}
              </p>
            </div>

            <div className="relative w-full overflow-visible">
              <div
                className="flex transition-transform duration-500 ease-out will-change-transform"
                style={{ transform: getTrackTransform(activeWebIndex, 60) }} // 60% adalah lebar card web
              >
                {webData.map((item, index) => (
                  <div
                    key={item.id}
                    onClick={() => setActiveWebIndex(index)}
                    className={`relative shrink-0 px-4 transition-all duration-500 ease-out ${index === activeWebIndex ? "z-10 scale-110" : "scale-100 opacity-50 blur-[1px]"}`}
                    style={{ width: "60%" }}
                  >
                    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-white shadow-2xl">
                      <div
                        className={`absolute inset-0 z-10 rounded-2xl border-4 transition-colors duration-500 ${index === activeWebIndex ? "border-[#0451bf]" : "border-transparent"}`}
                      />
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="60vw"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Web */}
            <div className="mt-16 flex justify-center gap-2">
              {webData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveWebIndex(i)}
                  className={`h-3 rounded-full transition-all duration-300 ${i === activeWebIndex ? "w-10 bg-[#0451bf]" : "w-3 bg-gray-300"}`}
                />
              ))}
            </div>
          </div>

          {/* MOBILE SLIDER */}
          <div
            className={`transition-all duration-700 ${activeTab === "Mobile" ? "translate-y-0 opacity-100" : "pointer-events-none absolute inset-0 translate-y-10 opacity-0"}`}
          >
            <div className="mb-10 h-20 px-6 text-center">
              <h3 className="text-2xl font-bold text-gray-800">
                {mobileData[activeMobileIndex].title}
              </h3>
              <p className="mx-auto max-w-2xl text-gray-500">
                {mobileData[activeMobileIndex].desc}
              </p>
            </div>

            <div className="relative w-full overflow-visible">
              <div
                className="flex transition-transform duration-500 ease-out will-change-transform"
                style={{ transform: getTrackTransform(activeMobileIndex, 40) }} // 40% lebar card mobile
              >
                {mobileData.map((item, index) => (
                  <div
                    key={item.id}
                    onClick={() => setActiveMobileIndex(index)}
                    className={`relative shrink-0 px-3 transition-all duration-500 ease-out ${index === activeMobileIndex ? "z-10 scale-110" : "scale-100 opacity-50 blur-[1px]"}`}
                    style={{ width: "40%" }}
                  >
                    <div className="relative aspect-9/18 w-full overflow-hidden rounded-[2.5rem] bg-white shadow-2xl">
                      <div
                        className={`absolute inset-0 z-10 rounded-[2.5rem] border-4 transition-colors duration-500 ${index === activeMobileIndex ? "border-[#0451bf]" : "border-transparent"}`}
                      />
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="40vw"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Mobile */}
            <div className="mt-20 flex justify-center gap-2">
              {mobileData.map((_, i) => (
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
