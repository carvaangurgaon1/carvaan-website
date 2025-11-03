export default function QuickHelp() {
  return (
    <div className="bg-white p-4 rounded-lg shadow border">
      <h4 className="font-semibold text-gray-700 mb-3">Quick Help</h4>
      <div className="space-y-3">
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 px-3 py-2 border rounded hover:bg-gray-50"
        >
          <span className="bg-green-100 text-green-700 rounded-full w-8 h-8 flex items-center justify-center">
            💬
          </span>
          <div>
            <div className="text-sm font-medium">Chat on WhatsApp</div>
            <div className="text-xs text-gray-500">
              Instant replies for quick queries
            </div>
          </div>
        </a>

        <a
          href="mailto:support@carvaan.co"
          className="flex items-center gap-3 px-3 py-2 border rounded hover:bg-gray-50"
        >
          <span className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center">
            ✉️
          </span>
          <div>
            <div className="text-sm font-medium">Email Support</div>
            <div className="text-xs text-gray-500">
              Get a detailed reply within 24 hours
            </div>
          </div>
        </a>

        <a
          href="tel:+919876543210"
          className="flex items-center gap-3 px-3 py-2 border rounded hover:bg-gray-50"
        >
          <span className="bg-yellow-100 text-yellow-800 rounded-full w-8 h-8 flex items-center justify-center">
            📞
          </span>
          <div>
            <div className="text-sm font-medium">Call Support</div>
            <div className="text-xs text-gray-500">Mon–Sat, 9am–6pm IST</div>
          </div>
        </a>
      </div>
    </div>
  );
}
