import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Engineer | Transformers & LLMs Enthusiast",
  description: "Portfolio of a Full Stack AI Engineer specialized in LLMs, Transformers, and GenAI Optimization. Mechanical Undergrad building the next generation of AI apps.",
  keywords: ["LLMs", "Transformers", "Full Stack", "AI Optimization", "GenAI", "Portfolio", "Machine Learning"],
};

import MathBackground from '@/components/MathBackground';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MathBackground />
        {children}
      </body>
    </html>
  )
}
