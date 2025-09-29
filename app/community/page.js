import Hero from "./components/Hero";
import TravelerHighlights from "./components/TravelerHighlights";
import Stories from "./components/Stories";
import CommunityWall from "./components/CommunityWall";
import Leaderboard from "./components/Leaderboard";
import EngagementZone from "./components/EngagementZone";
import ValueBlock from "./components/ValueBlock";
import Events from "./components/Events";
import ShareStory from "./components/ShareStory";
import ClosingCTA from "./components/ClosingCTA";

export default function CommunityPage() {
  return (
    <main className="bg-gray-50">
      <Hero />
      <TravelerHighlights />
      <Stories />
      <CommunityWall />
      <Leaderboard />
      <EngagementZone />
      <ValueBlock />
      <Events />
      <ShareStory />
      <ClosingCTA />
    </main>
  );
}
