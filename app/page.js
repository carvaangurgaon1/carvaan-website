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
      <Hero />
      <HowItWorks />
      <FeaturedTrips />
      <WhyCarvaan />
      <CommunityStories />
      <TripBuilder />
      <BlogHub />
      <CarvaanCoins />
      <CaptainsAgents />
      <FinalCTA />
    </main>
  );
}
