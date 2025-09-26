// app/about/components/MeetTheTeam.js
const team = [
  { name: "Rahul", role: "Chief Explorer", intro: "Obsessed with treks & tech", img: "/team1.jpg" },
  { name: "Priya", role: "Community Captain", intro: "Loves connecting people", img: "/team2.jpg" },
  { name: "Arjun", role: "Tech Wanderer", intro: "Writes code on the road", img: "/team3.jpg" },
];

export default function MeetTheTeam() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">We’re travelers first, professionals second.</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {team.map((t, i) => (
            <div key={i} className="p-6 bg-gray-100 rounded-lg hover:shadow-lg transition">
              <img src={t.img} alt={t.name} className="w-32 h-32 rounded-full mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">{t.name}</h3>
              <p className="text-sm text-gray-600">{t.role}</p>
              <p className="mt-2 text-gray-700">{t.intro}</p>
            </div>
          ))}
        </div>
        <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg">Work With Us</button>
      </div>
    </section>
  );
}
