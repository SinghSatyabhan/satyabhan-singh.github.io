"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

import Button from "./ui/Button";
import Container from "./ui/Container";
import { hero } from "../data/hero";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#F8FAFC] py-24 lg:py-32"
    >
      {/* Background Blur */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#EAF2FF] blur-3xl opacity-70" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-100 blur-3xl opacity-60" />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase tracking-[0.35em] text-sm font-semibold text-[#1F3A6E]">
              {hero.institute}
            </p>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-[#0F172A]">
              {hero.name}
            </h1>

            <h2 className="mt-4 text-2xl text-slate-600">
              {hero.designation}
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
              {hero.description}
            </p>

            {/* Research Tags */}
            <div className="mt-8 flex flex-wrap gap-3">
              {hero.tags.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-[#EAF2FF] px-4 py-2 text-sm font-medium text-[#1F3A6E]"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="#research">
                <>
                  Explore Research
                  <ArrowRight size={18} />
                </>
              </Button>

              <a
                href="/CV.pdf"
                className="inline-flex items-center gap-2 rounded-xl border border-[#1F3A6E] px-8 py-4 font-semibold text-[#1F3A6E] transition-all duration-300 hover:bg-[#EAF2FF]"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>

            {/* Stats */}
            <div className="mt-14 flex flex-wrap gap-10">
              {hero.stats.map((stat) => (
                <div key={stat.label}>
                  <h3 className="text-3xl font-bold text-[#1F3A6E]">
                    {stat.value}
                  </h3>

                  <p className="text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="flex justify-center"
          >
            <div className="rounded-[32px] border border-slate-200 bg-white p-4 shadow-2xl">
              <Image
                src="/images/profile.jpg"
                alt={hero.name}
                width={360}
                height={450}
                priority
                className="h-[450px] w-[360px] rounded-[24px] object-cover transition duration-500 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}