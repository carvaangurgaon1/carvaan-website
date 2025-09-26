export default function CarvaanCoins() {
  return (
    <section id="coins" className="py-20 bg-yellow-50 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Travel That Pays You Back.
      </h2>
      <p className="text-gray-600 mb-8">
        Book → Earn → Redeem → Repeat
      </p>
      <div className="bg-white max-w-lg mx-auto p-6 rounded shadow">
        <p className="text-xl font-semibold mb-4">
          You’ve earned <span className="text-indigo-600">250 Coins</span>.
        </p>
        <p className="text-gray-600 mb-6">
          Your next trip = ₹2,500 off!
        </p>
        <a
          href="#"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg"
        >
          Start Collecting Coins
        </a>
      </div>
    </section>
  );
}
