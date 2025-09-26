const steps = [
  {
    title: "Search & Compare",
    description: "Multiple group captains, agents & providers in one place.",
  },
  {
    title: "Filter & Choose",
    description: "Sort by destination, budget, squad size, or vibe.",
  },
  {
    title: "Book in 1 Click",
    description: "No messy agents, no multiple tabs.",
  },
  {
    title: "Earn Carvaan Coins",
    description: "Travel now, save for your next trip.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">How Carvaan Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center gap-4">
        <a
          href="#featured-trips"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg"
        >
          Explore Trips
        </a>
        <a
          href="#trip-builder"
          className="bg-gray-200 text-black px-6 py-3 rounded-lg"
        >
          Plan My Custom Trip
        </a>
      </div>
    </section>
  );
}
