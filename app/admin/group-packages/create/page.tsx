"use client";

import { useState } from "react";
import { FiSave } from "react-icons/fi";

type FormState = {
  companyName: string;
  tripTitle: string;
  pickupCity: string;
  destinationCity: string;
  durationLabel: string; // e.g. "3N/4D"
  priceNumber: string;   // input as string, convert to number
  image: string;
  startDates: string[];  // multiple ISO dates
  // ... your other optional fields:
  transportation?: string;
  difficulty?: string;
  roomSharing?: string;
  ageRange?: string;
  description?: string;
  inclusions?: string;
  exclusions?: string;
};

export default function CreatePackagePage() {
  const [formData, setFormData] = useState<FormState>({
    companyName: "",
    tripTitle: "",
    pickupCity: "",
    destinationCity: "",
    durationLabel: "",
    priceNumber: "",
    image: "",
    startDates: [],
    transportation: "",
    difficulty: "",
    roomSharing: "",
    ageRange: "",
    description: "",
    inclusions: "",
    exclusions: "",
  });

  // Add date
  const addDate = (iso: string) => {
    if (!iso) return;
    setFormData(prev =>
      prev.startDates.includes(iso) ? prev : { ...prev, startDates: [...prev.startDates, iso] }
    );
  };
  const removeDate = (iso: string) =>
    setFormData(prev => ({ ...prev, startDates: prev.startDates.filter(d => d !== iso) }));

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.tripTitle || !formData.destinationCity || !formData.durationLabel || !formData.priceNumber || !formData.image) {
      alert("Please fill Title, Destination, Duration, Price and Image.");
      return;
    }
    if (formData.startDates.length === 0) {
      alert("Please add at least one Start Date.");
      return;
    }

    const payload = {
      title: formData.tripTitle,
      location: formData.destinationCity,
      category: "", // optional – you can add a select if you like
      price: Number(formData.priceNumber),
      durationLabel: formData.durationLabel,
      image: formData.image,
      startDates: formData.startDates,
      companyName: formData.companyName,
      transportation: formData.transportation,
      difficulty: formData.difficulty,
      roomSharing: formData.roomSharing,
      ageRange: formData.ageRange,
      description: formData.description,
      inclusions: formData.inclusions,
      exclusions: formData.exclusions,
    };

    const res = await fetch("/api/trips", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      alert(`Error: ${err.error || "Could not create trip"}`);
      return;
    }

    alert("✅ Trip(s) created!");
    // (optional) reset minimal fields
    setFormData(prev => ({ ...prev, startDates: [] }));
  };

  return (
    <div className="p-6">
      {/* … your existing sections … */}

      {/* Example minimal inputs needed for saving */}
      <input name="tripTitle" placeholder="Trip Title*" value={formData.tripTitle} onChange={handleChange} className="border rounded-md px-4 py-2 w-full" />
      <input name="destinationCity" placeholder="Destination City*" value={formData.destinationCity} onChange={handleChange} className="border rounded-md px-4 py-2 w-full" />
      <input name="durationLabel" placeholder="Duration Label (e.g. 3N/4D)*" value={formData.durationLabel} onChange={handleChange} className="border rounded-md px-4 py-2 w-full" />
      <input name="priceNumber" type="number" placeholder="Price per person*" value={formData.priceNumber} onChange={handleChange} className="border rounded-md px-4 py-2 w-full" />
      <input name="image" placeholder="Hero Image URL*" value={formData.image} onChange={handleChange} className="border rounded-md px-4 py-2 w-full" />

      {/* Multi-date picker: add one date at a time */}
      <div className="flex gap-3 items-center">
        <input type="date" onChange={e => addDate(e.target.value)} className="border rounded-md px-3 py-2" />
        <div className="flex flex-wrap gap-2">
          {formData.startDates.map(d => (
            <span key={d} className="px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded-full">
              {d}
              <button type="button" className="ml-2" onClick={() => removeDate(d)}>×</button>
            </span>
          ))}
        </div>
      </div>

      <button onClick={handleSubmit} className="mt-4 bg-purple-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-purple-700 transition flex items-center gap-2">
        <FiSave /> Create Package
      </button>
    </div>
  );
}
