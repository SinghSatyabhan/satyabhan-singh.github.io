"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Timeline", href: "#timeline" },
  { name: "Research", href: "#research" },
  { name: "Projects", href: "#projects" },
  { name: "Publications", href: "#publications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <Link
          href="#home"
          className="text-2xl font-bold text-[#1F3A6E]"
        >
          Satyabhan Singh
        </Link>

        <nav className="hidden lg:flex gap-8">

          {navItems.map((item) => (

            <a
              key={item.name}
              href={item.href}
              className="font-medium text-slate-700 transition hover:text-[#1F3A6E]"
            >
              {item.name}
            </a>

          ))}

        </nav>

      </div>
    </header>
  );
}