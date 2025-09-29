export default function PopularFAQs() {
  const popular = [
    "How do I use Carvaan Coins?",
    "How do I join a corporate trip?",
    "What’s the cancellation policy?",
    "Is EMI available for bookings?",
    "Who are Carvaan Captains?",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Popular FAQs 🔥</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {popular.map((q, i) => (
            <div key={i} className="bg-gray-100 p-6 rounded shadow">
              {q}
            </div>
          ))}
        </div>
        <button className="mt-8 px-6 py-3 bg-purple-600 text-white rounded">
          See All FAQs
        </button>
      </div>
    </section>
  );
}
