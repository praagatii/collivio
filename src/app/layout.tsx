import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { Providers } from "@/components/providers";
import Nav, { Footer } from "@/components/nav";
import { AnimatedRoutes, TransitionBar } from "@/components/transition";
import Cursor from "@/components/cursor";
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
  title: "COLLIVIO — Think it. Drop it. Build it.",
  description:
    "COLLIVIO is a discovery platform for young people to find real projects, real research, and real people to build with.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f6f1e8",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.className += ' js';",
          }}
        />
        <Providers>
          <Nav />
          <AnimatedRoutes>{children}</AnimatedRoutes>
          <Footer />
          <TransitionBar />
          <Cursor />
        </Providers>
      </body>
    </html>
  );
}