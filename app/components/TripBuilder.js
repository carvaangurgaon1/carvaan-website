"use client";

import { useState } from "react";
import { FiMapPin, FiCalendar, FiUsers } from "react-icons/fi";
import { motion } from "framer-motion";

export default function TripBuilder() {
  const [tripData, setTripData] = useState({
    destination: "",
    date: "",
    people: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTripData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Trip Builder:
    Destination: ${tripData.destination}
    Date: ${tripData.date}
    People: ${tripData.people}`);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-purple-50 via-white to-pink-50 text-center">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-purple-700 mb-4"
        >
          Build Your Dream Trip 🧭
        </motion.h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Don’t find the perfect trip? Customize your own adventure with Carvaan’s
          <span className="text-pink-600 font-semibold"> Trip Builder</span>.
          Choose your destination, travel date, and group size — we’ll handle the rest!
        </p>

        {/* Trip Builder Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 md:p-8 rounded-2xl shadow-lg grid md:grid-cols-4 gap-4 items-center border"
        >
          {/* Destination */}
          <div className="relative flex items-center border rounded-lg px-3 py-2 bg-gray-50">
            <FiMapPin className="text-pink-500 text-lg mr-2" />
            <input
              type="text"
              name="destination"
              value={tripData.destination}
              onChange={handleChange}
              placeholder="Enter Destination"
              className="w-full bg-transparent outline-none text-gray-800"
              required
            />
          </div>

          {/* Date */}
          <div className="relative flex items-center border rounded-lg px-3 py-2 bg-gray-50">
            <FiCalendar className="text-pink-500 text-lg mr-2" />
            <input
              type="date"
              name="date"
              value={tripData.date}
              onChange={handleChange}
              className="w-full bg-transparent outline-none text-gray-800"
              required
            />
          </div>

          {/* People */}
          <div className="relative flex items-center border rounded-lg px-3 py-2 bg-gray-50">
            <FiUsers className="text-pink-500 text-lg mr-2" />
            <input
              type="number"
              name="people"
              value={tripData.people}
              onChange={handleChange}
              placeholder="No. of People"
              min="1"
              className="w-full bg-transparent outline-none text-gray-800"
              required
            />
          </div>

          {/* CTA Button */}
          <button
            type="submit"
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 px-5 rounded-lg hover:opacity-90 transition"
          >
            Build My Trip →
          </button>
        </motion.form>
      </div>
    </section>
  );
}
