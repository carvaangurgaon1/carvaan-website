const stories = [
  { user: "Riya", review: "Best trip ever with Carvaan!", img: "/images/traveler1.jpg" },
  { user: "Amit", review: "Seamless booking & fun memories!", img: "/images/traveler2.jpg" },
  { user: "Neha", review: "Loved the captain-led trip to Goa!", img: "/images/traveler3.jpg" },
];

export default function CommunityStories() {
  return (
    <section id="community" className="py-20 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Carvaan Community & Stories
      </h2>
      <p className="text-gray-600 mb-10">
        “1,000+ Travelers, 5-Star Rated Trips, Memories that Last.”
      </p>
      <div className="flex gap-6 overflow-x-auto px-6">
        {stories.map((story, i) => (
          <div
            key={i}
            className="min-w-[250px] bg-gray-100 rounded-lg shadow p-6"
          >
            <img
              src={story.img}
              alt={story.user}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <p className="italic text-gray-700 mb-2">“{story.review}”</p>
            <p className="font-semibold">{story.user}</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <a
          href="#"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg"
        >
          Join the Carvaan Community
        </a>
      </div>
    </section>
  );
}
