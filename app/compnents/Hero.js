export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-gradient-to-r from-indigo-700 to-purple-800 text-white py-24 text-center"
    >
      {/* Background Placeholder - can be replaced with video */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold font-['Raleway'] mb-4">
          One Marketplace. Endless Group Trips. Zero Stress.
        </h1>
        <p className="text-xl font-['Shadow Script'] mb-8">
          From Solo to Squad, Carvaan has your back.
        </p>
        <a
          href="#featured-trips"
          className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500"
        >
          Start Browsing Trips
        </a>
      </div>
    </section>
  );
}
