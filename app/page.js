// /app/page.js
"use client";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import FeaturedTrips from "./components/FeaturedTrips";
import WhyCarvaan from "./components/WhyCarvaan";
import CommunityStories from "./components/CommunityStories";
import TripBuilder from "./components/TripBuilder";
import BlogHub from "./components/BlogHub";
import CarvaanCoins from "./components/CarvaanCoins";
import CaptainsAgents from "./components/CaptainsAgents";
import FinalCTA from "./components/FinalCTA";
export default function HomePage() {
  return (
    <main className="flex flex-col items-center w-full overflow-x-hidden">
      {/* :one: Hero Section */}
      <section id="hero" className="w-full">
        <Hero />
      </section>
      {/* :two: How It Works */}
      <section id="how-it-works" className="w-full">
        <HowItWorks />
      </section>
      {/* :three: Featured Trips & Deals */}
      <section id="featured-trips" className="w-full">
        <FeaturedTrips />
      </section>
      {/* :four: Why Carvaan */}
      <section id="why-carvaan" className="w-full">
        <WhyCarvaan />
      </section>
      {/* :five: Carvaan Community & Stories */}
      <section id="community-stories" className="w-full">
        <CommunityStories />
      </section>
      {/* :six: Trip Builder */}
      <section id="trip-builder" className="w-full">
        <TripBuilder />
      </section>
      {/* :seven: Blog Hub */}
      <section id="blog-hub" className="w-full">
        <BlogHub />
      </section>
      {/* :eight: Carvaan Coins */}
      <section id="carvaan-coins" className="w-full">
        <CarvaanCoins />
      </section>
      {/* :nine: Captains & Agents */}
      <section id="captains-agents" className="w-full">
        <CaptainsAgents />
      </section>
      {/* :keycap_ten: Final Call-to-Action */}
      <section id="final-cta" className="w-full">
        <FinalCTA />
      </section>
    </main>
  );
}
