import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const country = request.geo?.country || "GLOBAL";
  const response = NextResponse.next();

  response.headers.set("x-region", country.toLowerCase());

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

