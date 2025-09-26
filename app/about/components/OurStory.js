// app/about/components/OurStory.js
export default function OurStory() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Text */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="mb-6">
            Carvaan was born out of frustration with messy trip planning—
            multiple agents, endless calls, scattered tabs. We wanted one place
            where solo travelers, squads, families, and captains could come
            together. That’s how Carvaan became a marketplace—curated, simple,
            and community-powered.
          </p>
          <p className="mb-6">
            Today, we’re not just a platform—we’re a revolution in group travel.
            A place where memories begin with a click.
          </p>
          <button className="px-6 py-3 bg-purple-600 text-white rounded-lg">
            Join the Carvaan Community
          </button>
        </div>

        {/* Right: Carousel (placeholder for now) */}
        <div className="bg-gray-200 h-80 flex items-center justify-center">
          <span className="text-gray-500">[Carousel of Group Photos]</span>
        </div>
      </div>
    </section>
  );
}
