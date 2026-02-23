"use client";

import Link from "next/link";
import Image from "next/image";
import { CSButton } from "../shared/cs_button";

export default function CWNavbar() {
  const navMenus = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Feature", href: "#features" },
    { name: "Our Client", href: "#trusted-by" },
    { name: "Reviews", href: "#testimony" },
    { name: "FAQ", href: "#faq" },
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

          {/* Navigation Menu */}
          <div className="hidden items-end gap-10 lg:flex">
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

          {/* Dekstop Menu */}
          <div className="hidden items-center gap-14 lg:flex">
            <CSButton
              href="#contact"
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
