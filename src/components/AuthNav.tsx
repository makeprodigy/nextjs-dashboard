"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function AuthNav() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div className="text-gray-500">Loading...</div>;
  }

  if (!session) {
    return (
      <button
        onClick={() => signIn("google")}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors font-medium"
      >
        Sign in with Google
      </button>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-gray-700 font-medium">{session.user?.name}</span>
      <button
        onClick={() => signOut()}
        className="bg-gray-200 text-gray-800 px-3 py-1 rounded hover:bg-gray-300 transition-colors font-medium"
      >
        Sign out
      </button>
    </div>
  );
} 