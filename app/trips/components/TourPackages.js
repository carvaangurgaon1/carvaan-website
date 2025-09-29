// app/trips/components/TourPackages.js
export default function TourPackages() {
  const packages = [
    { id: 1, title: "Rajasthan Royal Escape", duration: "6 Days", price: 30000, image: "/rajasthan.jpg" },
    { id: 2, title: "Himalayan Trek", duration: "7 Days", price: 35000, image: "/himalaya.jpg" },
    { id: 3, title: "Kerala Backwaters", duration: "5 Days", price: 25000, image: "/kerala.jpg" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">🌍 Tour Packages</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-lg shadow hover:shadow-xl transition">
              <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
                <p className="text-gray-500">{pkg.duration}</p>
                <p className="text-purple-600 font-bold">₹{pkg.price.toLocaleString()}</p>
                {/* Correct Coin Calculation */}
                <p className="text-sm text-gray-600 mt-1">
                  Earn <span className="font-semibold">{pkg.price}</span> Coins (₹{pkg.price * 0.1} value)
                </p>
                <div className="mt-4 flex gap-3">
                  <button className="bg-purple-600 text-white px-4 py-2 rounded">Book Now</button>
                  <button className="border px-4 py-2 rounded">Save</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-12 px-6 py-3 bg-pink-600 text-white rounded">View All Tour Packages</button>
      </div>
    </section>
  );
}
