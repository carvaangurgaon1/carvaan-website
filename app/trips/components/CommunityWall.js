// app/trips/components/CommunityWall.js
export default function CommunityWall() {
  return (
    <section className="py-20 bg-gray-900 text-white text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6">#CarvaanCommunity</h2>
        <p className="mb-8 text-gray-300">1000+ Happy Travellers. 5-Star Trips. Real Stories.</p>
        {/* Fake Instagram grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-700 h-40">[Reel]</div>
          <div className="bg-gray-700 h-40">[Story]</div>
          <div className="bg-gray-700 h-40">[Reel]</div>
          <div className="bg-gray-700 h-40">[Story]</div>
        </div>
        <button className="mt-10 px-6 py-3 bg-pink-600 rounded">Follow Us on Instagram</button>
      </div>
    </section>
  );
}
