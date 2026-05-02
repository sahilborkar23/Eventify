import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define which routes are protected (need login)
const isProtectedRoute = createRouteMatcher([
  "/my-events(.*)",
  "/create-event(.*)",
  "/my-tickets(.*)",
]);

// Main middleware logic
export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth(); // Check logged-in user

  // If user not logged in AND trying to open a protected page
  if (!userId && isProtectedRoute(req)) {
    const { redirectToSignIn } = await auth();
    return redirectToSignIn(); // Send them to sign-in page
  }

  return NextResponse.next(); // Allow request to continue
});

// Middleware should run on these paths
export const config = {
  matcher: [
    // Ignore static files & Next.js internal stuff
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",

    // Always run middleware for API routes
    "/(api|trpc)(.*)",
  ],
};