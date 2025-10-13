// app/admin/layout.tsx
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiPackage, FiUsers, FiMail, FiUser, FiShoppingCart, FiTag, FiClipboard } from "react-icons/fi";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);

  const navItems = [
    {
      title: "Group Packages",
      icon: <FiPackage />,
      subItems: [
        { name: "Package Details", href: "/admin/group-packages/package-details" },
        { name: "Inactive Packages", href: "/admin/group-packages/inactive-packages" },
        { name: "Expired Packages", href: "/admin/group-packages/expired-packages" },
        { name: "Create Packages", href: "/admin/group-packages/create-packages" },
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
    <div className="flex h-screen bg-gray-100 text-gray-900">
      {/* Sidebar */}
      <div className={`bg-white border-r shadow-lg transition-all duration-300 ${isOpen ? "w-64" : "w-20"}`}>
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h1 className={`text-xl font-bold text-blue-700 transition-all ${isOpen ? "block" : "hidden"}`}>
            Carvaan Admin
          </h1>
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        <nav className="overflow-y-auto px-2 py-4 space-y-2">
          {navItems.map((section, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-2 px-2 py-2 font-semibold text-gray-700">
                <span className="text-lg">{section.icon}</span>
                {isOpen && <span>{section.title}</span>}
              </div>
              <div className={`ml-6 space-y-1 ${isOpen ? "block" : "hidden"}`}>
                {section.subItems.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="block px-2 py-1.5 text-sm text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-md"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="flex items-center justify-between bg-white shadow px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-700">Admin Dashboard</h2>
          <button className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition">
            Logout
          </button>
        </header>
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
