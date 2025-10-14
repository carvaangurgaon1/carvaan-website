"use client";

export default function TourPackagesPage() {
  const data = [
    { name: "Ravi Singh", phone: "9876543210", destination: "Spiti Valley", date: "2025-11-15" },
    { name: "Anjali Nair", phone: "9123456789", destination: "Kedarnath", date: "2025-11-20" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Tour Package Enquiries 🗺️</h1>
      <div className="bg-white p-4 rounded-xl shadow-md border">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 border">#</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Phone</th>
              <th className="p-3 border">Destination</th>
              <th className="p-3 border">Preferred Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="p-3 border">{i + 1}</td>
                <td className="p-3 border">{item.name}</td>
                <td className="p-3 border">{item.phone}</td>
                <td className="p-3 border">{item.destination}</td>
                <td className="p-3 border">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
