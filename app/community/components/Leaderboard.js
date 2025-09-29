export default function Leaderboard() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Top Explorers & Captains 🏆</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white shadow rounded p-6">
            <h3 className="font-semibold mb-4">Top Explorers</h3>
            <ul className="space-y-2">
              <li>Riya – 12 Trips | 12,000 Coins</li>
              <li>Aman – 10 Trips | 9,500 Coins</li>
              <li>Shreya – 9 Trips | 8,000 Coins</li>
            </ul>
          </div>

          <div className="bg-white shadow rounded p-6">
            <h3 className="font-semibold mb-4">Top Captains</h3>
            <ul className="space-y-2">
              <li>Rahul – 4.9★ Rated | 20 Trips Led</li>
              <li>Neha – 4.8★ Rated | 15 Trips Led</li>
              <li>Karan – 4.7★ Rated | 18 Trips Led</li>
            </ul>
          </div>
        </div>

        <button className="mt-10 px-6 py-3 bg-purple-600 text-white rounded">
          Coin Calculator
        </button>
      </div>
    </section>
  );
}
