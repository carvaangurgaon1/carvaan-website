export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center">
      <h2 className="text-4xl font-bold mb-4">
        Didn’t find your answer? We’re just a click away.
      </h2>
      <div className="flex justify-center gap-4">
        <a
          href="https://wa.me/919999999999"
          className="px-6 py-3 bg-white text-purple-600 font-semibold rounded"
        >
          Ask Us on WhatsApp
        </a>
        <button className="px-6 py-3 border border-white rounded font-semibold">
          Submit a Question
        </button>
      </div>
    </section>
  );
}
