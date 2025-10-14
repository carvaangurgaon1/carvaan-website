"use client";
import PageHeader from "@/components/admin/PageHeader";
import { FiEye, FiTrash2 } from "react-icons/fi";

export default function InactivePackagesPage() {
  const trips = [
    { id: 1, title: "Manali Escape", startDate: "10/09/2025", agent: "Infinity Adventures", destination: "Manali" },
    { id: 2, title: "Goa Beach Stay", startDate: "05/09/2025", agent: "SeaShells Travel", destination: "Goa" },
  ];

  return (
    <div className="p-6">
      <PageHeader title="Inactive Packages" breadcrumbs="Carvaan > Trips > Inactive Packages" />

      <div className="flex gap-2 mb-4">
        <input type="date" className="border rounded-lg px-3 py-2 text-sm" />
        <input type="text" placeholder="Search" className="border rounded-lg px-3 py-2 text-sm" />
      </div>

      <div className="bg-white border rounded-xl shadow-sm overflow-x-auto">
        <table className="w-full text-sm text-gray-700">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-4 py-3">S.No</th>
              <th className="px-4 py-3">Trip Title</th>
              <th className="px-4 py-3">Start Date</th>
              <th className="px-4 py-3">Travel Agent</th>
              <th className="px-4 py-3">Destination</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {trips.map((t, i) => (
              <tr key={t.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3">{i + 1}</td>
                <td className="px-4 py-3">{t.title}</td>
                <td className="px-4 py-3">{t.startDate}</td>
                <td className="px-4 py-3">{t.agent}</td>
                <td className="px-4 py-3">{t.destination}</td>
                <td className="px-4 py-3 flex gap-2">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg"><FiEye /></button>
                  <button className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg"><FiTrash2 /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
