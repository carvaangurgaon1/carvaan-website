// components/Header.js
"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-pink-600">
          Carvaan
        </Link>

        {/* Nav Links */}
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li>
            <Link href="/" className="hover:text-pink-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-pink-600">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/trips" className="hover:text-pink-600">
              Trips
            </Link>
          </li>
          <li>
            <Link href="/community" className="hover:text-pink-600">
              Community
            </Link>
          </li>
          <li>
            <Link href="/coins" className="hover:text-pink-600">
              Coins
            </Link>
          </li>
          <li>
            <Link href="/faq" className="hover:text-pink-600">
              FAQ
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-pink-600">
              Contact
            </Link>
          </li>
        </ul>

        {/* CTA */}
        <Link
          href="/auth"
          className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:opacity-90"
        >
          Login / Sign Up
        </Link>
      </nav>
    </header>
  );
}
