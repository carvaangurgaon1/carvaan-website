"use client";

import { useState } from "react";

export default function CreateAgentPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    description: "",
    basedOn: "",
    trips: "",
    established: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-6">
      <div className="text-sm text-gray-500 mb-1">Carvaan &gt; Travel Agents &gt; Create Travel Agents</div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Create Travel Agents</h1>

      <div className="bg-white p-6 rounded-xl shadow-md border max-w-3xl">
        <form className="space-y-4">
          {/* Profile Picture */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Profile Picture*</label>
            <input type="file" className="border border-gray-300 rounded-lg w-full p-2" />
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Travel Agent Name*</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter name"
              className="border border-gray-300 rounded-lg w-full p-2"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="border border-gray-300 rounded-lg w-full p-2"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description*</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Enter details about the travel agent"
              className="border border-gray-300 rounded-lg w-full p-2 h-24"
            />
          </div>

          {/* Based On & Trips */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Based On</label>
              <input
                type="text"
                name="basedOn"
                value={form.basedOn}
                onChange={handleChange}
                placeholder="Enter Based Location"
                className="border border-gray-300 rounded-lg w-full p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">No. of Trips</label>
              <input
                type="number"
                name="trips"
                value={form.trips}
                onChange={handleChange}
                placeholder="Enter number of trips"
                className="border border-gray-300 rounded-lg w-full p-2"
              />
            </div>
          </div>

          {/* Established Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Established At*</label>
            <input
              type="date"
              name="established"
              value={form.established}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg w-full p-2"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-semibold"
          >
            Create Agent
          </button>
        </form>
      </div>
    </div>
  );
}
