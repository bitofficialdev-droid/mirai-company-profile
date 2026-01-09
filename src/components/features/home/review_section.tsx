"use client";

import { HomeReviewsModel } from "@/core/entities/home/home_reviews_model";

interface ReviewSectionProps {
  reviewData?: HomeReviewsModel;
}

export default function ReviewSection({ reviewData }: ReviewSectionProps) {
  const displayComments = [
    ...(reviewData?.comments ?? []),
    ...(reviewData?.comments ?? []),
  ];

  return (
    <section className="overflow-hidden bg-[#f8fafc] py-24">
      <div className="container mx-auto px-6 text-center lg:px-28">
        <h2 className="mb-16 text-3xl font-bold text-[#0451bf] md:text-5xl">
          {reviewData?.title ?? "What Our Clients Say"}
        </h2>

        <div className="relative flex w-full overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-linear-to-r from-[#f8fafc] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-linear-to-l from-[#f8fafc] to-transparent" />

          <div className="animate-marquee flex gap-8 py-4 whitespace-nowrap hover:[animation-play-state:paused]">
            {displayComments.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="relative w-87.5 shrink-0 rounded-3xl border border-gray-100 bg-white p-10 text-left whitespace-normal shadow-sm transition-all duration-300 hover:shadow-xl"
              >
                <div className="absolute top-6 right-8 font-serif text-5xl text-[#7efc62] opacity-20">
                  &quot;
                </div>

                <p className="relative z-10 mb-8 leading-relaxed text-gray-600 italic">
                  &quot;{item.comment ?? "-"}&quot;
                </p>

                <div className="mt-auto">
                  <div className="font-bold text-[#0451bf]">{item.name}</div>
                  <div className="text-sm text-gray-400">
                    {item.job}, {item.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
