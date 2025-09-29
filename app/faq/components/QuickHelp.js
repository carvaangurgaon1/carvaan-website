const options = [
  { icon: "💬", label: "Chat with Us", link: "https://wa.me/919999999999" },
  { icon: "📩", label: "Drop Us an Email", link: "mailto:support@carvaan.co" },
  { icon: "📞", label: "Call Support", link: "tel:+919999999999" },
  { icon: "📚", label: "Explore Travel Guides", link: "/guides" },
];

export default function QuickHelp() {
  return (
    <section className="py-16 bg-purple-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Quick Help 🚑</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {options.map((o, i) => (
            <a
              key={i}
              href={o.link}
              className="bg-white p-6 rounded shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{o.icon}</div>
              <h3 className="font-semibold">{o.label}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
