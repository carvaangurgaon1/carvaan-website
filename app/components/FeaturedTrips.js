const trips = [
  { destination: "Manali", price: "₹7,500", duration: "3N/4D", captain: "Captain A" },
  { destination: "Goa", price: "₹12,000", duration: "4N/5D", captain: "Captain B" },
  { destination: "Ladakh", price: "₹18,000", duration: "6N/7D", captain: "Captain C" },
];

export default function FeaturedTrips() {
  return (
    <section id="featured-trips" className="py-20 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Featured Trips & Deals
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {trips.map((trip, i) => (
          <div key={i} className="border rounded-lg p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">{trip.destination}</h3>
            <p className="text-gray-600">{trip.duration}</p>
            <p className="font-bold mt-2">{trip.price}</p>
            <p className="text-sm text-indigo-600">{trip.captain}</p>
            <div className="flex gap-3 mt-4">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded">Book Now</button>
              <button className="border border-indigo-600 text-indigo-600 px-4 py-2 rounded">View Itinerary</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
