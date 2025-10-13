// app/trips/page.js
import Hero from "./components/Hero";
import Filters from "./components/Filters";
import GroupTrips from "./components/GroupTrips";
import TourPackages from "./components/TourPackages";
import CorporatePackages from "./components/CorporatePackages";
import TripDetailModal from "./components/TripDetailModal";
import CustomTripBuilder from "./components/CustomTripBuilder";
import WhyCarvaan from "./components/WhyCarvaan";
import CommunityWall from "./components/CommunityWall";
import FinalCTA from "./components/FinalCTA";

export default function TripsPage() {
  return (
    <main className="font-sans">
      <Hero />
      <Filters />
      <GroupTrips />
      <TourPackages />
      <CorporatePackages />
      <TripDetailModal />
      <CustomTripBuilder />
      <WhyCarvaan />
      <CommunityWall />
      <FinalCTA />
    </main>
  );
}

