// app/admin/coupons/list/page.tsx
"use client";
import { useState } from "react";
import { FiSearch, FiTag } from "react-icons/fi";

function PageHeader({ title, breadcrumbs }: { title: string; breadcrumbs?: string }) {
  return (
    <div className="mb-6">
      <div className="text-sm text-gray-500">{breadcrumbs}</div>
      <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
        <FiTag /> {title}
      </h1>
    </div>
  );
}

export default function CouponsListPage() {
  const [q, setQ] = useState("");
  const coupons = [
    { id: 1, code: "WELCOME100", discount: "10%", expiry: "31 Dec 2025", status: "Active" },
    { id: 2, code: "FESTIVE250", discount: "₹250", expiry: "15 Nov 2025", status: "Active" },
    { id: 3, code: "OLD50", discount: "5%", expiry: "01 Sep 2024", status: "Expired" },
  ];

  const filtered = coupons.filter((c) => c.code.toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="p-6">
      <PageHeader title="Coupons" breadcrumbs="Carvaan > Coupons" />

      <div className="flex items-center gap-3 mb-4">
        <div className="relative">
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
          <input className="pl-10 pr-3 py-2 border rounded-lg w-72" placeholder="Search coupon code..." value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
        <div className="ml-auto">
          <a href="/admin/coupons/create" className="bg-blue-600 text-white px-4 py-2 rounded-lg">Create Coupon</a>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow border overflow-x-auto">
        <table className="w-full text-sm text-gray-700">
          <thead className="bg-gray-100 text-xs text-gray-600 uppercase">
            <tr>
              <th className="px-4 py-3">S.No</th>
              <th className="px-4 py-3">Code</th>
              <th className="px-4 py-3">Discount</th>
              <th className="px-4 py-3">Expiry</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr><td colSpan={5} className="p-6 text-center text-gray-500">No coupons found.</td></tr>
            ) : (
              filtered.map((c, i) => (
                <tr key={c.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3">{i + 1}</td>
                  <td className="px-4 py-3 font-medium">{c.code}</td>
                  <td className="px-4 py-3">{c.discount}</td>
                  <td className="px-4 py-3">{c.expiry}</td>
                  <td className="px-4 py-3">
                    <span className={`px-3 py-1 rounded-full text-xs ${c.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                      {c.status}
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
