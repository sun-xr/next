import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublic = ["/", "/login", "/signup"].includes(path);

  const token = request.cookies.get("token")?.value || "";
  if (isPublic && token) return NextResponse.redirect(new URL("/", request.nextUrl));
  if (!isPublic && !token) return NextResponse.redirect(new URL("/login", request.nextUrl));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/profile", "/signup"],
};
//https://youtu.be/7ahDnxnXheU?t=9218
