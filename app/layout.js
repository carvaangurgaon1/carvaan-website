// /app/layout.js
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // ✅ restored custom footer component

export const metadata = {
  title: "Carvaan - Travel Together, Earn Together 🚐✨",
  description: "India’s fastest-growing travel community. Book trips, earn Carvaan Coins, and join 1000+ travelers.",
  viewport: "width=device-width, initial-scale=1.0", // ✅ ensures proper scaling on mobile/tablet
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-gray-900 font-raleway">
        {/* ✅ Navbar (visible on all pages) */}
        <Navbar />

        {/* ✅ Main Content Area */}
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          {children}
        </main>

        {/* ✅ Footer restored */}
        <Footer />
      </body>
    </html>
  );
}
