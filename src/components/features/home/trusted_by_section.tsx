"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import { CSButton } from "@/components/shared/cs_button";
import { HomeRepository } from "@/core/repositories/home.repo";
import Image from "next/image";
import { HomeTrustedModel } from "@/core/entities/home/home_trusted_model";

function TrustedLogo({ item }: { item: HomeTrustedModel }) {
  const [isError, setIsError] = useState(false);
  const hasImage = item.image && !isError;

  return (
    <div className="group relative flex h-20 w-48 shrink-0 items-center justify-center px-2">
      <div className="relative flex h-full w-full items-center justify-center transition-all duration-300">
        {hasImage ? (
          <Image
            src={item.image ?? ""}
            alt={item.label ?? "Partner Logo"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain opacity-100 grayscale transition-all"
            onError={() => setIsError(true)}
          />
        ) : (
          <span className="text-center text-sm font-bold tracking-widest text-white/30 uppercase transition-all">
            {item.label ?? "Partner"}
          </span>
        )}
      </div>
    </div>
  );
}

export default function TrustedBySection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const homeData = HomeRepository.getHome();
  const data = Array.isArray(homeData.trusted) ? homeData.trusted : [];
  const displayData = [...data, ...data, ...data];

  const scroll = useCallback((direction: "left" | "right") => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const firstItem = container.firstElementChild as HTMLElement;
      if (!firstItem) return;

      const gap = window.innerWidth >= 768 ? 32 : 16;
      const itemWidth = firstItem.offsetWidth + gap;

      container.scrollTo({
        left:
          direction === "right"
            ? container.scrollLeft + itemWidth
            : container.scrollLeft - itemWidth,
        behavior: "smooth",
      });
    }
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const firstItem = container.firstElementChild as HTMLElement;
      if (!firstItem) return;

      const gap = window.innerWidth >= 768 ? 32 : 16;
      const singleSetWidth = data.length * (firstItem.offsetWidth + gap);

      if (container.scrollLeft >= singleSetWidth * 2) {
        container.scrollLeft = container.scrollLeft - singleSetWidth;
      }
      if (container.scrollLeft <= 0) {
        container.scrollLeft = singleSetWidth;
      }
    };

    const initPos = () => {
      const firstItem = container.firstElementChild as HTMLElement;
      if (!firstItem) return;
      const gap = window.innerWidth >= 768 ? 32 : 16;
      container.scrollLeft = data.length * (firstItem.offsetWidth + gap);
    };

    initPos();
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [data.length]);

  useEffect(() => {
    const timer = setInterval(() => scroll("right"), 3000);
    return () => clearInterval(timer);
  }, [scroll]);

  return (
    <div className="relative mb-16 w-full py-6">
      <div className="container mx-auto px-6 lg:px-28">
        <div className="mb-8 flex items-center justify-between">
          <p className="text-sm font-medium tracking-[0.2em] text-[#8bb9f9] uppercase">
            Trusted by Industry Leaders
          </p>

          <div className="hidden gap-2 lg:flex">
            <CSButton
              variant="outline"
              color="white"
              className="h-10 w-10 border-white/20 p-0"
              onClick={() => scroll("left")}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </CSButton>
            <CSButton
              variant="outline"
              color="white"
              className="h-10 w-10 border-white/20 p-0"
              onClick={() => scroll("right")}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </CSButton>
          </div>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="no-scrollbar flex gap-4 overflow-x-auto pb-4 md:gap-8"
            style={{ scrollBehavior: "auto" }}
          >
            {displayData.map((item, index) => (
              <TrustedLogo key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
