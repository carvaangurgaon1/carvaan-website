const socials = [
  { icon: "📸", label: "Instagram", link: "https://instagram.com/carvaan.co" },
  { icon: "▶️", label: "YouTube", link: "https://youtube.com/@carvaan" },
  { icon: "📘", label: "Facebook", link: "https://facebook.com/carvaan" },
  { icon: "💼", label: "LinkedIn", link: "https://linkedin.com/company/carvaan" },
];

export default function SocialConnect() {
  return (
    <section className="py-16 bg-purple-50 text-center">
      <h2 className="text-3xl font-bold mb-8">
        Stay in Touch with the Carvaan Community 🌍✨
      </h2>
      <div className="flex justify-center gap-6 flex-wrap">
        {socials.map((s, i) => (
          <a
            key={i}
            href={s.link}
            className="bg-white p-6 rounded shadow hover:shadow-lg transition"
          >
            <div className="text-4xl mb-2">{s.icon}</div>
            <p>{s.label}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
