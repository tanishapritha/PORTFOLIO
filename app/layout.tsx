import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/app/data/siteConfig";

export const metadata: Metadata = {
  title: "Tanisha Pritha — AI + Software Builder",
  description: "I turn business problems into working software. AI agents, apps, automation and intelligent systems built around how your business actually works.",
  keywords: [
    "AI agents",
    "AI automation",
    "AI systems",
    "RAG systems",
    "custom software",
    "AI applications",
    "backend development",
    "workflow automation",
    "AI integrations",
    "MVP development",
    "Tanisha Pritha"
  ],
  authors: [{ name: siteConfig.name, url: "https://github.com/tanishapritha" }],
  openGraph: {
    title: "Tanisha Pritha — AI + Software Builder",
    description: "I turn business problems into working software. AI agents, apps, automation and intelligent systems built around how your business actually works.",
    type: "website",
  }
};

export const viewport: Viewport = {
  themeColor: "#faf8f5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
