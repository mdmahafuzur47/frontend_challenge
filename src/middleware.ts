"use client";

import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get("user-agent");

  const response = NextResponse.next();
  if (userAgent) {
    response.cookies.set("userAgent", userAgent);
  }

  return response;
}
