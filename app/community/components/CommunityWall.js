export default function CommunityWall() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Community Wall 📸</h2>
        <p className="mb-10">1000+ Happy Travelers. 5-Star Rated Trips. Growing Everyday.</p>

        {/* Mosaic placeholder */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((img) => (
            <div key={img} className="bg-gray-200 h-40 rounded">[Photo]</div>
          ))}
        </div>

        <button className="mt-10 px-6 py-3 bg-purple-600 text-white rounded">
          Leave Your Mark
        </button>
      </div>
    </section>
  );
}
