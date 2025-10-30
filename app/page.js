// app/page.js

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

export default function Home() {
  return (
    <main>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. How Carvaan Works */}
      <HowItWorks />

      {/* 3. Featured Trips & Deals */}
      <FeaturedTrips />

      {/* 4. Why Carvaan */}
      <WhyCarvaan />

      {/* 5. Community & Stories */}
      <CommunityStories />

      {/* 6. Interactive Trip Builder */}
      <TripBuilder />

      {/* 7. Blog / Educative Hub */}
      <BlogHub />

      {/* 8. Carvaan Coins */}
      <CarvaanCoins />

      {/* 9. For Captains & Agents */}
      <CaptainsAgents />

      {/* 10. Final CTA */}
      <FinalCTA />
    </main>
  );
}
