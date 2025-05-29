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
        className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white px-4 py-2 rounded font-medium shadow hover:brightness-110 transition-all"
      >
        Sign in with Google
      </button>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-white font-semibold drop-shadow-sm">{session.user?.name}</span>
      <button
        onClick={() => signOut({ callbackUrl: '/signed-out', redirect: true })}
        className="bg-gray-200 text-gray-800 px-3 py-1 rounded hover:bg-gray-300 transition-colors font-medium"
      >
        Sign out
      </button>
    </div>
  );
} 