export default function Hero() {
  return (
    <section className="relative h-[70vh] bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-center text-white">
      <div className="z-10 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Let’s Plan Your Next Adventure Together.
        </h1>
        <p className="text-xl mb-6 font-shadow">
          Got a query, idea, or dream trip in mind? We’d love to hear from you.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#lead-form" className="px-6 py-3 bg-white text-purple-700 font-semibold rounded">
            Submit Your Query
          </a>
          <a href="/trips" className="px-6 py-3 border border-white rounded font-semibold">
            Explore Trips
          </a>
        </div>
      </div>
    </section>
  );
}
