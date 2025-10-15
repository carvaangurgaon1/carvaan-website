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
    <div className="flex h-screen bg-white text-gray-900 font-raleway">
      {/* Sidebar */}
      <div
        className={`fixed z-40 inset-y-0 left-0 bg-secondary text-white shadow-lg transform transition-transform duration-300
        ${isOpen ? "translate-x-0 w-64" : "-translate-x-full md:translate-x-0 md:w-64"}`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-purple-500">
          <h1 className="text-xl font-bold text-accent tracking-wide">Carvaan Admin</h1>
          <button
            className="text-accent md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="overflow-y-auto px-3 py-4 space-y-3">
          {navItems.map((section, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-2 text-accent font-semibold uppercase text-sm mb-1">
                <span>{section.icon}</span>
                <span>{section.title}</span>
              </div>
              <div className="ml-6 space-y-1">
                {section.subItems.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="block px-2 py-1.5 text-sm rounded-md hover:bg-accent hover:text-secondary transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>

      {/* Content area */}
      <div className="flex flex-col flex-1 md:ml-64">
        <header className="flex items-center justify-between bg-white shadow-md px-6 py-4 sticky top-0 z-30">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-secondary"
          >
            <FiMenu size={24} />
          </button>
          <h2 className="text-lg font-semibold text-secondary">Admin Dashboard</h2>
          <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-pink-700 transition">
            Logout
          </button>
        </header>

        <main className="flex-1 overflow-y-auto p-4 sm:p-6 bg-gradient-to-br from-white to-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
}
