// /components/Navbar.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
    <header className="w-full bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-3">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-pink-600">
          Carvaan
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-pink-500 transition">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <Link
            href="/login"
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-lg shadow-md hover:opacity-90 transition"
          >
            Login / Sign Up
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-800 text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-md flex flex-col space-y-4 py-4 px-6 text-gray-800 font-medium absolute w-full z-40">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-pink-500 transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/login"
            onClick={() => setMenuOpen(false)}
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-lg text-center shadow-md hover:opacity-90 transition"
          >
            Login / Sign Up
          </Link>
        </div>
      )}
    </header>
  );
}
