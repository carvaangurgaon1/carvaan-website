export default function CoinsInAction() {
  const trips = [
    { name: "Manali Adventure", price: 3000 },
    { name: "Corporate Retreat Goa", price: 12000 },
    { name: "Spiti Valley Trek", price: 8000 },
  ];

  return (
    <section className="py-16 bg-purple-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Coins in Action 🚐</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {trips.map((t, i) => (
            <div key={i} className="bg-white shadow rounded p-6">
              <h3 className="font-semibold mb-2">{t.name}</h3>
              <p>💰 Price: ₹{t.price}</p>
              <p>🪙 Coins Earned: {t.price}</p>
              <p>🎉 Redeem Value: ₹{Math.min(t.price * 0.1, 2500)}</p>
              <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded">
                View Package
              </button>
            </div>
          ))}
        </div>
        <button className="mt-8 px-6 py-3 bg-purple-600 text-white rounded">
          View All Packages
        </button>
      </div>
    </section>
  );
}
