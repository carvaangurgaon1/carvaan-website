'use client';

import { motion } from "framer-motion";

export default function Stories() {
  return (
    <section className="bg-purple-50 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold text-secondary mb-6"
        >
          Share Your Story ✍️
        </motion.h2>

        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          Tell us about your latest trip and inspire thousands of travelers in the Carvaan community.
        </p>

        <form className="bg-white shadow-lg rounded-2xl p-8 text-left space-y-4">
          <input
            type="text"
            placeholder="Full Name*"
            className="w-full border rounded-md px-4 py-2"
            required
          />
          <input
            type="email"
            placeholder="Email*"
            className="w-full border rounded-md px-4 py-2"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number*"
            className="w-full border rounded-md px-4 py-2"
            required
          />
          <textarea
            placeholder="Write your travel story here..."
            rows="4"
            className="w-full border rounded-md px-4 py-2"
            required
          ></textarea>

          <div>
            <label className="block text-gray-700 mb-1">
              Upload Image/Video:
            </label>
            <input
              type="file"
              className="w-full border rounded-md px-4 py-2"
            />
          </div>

          <button
            type="submit"
            className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition w-full"
          >
            Submit Story
          </button>
        </form>
      </div>
    </section>
  );
}
