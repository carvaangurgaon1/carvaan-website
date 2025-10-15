"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FiMenu,
  FiX,
  FiPackage,
  FiUsers,
  FiMail,
  FiUser,
  FiShoppingCart,
  FiTag,
  FiClipboard,
} from "react-icons/fi";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      title: "Group Packages",
      icon: <FiPackage />,
      subItems: [
        { name: "Package Details", href: "/admin/group-packages/package-details" },
        { name: "Inactive Packages", href: "/admin/group-packages/inactive-packages" },
        { name: "Expired Packages", href: "/admin/group-packages/expired-packages" },
        { name: "Create Packages", href: "/admin/group-packages/create" },
      ],
    },
    {
      title: "Travel Agents",
      icon: <FiUsers />,
      subItems: [
        { name: "Agents Details", href: "/admin/travel-agents/agent-details" },
        { name: "Create Agents", href: "/admin/travel-agents/create-agent" },
      ],
    },
    {
      title: "Contact Requests",
      icon: <FiMail />,
      subItems: [
        { name: "Custom Package", href: "/admin/contact-requests/custom-package" },
        { name: "Contact Details", href: "/admin/contact-requests/contact-details" },
        { name: "Corporate Getaways", href: "/admin/contact-requests/corporate-getaways" },
        { name: "Tour Packages", href: "/admin/contact-requests/tour-packages" },
      ],
    },
    {
      title: "Users",
      icon: <FiUser />,
      subItems: [{ name: "User Details", href: "/admin/users/user-details" }],
    },
    {
      title: "Orders",
      icon: <FiShoppingCart />,
      subItems: [{ name: "Group Trip Orders", href: "/admin/orders/group-trip-orders" }],
    },
    {
      title: "Coupons",
      icon: <FiTag />,
      subItems: [
        { name: "Coupon Details", href: "/admin/coupons/coupon-details" },
        { name: "Create Coupons", href: "/admin/coupons/create-coupon" },
      ],
    },
    {
      title: "Trip Orders",
      icon: <FiClipboard />,
      subItems: [
        { name: "Create Trip Orders", href: "/admin/trip-orders/create-trip-order" },
        { name: "Trip Order Details", href: "/admin/trip-orders/trip-order-details" },
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-white font-raleway relative overflow-hidden">
      {/* Sidebar Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-screen bg-secondary text-white shadow-xl z-40 transition-all duration-300
        ${isOpen ? "w-64" : "w-0 md:w-64"} overflow-y-auto`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-500 bg-secondary sticky top-0 z-50">
          <h1 className="text-lg font-bold tracking-wide text-accent whitespace-nowrap">
            Carvaan Admin
          </h1>
          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden text-accent text-2xl"
          >
            <FiX />
          </button>
        </div>

        {/* Sidebar Navigation */}
        <nav className="px-3 py-4 space-y-5">
          {navItems.map((section, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-3 text-accent font-semibold text-sm uppercase tracking-wide mb-2">
                <span className="text-lg">{section.icon}</span>
                <span>{section.title}</span>
              </div>
              <div className="ml-6 space-y-1">
                {section.subItems.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="block px-2 py-1.5 text-sm rounded-md hover:bg-primary hover:text-white transition"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </aside>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-white border border-gray-300 p-2 rounded-lg shadow-md"
      >
        {isOpen ? (
          <FiX className="text-primary text-xl" />
        ) : (
          <FiMenu className="text-primary text-xl" />
        )}
      </button>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-h-screen bg-gray-50">
        {/* Header */}
        <header className="flex items-center justify-between px-4 sm:px-6 py-3 bg-gradient-to-r from-secondary to-primary text-white shadow-md sticky top-0 z-20">
          <h2 className="text-lg sm:text-xl font-semibold">Admin Dashboard</h2>
          <button className="bg-accent text-gray-900 font-semibold px-4 py-1.5 rounded-md hover:bg-yellow-400 transition">
            Logout
          </button>
        </header>

        {/* Content */}
        <section className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto">{children}</div>
        </section>
      </main>
    </div>
  );
}
