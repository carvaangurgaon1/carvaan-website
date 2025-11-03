import { motion } from "framer-motion";

export default function EngagementZone() {
  return (
    <section className="bg-gradient-to-r from-pink-100 via-white to-yellow-100 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold text-secondary mb-6"
        >
          Engagement Zone 🎯
        </motion.h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Participate in polls, take fun travel quizzes, and discover your perfect adventure match!
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Poll */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border hover:shadow-xl transition">
            <h3 className="text-lg font-semibold text-secondary mb-4">
              Poll: What’s your dream destination?
            </h3>
            <ul className="text-left space-y-3">
              {["Ladakh", "Goa", "Kasol", "Rajasthan"].map((place) => (
                <li key={place}>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="poll" className="accent-pink-500" /> {place}
                  </label>
                </li>
              ))}
            </ul>
            <button className="mt-5 bg-pink-600 text-white px-4 py-2 rounded-lg w-full hover:bg-pink-700 transition">
              Submit Vote
            </button>
          </div>

          {/* Quiz */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border hover:shadow-xl transition">
            <h3 className="text-lg font-semibold text-secondary mb-4">
              Quick Quiz: What type of traveler are you?
            </h3>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg w-full hover:bg-purple-700 transition">
              Take the Quiz
            </button>
          </div>

          {/* Find Your Trip */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border hover:shadow-xl transition">
            <h3 className="text-lg font-semibold text-secondary mb-4">
              Find Your Perfect Trip 🔍
            </h3>
            <select className="w-full border rounded-md px-3 py-2 mb-4 text-gray-700">
              <option>Choose your vibe</option>
              <option>Adventure</option>
              <option>Relaxation</option>
              <option>Culture</option>
            </select>
            <button className="bg-yellow-400 text-purple-800 px-4 py-2 rounded-lg w-full font-semibold hover:bg-yellow-300 transition">
              Search Trips
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
