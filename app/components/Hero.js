"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[70vh] md:h-[72vh] overflow-hidden">
      {/* Cinematic background - replace with video or animated montage */}
      <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover opacity-70">
        <source src="/hero-loop.mp4" type="video/mp4" />
        {/* fallback */}
      </video>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-raleway font-extrabold leading-tight">
            One Marketplace. Endless Group Trips. Zero Stress.
          </h1>
          <p className="mt-4 text-xl text-yellow-100 font-shadow">From Solo to Squad, Carvaan has your back.</p>

          {/* Search CTA */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href="/trips" className="inline-flex items-center bg-primary text-white px-5 py-3 rounded-md shadow hover:brightness-95">
              Start Browsing Trips
            </Link>

            <Link href="#trip-builder" className="inline-flex items-center border border-white/60 text-white px-5 py-3 rounded-md hover:bg-white/10">
              Plan My Custom Trip
            </Link>
          </div>

          <p className="mt-6 text-sm text-white/90">
            Quick glimpses: group leaders, van rides, happy squads — curated trips with verified captains.
          </p>
        </div>
      </div>

      {/* hero overlay bottom search-ish mock */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-md px-4 py-4 w-[94%] max-w-4xl">
        <form className="flex flex-wrap gap-3 items-center">
          <input className="flex-1 border rounded-md px-3 py-2" placeholder="Destination (eg. Manali)" />
          <input className="w-36 border rounded-md px-3 py-2" placeholder="Check-in" />
          <input className="w-36 border rounded-md px-3 py-2" placeholder="Guests" />
          <button className="bg-primary text-white px-4 py-2 rounded-md">Search</button>
        </form>
      </div>
    </section>
  );
}
