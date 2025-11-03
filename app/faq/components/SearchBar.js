"use client";

export default function SearchBar({ query, setQuery }) {
  const clearSearch = () => setQuery("");

  return (
    <section className="max-w-4xl mx-auto mt-6 px-4">
      <label className="block text-sm text-gray-600 mb-2">Search FAQs</label>
      <div className="relative">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by keyword — e.g. coins, cancellation, corporate"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-300"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 hover:text-gray-700"
          >
            Clear
          </button>
        )}
      </div>

      {/* Quick tags */}
      <div className="flex flex-wrap gap-2 mt-3">
        {["coins", "corporate", "cancel", "refund", "captain"].map((t) => (
          <button
            key={t}
            onClick={() => setQuery(t)}
            className="bg-gray-100 px-3 py-1 rounded text-sm text-gray-700 hover:bg-gray-200"
          >
            {t}
          </button>
        ))}
      </div>
    </section>
  );
}
