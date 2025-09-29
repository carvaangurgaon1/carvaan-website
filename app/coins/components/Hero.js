export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-r from-yellow-400 to-purple-600 text-white text-center">
      {/* Placeholder animation (coin stack) */}
      <div className="absolute inset-0 opacity-20 bg-[url('/images/coins-bg.png')] bg-cover bg-center" />

      <div className="relative z-10 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Travel That Pays You Back.
        </h1>
        <p className="text-xl mb-6 font-shadow">
          Every booking earns you Carvaan Coins. Collect, redeem, repeat.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-white text-purple-700 font-semibold rounded">
            Start Collecting Coins
          </button>
          <button className="px-6 py-3 border border-white rounded font-semibold">
            Explore Trips & Earn
          </button>
        </div>
      </div>
    </section>
  );
}
