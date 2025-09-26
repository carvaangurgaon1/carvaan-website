// app/trips/components/FinalCTA.js
export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold mb-4">Ready to Make Travel Simple?</h2>
        <p className="text-lg mb-8">One place. One click. Endless adventures.</p>
        <div className="flex justify-center gap-6">
          <button className="px-6 py-3 bg-white text-purple-600 rounded">Explore Tour Packages</button>
          <button className="px-6 py-3 border border-white rounded">Get a Corporate Proposal</button>
        </div>
      </div>
    </section>
  );
}
