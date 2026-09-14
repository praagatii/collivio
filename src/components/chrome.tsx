"use client";

import { usePathname } from "next/navigation";
import Nav, { Footer } from "@/components/nav";

export function NavGate() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return <Nav />;
}

export function FooterGate() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return <Footer />;
}