import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import SiteFrame from "@/components/site-frame";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "COLLivio — Think it. Drop it. Build it.",
  description:
    "COLLivio is a space for young people to build real projects, find real opportunities, and create work that speaks for itself.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f7f1ed",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable}`}
    >
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.className += ' js';",
          }}
        />
        <SiteFrame />
        {children}
      </body>
    </html>
  );
}