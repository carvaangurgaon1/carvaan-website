export default function Stories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Stories That Inspire ✨</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((story) => (
            <div key={story} className="bg-white p-6 shadow rounded hover:shadow-lg transition">
              <div className="h-40 bg-gray-200 rounded mb-4">[Cover Image]</div>
              <h3 className="font-semibold mb-2">
                From Solo to Squad: How Riya Found Her Tribe
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                “Carvaan turned my solo trip into a lifetime of friendships...”
              </p>
              <a href="#" className="text-purple-600 font-medium">
                Read Full Story →
              </a>
            </div>
          ))}
        </div>
        <button className="mt-10 px-6 py-3 bg-purple-600 text-white rounded">
          Explore More Stories
        </button>
      </div>
    </section>
  );
}
