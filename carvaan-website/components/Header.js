// components/Header.js
export default function Header() {
  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-pink-600">Carvaan</div>

        {/* Nav Links */}
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li><a href="/" className="hover:text-pink-600">Home</a></li>
          <li><a href="/about" className="hover:text-pink-600">About Us</a></li>
          <li><a href="/marketplace" className="hover:text-pink-600">Trips</a></li>
          <li><a href="/community" className="hover:text-pink-600">Community</a></li>
          <li><a href="/coins" className="hover:text-pink-600">Coins</a></li>
          <li><a href="/faq" className="hover:text-pink-600">FAQ</a></li>
          <li><a href="/contact" className="hover:text-pink-600">Contact</a></li>
        </ul>

        {/* CTA */}
        <a
          href="/login"
          className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:opacity-90"
        >
          Login / Sign Up
        </a>
      </nav>
    </header>
  );
}
