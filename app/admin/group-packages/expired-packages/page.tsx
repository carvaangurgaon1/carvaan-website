"use client";

export default function ExpiredPackagesPage() {
  const data = [
    { title: "Leh Ladakh Adventure", endDate: "2025-09-30", seats: 0, company: "Infinite Traveler" },
    { title: "Manali Chill Trip", endDate: "2025-10-01", seats: 0, company: "Strangers Together" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Expired Packages 📅</h1>
      <div className="bg-white p-4 rounded-xl shadow-md border">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 border">#</th>
              <th className="p-3 border">Trip Title</th>
              <th className="p-3 border">End Date</th>
              <th className="p-3 border">Company</th>
              <th className="p-3 border">Seats Left</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="p-3 border">{i + 1}</td>
                <td className="p-3 border">{item.title}</td>
                <td className="p-3 border">{item.endDate}</td>
                <td className="p-3 border">{item.company}</td>
                <td className="p-3 border text-red-600 font-semibold">{item.seats}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
