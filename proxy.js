import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/my-events(.*)",
  "/create-event(.*)",
  "/my-tickets(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    "/my-events(.*)",
    "/create-event(.*)",
    "/my-tickets(.*)",
    "/(api|trpc)(.*)",
  ],
};