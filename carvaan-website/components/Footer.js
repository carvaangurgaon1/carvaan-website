// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Column 1 */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Carvaan</h2>
          <p className="text-sm">
            Simplifying group travel with community, rewards, and unforgettable experiences.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/marketplace" className="hover:text-white">Trips</a></li>
            <li><a href="/community" className="hover:text-white">Community</a></li>
            <li><a href="/coins" className="hover:text-white">Carvaan Coins</a></li>
            <li><a href="/faq" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Get in Touch</h2>
          <ul className="space-y-2 text-sm">
            <li>Email: support@carvaan.co</li>
            <li>Phone: +91 98765 43210</li>
            <li><a href="/contact" className="hover:text-white">Contact Form</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Carvaan. All rights reserved.
      </div>
    </footer>
  );
}
