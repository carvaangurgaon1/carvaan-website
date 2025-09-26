export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="relative py-24 bg-gradient-to-r from-purple-700 to-indigo-800 text-center text-white"
    >
      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Your Next Trip. One Click Away.
        </h2>
        <p className="text-lg mb-8">
          Don’t stress. Don’t wait. Travel made simple.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#featured-trips"
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold"
          >
            Browse Trips Now
          </a>
          <a
            href="#trip-builder"
            className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold"
          >
            Create My Custom Trip
          </a>
        </div>
      </div>
    </section>
  );
}
