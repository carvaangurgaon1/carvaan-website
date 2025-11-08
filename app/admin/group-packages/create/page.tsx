"use client";

import { useState } from "react";
import { FiPlus, FiSave, FiTrash2 } from "react-icons/fi";

type ItineraryDay = { day: number; title?: string; details?: string };

// --- helper to build a unique, URL-safe slug ---
function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function CreatePackagePage() {
  const [form, setForm] = useState({
    companyName: "",
    tripTitle: "",
    pickupCity: "",
    destinationCity: "",
    duration: "", // e.g. "3N/4D"
    price: "", // number as string
    image: "",
    mealsPerDay: "1", // dropdown 1/2/3
    startDateInput: "", // for date entry
    startDates: [] as string[], // all chosen dates
    description: "",
    inclusions: "",
    exclusions: "",
    // extras
    difficulty: "",
    travelStyle: "",
    roomSharing: "",
    ageRange: "",
  });

  const [itinerary, setItinerary] = useState<ItineraryDay[]>([]);
  const [submitting, setSubmitting] = useState(false);

  const onChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  // Add one date at a time (lets you multi-select by clicking Add for each)
  const addDate = () => {
    if (!form.startDateInput) return;
    if (!form.startDates.includes(form.startDateInput)) {
      setForm((p) => ({
        ...p,
        startDates: [...p.startDates, p.startDateInput],
        startDateInput: "",
      }));
    }
  };

  const removeDate = (d: string) => {
    setForm((p) => ({
      ...p,
      startDates: p.startDates.filter((x) => x !== d),
    }));
  };

  // Itinerary controls
  const addDay = () => {
    const dayNum = itinerary.length + 1;
    setItinerary((p) => [...p, { day: dayNum, title: "", details: "" }]);
  };

  const updateDay = (idx: number, field: "title" | "details", value: string) => {
    setItinerary((p) =>
      p.map((d, i) => (i === idx ? { ...d, [field]: value } : d))
    );
  };

  const removeDay = (idx: number) => {
    const next = itinerary.filter((_, i) => i !== idx);
    // re-number days
    setItinerary(next.map((d, i) => ({ ...d, day: i + 1 })));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.tripTitle || !form.destinationCity) {
      alert("Trip Title and Destination City are required.");
      return;
    }

    setSubmitting(true);

    // Build a unique slug from title
    const base = slugify(form.tripTitle);
    const slug = `${base}-${Date.now().toString(36)}`;

    // Map UI state -> API payload (what /api/trips expects)
    const payload = {
      slug, // REQUIRED by the API
      title: form.tripTitle, // REQUIRED by the API
      location: form.destinationCity,
      duration: form.duration,
      price: Number(form.price) || 0,
      image: form.image,
      mealsPerDay: Number(form.mealsPerDay) || 1,
      startDates: form.startDates, // ISO yyyy-mm-dd[]
      description: form.description,
      inclusions: form.inclusions,
      exclusions: form.exclusions,
      itinerary, // [{day,title,details}]
    };

    try {
      const res = await fetch("/api/trips", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        console.error("Create trip failed:", data);
        alert(`Failed to create trip: ${data?.error || res.statusText}`);
        setSubmitting(false);
        return;
      }

      alert("✅ Trip created!");

      // OPTIONAL: auto navigate to the newly created trip detail page
      // window.location.href = `/trips/group-trips/${slug}`;
      setSubmitting(false);
    } catch (err: any) {
      console.error(err);
      alert("Failed to create trip. Network or server error.");
      setSubmitting(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Create Group Trip
      </h1>

      <form
        onSubmit={submit}
        className="grid lg:grid-cols-3 gap-8 bg-white p-6 rounded-xl shadow-md border"
      >
        {/* LEFT — Core details */}
        <div className="lg:col-span-2 space-y-8">
          {/* Basic Info */}
          <section>
            <h2 className="text-lg font-semibold text-purple-600 mb-3">
              Basic Information
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="companyName"
                placeholder="Company Name"
                value={form.companyName}
                onChange={onChange}
                className="border rounded-md px-4 py-2 w-full"
              />
              <input
                name="tripTitle"
                placeholder="Trip Title*"
                value={form.tripTitle}
                onChange={onChange}
                className="border rounded-md px-4 py-2 w-full"
                required
              />
              <input
                name="pickupCity"
                placeholder="Pickup City"
                value={form.pickupCity}
                onChange={onChange}
                className="border rounded-md px-4 py-2 w-full"
              />
              <input
                name="destinationCity"
                placeholder="Destination City*"
                value={form.destinationCity}
                onChange={onChange}
                className="border rounded-md px-4 py-2 w-full"
                required
              />
            </div>
          </section>

          {/* Trip Details */}
          <section>
            <h2 className="text-lg font-semibold text-purple-600 mb-3">
              Trip Details
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="duration"
                placeholder='Duration (e.g. "3N/4D")'
                value={form.duration}
                onChange={onChange}
                className="border rounded-md px-4 py-2"
              />
              <select
                name="mealsPerDay"
                value={form.mealsPerDay}
                onChange={onChange}
                className="border rounded-md px-4 py-2"
              >
                <option value="1">Meals per day: 1</option>
                <option value="2">Meals per day: 2</option>
                <option value="3">Meals per day: 3</option>
              </select>

              <input
                name="price"
                type="number"
                placeholder="Price per person*"
                value={form.price}
                onChange={onChange}
                className="border rounded-md px-4 py-2"
              />
              <input
                name="image"
                placeholder="Hero Image URL*"
                value={form.image}
                onChange={onChange}
                className="border rounded-md px-4 py-2"
              />
            </div>

            {/* Multi-date selector */}
            <div className="mt-4">
              <label className="block text-sm text-gray-700 mb-2">
                Add Start Dates (select a date then click “Add Date” for each)
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="date"
                  name="startDateInput"
                  value={form.startDateInput}
                  onChange={onChange}
                  className="border rounded-md px-4 py-2"
                />
                <button
                  type="button"
                  onClick={addDate}
                  className="flex items-center gap-2 bg-purple-600 text-white px-3 py-2 rounded-md hover:bg-purple-700"
                >
                  <FiPlus /> Add Date
                </button>
              </div>

              {/* Selected date chips */}
              {form.startDates.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {form.startDates.map((d) => (
                    <span
                      key={d}
                      className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 border border-purple-200 rounded-full px-3 py-1 text-sm"
                    >
                      {new Date(d).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                      <button
                        type="button"
                        onClick={() => removeDate(d)}
                        className="text-purple-700/70 hover:text-purple-900"
                        aria-label={`Remove ${d}`}
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Description & Content */}
          <section>
            <h2 className="text-lg font-semibold text-purple-600 mb-3">
              Description & Content
            </h2>
            <textarea
              name="description"
              placeholder="Overview / description…"
              value={form.description}
              onChange={onChange}
              rows={4}
              className="border rounded-md w-full px-4 py-2"
            />
            <div className="grid md:grid-cols-2 gap-4 mt-3">
              <textarea
                name="inclusions"
                placeholder="Inclusions (one per line)"
                value={form.inclusions}
                onChange={onChange}
                rows={4}
                className="border rounded-md w-full px-4 py-2"
              />
              <textarea
                name="exclusions"
                placeholder="Exclusions (one per line)"
                value={form.exclusions}
                onChange={onChange}
                rows={4}
                className="border rounded-md w-full px-4 py-2"
              />
            </div>
          </section>

          {/* Itinerary Builder */}
          <section>
            <h2 className="text-lg font-semibold text-purple-600 mb-3">
              Trip Itinerary
            </h2>

            {itinerary.length === 0 && (
              <p className="text-sm text-gray-500 mb-2">
                No days added yet. Click “Add Day” to begin.
              </p>
            )}

            <div className="space-y-4">
              {itinerary.map((day, idx) => (
                <div
                  key={idx}
                  className="border rounded-lg p-4 bg-gray-50 flex flex-col gap-3"
                >
                  <div className="flex items-center justify-between">
                    <strong>Day {day.day}</strong>
                    <button
                      type="button"
                      onClick={() => removeDay(idx)}
                      className="inline-flex items-center gap-2 text-red-600 hover:text-red-700"
                    >
                      <FiTrash2 /> Remove
                    </button>
                  </div>
                  <input
                    placeholder="Title (optional)"
                    value={day.title ?? ""}
                    onChange={(e) => updateDay(idx, "title", e.target.value)}
                    className="border rounded-md px-4 py-2"
                  />
                  <textarea
                    placeholder="Details"
                    rows={3}
                    value={day.details ?? ""}
                    onChange={(e) => updateDay(idx, "details", e.target.value)}
                    className="border rounded-md px-4 py-2"
                  />
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={addDay}
              className="mt-3 inline-flex items-center gap-2 border border-purple-300 text-purple-700 px-4 py-2 rounded-md hover:bg-purple-50"
            >
              <FiPlus /> Add Day
            </button>
          </section>

          <button
            type="submit"
            disabled={submitting}
            className="bg-purple-600 disabled:opacity-60 text-white font-semibold px-6 py-3 rounded-md hover:bg-purple-700 transition flex items-center gap-2"
          >
            <FiSave /> {submitting ? "Creating…" : "Create Package"}
          </button>
        </div>

        {/* RIGHT — Live Preview */}
        <aside className="bg-gray-50 border rounded-lg p-4 h-fit">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">
            🪄 Live Preview
          </h2>
          <div className="space-y-2 text-sm text-gray-700">
            <p>
              <strong>Trip Title:</strong> {form.tripTitle || "—"}
            </p>
            <p>
              <strong>Destination:</strong> {form.destinationCity || "—"}
            </p>
            <p>
              <strong>Duration:</strong> {form.duration || "—"}
            </p>
            <p>
              <strong>Price:</strong> ₹{form.price || "—"} /person
            </p>
            <p>
              <strong>Meals / Day:</strong> {form.mealsPerDay}
            </p>
            <p>
              <strong>Dates:</strong> {form.startDates.length}
            </p>
            <p>
              <strong>Itinerary Days:</strong> {itinerary.length}
            </p>
          </div>
        </aside>
      </form>
    </div>
  );
}
