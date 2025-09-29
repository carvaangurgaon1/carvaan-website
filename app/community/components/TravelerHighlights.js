export default function TravelerHighlights() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold font-raleway mb-6">
          Traveler Highlights 🎥
        </h2>
        <p className="mb-10">Reels, stories, and moments tagged with #CarvaanCommunity</p>

        {/* Grid placeholder for Reels/Stories */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-200 h-60 flex items-center justify-center rounded">
            Reel 1
          </div>
          <div className="bg-gray-200 h-60 flex items-center justify-center rounded">
            Reel 2
          </div>
          <div className="bg-gray-200 h-60 flex items-center justify-center rounded">
            Reel 3
          </div>
        </div>

        <button className="mt-10 px-6 py-3 bg-purple-600 text-white rounded">
          Tag @carvaan.co to Get Featured
        </button>
      </div>
    </section>
  );
}
