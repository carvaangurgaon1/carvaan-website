const options = [
  { icon: "💬", label: "Chat with Us", link: "https://wa.me/919999999999" },
  { icon: "📞", label: "Call Us", link: "tel:+919999999999" },
  { icon: "📩", label: "Drop an Email", link: "mailto:support@carvaan.co" },
  { icon: "🤝", label: "Partnerships & Captains", link: "/partnerships" },
];

export default function QuickContacts() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Quick Contact Options</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {options.map((o, i) => (
            <a
              key={i}
              href={o.link}
              className="bg-purple-50 hover:bg-purple-100 p-6 rounded shadow hover:shadow-lg transition block"
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
