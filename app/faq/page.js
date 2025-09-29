import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import FAQCategories from "./components/FAQCategories";
import QuickHelp from "./components/QuickHelp";
import PopularFAQs from "./components/PopularFAQs";
import FinalCTA from "./components/FinalCTA";
import ConversionBanner from "./components/ConversionBanner";

export default function FAQPage() {
  return (
    <main className="bg-gray-50">
      <Hero />
      <SearchBar />
      <FAQCategories />
      <QuickHelp />
      <PopularFAQs />
      <FinalCTA />
      <ConversionBanner />
    </main>
  );
}
