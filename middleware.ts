import authConfig from "@/auth.config";
import NextAuth from "next-auth";
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "@/route";
import { NextRequest, NextResponse } from "next/server";

const { auth } = NextAuth(authConfig);

// A universal method to interact with NextAuth.js in your Next.js app. After initializing NextAuth.js in auth.ts, use this method in Middleware, Server Components, Route Handlers (app/), and Edge or Node.js API Routes (pages/).

export default auth((req) => {
  const { nextUrl, auth } = req;
  const isLoggedin = !!auth;
  const isApiAuthRoutes = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoutes = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoutes = authRoutes.includes(nextUrl.pathname);

  // order of this statement matter because
  // /api/auth to allow nextauth to interact
  if (isApiAuthRoutes) {
    return NextResponse.next();
  }

  // auth routes are technically public routes even an unauthenticated user
  // can access these routes
  if (isAuthRoutes) {
    if (isLoggedin) {
      // the reason to put the nextUrl is make the redirect response into absolute url, on the other hand DEFAULT_LOGIN_REDIRECT is relative route
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return NextResponse.next();
  }

  if (!isLoggedin && !isPublicRoutes) {
    return NextResponse.redirect(new URL("/auth/login", nextUrl));
  }

  return NextResponse.next();
});

// Optionally, don't invoke Middleware on some paths
// this config file is used to define our paths that will invoke the middleware
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
