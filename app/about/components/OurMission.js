// app/about/components/OurMission.js
const missions = [
  { icon: "🚐", text: "Simplify group travel planning with one marketplace." },
  { icon: "👯", text: "Build a vibrant community of captains, agents, and explorers." },
  { icon: "💰", text: "Reward loyalty with Carvaan Coins that make travel accessible." },
  { icon: "🌍", text: "Create sustainable, meaningful journeys that connect people." },
];

export default function OurMission() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Our Mission</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {missions.map((m, i) => (
            <div key={i} className="p-6 bg-white shadow rounded-lg hover:shadow-lg transition">
              <div className="text-4xl">{m.icon}</div>
              <p className="mt-4 text-gray-700">{m.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
