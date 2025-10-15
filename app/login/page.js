"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const [tab, setTab] = useState("login");
  const router = useRouter();

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();
    // 🚨 Replace with real login logic later
    router.push("/profile");
  };

  // Handle signup
  const handleSignup = (e) => {
    e.preventDefault();
    // 🚨 Replace with real signup logic later
    router.push("/profile");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-200 via-pink-200 to-yellow-200 p-6">
      <div className="bg-white shadow-2xl rounded-lg w-full max-w-4xl flex overflow-hidden">
        {/* Left side illustration */}
        <div className="hidden md:flex flex-1 items-center justify-center bg-gradient-to-r from-purple-600 to-pink-500 text-white p-10">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">
              Join the Carvaan Community 🚐✨
            </h1>
            <p className="italic">
              Your next trip starts here. Earn coins. Unlock adventures.
            </p>
          </div>
        </div>

        {/* Right side form */}
        <div className="flex-1 p-8">
          {/* Toggle Tabs */}
          <div className="flex mb-6 border-b">
            <button
              className={`flex-1 py-2 font-semibold ${
                tab === "login"
                  ? "border-b-4 border-purple-600 text-purple-600"
                  : "text-gray-500"
              }`}
              onClick={() => setTab("login")}
            >
              🔑 Login
            </button>
            <button
              className={`flex-1 py-2 font-semibold ${
                tab === "signup"
                  ? "border-b-4 border-purple-600 text-purple-600"
                  : "text-gray-500"
              }`}
              onClick={() => setTab("signup")}
            >
              ✨ Sign Up
            </button>
          </div>

          {/* Login Form */}
          {tab === "login" && (
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="text"
                placeholder="Email / Mobile Number"
                className="w-full border p-3 rounded"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full border p-3 rounded"
                required
              />
              <div className="text-right">
                <a href="#" className="text-sm text-purple-600">
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold hover:opacity-90"
              >
                Log In
              </button>
            </form>
          )}

          {/* Sign Up Form */}
          {tab === "signup" && (
            <form onSubmit={handleSignup} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border p-3 rounded"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border p-3 rounded"
                required
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full border p-3 rounded"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full border p-3 rounded"
                required
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full border p-3 rounded"
                required
              />
              <select className="w-full border p-3 rounded" required>
                <option value="">Choose Category</option>
                <option>Traveler</option>
                <option>Corporate</option>
                <option>Captain / Group Trip Company</option>
              </select>
              <button
                type="submit"
                className="w-full py-3 rounded bg-yellow-500 text-white font-bold hover:opacity-90"
              >
                Create My Account
              </button>
              <p className="text-sm text-center text-gray-500 mt-2">
                🎉 You’ll earn <strong>5000 Carvaan Coins</strong> on your first
                booking!
              </p>
            </form>
          )}

          {/* Trust Signals */}
          <div className="mt-8 text-center space-y-2">
            <p className="text-sm">🔒 Secure Login</p>
            <p className="text-sm">✅ GDPR Compliant</p>
            <p className="text-sm">⭐ Trusted by 1000+ Travelers</p>
          </div>
        </div>
      </div>
    </div>
  );
}
