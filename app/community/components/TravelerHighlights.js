<section className="py-16 bg-white">
  <div className="container mx-auto px-4 text-center">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
    >
      Traveler Highlights
    </motion.h2>
    <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
      Real travelers. Real experiences. Explore stories, photos, and reels from the Carvaan family.
    </p>

    {/* Grid Layout */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {[
        "https://source.unsplash.com/400x400/?mountains,travel",
        "https://source.unsplash.com/400x400/?friends,trip",
        "https://source.unsplash.com/400x400/?beach,sunset",
        "https://source.unsplash.com/400x400/?hiking,adventure",
        "https://source.unsplash.com/400x400/?forest,trek",
        "https://source.unsplash.com/400x400/?city,explore",
        "https://source.unsplash.com/400x400/?camping,group",
        "https://source.unsplash.com/400x400/?roadtrip,travel",
      ].map((img, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="relative overflow-hidden rounded-2xl shadow-md group"
        >
          <Image
            src={img}
            alt={`Traveler highlight ${i + 1}`}
            width={400}
            height={400}
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <p className="text-white font-semibold text-lg">#CarvaanCommunity</p>
          </div>
        </motion.div>
      ))}
    </div>

    {/* CTA Button */}
    <div className="mt-12">
      <Link
        href="#"
        className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:opacity-90 transition"
      >
        Explore More Stories
      </Link>
    </div>
  </div>
</section>
]
