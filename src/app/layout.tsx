import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: "EventLingo - Real-time Multilingual Events",
  description: "Empower your international audience with real-time AI translation and captions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} font-sans antialiased text-gray-800 selection:bg-primary selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
