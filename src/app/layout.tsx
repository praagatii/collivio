import type { Metadata } from "next";
import { Anton, Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-space-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "COLLivio — Think it. Drop it. Build it.",
  description:
    "COLLivio is a space for young people to build real projects, find real opportunities, and create work that speaks for itself.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${anton.variable} ${spaceMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}