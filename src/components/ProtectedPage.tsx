"use client";

import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";

export default function ProtectedPage({ children }: { children: React.ReactNode }) {
  const { status } = useSession();

  useEffect(() => {
    console.log("Session status:", status);
    if (status === "unauthenticated") {
      signIn("google");
    }
  }, [status]);

  if (status === "loading") {
    return <div className="text-center text-gray-500 py-8">Checking authentication...</div>;
  }

  if (status === "authenticated") {
    return <>{children}</>;
  }

  // While redirecting, render nothing
  return null;
} 