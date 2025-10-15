// /app/admin/layout.js
"use client";

import { useState } from "react";
import { FiMenu, FiX, FiMail, FiUsers, FiShoppingCart, FiTag, FiClipboard } from "react-icons/fi";
import Link from "next/link";

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100 relative">
      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-full w-64 bg-purple-800 text-white z-50 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-purple-700">
          <span className="text-lg font-bold">Admin Panel</span>
          <button className="md:hidden" onClick={() => setSidebarOpen(false)}>
            <FiX size={22} />
          </button>
        </div>

        <nav className="flex flex-col px-4 py-6 space-y-3 text-sm">
          <Link href="/admin/contact" className="flex items-center space-x-2 hover:text-yellow-300">
            <FiMail /> <span>Contact Requests</span>
          </Link>
          <Link href="/admin/users" className="flex items-center space-x-2 hover:text-yellow-300">
            <FiUsers /> <span>Users</span>
          </Link>
          <Link href="/admin/orders" className="flex items-center space-x-2 hover:text-yellow-300">
            <FiShoppingCart /> <span>Group Orders</span>
          </Link>
          <Link href="/admin/coupons" className="flex items-center space-x-2 hover:text-yellow-300">
            <FiTag /> <span>Coupons</span>
          </Link>
          <Link href="/admin/trips" className="flex items-center space-x-2 hover:text-yellow-300">
            <FiClipboard /> <span>Trip Orders</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar (mobile only) */}
        <header className="flex items-center justify-between bg-white shadow px-4 py-3 md:hidden">
          <button onClick={() => setSidebarOpen(true)} className="text-gray-800 text-2xl">
            <FiMenu />
          </button>
          <h1 className="text-lg font-semibold text-gray-800">Dashboard</h1>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-x-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
