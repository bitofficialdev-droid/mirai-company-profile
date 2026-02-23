"use client";

import { useState } from "react";
import Image from "next/image";

interface PartnerImageProps {
  image?: string;
  title?: string;
}

export default function PartnerImageSection({
  image,
  title,
}: PartnerImageProps) {
  const [isError, setIsError] = useState(false);

  const getInitials = (text: string) => {
    return (
      text
        ?.split(" ")
        .map((n) => n[0])
        .slice(0, 2)
        .join("")
        .toUpperCase() || "P"
    );
  };

  const hasImage = image && !isError;

  return (
    <>
      {hasImage ? (
        <Image
          src={image ?? ""}
          alt={title ?? "Partner Image"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover opacity-90 transition-all duration-700 group-hover:scale-105"
          onError={() => setIsError(true)}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center bg-linear-to-br from-[#0451bf]/30 to-[#0451bf]/10 p-8 text-center">
          <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-3xl font-bold text-white/50 backdrop-blur-md">
            {getInitials(title ?? "Partner")}
          </div>
          <p className="text-lg font-medium text-white/40">
            {title ?? "Our Partner"}
          </p>
          <div className="mt-4 h-1 w-10 rounded-full bg-[#7efc62]/40" />
        </div>
      )}
    </>
  );
}
