"use client";

export default function ViewAgentsPage() {
  const agents = [
    {
      id: 1,
      name: "Infinite Traveler",
      phone: "+91 9876543210",
      based: "Delhi",
      trips: 24,
      establishedAt: "2018-04-10",
    },
    {
      id: 2,
      name: "Strangers Together",
      phone: "+91 9123456789",
      based: "Mumbai",
      trips: 18,
      establishedAt: "2020-07-22",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">
        Travel Agents Directory 🧭
      </h1>
      <div className="bg-white p-6 rounded-xl shadow-md border">
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Search by name or city..."
            className="border rounded-md px-4 py-2 w-1/3"
          />
          <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
            + Add New Agent
          </button>
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 border">#</th>
              <th className="p-3 border">Agent Name</th>
              <th className="p-3 border">Phone</th>
              <th className="p-3 border">Based In</th>
              <th className="p-3 border">No. of Trips</th>
              <th className="p-3 border">Established</th>
              <th className="p-3 border text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {agents.map((agent, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="p-3 border">{i + 1}</td>
                <td className="p-3 border font-medium">{agent.name}</td>
                <td className="p-3 border">{agent.phone}</td>
                <td className="p-3 border">{agent.based}</td>
                <td className="p-3 border">{agent.trips}</td>
                <td className="p-3 border">{agent.establishedAt}</td>
                <td className="p-3 border text-center">
                  <button className="text-blue-600 hover:underline">Edit</button>
                  <span className="mx-2 text-gray-400">|</span>
                  <button className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
