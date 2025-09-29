export default function Hero() {
  return (
    <section className="relative h-[80vh] bg-gray-900 text-white flex items-center justify-center text-center">
      {/* Background Concept - Train window (placeholder image for now) */}
      <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: "url('/images/community-hero.jpg')" }} />

      <div className="relative z-10 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold font-raleway mb-4">
          Welcome to the Carvaan Community 🚐✨
        </h1>
        <p className="font-shadow text-xl mb-6">
          Where every traveler becomes family.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-purple-600 rounded text-white font-semibold">
            Join the Carvaan Community
          </button>
          <button className="px-6 py-3 bg-white rounded text-purple-600 font-semibold">
            Share Your Story
          </button>
        </div>
      </div>
    </section>
  );
}
