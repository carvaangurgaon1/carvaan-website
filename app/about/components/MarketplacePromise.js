// app/about/components/MarketplacePromise.js
const pillars = [
  { title: "For Travelers", text: "Simplified bookings, stress-free planning." },
  { title: "For Captains", text: "Exposure, loyal squads, growth opportunities." },
  { title: "For Agents", text: "Marketplace visibility, digital-first solutions." },
];

export default function MarketplacePromise() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">The Marketplace Promise</h2>
        <div className="flex overflow-x-auto space-x-6 pb-4">
          {pillars.map((p, i) => (
            <div key={i} className="min-w-[250px] p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-gray-700">{p.text}</p>
            </div>
          ))}
        </div>
        <button className="mt-8 px-6 py-3 bg-green-600 text-white rounded-lg">
          Become a Captain/Partner
        </button>
      </div>
    </section>
  );
}
