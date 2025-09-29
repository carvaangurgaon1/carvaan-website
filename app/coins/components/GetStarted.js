export default function GetStarted() {
  return (
    <section className="py-20 bg-gradient-to-r from-yellow-400 to-purple-600 text-white text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">Start Earning Coins Today 🪙</h2>
        <p className="mb-6 max-w-xl mx-auto">
          Book your first trip, collect coins instantly, and unlock your next adventure faster.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-white text-purple-600 rounded font-semibold">
            Explore Trips & Earn
          </button>
          <button className="px-6 py-3 border border-white rounded font-semibold">
            Sign Up to Track Coins
          </button>
        </div>
      </div>
    </section>
  );
}
