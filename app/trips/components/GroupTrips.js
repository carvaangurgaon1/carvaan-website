// app/trips/components/GroupTrips.js
export default function GroupTrips() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">More People. More Memories.</h2>
        <p className="text-lg text-gray-600 mb-10">
          Friends, families, or solos—find trips designed for every squad.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100 rounded shadow">
            <h3 className="text-xl font-bold">Friends & Couples</h3>
            <p className="mt-2 text-gray-600">Nightlife, treks & getaways.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded shadow">
            <h3 className="text-xl font-bold">Family Trips</h3>
            <p className="mt-2 text-gray-600">Safe, kid-friendly itineraries.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded shadow">
            <h3 className="text-xl font-bold">Solo to Squad</h3>
            <p className="mt-2 text-gray-600">Community-based, captain-led adventures.</p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mt-12 overflow-x-auto">
          <table className="table-auto border-collapse border w-full text-left">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3">Destination</th>
                <th className="p-3">Duration</th>
                <th className="p-3">Price</th>
                <th className="p-3">Carvaan Coins</th>
                <th className="p-3">Highlights</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border">Manali</td>
                <td className="p-3 border">5 Days</td>
                <td className="p-3 border">₹15,000</td>
                <td className="p-3 border">500</td>
                <td className="p-3 border">Trekking, Bonfire</td>
              </tr>
              <tr>
                <td className="p-3 border">Goa</td>
                <td className="p-3 border">4 Days</td>
                <td className="p-3 border">₹20,000</td>
                <td className="p-3 border">700</td>
                <td className="p-3 border">Beaches, Parties</td>
              </tr>
            </tbody>
          </table>
          <button className="mt-6 px-6 py-3 bg-pink-600 text-white rounded">Book Best Fit</button>
        </div>
      </div>
    </section>
  );
}
