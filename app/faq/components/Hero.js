export default function Hero() {
  return (
    <section className="relative flex items-center justify-center h-[70vh] bg-gradient-to-r from-purple-600 to-pink-500 text-white text-center">
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Got Questions? We’ve Got Answers.
        </h1>
        <p className="text-xl mb-6 font-shadow">
          Your guide to stress-free adventures with Carvaan.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://wa.me/919999999999"
            className="px-6 py-3 bg-white text-purple-700 font-semibold rounded"
          >
            Ask on WhatsApp
          </a>
          <button className="px-6 py-3 border border-white rounded font-semibold">
            Explore Trips
          </button>
        </div>
      </div>
    </section>
  );
}
