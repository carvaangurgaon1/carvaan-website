"use client";

export default function CorporateGetawaysPage() {
  const data = [
    { company: "TCS", contact: "Rahul Verma", email: "rahul@tcs.com", size: "50", destination: "Manali" },
    { company: "Infosys", contact: "Neha Kapoor", email: "neha@infosys.com", size: "30", destination: "Goa" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Corporate Getaway Requests 🏢</h1>
      <div className="bg-white p-4 rounded-xl shadow-md border">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 border">#</th>
              <th className="p-3 border">Company</th>
              <th className="p-3 border">Contact Person</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Group Size</th>
              <th className="p-3 border">Destination</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="p-3 border">{i + 1}</td>
                <td className="p-3 border">{item.company}</td>
                <td className="p-3 border">{item.contact}</td>
                <td className="p-3 border">{item.email}</td>
                <td className="p-3 border">{item.size}</td>
                <td className="p-3 border">{item.destination}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
