const values = [
  { icon: "🚐", title: "One Place. Zero Stress.", text: "Compare providers in one click." },
  { icon: "👯", title: "Trips for Everyone.", text: "Friends, Couples, Families, Solo." },
  { icon: "💰", title: "Carvaan Coins.", text: "Every booking = future savings." },
];

export default function WhyCarvaan() {
  return (
    <section id="why-carvaan" className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        More Than Travel. A Marketplace That Works for You.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {values.map((val, i) => (
          <div key={i} className="p-6 bg-white rounded shadow">
            <div className="text-4xl">{val.icon}</div>
            <h3 className="font-semibold mt-3">{val.title}</h3>
            <p className="text-gray-600 mt-2">{val.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <a href="#how-it-works" className="bg-indigo-600 text-white px-6 py-3 rounded">
          See How It Works
        </a>
      </div>
    </section>
  );
}
