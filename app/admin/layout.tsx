 "use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiPackage, FiUsers, FiMail, FiUser, FiShoppingCart, FiTag, FiClipboard, FiDollarSign, FiClock } from 'react-icons/fi';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

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
    <div className="flex min-h-screen bg-[#fefefe] font-raleway text-gray-900">
      {/* Sidebar */}
      <div
        className={`transition-all duration-300 shadow-lg bg-gradient-to-b from-[#6b5f8e] to-[#cd537a] text-white ${
          isOpen ? "w-64" : "w-20"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-white/20">
          <h1
            className={`text-xl font-bold tracking-wide transition-all ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <span className="text-[#fabe17]">Carvaan</span> Admin
          </h1>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-[#fabe17] transition"
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="overflow-y-auto px-2 py-4 space-y-4">
          {navItems.map((section, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-2 px-3 py-2 font-semibold text-[#fefefe]/90 uppercase text-sm tracking-wide">
                <span className="text-lg">{section.icon}</span>
                {isOpen && <span>{section.title}</span>}
              </div>
              <div className={`ml-6 space-y-1 ${isOpen ? "block" : "hidden"}`}>
                {section.subItems.map((item, i) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={i}
                      href={item.href}
                      className={`block px-3 py-1.5 rounded-md text-sm transition-all ${
                        isActive
                          ? "bg-[#fabe17]/30 text-[#fefefe]"
                          : "text-[#fefefe]/70 hover:text-[#fabe17] hover:bg-white/10"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-[#fefefe]">
        {/* Header */}
        <header className="flex items-center justify-between bg-[#6b5f8e]/10 border-b border-gray-200 px-6 py-4 shadow-sm">
          <h2 className="text-lg font-semibold text-[#6b5f8e]">Admin Dashboard</h2>
          <button className="bg-[#cd537a] text-white px-4 py-2 rounded-md hover:bg-[#fabe17] hover:text-gray-900 transition font-semibold">
            Logout
          </button>
        </header>

        {/* Content */}
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
