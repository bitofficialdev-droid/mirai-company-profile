"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export type CSButtonVariant = "solid" | "outline" | "text" | "ghost";

export type CSButtonColor = "primary" | "secondary" | "white";

export type CSButtonSize = "wide" | "normal" | "small" | "full" | "icon";

export interface CSButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: CSButtonVariant;
  color?: CSButtonColor;
  size?: CSButtonSize;
  isLoading?: boolean;
  href?: string;
  target?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const CSButton = React.forwardRef<HTMLButtonElement, CSButtonProps>(
  (
    {
      className,
      variant = "solid",
      color = "primary",
      size = "normal",
      isLoading = false,
      href,
      leftIcon,
      rightIcon,
      children,
      disabled,
      target,
      ...props
    },
    ref,
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

    const variants = {
      solid: {
        primary:
          "bg-[#0451bf] text-white hover:bg-[#043c8b] border-2 border-transparent shadow-lg shadow-[#0451bf]/20",
        secondary:
          "bg-[#7efc62] text-white hover:bg-[#43f91a] border-2 border-transparent shadow-lg shadow-[#7efc62]/20",
        white: "bg-white text-[##0451bf] hover:bg-[#f3f1f1]",
      },
      outline: {
        primary:
          "bg-transparent text-[#0451bf] border-2 border-[#0451bf] hover:bg-[#0451bf] hover:text-white",
        secondary:
          "bg-transparent text-[#7efc62] border-2 border-[#7efc62] hover:bg-[#7efc62] hover:text-white",
        white:
          "bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#0451bf]",
      },
      text: {
        primary:
          "bg-transparent text-[#0451bf] hover:text-[#043c8b] shadow-none",
        secondary:
          "bg-transparent text-[#7efc62] hover:text-[#43f91a] shadow-none",
        white: "text-white hover:text-[#f3f1f1] shadow-none",
      },
      ghost: {
        primary:
          "bg-transparent text-[#0451bf] hover:bg-[#0451bf]/10 border-transparent",
        secondary:
          "bg-transparent text-[#7efc62] hover:bg-[#7efc62]/10 border-transparent",
        white: "text-white hover:bg-white/10",
      },
    };

    const sizes = {
      wide:
        variant === "text" ? "p-0" : "h-[54px] px-5 min-w-[180px] text-[20px]",
      normal: variant === "text" ? "p-0" : "h-[50px] px-5 text-[18px]",
      small: variant === "text" ? "p-0" : "h-[46px] px-5 text-[18px]",
      full: variant === "text" ? "p-0 w-full" : "h-[50px] w-full text-[18px]",
      icon: "h-[50px] w-[50px] p-0 flex items-center justify-center",
    };

    const buttonClasses = cn(
      baseStyles,
      variants[variant][color] || variants.solid.primary,
      sizes[size],
      className,
    );

    const renderContent = () => (
      <>
        {isLoading && (
          <svg
            className="mr-2 h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
      </>
    );

    if (href && !disabled) {
      return (
        <Link href={href} className={buttonClasses} target={target}>
          {renderContent()}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={buttonClasses}
        disabled={disabled || isLoading}
        {...props}
      >
        {renderContent()}
      </button>
    );
  },
);

CSButton.displayName = "CSButton";
