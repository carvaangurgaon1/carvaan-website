// /app/layout.js
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Carvaan",
  description: "One Marketplace. Endless Group Trips. Zero Stress.",
  viewport: "width=device-width, initial-scale=1.0", // ✅ critical for mobile
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        {/* Global Navbar */}
        <Navbar />

        {/* Main page content */}
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>

        {/* Optional footer */}
        <footer className="text-center py-4 text-sm text-gray-500 border-t">
          © {new Date().getFullYear()} Carvaan. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
