"use client";
import Link from "next/link";
import AuthNav from "@/components/AuthNav";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between py-4 px-4 relative bg-gradient-to-r from-slate-900 via-blue-900 to-blue-600">
      <Link href="/" className="text-2xl font-extrabold text-white hover:text-blue-200 transition-colors">
        Dashboard
      </Link>
      <div className="hidden md:flex items-center gap-6">
        <Link href="/orders" className="text-white hover:text-blue-200 transition-colors">
          Pizza Orders
        </Link>
        <AuthNav />
      </div>

      <button
        className="md:hidden p-2 rounded hover:bg-blue-800 focus:outline-none"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {/* Mobile nav dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-gradient-to-r from-slate-900 via-blue-900 to-blue-600 border-b shadow-md flex flex-col items-start gap-2 px-4 py-4 md:hidden animate-fade-in z-50">
          <Link
            href="/orders"
            className="text-white hover:text-blue-200 transition-colors w-full py-2"
            onClick={() => setMenuOpen(false)}
          >
            Pizza Orders
          </Link>
          <div className="w-full">
            <AuthNav />
          </div>
        </div>
      )}
    </nav>
  );
} 