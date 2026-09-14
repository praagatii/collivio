import type { Metadata, Viewport } from "next";
import { Inter, Manrope, Poppins, Baloo_2 } from "next/font/google";
import { Providers } from "@/components/providers";
import { NavGate, FooterGate } from "@/components/chrome";
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

const poppins = Poppins({
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const baloo = Baloo_2({
  weight: ["600", "700"],
  variable: "--font-baloo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Collivio — Tomorrow, Together.",
  description:
    "Collivio brings people, ideas and spaces together to create opportunities, communities and a more connected tomorrow.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f6f1e9",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} ${poppins.variable} ${baloo.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.className += ' js';",
          }}
        />
        <Providers>
          <NavGate />
          <AnimatedRoutes>{children}</AnimatedRoutes>
          <FooterGate />
          <TransitionBar />
          <Cursor />
        </Providers>
      </body>
    </html>
  );
}