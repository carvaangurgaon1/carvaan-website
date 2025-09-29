import Hero from "./components/Hero";
import QuickContacts from "./components/QuickContacts";
import LeadForm from "./components/LeadForm";
import OfficeLocation from "./components/OfficeLocation";
import SocialConnect from "./components/SocialConnect";
import FAQRedirect from "./components/FAQRedirect";
import ClosingCTA from "./components/ClosingCTA";

export default function ContactPage() {
  return (
    <main className="bg-gray-50">
      <Hero />
      <QuickContacts />
      <LeadForm />
      <OfficeLocation />
      <SocialConnect />
      <FAQRedirect />
      <ClosingCTA />
    </main>
  );
}
