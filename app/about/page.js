import Hero from "./components/Hero";
import OurStory from "./components/OurStory";
import OurVision from "./components/OurVision";
import OurMission from "./components/OurMission";
import OurGoal from "./components/OurGoal";
import MeetTheTeam from "./components/MeetTheTeam";
import MarketplacePromise from "./components/MarketplacePromise";
import ClosingStatement from "./components/ClosingStatement";
import CTABar from "./components/CTABar";

export default function AboutPage() {
  return (
    <main>
      <Hero />
      <OurStory />
      <OurVision />
      <OurMission />
      <OurGoal />
      <MeetTheTeam />
      <MarketplacePromise />
      <ClosingStatement />
      <CTABar />
    </main>
  );
}
