"use client";

import Link from "next/link";
import Image from "next/image";
import { CSButton } from "../shared/cs_button";
import { FEATURE_MENUS } from "@/core/repositories/feature";
import { PRICE_MENUS } from "@/core/repositories/price";

export default function CWNavbar() {
  const navMenus = [
    // { name: "Biaya", href: "#pricing" },
    { name: "Pelatihan", href: "/training" },
    { name: "Tentang Kami", href: "https://miraisoftnet.com/" },
  ];

  return (
    <nav className="fixed top-0 z-30 w-full bg-[#0451bf] text-white shadow-2xl shadow-[#0451bf]/50">
      <div className="container mx-auto px-6 py-6 lg:px-28">
        <div className="flex items-center justify-start gap-10">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center transition-transform active:scale-95"
          >
            <div className="relative h-12.75 w-16">
              <Image
                src="/icon-white-no-bg.png"
                alt="Mirai Softnet Technology Logo"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                className="object-contain object-left"
              />
            </div>

            <div className="text-2xl font-medium">hrms</div>
          </Link>

          <div className="flex-1" />

          <div className="hidden items-center gap-10 lg:flex">
            <Link
              href="/"
              className="text-sm font-medium transition-all hover:text-[#7efc62] hover:underline hover:underline-offset-8"
            >
              Home
            </Link>

            <div className="group relative">
              <button className="flex items-center gap-1 text-sm font-medium transition-all hover:text-[#7efc62] hover:underline hover:underline-offset-8">
                Solusi Fitur
                <svg
                  className="mb-0.5 h-4 w-4 transition-transform duration-300 group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div className="invisible absolute top-full left-1/2 z-50 mt-6 w-125 -translate-x-1/2 opacity-0 transition-all duration-300 ease-out group-hover:visible group-hover:opacity-100">
                <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-t border-l border-gray-100 bg-white"></div>

                <div className="relative overflow-hidden rounded-xl bg-white p-6 text-[#0451bf] shadow-xl ring-1 ring-black/5">
                  <div className="grid grid-cols-2 gap-8">
                    {FEATURE_MENUS.map((group) => (
                      <div
                        key={group.group}
                        className="flex flex-col space-y-3"
                      >
                        <div className="border-b border-gray-100 pb-2">
                          <h3 className="text-xs font-bold tracking-wider text-[#0451bf] uppercase">
                            {group.group}
                          </h3>
                        </div>

                        <div className="flex flex-col gap-1">
                          {group.features.map((feature) => (
                            <Link
                              key={feature.slug}
                              href={`/feature/${feature.slug}`}
                              className="group/item flex items-center gap-2 rounded-md px-2 py-1.5 transition-colors hover:bg-blue-50"
                            >
                              <div className="h-1.5 w-1.5 rounded-full bg-gray-300 transition-colors group-hover/item:bg-[#7efc62]"></div>
                              <span className="text-sm font-medium text-gray-600 group-hover/item:text-[#0451bf]">
                                {feature.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative">
              <button className="flex items-center gap-1 text-sm font-medium transition-all hover:text-[#7efc62] hover:underline hover:underline-offset-8">
                Biaya
                <svg
                  className="mb-0.5 h-4 w-4 transition-transform duration-300 group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div className="invisible absolute top-full left-1/2 z-50 mt-6 w-64 -translate-x-1/2 opacity-0 transition-all duration-300 ease-out group-hover:visible group-hover:opacity-100">
                <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-t border-l border-gray-100 bg-white"></div>

                <div className="relative overflow-hidden rounded-xl bg-white p-5 text-[#0451bf] shadow-xl ring-1 ring-black/5">
                  <div className="flex flex-col space-y-3">
                    <div className="flex flex-col gap-1">
                      {PRICE_MENUS.map((menu) => (
                        <Link
                          key={menu.slug}
                          href={`/pricing/${menu.slug}`}
                          className="group/item flex items-center gap-2 rounded-md px-2 py-2 transition-colors hover:bg-blue-50"
                        >
                          {/* Dot Indikator Hijau khas Mirai */}
                          <div className="h-1.5 w-1.5 rounded-full bg-gray-300 transition-colors group-hover/item:bg-[#7efc62]"></div>

                          <span className="text-sm font-medium text-gray-600 group-hover/item:text-[#0451bf]">
                            {menu.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {navMenus.map((menu) => (
              <Link
                key={menu.name}
                href={menu.href}
                className="text-sm font-medium transition-all hover:text-[#7efc62] hover:underline hover:underline-offset-8"
              >
                {menu.name}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-14 lg:flex">
            <CSButton
              href="https://wa.me/6285218026895"
              target="_blank"
              rel="noopener noreferrer"
              variant="solid"
              color="secondary"
              className="shrink-0 text-[18px] font-medium text-[#0451bf] shadow-lg shadow-[#7efc62]/20 hover:bg-[#7efc62] hover:text-[#0451bf]"
            >
              Contact Us
            </CSButton>
          </div>
        </div>
      </div>
    </nav>
  );
}
