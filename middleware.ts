import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the path starts with /manage/
  if (pathname.startsWith("/manage/")) {
    // Create a new URL with /settings/ instead of /manage/
    const url = request.nextUrl.clone()
    url.pathname = pathname.replace("/manage/", "/settings/")

    // Return a redirect response
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: "/manage/:path*",
}