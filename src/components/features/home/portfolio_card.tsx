"use client";

import { HomePortfolioModel } from "@/core/entities/home/home_portfolio_model";
import Image from "next/image";
import { useState } from "react";

export default function PortfolioCard({ item }: { item: HomePortfolioModel }) {
  const [isError, setIsError] = useState(false);
  const hasImage = item.image && !isError;

  return (
    <div className="group relative h-87.5 overflow-hidden rounded-3xl border border-gray-100 bg-gray-100 shadow-sm">
      {hasImage ? (
        <Image
          src={item.image?.[0] ?? ""}
          alt={item.title ?? "Project Thumbnail"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          onError={() => setIsError(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-[#0451bf]/10 to-gray-200">
          <span className="text-4xl font-bold tracking-tighter text-[#0451bf]/10 uppercase">
            {item.title?.substring(0, 2) || "PR"}
          </span>
        </div>
      )}

      <div className="absolute inset-0 flex translate-y-4 flex-col justify-end bg-linear-to-t from-[#0451bf] via-[#0451bf]/80 to-transparent p-10 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <h4 className="mb-2 text-2xl font-bold">
          {item.title ?? "Untitled Project"}
        </h4>
        <p className="mb-6 line-clamp-2 text-sm text-blue-100">
          {item.description ?? "No description available for this project."}
        </p>
      </div>
    </div>
  );
}
