"use client";

import { AboutStoryModel } from "@/core/entities/about/about_story_model";
import Image from "next/image";
import { useState } from "react";

export default function StoryImageSection({
  data,
}: {
  data?: AboutStoryModel;
}) {
  const [isError, setIsError] = useState(false);

  const getInitials = (title: string) => {
    return (
      title
        ?.split(" ")
        .map((n) => n[0])
        .slice(0, 2)
        .join("")
        .toUpperCase() || "M"
    );
  };

  const hasImage = data?.image && !isError;

  return (
    <>
      {hasImage ? (
        <Image
          src={data.image ?? ""}
          alt={"Hero Image"}
          fill
          priority
          onError={() => setIsError(true)}
          className="object-cover opacity-80 mix-blend-luminosity contrast-125 grayscale transition-opacity duration-700"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center bg-linear-to-br from-[#0451bf]/30 to-[#0451bf]/10 p-8 text-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-white/10 text-4xl font-bold text-white/40 shadow-inner">
            {getInitials("Unknown Image")}
          </div>
          <h4 className="text-xl font-semibold text-white/30">
            {"Unknown Image"}
          </h4>
          <div className="mt-2 h-1 w-12 rounded-full bg-[#7efc62]/30" />
        </div>
      )}
    </>
  );
}
