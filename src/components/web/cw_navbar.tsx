"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { CSButton } from "../shared/cs_button";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "News", href: "/news" },
  { label: "Career", href: "/career" },
];

export default function CWNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

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
                src="https://miraisoftnet.com/wp-content/uploads/2025/11/no-color@5x-8.png"
                alt="Mirai Softnet Technology Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Dekstop Menu */}
          <div className="hidden items-center gap-14 lg:flex">
            <div className="flex items-center gap-12">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <CSButton
                    key={link.label}
                    href={link.href}
                    variant="text"
                    size="small"
                    className={`group relative text-[18px] font-normal no-underline! transition-colors hover:text-[#99fc83] ${
                      isActive ? "text-[#7efc62]" : "text-white"
                    }`}
                  >
                    {link.label}

                    <span
                      className={`absolute -bottom-3 left-1/2 h-0.5 -translate-x-1/2 transition-all duration-300 ${
                        isActive
                          ? "w-full bg-[#7efc62] opacity-100"
                          : "w-0 bg-[#99fc83] opacity-0 group-hover:w-[120%] group-hover:opacity-100"
                      }`}
                    />
                  </CSButton>
                );
              })}
            </div>

            <CSButton
              href="#"
              variant="solid"
              color="secondary"
              className="shrink-0 text-[18px] font-medium text-[#0451bf] shadow-lg shadow-[#7efc62]/20 hover:bg-[#7efc62] hover:text-[#0451bf]"
            >
              Contact Us
            </CSButton>
          </div>

          {/* Hamburger Icon Mobile */}
          <button
            className="relative flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-white/10 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative h-8 w-8 overflow-hidden">
              <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                  isOpen
                    ? "scale-50 rotate-90 opacity-0"
                    : "scale-100 rotate-0 opacity-100"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4.5 6.5h15M4.5 12h15m-15 5.5h15"
                  />
                </svg>
              </div>

              <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                  isOpen
                    ? "scale-100 rotate-0 opacity-100"
                    : "scale-50 -rotate-90 opacity-0"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
          </button>
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
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;

            return (
              <CSButton
                key={link.label}
                href={link.href}
                variant="text"
                onClick={() => setIsOpen(false)}
                className={`relative self-start text-[20px] font-normal no-underline! transition-colors active:text-[#99fc83] ${
                  isActive ? "text-[#7efc62]" : "text-white"
                }`}
              >
                {link.label}

                <span
                  className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                    isActive
                      ? "w-[120%] bg-[#7efc62] opacity-100"
                      : "w-0 bg-[#99fc83] opacity-0"
                  }`}
                />
              </CSButton>
            );
          })}

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
