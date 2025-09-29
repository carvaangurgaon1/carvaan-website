export default function ValueBlock() {
  const values = [
    { icon: "👯", title: "Make Friends for Life", desc: "Trips connect strangers into squads." },
    { icon: "🚐", title: "Exclusive Perks", desc: "Earn coins, get early trip access." },
    { icon: "🌍", title: "Be Part of a Movement", desc: "Travel, share, and inspire." },
  ];

  return (
    <section className="py-16 bg-purple-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Why Join the Community?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((val, idx) => (
            <div key={idx} className="bg-white shadow p-6 rounded">
              <div className="text-4xl mb-4">{val.icon}</div>
              <h3 className="font-semibold mb-2">{val.title}</h3>
              <p className="text-gray-600">{val.desc}</p>
            </div>
          ))}
        </div>
        <button className="mt-10 px-6 py-3 bg-purple-600 text-white rounded">
          Become a Carvaaner
        </button>
      </div>
    </section>
  );
}
