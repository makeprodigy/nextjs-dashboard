"use client";

import { useSession, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

export default function ProtectedPage({ children }: { children: React.ReactNode }) {
  const { status } = useSession();
  const [redirecting, setRedirecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (status === "unauthenticated" && !redirecting) {
      setRedirecting(true);
      signIn("google").catch((err) => {
        setError("Failed to redirect for authentication. Please try again.");
        setRedirecting(false);
      });
    }
  }, [status, redirecting]);

  if (status === "loading" || redirecting) {
    return <div className="text-center text-gray-500 py-8">{error ? error : "Redirecting to sign in..."}</div>;
  }

  if (status === "authenticated") {
    return <>{children}</>;
  }

  // If unauthenticated and not redirecting, show error
  if (status === "unauthenticated" && error) {
    return <div className="text-center text-red-500 py-8">{error}</div>;
  }

  // Fallback UI
  return <div className="text-center text-gray-500 py-8">Unknown authentication state.</div>;
} 