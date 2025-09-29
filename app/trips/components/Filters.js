// app/trips/components/Filters.js
export default function Filters() {
  return (
    <section className="py-12 bg-gray-100 border-t">
      <div className="container mx-auto flex flex-wrap gap-6 justify-center">
        <select className="p-3 border rounded">
          <option>Group Trips</option>
          <option>Tour Packages</option>
        </select>
        <button className="px-6 py-2 bg-purple-600 text-white rounded">Apply Filters</button>
      </div>
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
