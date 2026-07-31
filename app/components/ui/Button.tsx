import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const classes =
    variant === "primary"
      ? "bg-[#1F3A6E] text-white hover:bg-[#162B52]"
      : "border border-[#1F3A6E] text-[#1F3A6E] hover:bg-[#EAF2FF]";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-semibold transition-all duration-300 hover:-translate-y-1 ${classes}`}
    >
      {children}
    </Link>
  );
}