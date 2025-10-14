"use client";

export default function CustomPackagesPage() {
  const data = [
    { name: "Amit Sharma", email: "amit@example.com", destination: "Goa", budget: "₹50,000" },
    { name: "Priya Mehta", email: "priya@example.com", destination: "Ladakh", budget: "₹80,000" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Custom Package Requests 🎒</h1>
      <div className="bg-white p-4 rounded-xl shadow-md border">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 border">#</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Destination</th>
              <th className="p-3 border">Budget</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="p-3 border">{i + 1}</td>
                <td className="p-3 border">{item.name}</td>
                <td className="p-3 border">{item.email}</td>
                <td className="p-3 border">{item.destination}</td>
                <td className="p-3 border">{item.budget}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
