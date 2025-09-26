// app/trips/components/Filters.js
export default function Filters() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto flex flex-col md:flex-row gap-10">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-1/4 bg-white p-6 shadow rounded-lg">
          <h3 className="text-xl font-bold mb-4">Filters</h3>
          <div className="space-y-4">
            <select className="w-full border p-2 rounded">
              <option>Trip Type</option>
              <option>Group Trips</option>
              <option>Tour Packages</option>
              <option>Corporate</option>
              <option>Custom</option>
            </select>
            <select className="w-full border p-2 rounded">
              <option>Squad Size</option>
              <option>Solo</option>
              <option>Couples</option>
              <option>Families</option>
              <option>Friends</option>
            </select>
            <input type="range" min="1000" max="100000" className="w-full" />
            <select className="w-full border p-2 rounded">
              <option>Duration</option>
              <option>Weekend</option>
              <option>3–5 Days</option>
              <option>1 Week</option>
              <option>Extended</option>
            </select>
            <select className="w-full border p-2 rounded">
              <option>Theme</option>
              <option>Adventure</option>
              <option>Spiritual</option>
              <option>Luxury</option>
              <option>Wellness</option>
            </select>
            <button className="w-full bg-purple-600 text-white py-2 rounded">Apply Filters</button>
          </div>
        </aside>

        {/* Placeholder for trip results */}
        <div className="flex-1 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow rounded">[Trip Card]</div>
          <div className="bg-white p-6 shadow rounded">[Trip Card]</div>
          <div className="bg-white p-6 shadow rounded">[Trip Card]</div>
        </div>
      </div>
    </section>
  );
}
