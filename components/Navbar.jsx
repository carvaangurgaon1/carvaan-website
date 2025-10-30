"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Trips", href: "/trips" },
    { name: "Community", href: "/community" },
    { name: "Coins", href: "/coins" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        <Link href="/" className="text-2xl font-raleway font-bold text-primary">
          Carvaan
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <Link key={n.name} href={n.href} className="text-gray-700 hover:text-primary transition">
              {n.name}
            </Link>
          ))}
          <Link href="/login" className="ml-4 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-md shadow">
            Login / Sign Up
          </Link>
        </nav>

        {/* Mobile */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="p-2">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-4 space-y-3">
            {nav.map((n) => (
              <Link key={n.name} href={n.href} onClick={() => setOpen(false)} className="block text-gray-700">
                {n.name}
              </Link>
            ))}
            <Link href="/login" onClick={() => setOpen(false)} className="block bg-gradient-to-r from-primary to-secondary text-white text-center px-4 py-2 rounded-md">
              Login / Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
