const benefits = [
  { icon: "💰", title: "Real Value", desc: "Redeem coins like currency, not just points." },
  { icon: "🚐", title: "All Trips Eligible", desc: "Every group, every captain counts." },
  { icon: "🎉", title: "No Fine Print", desc: "Simple redemption rules." },
  { icon: "👯", title: "Travel More, Save More", desc: "Coins add up fast." },
];

export default function Benefits() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Benefits of Carvaan Coins</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="bg-gray-100 p-6 rounded shadow">
              <div className="text-4xl mb-4">{b.icon}</div>
              <h3 className="font-semibold mb-2">{b.title}</h3>
              <p className="text-gray-600">{b.desc}</p>
            </div>
          ))}
        </div>
        <button className="mt-8 px-6 py-3 bg-purple-600 text-white rounded">
          Browse Eligible Trips
        </button>
      </div>
    </section>
  );
}
