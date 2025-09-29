export default function ClosingCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center">
      <h2 className="text-4xl font-bold mb-4">
        Your Next Trip Starts with a Conversation.
      </h2>
      <p className="text-lg mb-6 font-shadow">
        Reach out. We’ll make travel stress-free, memorable, and rewarding.
      </p>
      <div className="flex justify-center gap-4">
        <a href="#lead-form" className="px-6 py-3 bg-white text-purple-700 font-semibold rounded">
          Submit My Query
        </a>
        <a href="/trips" className="px-6 py-3 border border-white rounded font-semibold">
          Browse Trips
        </a>
      </div>
    </section>
  );
}
