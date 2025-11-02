// app/trips/components/CustomTripBuilder.js
export default function CustomTripBuilder() {
  return (
    <section className="py-20 bg-gradient-to-r from-pink-100 to-purple-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Build Your Own Adventure</h2>
        <form className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto bg-white p-8 rounded shadow">
          <input type="text" placeholder="Choose Location" className="p-3 border rounded" />
          <select className="p-3 border rounded"><option>Duration</option></select>
          <select className="p-3 border rounded"><option>Squad Type</option></select>
          <select className="p-3 border rounded"><option>Head Count</option></select>
          <select className="p-3 border rounded"><option>Vibe</option></select>
          <input type="number" placeholder="Budget (₹)" className="p-3 border rounded" />
          <button className="col-span-2 bg-purple-600 text-white py-3 rounded">Plan My Trip</button>
        </form>
      </div>
    </section>
  );
}
