"use client";  // This runs on the client side (React hooks allowed)

import { ConvexReactClient } from "convex/react";

import { useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

export function ConvexClientProvider({ children }) {
  return (
    // Wrap the entire app to give access to Convex + Clerk auth
    <ConvexProviderWithClerk
      client={convex} // Convex backend connection
      useAuth={useAuth} // Pass Clerk's auth to Convex
    >
      {children}
    </ConvexProviderWithClerk>
  );
}
