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
    <div className="flex min-h-screen bg-white font-raleway">
      {/* Hamburger for Mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-lg shadow-md border border-gray-200"
      >
        {isOpen ? <FiX className="text-primary text-2xl" /> : <FiMenu className="text-primary text-2xl" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:relative top-0 left-0 h-screen bg-secondary text-white shadow-lg transition-all duration-300 z-40 
        ${isOpen ? "w-64" : "w-0 md:w-64"} overflow-hidden`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-400">
          <h1 className="text-xl font-bold tracking-wide text-accent">Carvaan Admin</h1>
        </div>

        <nav className="overflow-y-auto px-3 py-4 space-y-3">
          {navItems.map((section, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-3 text-accent font-semibold text-sm uppercase tracking-wide mb-1">
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

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen bg-white">
        <header className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-secondary to-primary text-white shadow-md">
          <h2 className="text-lg md:text-xl font-semibold">Admin Dashboard</h2>
          <button className="bg-accent text-gray-900 font-semibold px-4 py-2 rounded-md hover:bg-yellow-400 transition">
            Logout
          </button>
        </header>

        <section className="flex-1 p-4 sm:p-6 md:p-8 bg-gray-50">
          <div className="container mx-auto">{children}</div>
        </section>
      </main>
    </div>
  );
}
