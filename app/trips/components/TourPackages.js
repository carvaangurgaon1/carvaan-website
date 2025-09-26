// app/trips/components/TourPackages.js
export default function TourPackages() {
  const packages = [
    { id: 1, title: "Goa Getaway", duration: "4 Days", price: "₹20,000", coins: 500, image: "/goa.jpg" },
    { id: 2, title: "Himalayan Trek", duration: "7 Days", price: "₹35,000", coins: 900, image: "/himalaya.jpg" },
    { id: 3, title: "Rajasthan Heritage", duration: "5 Days", price: "₹25,000", coins: 700, image: "/rajasthan.jpg" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Tour Packages</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-lg shadow hover:shadow-lg transition group">
              <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{pkg.title}</h3>
                <p className="text-gray-500">{pkg.duration} • {pkg.price}</p>
                <span className="inline-block mt-2 bg-yellow-200 text-yellow-800 px-2 py-1 rounded text-sm">
                  Earn {pkg.coins} Carvaan Coins
                </span>
                <div className="mt-4 flex justify-between opacity-0 group-hover:opacity-100 transition">
                  <button className="bg-purple-600 text-white px-4 py-2 rounded">Book Now</button>
                  <button className="border px-4 py-2 rounded">Compare</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-10 px-6 py-3 bg-pink-600 text-white rounded">View All Tour Packages</button>
      </div>
    </section>
  );
}
