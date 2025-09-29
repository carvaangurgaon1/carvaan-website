export default function EngagementZone() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Engagement Zone 🎉</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 rounded">Polls & Quizzes</div>
          <div className="bg-gray-100 p-6 rounded">Countdown Timer</div>
          <div className="bg-gray-100 p-6 rounded">Interactive Map</div>
        </div>

        <button className="mt-10 px-6 py-3 bg-purple-600 text-white rounded">
          Take the Quiz & Find Your Trip
        </button>
      </div>
    </section>
  );
}
