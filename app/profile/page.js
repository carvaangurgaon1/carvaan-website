"use client";
import { useState } from "react";

export default function ProfilePage() {
  const [editMode, setEditMode] = useState(false);

  const user = {
    name: "Riya Sharma",
    coins: 12500,
    availableCoins: 10000,
    expiredCoins: 2500,
    photo: "/images/profile.jpg",
    trips: {
      recent: ["Manali Adventure", "Goa Retreat"],
      upcoming: ["Leh-Ladakh Bike Trip"],
      past: ["Rishikesh Rafting", "Jaipur Cultural Tour"]
    },
    coupons: ["10% OFF on Goa Trip", "₹1000 Cashback Coupon"],
    profile: {
      firstName: "Riya",
      lastName: "Sharma",
      age: 25,
      gender: "Female",
      phone: "+91 9876543210",
      email: "riya@example.com",
      bloodGroup: "B+",
      emergencyContact: "+91 9123456789",
      dob: "1999-04-15"
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow p-8">
        
        {/* Profile Header */}
        <div className="flex items-center gap-6">
          <img src={user.photo} alt="Profile" className="w-24 h-24 rounded-full border-4 border-purple-500" />
          <div>
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-gray-600">🚐 Carvaan Explorer</p>
          </div>
          <div className="ml-auto text-right">
            <p className="text-3xl font-bold text-yellow-500">{user.coins.toLocaleString()} 🪙</p>
            <p className="text-sm text-gray-500">Carvaan Coins</p>
          </div>
        </div>

        {/* Rewards Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-purple-50 p-6 rounded text-center">
            <h3 className="font-bold text-lg">Available Coins</h3>
            <p className="text-2xl text-purple-600">{user.availableCoins}</p>
          </div>
          <div className="bg-yellow-50 p-6 rounded text-center">
            <h3 className="font-bold text-lg">Expired Coins</h3>
            <p className="text-2xl text-yellow-600">{user.expiredCoins}</p>
          </div>
          <div className="bg-green-50 p-6 rounded text-center">
            <h3 className="font-bold text-lg">Available Coupons</h3>
            <ul className="text-sm mt-2">
              {user.coupons.map((c, i) => <li key={i}>🎟 {c}</li>)}
            </ul>
          </div>
        </div>

        {/* Trips Section */}
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-4">Your Trips</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold">Recent Trips</h3>
              <ul className="text-sm text-gray-600 mt-2 space-y-1">
                {user.trips.recent.map((t, i) => <li key={i}>✅ {t}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Upcoming Trips</h3>
              <ul className="text-sm text-gray-600 mt-2 space-y-1">
                {user.trips.upcoming.map((t, i) => <li key={i}>⏳ {t}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Past Trips</h3>
              <ul className="text-sm text-gray-600 mt-2 space-y-1">
                {user.trips.past.map((t, i) => <li key={i}>📜 {t}</li>)}
              </ul>
            </div>
          </div>
        </div>

        {/* Profile Settings */}
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-4">Profile Settings</h2>
          {!editMode ? (
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              {Object.entries(user.profile).map(([k, v], i) => (
                <p key={i}><span className="font-semibold">{k.replace(/([A-Z])/g, " $1")}: </span>{v}</p>
              ))}
            </div>
          ) : (
            <form className="grid md:grid-cols-2 gap-4">
              <input defaultValue={user.profile.firstName} required className="border p-2 rounded" />
              <input defaultValue={user.profile.lastName} required className="border p-2 rounded" />
              <input defaultValue={user.profile.age} type="number" required className="border p-2 rounded" />
              <select defaultValue={user.profile.gender} required className="border p-2 rounded">
                <option>Male</option><option>Female</option><option>Other</option>
              </select>
              <input defaultValue={user.profile.phone} required className="border p-2 rounded" />
              <input defaultValue={user.profile.email} type="email" required className="border p-2 rounded" />
              <input defaultValue={user.profile.bloodGroup} required className="border p-2 rounded" />
              <input defaultValue={user.profile.emergencyContact} required className="border p-2 rounded" />
              <input defaultValue={user.profile.dob} type="date" required className="border p-2 rounded" />
              <button className="col-span-2 py-2 bg-green-600 text-white rounded">Save Changes</button>
            </form>
          )}
          <button onClick={() => setEditMode(!editMode)} className="mt-4 px-6 py-2 bg-purple-600 text-white rounded">
            {editMode ? "Cancel" : "Edit Profile"}
          </button>
        </div>
      </div>
    </main>
  );
}
