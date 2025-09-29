export default function ClosingCTA() {
  return (
    <section className="py-20 bg-purple-600 text-white text-center relative">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">
          Carvaan Isn’t Just a Marketplace. It’s a Community.
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Travel simpler, earn rewards, and join a family of explorers who make memories together.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-white text-purple-600 rounded font-semibold">
            Explore Trips
          </button>
          <button className="px-6 py-3 bg-purple-800 rounded font-semibold">
            Join the Community
          </button>
        </div>
      </div>
    </section>
  );
}
