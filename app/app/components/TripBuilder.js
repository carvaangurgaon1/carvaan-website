export default function TripBuilder() {
  return (
    <section id="trip-builder" className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        Build Your Custom Trip
      </h2>
      <p className="text-gray-600 mb-12">
        Choose your budget, duration, squad type & vibe → get instant matches.
      </p>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto px-6">
        <select className="p-3 border rounded">
          <option>Budget</option>
          <option>Under ₹10,000</option>
          <option>₹10,000 - ₹20,000</option>
          <option>₹20,000+</option>
        </select>
        <select className="p-3 border rounded">
          <option>Duration</option>
          <option>2-3 Days</option>
          <option>4-6 Days</option>
          <option>1+ Week</option>
        </select>
        <select className="p-3 border rounded">
          <option>Squad Type</option>
          <option>Solo</option>
          <option>Couple</option>
          <option>Friends</option>
          <option>Family</option>
        </select>
        <select className="p-3 border rounded">
          <option>Travel Vibe</option>
          <option>Adventure</option>
          <option>Relaxation</option>
          <option>Culture</option>
          <option>Party</option>
        </select>
      </form>
      <div className="mt-10">
        <a
          href="#featured-trips"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg"
        >
          Build My Trip
        </a>
      </div>
    </section>
  );
}
