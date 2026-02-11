"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { CSButton } from "../shared/cs_button";

export default function CWNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-[#0451bf] text-white shadow-2xl shadow-[#0451bf]/50">
      <div className="container mx-auto px-6 py-6 lg:px-28">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 transition-transform active:scale-95"
          >
            <div className="relative h-12.75 w-44 lg:w-48">
              <Image
                src="/icon-white.png"
                alt="Mirai Softnet Technology Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>
          {/* Dekstop Menu */}
          <div className="hidden items-center gap-14 lg:flex">
            <CSButton
              href="#"
              variant="solid"
              color="secondary"
              className="shrink-0 text-[18px] font-medium text-[#0451bf] shadow-lg shadow-[#7efc62]/20 hover:bg-[#7efc62] hover:text-[#0451bf]"
            >
              Contact Us
            </CSButton>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full border-t border-white/10 bg-[#0451bf] shadow-xl transition-all duration-300 ease-in-out lg:hidden ${
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0"
        }`}
      >
        <div className="flex flex-col space-y-6 p-6">
          <CSButton
            href="#"
            variant="solid"
            color="secondary"
            size="full"
            onClick={() => setIsOpen(false)}
            className="mt-4 text-[18px] font-medium text-[#0451bf] shadow-lg shadow-black/10 active:bg-[#99fc83]"
          >
            Contact Us
          </CSButton>
        </div>
      </div>
    </nav>
  );
}
