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

import Link from "next/link";

export default function TripsPage() {
  return (
    <main className="py-20 bg-gray-50">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-purple-600">
          Trips Marketplace 🚐
        </h1>
        <p className="text-gray-600 mb-8">
          Find your next adventure — from weekend getaways to captain-led explorations.
        </p>

        {/* Add this link to navigate */}
        <Link
          href="/trips/group-trips"
          className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:opacity-90"
        >
          View All Group Trips
        </Link>
      </section>
    </main>
  );
}

