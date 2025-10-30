"use client";
import { useState } from 'react';
export default function Hero(){
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [guests, setGuests] = useState(2);
  return (
<section aria-label="Hero" className="relative h-[68vh] md:h-[75vh] bg-gray-900 text-white overflow-hidden">
{/* Cinematic background placeholder - replace with video.mp4 or animated montage */}
<div className="absolute inset-0">
<video
          src="/placeholder-hero-loop.mp4"
          className="w-full h-full object-cover opacity-60"
          muted
          loop
          autoPlay
/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
<div className="max-w-3xl">
<h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">One Marketplace. Endless Group Trips. Zero Stress.</h1>
<p className="mt-4 text-xl text-yellow-100 italic">From Solo to Squad, Carvaan has your back.</p>
<div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
<a href="#featured-trips" className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-medium">Start Browsing Trips</a>
<div className="mt-4 sm:mt-0 sm:ml-4 w-full">
{/* Search bar */}
<form onSubmit={(e)=>e.preventDefault()} className="bg-white rounded-lg p-4 text-gray-800 shadow-md">
<div className="grid grid-cols-1 md:grid-cols-4 gap-3">
<input value={destination} onChange={(e)=>setDestination(e.target.value)} placeholder="Destination" className="p-2 border rounded"/>
<input type="date" value={checkIn} onChange={(e)=>setCheckIn(e.target.value)} className="p-2 border rounded"/>
<select value={guests} onChange={(e)=>setGuests(Number(e.target.value))} className="p-2 border rounded">
{[1,2,3,4,5].map(n=> <option key={n} value={n}>{n} Guests</option>)}
</select>
<button className="bg-primary text-white px-4 py-2 rounded">Search</button>
</div>
<div className="text-xs text-gray-500 mt-2 italic">Destination Check in Dec 28, 2024 — Use these fields to preview search interactions.</div>
</form>
</div>
</div>
</div>
</div>
</section>
);
}







