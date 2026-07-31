import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Satyabhan Singh | PhD Researcher | IIT Bombay",
  description:
    "Official academic website of Satyabhan Singh, PhD Researcher at IIT Bombay. Research in Computational Chemistry, Homogeneous Catalysis, Machine Learning, Bayesian Optimization, Density Functional Theory (DFT), and Nitrogen Reduction Reaction (N₂RR).",

  keywords: [
    "Satyabhan Singh",
    "IIT Bombay",
    "Computational Chemistry",
    "Density Functional Theory",
    "DFT",
    "Machine Learning",
    "Bayesian Optimization",
    "Nitrogen Reduction Reaction",
    "Homogeneous Catalysis",
    "Ammonia Synthesis",
  ],

  authors: [
    {
      name: "Satyabhan Singh",
    },
  ],

  creator: "Satyabhan Singh",

  applicationName: "Satyabhan Singh Academic Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-[#F8FAFC] text-[#0F172A] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}