// app/about/components/Hero.js
export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-white h-[90vh] flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('/hero-travel.jpg')] bg-cover bg-center opacity-50"></div>
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold font-raleway">
          We’re More Than a Travel Platform. We’re Your Travel Partner.
        </h1>
        <p className="mt-4 text-xl font-[ShadowScript]">
          Our story is about simplifying travel, building community, and making every journey unforgettable.
        </p>
        <button className="mt-6 px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-lg text-lg">
          Explore Trips
        </button>
      </div>
    </section>
  );
}
