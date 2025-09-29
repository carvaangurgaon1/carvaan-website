const steps = [
  { title: "Book a Trip", desc: "Join a group adventure hassle-free." },
  { title: "Earn Coins", desc: "Every ₹1 spent = 1 Carvaan Coin." },
  { title: "Redeem Coins", desc: "Use up to ₹2,500 worth coins per booking." },
  { title: "Repeat & Save", desc: "More trips = more rewards!" },
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">How Carvaan Coins Work 🪙</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="bg-gray-100 p-6 rounded shadow hover:shadow-lg transition">
              <div className="text-5xl mb-4">🪙</div>
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
        <button className="mt-8 px-6 py-3 bg-purple-600 text-white rounded">
          See Trips You Can Earn On
        </button>
      </div>
    </section>
  );
}
