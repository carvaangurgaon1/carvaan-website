"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    router.push("/profile"); // redirect after login
  };

  const handleSignup = (e) => {
    e.preventDefault();
    router.push("/profile"); // redirect after signup
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-600">
      <div className="bg-white w-full max-w-4xl rounded-lg shadow-lg overflow-hidden grid md:grid-cols-2">
        
        {/* Left Illustration */}
        <div className="hidden md:flex items-center justify-center bg-gradient-to-b from-yellow-400 to-orange-500 p-8">
          <img src="/images/van-illustration.png" alt="Carvaan Van" className="max-h-80" />
        </div>

        {/* Right Form */}
        <div className="p-8">
          <h1 className="text-3xl font-bold text-center mb-2">
            Join the Carvaan Community 🚐✨
          </h1>
          <p className="text-center font-shadow mb-6">
            Your next trip starts here. Earn coins. Unlock adventures.
          </p>

          {/* Toggle Tabs */}
          <div className="flex border-b mb-6">
            <button
              className={`flex-1 py-2 font-semibold ${isLogin ? "border-b-2 border-purple-600 text-purple-600" : "text-gray-500"}`}
              onClick={() => setIsLogin(true)}
            >
              🔑 Login
            </button>
            <button
              className={`flex-1 py-2 font-semibold ${!isLogin ? "border-b-2 border-purple-600 text-purple-600" : "text-gray-500"}`}
              onClick={() => setIsLogin(false)}
            >
              ✨ Sign Up
            </button>
          </div>

          {/* Forms */}
          {isLogin ? (
            <form onSubmit={handleLogin} className="space-y-4">
              <input type="text" placeholder="Email / Mobile Number" required className="w-full border p-3 rounded" />
              <input type="password" placeholder="Password" required className="w-full border p-3 rounded" />
              <a href="#" className="text-sm text-purple-600 block text-right">Forgot Password?</a>
              <button type="submit" className="w-full py-3 rounded bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold hover:opacity-90 transition">
                Log In
              </button>
              <div className="text-center text-sm text-gray-500">Or login with</div>
              <div className="flex justify-center gap-3">
                <button className="p-2 bg-gray-100 rounded">🌐 Google</button>
                <button className="p-2 bg-gray-100 rounded">📘 Facebook</button>
                <button className="p-2 bg-gray-100 rounded">💼 LinkedIn</button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleSignup} className="space-y-4">
              <input type="text" placeholder="Full Name" required className="w-full border p-3 rounded" />
              <input type="file" accept="image/*" className="w-full border p-3 rounded" />
              <input type="email" placeholder="Email" required className="w-full border p-3 rounded" />
              <input type="tel" placeholder="Mobile Number" required className="w-full border p-3 rounded" />
              <input type="password" placeholder="Password" required className="w-full border p-3 rounded" />
              <input type="password" placeholder="Confirm Password" required className="w-full border p-3 rounded" />
              <select className="w-full border p-3 rounded">
                <option>Choose Category</option>
                <option>Traveler</option>
                <option>Corporate</option>
                <option>Captain / Group Trip Company</option>
              </select>
              <button type="submit" className="w-full py-3 rounded bg-yellow-400 hover:bg-yellow-500 text-black font-semibold transition">
                Create My Account
              </button>
              <p className="text-center text-sm mt-2">🎉 You’ll earn <b>5000 Carvaan Coins</b> on your first booking!</p>
            </form>
          )}

          {/* Trust Signals */}
          <div className="mt-6 text-center space-y-2">
            <p>🚐 Book & Compare Trips Easily</p>
            <p>💰 Earn & Redeem Carvaan Coins</p>
            <p>👯 Join 1000+ Travelers</p>
          </div>
          <div className="mt-4 flex justify-center gap-4 text-sm text-gray-500">
            <span>🔒 Secure Login</span>
            <span>✅ GDPR Compliant</span>
            <span>⭐ Trusted by 1000+</span>
          </div>
        </div>
      </div>
    </main>
  );
}
