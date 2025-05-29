"use client";
import Link from "next/link";

export default function SignedOut() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-2xl font-bold mb-4">You have been signed out.</h1>
      <Link
        href="/"
        className="text-blue-600 hover:underline font-medium"
      >
        Go to Dashboard
      </Link>
    </div>
  );
} 