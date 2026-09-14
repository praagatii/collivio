import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SESSION = "collivio_session";
const PROTECTED = ["/people", "/ideas", "/spaces", "/profile"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (PROTECTED.some((p) => pathname === p || pathname.startsWith(p + "/"))) {
    const has = req.cookies.get(SESSION);
    if (!has) {
      const url = req.nextUrl.clone();
      url.pathname = "/";
      url.searchParams.set("auth", "1");
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/people/:path*", "/ideas/:path*", "/spaces/:path*", "/profile/:path*"],
};