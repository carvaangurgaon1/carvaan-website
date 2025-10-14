// app/admin/users/page.tsx
"use client";
import { useState } from "react";
import { FiSearch, FiUser } from "react-icons/fi";
import Link from "next/link";

function PageHeader({ title, breadcrumbs }: { title: string; breadcrumbs?: string }) {
  return (
    <div className="mb-6">
      <div className="text-sm text-gray-500">{breadcrumbs}</div>
      <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
        <FiUser /> {title}
      </h1>
    </div>
  );
}

export default function UsersPage() {
  const [query, setQuery] = useState("");
  const users = [
    { id: 1, name: "Rahul Mehta", email: "rahul@example.com", phone: "9876543210", joined: "12 Jan 2024" },
    { id: 2, name: "Simran Kaur", email: "simran@example.com", phone: "9123456780", joined: "28 Feb 2024" },
    { id: 3, name: "Arjun Patel", email: "arjun@example.com", phone: "9988776655", joined: "05 Mar 2024" },
  ];

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(query.toLowerCase()) ||
      u.email.toLowerCase().includes(query.toLowerCase()) ||
      u.phone.includes(query)
  );

  return (
    <div className="p-6">
      <PageHeader title="Users" breadcrumbs="Carvaan > Users" />

      <div className="flex items-center gap-3 mb-4">
        <div className="relative">
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            className="pl-10 pr-3 py-2 border rounded-lg w-72"
            placeholder="Search by name, email or phone..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <Link href="/admin/users/create" className="ml-auto bg-blue-600 text-white px-4 py-2 rounded-lg">
          Create User
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow border overflow-x-auto">
        <table className="w-full text-sm text-gray-700">
          <thead className="bg-gray-100 text-xs text-gray-600 uppercase">
            <tr>
              <th className="px-4 py-3">S.No</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Joined</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-6 text-center text-gray-500">
                  No users match your search.
                </td>
              </tr>
            ) : (
              filtered.map((u, i) => (
                <tr key={u.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3">{i + 1}</td>
                  <td className="px-4 py-3 font-medium">{u.name}</td>
                  <td className="px-4 py-3">{u.email}</td>
                  <td className="px-4 py-3">{u.phone}</td>
                  <td className="px-4 py-3">{u.joined}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
