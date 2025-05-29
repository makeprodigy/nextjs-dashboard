"use client";
import Link from "next/link";
import AuthNav from "@/components/AuthNav";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="container mx-auto flex items-center justify-between py-4 px-4 md:px-0">
      <div className="flex items-center gap-6">
        <Link href="/" className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
          Dashboard
        </Link>
        <button
          className="md:hidden ml-2 p-2 rounded hover:bg-gray-100 focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div className="hidden md:flex items-center gap-6">
        <Link href="/orders" className="text-gray-700 hover:text-blue-600 transition-colors">
          Pizza Orders
        </Link>
        <AuthNav />
      </div>
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b shadow-md flex flex-col items-start gap-2 px-4 py-4 md:hidden animate-fade-in z-50">
          <Link
            href="/orders"
            className="text-gray-700 hover:text-blue-600 transition-colors w-full py-2"
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