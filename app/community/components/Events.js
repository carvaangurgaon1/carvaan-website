export default function Events() {
  const events = [
    { title: "Carvaan Traveler Meetup – Delhi", date: "Nov 15, 2025" },
    { title: "Pre-Trip Orientation Live", date: "Dec 2, 2025" },
    { title: "Travel Hack Webinar", date: "Dec 10, 2025" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Events & Meetups 📅</h2>
        <div className="space-y-4">
          {events.map((event, idx) => (
            <div key={idx} className="bg-gray-100 p-4 rounded shadow">
              <h3 className="font-semibold">{event.title}</h3>
              <p className="text-sm text-gray-600">{event.date}</p>
            </div>
          ))}
        </div>
        <button className="mt-10 px-6 py-3 bg-purple-600 text-white rounded">
          RSVP Now
        </button>
      </div>
    </section>
  );
}
