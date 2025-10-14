"use client";
import PageHeader from "@/components/admin/PageHeader";
import { FiPhone } from "react-icons/fi";

export default function TravelAgentsListPage() {
  const agents = [
    { id: 1, name: "Infinite Traveler", phone: "9876543210", trips: 12, based: "Delhi" },
    { id: 2, name: "Strangers Together", phone: "8765432109", trips: 8, based: "Mumbai" },
  ];

  return (
    <div className="p-6">
      <PageHeader title="Travel Agents" breadcrumbs="Carvaan > Travel Agents" />

      <div className="bg-white border rounded-xl shadow-sm overflow-x-auto">
        <table className="w-full text-sm text-gray-700">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-4 py-3">S.No</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">No. of Trips</th>
              <th className="px-4 py-3">Based On</th>
            </tr>
          </thead>
          <tbody>
            {agents.map((a, i) => (
              <tr key={a.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3">{i + 1}</td>
                <td className="px-4 py-3 font-medium">{a.name}</td>
                <td className="px-4 py-3 flex items-center gap-2"><FiPhone /> {a.phone}</td>
                <td className="px-4 py-3">{a.trips}</td>
                <td className="px-4 py-3">{a.based}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
