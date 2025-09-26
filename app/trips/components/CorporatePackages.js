// app/trips/components/CorporatePackages.js
export default function CorporatePackages() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-6">Corporate Packages</h2>
          <p className="text-gray-600 mb-6">
            Build stronger teams with curated corporate travel packages. From retreats to workshops in the mountains,
            Carvaan makes corporate travel stress-free.
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Simplified planning</li>
            <li>Group pricing</li>
            <li>Coins for team accounts</li>
          </ul>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-purple-600 text-white rounded">View Corporate Packages</button>
            <button className="px-6 py-3 border rounded">Request a Proposal</button>
          </div>
        </div>

        {/* Rotating Cards */}
        <div className="flex-1 grid grid-cols-1 gap-6">
          <div className="bg-gray-100 p-6 rounded shadow">Retreat in Manali</div>
          <div className="bg-gray-100 p-6 rounded shadow">Team Building in Goa</div>
          <div className="bg-gray-100 p-6 rounded shadow">Wellness Camp in Rishikesh</div>
        </div>
      </div>
    </section>
  );
}
