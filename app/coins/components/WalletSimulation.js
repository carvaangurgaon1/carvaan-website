"use client";
import { useState } from "react";

export default function WalletSimulation() {
  const [amount, setAmount] = useState(10000);

  const coins = amount; // 1 INR = 1 Coin
  const redeemable = Math.min(coins * 0.1, 2500); // 10% but max 2500

  return (
    <section className="py-16 bg-purple-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Wallet Simulation 🎮</h2>

        <div className="max-w-md mx-auto bg-white shadow rounded p-6 space-y-4">
          <label className="block text-left font-medium">Enter Trip Cost (₹)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full border p-2 rounded"
          />

          <div className="text-left mt-4">
            <p>💰 Coins Earned: <strong>{coins}</strong></p>
            <p>🎉 Redeemable Value: <strong>₹{redeemable}</strong> (Max ₹2,500)</p>
          </div>

          <div className="bg-purple-100 h-4 rounded overflow-hidden">
            <div
              className="bg-purple-600 h-4"
              style={{ width: `${Math.min((redeemable / 2500) * 100, 100)}%` }}
            />
          </div>
          <p className="text-sm text-gray-500">Progress to max redeem limit</p>

          <button className="w-full mt-4 bg-purple-600 text-white py-2 rounded">
            Check My Wallet
          </button>
        </div>
      </div>
    </section>
  );
}
