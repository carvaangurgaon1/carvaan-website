// app/trips/components/WhyCarvaan.js
export default function WhyCarvaan() {
  const features = [
    { title: "Marketplace Access", desc: "Multiple agents & captains in one place.", icon: "🚐" },
    { title: "Trips for Everyone", desc: "Friends, families, couples, corporates.", icon: "👯" },
    { title: "Rewards That Pay Back", desc: "Earn & redeem Carvaan Coins.", icon: "💰" },
  ];

  return (
    <section className="py-20 bg-white text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-10">Why Book with Carvaan</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-6 bg-gray-100 rounded shadow">
              <div className="text-5xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
        <button className="mt-10 px-6 py-3 bg-purple-600 text-white rounded">Learn More About Carvaan Coins</button>
      </div>
    </section>
  );
}
