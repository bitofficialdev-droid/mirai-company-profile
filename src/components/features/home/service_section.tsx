"use client";

import { useRef } from "react";
import Link from "next/link";
import { CSButton } from "@/components/shared/cs_button";
import { HomeServicesModel } from "@/core/entities/home/home_services_model";

interface ServicesSectionProps {
  serviceData?: HomeServicesModel;
}

export default function ServicesSection({ serviceData }: ServicesSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = current.clientWidth * 0.8;
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative bg-[#f8faff] py-24 text-[#0451bf]">
      <div className="container mx-auto px-6 lg:px-28">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="max-w-2xl text-3xl leading-tight font-bold md:text-5xl">
            {serviceData?.title ?? "-"}
          </h2>
          <p className="max-w-xl whitespace-pre-line text-gray-500">
            {serviceData?.description ?? "-"}
          </p>

          <div
            ref={scrollRef}
            className="no-scrollbar mt-12 flex w-full snap-x snap-mandatory gap-6 overflow-x-auto pb-8 md:mt-16 md:grid md:grid-cols-3 md:overflow-visible md:pb-0"
          >
            {(serviceData?.services ?? []).map((s, i) => (
              <div
                key={i}
                className="group relative flex w-[85%] shrink-0 snap-center flex-col justify-between rounded-3xl border border-gray-100 bg-white p-8 text-left shadow-sm transition-all duration-300 hover:shadow-2xl hover:shadow-[#0451bf]/10 md:w-full md:hover:-translate-y-2"
              >
                <Link
                  href={s.url ?? ""}
                  className="absolute inset-0 z-10"
                  aria-label={`Learn more about ${s.title}`}
                />

                <div>
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0451bf]/5 text-[#0451bf] transition-colors duration-300 group-hover:bg-[#0451bf] group-hover:text-white">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                    </svg>
                  </div>

                  <h3 className="mb-4 text-2xl font-bold transition-colors group-hover:text-[#0451bf]">
                    {s.title ?? ""}
                  </h3>

                  <p className="line-clamp-3 leading-relaxed text-gray-500">
                    {s.description ?? ""}
                  </p>
                </div>

                <div className="pointer-events-none relative z-0 mt-8">
                  <CSButton
                    variant="text"
                    color="primary"
                    size="small"
                    rightIcon={
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-all duration-300 group-hover:translate-x-1"
                      >
                        <path d="M5 12h14m-7-7 7 7-7 7" />
                      </svg>
                    }
                    className="p-0 font-medium tracking-wider text-[#0451bf] uppercase"
                  >
                    Learn More
                  </CSButton>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex gap-3 md:hidden">
            <CSButton
              variant="outline"
              size="icon"
              className="h-10 w-10"
              onClick={() => scroll("left")}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </CSButton>
            <CSButton
              variant="outline"
              size="icon"
              className="h-10 w-10"
              onClick={() => scroll("right")}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </CSButton>
          </div>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
