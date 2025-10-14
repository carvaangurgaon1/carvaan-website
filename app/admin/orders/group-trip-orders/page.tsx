// app/admin/orders/page.tsx
"use client";
import { useState } from "react";
import { FiSearch, FiFileText } from "react-icons/fi";

function PageHeader({ title, breadcrumbs }: { title: string; breadcrumbs?: string }) {
  return (
    <div className="mb-6">
      <div className="text-sm text-gray-500">{breadcrumbs}</div>
      <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
        <FiFileText /> {title}
      </h1>
    </div>
  );
}

export default function OrdersPage() {
  const [q, setQ] = useState("");
  const orders = [
    { id: "#A1023", pkg: "Manali Adventure", amount: "₹9,999", date: "13 Oct 2025", status: "Confirmed" },
    { id: "#A1024", pkg: "Kerala Backwaters", amount: "₹12,499", date: "12 Oct 2025", status: "Pending" },
    { id: "#A1025", pkg: "Rajasthan Royal Escape", amount: "₹10,999", date: "10 Oct 2025", status: "Cancelled" },
  ];

  const filtered = orders.filter((o) => o.id.toLowerCase().includes(q.toLowerCase()) || o.pkg.toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="p-6">
      <PageHeader title="Orders" breadcrumbs="Carvaan > Orders" />

      <div className="flex items-center gap-3 mb-4">
        <div className="relative">
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
          <input className="pl-10 pr-3 py-2 border rounded-lg w-72" placeholder="Search order id or package..." value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow border overflow-x-auto">
        <table className="w-full text-sm text-gray-700">
          <thead className="bg-gray-100 text-xs text-gray-600 uppercase">
            <tr>
              <th className="px-4 py-3">S.No</th>
              <th className="px-4 py-3">Order ID</th>
              <th className="px-4 py-3">Package</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={6} className="p-6 text-center text-gray-500">No orders found.</td>
              </tr>
            ) : (
              filtered.map((o, i) => (
                <tr key={o.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3">{i + 1}</td>
                  <td className="px-4 py-3 font-medium">{o.id}</td>
                  <td className="px-4 py-3">{o.pkg}</td>
                  <td className="px-4 py-3">{o.amount}</td>
                  <td className="px-4 py-3">{o.date}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        o.status === "Confirmed" ? "bg-green-100 text-green-700" : o.status === "Pending" ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700"
                      }`}
                    >
                      {o.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
