// app/admin/contact-requests/page.tsx
"use client";
import { useState } from "react";
import { FiMail, FiSearch } from "react-icons/fi";

function PageHeader({ title, breadcrumbs }: { title: string; breadcrumbs?: string }) {
  return (
    <div className="mb-6">
      <div className="text-sm text-gray-500">{breadcrumbs}</div>
      <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
        <FiMail /> {title}
      </h1>
    </div>
  );
}

export default function ContactRequestsPage() {
  const [q, setQ] = useState("");
  const requests = [
    { id: 1, name: "Nisha Sharma", email: "nisha@example.com", subject: "Custom itinerary request", date: "10 Oct 2025" },
    { id: 2, name: "Vikram Singh", email: "vikram@example.com", subject: "Corporate getaway enquiry", date: "08 Oct 2025" },
  ];

  const filtered = requests.filter((r) => r.name.toLowerCase().includes(q.toLowerCase()) || r.email.toLowerCase().includes(q.toLowerCase()) || r.subject.toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="p-6">
      <PageHeader title="Contact Requests" breadcrumbs="Carvaan > Contact Us Requests" />

      <div className="flex items-center gap-3 mb-4">
        <div className="relative">
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
          <input className="pl-10 pr-3 py-2 border rounded-lg w-72" placeholder="Search name, email or subject..." value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow border overflow-x-auto">
        <table className="w-full text-sm text-gray-700">
          <thead className="bg-gray-100 text-xs text-gray-600 uppercase">
            <tr>
              <th className="px-4 py-3">S.No</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Subject</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr><td colSpan={6} className="p-6 text-center text-gray-500">No contact requests.</td></tr>
            ) : (
              filtered.map((r, i) => (
                <tr key={r.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3">{i + 1}</td>
                  <td className="px-4 py-3 font-medium">{r.name}</td>
                  <td className="px-4 py-3">{r.email}</td>
                  <td className="px-4 py-3">{r.subject}</td>
                  <td className="px-4 py-3">{r.date}</td>
                  <td className="px-4 py-3">
                    <a className="text-sm text-blue-600 hover:underline" href={`mailto:${r.email}`}>Reply</a>
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
