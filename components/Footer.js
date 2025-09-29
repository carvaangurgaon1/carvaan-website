// components/Footer.js
"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Column 1 */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Carvaan</h2>
          <p className="text-sm">
            Simplifying group travel with community, rewards, and unforgettable
            experiences.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/trips" className="hover:text-white">
                Trips
              </Link>
            </li>
            <li>
              <Link href="/community" className="hover:text-white">
                Community
              </Link>
            </li>
            <li>
              <Link href="/coins" className="hover:text-white">
                Carvaan Coins
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-white">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/auth" className="hover:text-white">
                Login / Sign Up
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">
            Get in Touch
          </h2>
          <ul className="space-y-2 text-sm">
            <li>Email: support@carvaan.co</li>
            <li>Phone: +91 98765 43210</li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact Form
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Carvaan. All rights reserved.
      </div>
    </footer>
  );
}
