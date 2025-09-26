// app/about/components/CTABar.js
export default function CTABar() {
  return (
    <section className="bg-purple-700 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <h3 className="text-2xl font-bold">Stay in the Loop. Get Exclusive Trip Drops + Rewards.</h3>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <button className="px-6 py-3 bg-pink-500 rounded-lg">Explore Trips</button>
          <button className="px-6 py-3 bg-green-500 rounded-lg">Partner With Us</button>
        </div>
      </div>
    </section>
  );
}
