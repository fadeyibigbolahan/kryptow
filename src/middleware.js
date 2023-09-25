import { NextResponse, NextRequest } from "next/server";

export function middleware(NextRequest) {
  const path = NextRequest.nextUrl.pathname;

  const isPublicPath = path === "/login" || path === "/signup";

  const token = NextRequest.cookies.get("token")?.value || "";

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/dashboard", NextRequest.nextUrl));
  }

  if (!isPublicPath && !token) {
    NextResponse.redirect(new URL("/login", NextRequest.nextUrl));
  }
}

export const config = {
  matcher: ["/", "/profile", "/login", "/signup"],
};
