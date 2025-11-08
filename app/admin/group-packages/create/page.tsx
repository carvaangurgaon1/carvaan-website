"use client";

import { useState } from "react";
import { FiSave } from "react-icons/fi";

export default function CreatePackagePage() {
  const [formData, setFormData] = useState({
    companyName: "",
    tripTitle: "",
    pickupCity: "",
    destinationCity: "",
    meals: "", // replaced seatsLeft
    duration: "",
    startDates: [] as string[], // multi-date
    discountPrice: "",
    actualPrice: "",
    captain: "",
    transportation: "",
    accommodation: "",
    roomSharing: "",
    network: "",
    photography: "",
    difficulty: "",
    localExperience: "",
    travelStyle: "",
    tripPace: "",
    firstTime: "No",
    discountsAvailable: "No",
    ageRange: "",
    foodOptions: "",
    groupSize: "",
    flightsInclusive: "No",
    citiesIncluded: "",
    inclusions: "",
    exclusions: "",
    packingGuide: "",
    itinerary: [{ day: 1, detail: "" }],
    handpicked: "No",
    trending: "No",
    isActive: "Yes",
  });

  // handle general inputs
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ fixed: handle multi-date selection
  const handleDateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedDates = Array.from(e.target.selectedOptions).map(
      (option) => option.value
    );
    setFormData((prev) => ({ ...prev, startDates: selectedDates }));
  };

  // itinerary updates
  const handleItineraryChange = (index: number, value: string) => {
    const updated = [...formData.itinerary];
    updated[index].detail = value;
    setFormData((prev) => ({ ...prev, itinerary: updated }));
  };

  const addItineraryDay = () => {
    setFormData((prev) => ({
      ...prev,
      itinerary: [
        ...prev.itinerary,
        { day: prev.itinerary.length + 1, detail: "" },
      ],
    }));
  };

  const removeItineraryDay = (index: number) => {
    const updated = formData.itinerary.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, itinerary: updated }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Package Created:", formData);
    alert("✅ Package Created Successfully!");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Create New Package ✈️
      </h1>

      <form
        onSubmit={handleSubmit}
        className="grid lg:grid-cols-3 gap-8 bg-white p-6 rounded-xl shadow-md border"
      >
        {/* LEFT SECTION */}
        <div className="lg:col-span-2 space-y-8">
          {/* Section 1 — Basic Info */}
          <div>
            <h2 className="text-lg font-semibold text-purple-600 mb-3">
              Basic Information
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="companyName"
                placeholder="Company Name*"
                value={formData.companyName}
                onChange={handleChange}
                className="border rounded-md px-4 py-2 w-full"
              />
              <input
                name="tripTitle"
                placeholder="Trip Title*"
                value={formData.tripTitle}
                onChange={handleChange}
                className="border rounded-md px-4 py-2 w-full"
              />
              <input
                name="pickupCity"
                placeholder="Pickup City*"
                value={formData.pickupCity}
                onChange={handleChange}
                className="border rounded-md px-4 py-2 w-full"
              />
              <input
                name="destinationCity"
                placeholder="Destination City*"
                value={formData.destinationCity}
                onChange={handleChange}
                className="border rounded-md px-4 py-2 w-full"
              />
            </div>
          </div>

          {/* Section 2 — Trip Details */}
          <div>
            <h2 className="text-lg font-semibold text-purple-600 mb-3">
              Trip Details
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {/* Replaced Seats Left with Meals */}
              <select
                name="meals"
                value={formData.meals}
                onChange={handleChange}
                className="border rounded-md px-4 py-2"
              >
                <option value="">Number of Meals*</option>
                <option value="1">1 Meal</option>
                <option value="2">2 Meals</option>
                <option value="3">3 Meals</option>
              </select>

              <input
                name="duration"
                type="number"
                placeholder="Duration (Days)"
                value={formData.duration}
                onChange={handleChange}
                className="border rounded-md px-4 py-2"
              />

              {/* ✅ Multi-date selection */}
              <label className="col-span-2 text-sm text-gray-600">
                Select Trip Dates (multi-select with Ctrl/Command)
                <select
                  multiple
                  size={6}
                  value={formData.startDates}
                  onChange={handleDateChange}
                  className="border rounded-md px-4 py-2 w-full mt-1"
                >
                  {Array.from({ length: 31 }).map((_, i) => {
                    const d = new Date();
                    d.setDate(d.getDate() + i);
                    const dateString = d.toISOString().split("T")[0];
                    return (
                      <option key={i} value={dateString}>
                        {d.toDateString()}
                      </option>
                    );
                  })}
                </select>
              </label>

              <select
                name="transportation"
                value={formData.transportation}
                onChange={handleChange}
                className="border rounded-md px-4 py-2"
              >
                <option value="">Transportation*</option>
                <option>Bus</option>
                <option>Train</option>
                <option>Flight</option>
                <option>Private Vehicle</option>
              </select>
            </div>
          </div>

          {/* Section 3 — Pricing & Availability */}
          <div>
            <h2 className="text-lg font-semibold text-purple-600 mb-3">
              Pricing & Availability
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="discountPrice"
                type="number"
                placeholder="Discount Price Per Person*"
                value={formData.discountPrice}
                onChange={handleChange}
                className="border rounded-md px-4 py-2"
              />
              <input
                name="actualPrice"
                type="number"
                placeholder="Actual Price Per Person*"
                value={formData.actualPrice}
                onChange={handleChange}
                className="border rounded-md px-4 py-2"
              />
              <select
                name="isActive"
                value={formData.isActive}
                onChange={handleChange}
                className="border rounded-md px-4 py-2"
              >
                <option value="Yes">Active</option>
                <option value="No">Inactive</option>
              </select>
              <select
                name="handpicked"
                value={formData.handpicked}
                onChange={handleChange}
                className="border rounded-md px-4 py-2"
              >
                <option value="No">Handpicked? No</option>
                <option value="Yes">Handpicked? Yes</option>
              </select>
            </div>
          </div>

          {/* Section 4 — Features */}
          <div>
            <h2 className="text-lg font-semibold text-purple-600 mb-3">
              Features & Options
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <select
                name="difficulty"
                value={formData.difficulty}
                onChange={handleChange}
                className="border rounded-md px-4 py-2"
              >
                <option value="">Trip Difficulty Level*</option>
                <option>Easy</option>
                <option>Moderate</option>
                <option>Difficult</option>
              </select>
              <select
                name="travelStyle"
                value={formData.travelStyle}
                onChange={handleChange}
                className="border rounded-md px-4 py-2"
              >
                <option value="">Travel Style*</option>
                <option>Relaxed</option>
                <option>Adventurous</option>
                <option>Luxury</option>
              </select>
              <select
                name="roomSharing"
                value={formData.roomSharing}
                onChange={handleChange}
                className="border rounded-md px-4 py-2"
              >
                <option value="">Room Sharing*</option>
                <option>Single</option>
                <option>Double</option>
                <option>Triple</option>
              </select>
              <select
                name="ageRange"
                value={formData.ageRange}
                onChange={handleChange}
                className="border rounded-md px-4 py-2"
              >
                <option value="">Age Range*</option>
                <option>18-30</option>
                <option>30-45</option>
                <option>45+</option>
              </select>
            </div>
          </div>

          {/* Section 5 — Description & Content */}
          <div>
            <h2 className="text-lg font-semibold text-purple-600 mb-3">
              Description & Content
            </h2>
            <textarea
              name="description"
              placeholder="Write full package description..."
              value={(formData as any).description}
              onChange={handleChange}
              rows={4}
              className="border rounded-md w-full px-4 py-2"
            />
            <textarea
              name="inclusions"
              placeholder="Inclusions"
              value={formData.inclusions}
              onChange={handleChange}
              rows={2}
              className="border rounded-md w-full px-4 py-2 mt-3"
            />
            <textarea
              name="exclusions"
              placeholder="Exclusions"
              value={formData.exclusions}
              onChange={handleChange}
              rows={2}
              className="border rounded-md w-full px-4 py-2 mt-3"
            />
          </div>

          {/* ✈️ Section 6 — Trip Itinerary */}
          <div>
            <h2 className="text-lg font-semibold text-purple-600 mb-3">
              Trip Itinerary
            </h2>
            {formData.itinerary.map((day, i) => (
              <div key={i} className="flex gap-2 mb-2 items-start">
                <span className="font-semibold text-gray-600">
                  Day {day.day}:
                </span>
                <textarea
                  placeholder={`Itinerary for Day ${day.day}`}
                  value={day.detail}
                  onChange={(e) => handleItineraryChange(i, e.target.value)}
                  rows={2}
                  className="border rounded-md w-full px-4 py-2"
                />
                <button
                  type="button"
                  onClick={() => removeItineraryDay(i)}
                  className="text-red-600 font-bold hover:text-red-800"
                >
                  ✕
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addItineraryDay}
              className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              + Add Day
            </button>
          </div>

          <button
            type="submit"
            className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-purple-700 transition flex items-center gap-2"
          >
            <FiSave /> Create Package
          </button>
        </div>

        {/* RIGHT SECTION — LIVE PREVIEW */}
        <div className="bg-gray-50 border rounded-lg p-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">
            🪄 Live Preview
          </h2>
          <div className="space-y-2 text-sm text-gray-700">
            <p>
              <strong>Trip Title:</strong> {formData.tripTitle || "—"}
            </p>
            <p>
              <strong>Destination:</strong> {formData.destinationCity || "—"}
            </p>
            <p>
              <strong>Duration:</strong> {formData.duration || "—"} Days
            </p>
            <p>
              <strong>Price:</strong> ₹{formData.discountPrice || "—"} /person
            </p>
            <p>
              <strong>Meals:</strong> {formData.meals || "—"}
            </p>
            <p>
              <strong>Trip Dates:</strong>{" "}
              {formData.startDates.join(", ") || "—"}
            </p>
            <p>
              <strong>Trip Difficulty:</strong> {formData.difficulty || "—"}
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
