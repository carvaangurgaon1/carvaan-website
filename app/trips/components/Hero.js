// app/trips/components/Hero.js
export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-white h-[90vh] flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('/trip-hero.jpg')] bg-cover bg-center opacity-60 animate-pulse"></div>
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-raleway font-bold">
          One Marketplace. Every Journey.
        </h1>
        <p className="mt-4 text-xl font-[ShadowScript]">
          From friends to corporates, discover trips made simple.
        </p>

        {/* Sticky Search + Filters */}
        <div className="mt-8 bg-white text-gray-800 rounded-lg shadow-lg flex flex-wrap justify-center gap-4 p-4 sticky top-4">
          <input type="text" placeholder="Destination" className="px-4 py-2 border rounded" />
          <input type="text" placeholder="Budget" className="px-4 py-2 border rounded" />
          <select className="px-4 py-2 border rounded">
            <option>Squad Type</option>
            <option>Friends</option>
            <option>Families</option>
            <option>Corporate</option>
          </select>
          <select className="px-4 py-2 border rounded">
            <option>Duration</option>
            <option>Weekend</option>
            <option>3–5 Days</option>
            <option>1 Week</option>
          </select>
          <select className="px-4 py-2 border rounded">
            <option>Theme</option>
            <option>Adventure</option>
            <option>Luxury</option>
            <option>Wellness</option>
          </select>
          <button className="px-6 py-2 bg-pink-600 text-white rounded-lg">Search</button>
        </div>

        <div className="mt-6 flex justify-center gap-4">
          <button className="px-6 py-3 bg-purple-600 rounded-lg">Browse All Trips</button>
          <button className="px-6 py-3 bg-gray-100 text-black rounded-lg">Plan a Custom Trip</button>
        </div>
      </div>
    </section>
  );
}
