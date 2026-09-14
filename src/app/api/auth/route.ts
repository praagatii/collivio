import { NextResponse } from "next/server";

async function createSession() {
  const token =
    "ck_" + Array.from({ length: 32 }, () => Math.floor(Math.random() * 16).toString(16)).join("");
  const expiry = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7);
  const res = NextResponse.json({ ok: true, token });
  res.cookies.set({
    name: "collivio_session",
    value: token,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    expires: expiry,
  });
  return res;
}

export async function POST(_req: Request) {
  await new Promise((r) => setTimeout(r, 500));
  return createSession();
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set({ name: "collivio_session", value: "", httpOnly: true, path: "/", expires: new Date(0) });
  return res;
}
