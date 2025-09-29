import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import WalletSimulation from "./components/WalletSimulation";
import Benefits from "./components/Benefits";
import CoinsInAction from "./components/CoinsInAction";
import RewardsShowcase from "./components/RewardsShowcase";
import FAQs from "./components/FAQs";
import GetStarted from "./components/GetStarted";
import CTAbar from "./components/CTAbar";

export default function CoinsPage() {
  return (
    <main className="bg-gray-50">
      <Hero />
      <HowItWorks />
      <WalletSimulation />
      <Benefits />
      <CoinsInAction />
      <RewardsShowcase />
      <FAQs />
      <GetStarted />
      <CTAbar />
    </main>
  );
}
