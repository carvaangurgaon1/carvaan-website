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
    <header className="w-full bg-white/95 backdrop-blur-md border-b shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-3">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-primary tracking-wide hover:text-secondary transition-colors"
        >
          Carvaan
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-primary transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <Link
            href="/login"
            className="bg-gradient-to-r from-primary to-secondary text-white px-5 py-2 rounded-full font-semibold shadow-md hover:opacity-90 transition"
          >
            Login / Sign Up
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-800 text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-3/4 sm:w-1/2 bg-secondary text-white shadow-2xl transform transition-transform duration-300 ease-in-out z-40 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-white/20">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="text-2xl font-bold text-white"
          >
            Carvaan
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-2xl text-white"
            aria-label="Close menu"
          >
            <FiX />
          </button>
        </div>

        <nav className="flex flex-col space-y-5 px-6 py-6 text-lg font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="hover:text-accent transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/login"
            onClick={() => setMenuOpen(false)}
            className="mt-8 bg-accent text-secondary px-5 py-2 rounded-full font-semibold text-center hover:bg-yellow-400 transition"
          >
            Login / Sign Up
          </Link>
        </nav>
      </div>

      {/* Overlay (when menu open) */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}


