const posts = [
  { title: "Best Squad Trips Under ₹10K", link: "#" },
  { title: "Top Captain-Led Adventures for 2025", link: "#" },
  { title: "Why Group Travel Works Better", link: "#" },
];

export default function BlogHub() {
  return (
    <section id="blog" className="py-20 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        Plan Smarter. Travel Better.
      </h2>
      <div className="max-w-3xl mx-auto grid gap-6 px-6">
        {posts.map((post, i) => (
          <a
            key={i}
            href={post.link}
            className="block p-6 border rounded-lg shadow hover:shadow-md transition text-left"
          >
            <h3 className="font-semibold text-xl">{post.title}</h3>
          </a>
        ))}
      </div>
      <div className="mt-10">
        <a
          href="#"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg"
        >
          Explore Travel Guides
        </a>
      </div>
    </section>
  );
}
