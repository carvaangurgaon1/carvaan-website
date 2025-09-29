export default function RewardsShowcase() {
  const leaderboard = [
    { name: "Riya", coins: 12000, trips: 5 },
    { name: "Aman", coins: 9500, trips: 4 },
    { name: "Shreya", coins: 8000, trips: 3 },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Community Rewards Showcase 🏆</h2>
        <p className="mb-8">Every traveler wins with Carvaan.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {leaderboard.map((user, i) => (
            <div key={i} className="bg-gray-100 p-6 rounded shadow">
              <h3 className="font-semibold">{user.name}</h3>
              <p>🪙 {user.coins} Coins</p>
              <p>🚐 {user.trips} Trips</p>
            </div>
          ))}
        </div>
        <button className="mt-8 px-6 py-3 bg-purple-600 text-white rounded">
          Join the Leaderboard
        </button>
      </div>
    </section>
  );
}
