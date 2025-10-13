"use client";
import { useState, useEffect } from "react";
import { FiMenu, FiX, FiPackage, FiUsers, FiMail, FiUser, FiShoppingCart, FiTag, FiClipboard, FiDollarSign, FiClock } from 'react-icons/fi';
export default function AdminDashboard() {
  const [date, setDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const formatted = today.toLocaleDateString("en-IN", {
      weekday: "long",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    setDate(formatted);
  }, []);

  const stats = [
    {
      title: "Active Packages",
      value: "32",
      icon: <FiPackage className="text-blue-600 text-2xl" />,
      color: "bg-blue-100",
    },
    {
      title: "Total Users",
      value: "1,245",
      icon: <FiUsers className="text-green-600 text-2xl" />,
      color: "bg-green-100",
    },
    {
      title: "Total Bookings",
      value: "498",
      icon: <FiShoppingCart className="text-yellow-600 text-2xl" />,
      color: "bg-yellow-100",
    },
    {
      title: "Revenue (₹)",
      value: "8.2L",
      icon: <FiDollarSign className="text-purple-600 text-2xl" />,
      color: "bg-purple-100",
    },
  ];

  const recentOrders = [
    {
      id: "#A1023",
      customer: "Rahul Mehta",
      package: "Manali Adventure",
      amount: "₹9,999",
      date: "13 Oct 2025",
      status: "Confirmed",
    },
    {
      id: "#A1024",
      customer: "Simran Kaur",
      package: "Kerala Backwaters",
      amount: "₹12,499",
      date: "12 Oct 2025",
      status: "Pending",
    },
    {
      id: "#A1025",
      customer: "Arjun Patel",
      package: "Rajasthan Royal Escape",
      amount: "₹10,999",
      date: "10 Oct 2025",
      status: "Cancelled",
    },
  ];

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Welcome Back, Admin 👋</h1>
          <p className="text-gray-500">Here’s what’s happening today — {date}</p>
        </div>
        <div className="mt-3 md:mt-0 flex items-center gap-2 text-gray-500">
          <FiClock />
          <span>Last Updated: 5 mins ago</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div
            key={i}
            className={`flex items-center gap-4 p-5 rounded-xl shadow-sm border ${s.color}`}
          >
            <div className="p-3 bg-white rounded-full shadow-inner">{s.icon}</div>
            <div>
              <h4 className="text-sm text-gray-600">{s.title}</h4>
              <p className="text-xl font-semibold text-gray-900">{s.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-xl shadow-md border p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Recent Bookings</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
              <tr>
                <th className="px-4 py-3">Order ID</th>
                <th className="px-4 py-3">Customer</th>
                <th className="px-4 py-3">Package</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3 text-right">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">{order.id}</td>
                  <td className="px-4 py-3">{order.customer}</td>
                  <td className="px-4 py-3">{order.package}</td>
                  <td className="px-4 py-3">{order.amount}</td>
                  <td className="px-4 py-3">{order.date}</td>
                  <td className="px-4 py-3 text-right">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        order.status === "Confirmed"
                          ? "bg-green-100 text-green-700"
                          : order.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
