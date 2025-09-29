export default function ShareStory() {
  return (
    <section className="py-16 bg-purple-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Share Your Story ✍️</h2>
        <form className="max-w-xl mx-auto bg-white shadow rounded p-6 space-y-4">
          <input type="file" className="w-full border p-2 rounded" />
          <textarea placeholder="Write your travel memory..." className="w-full border p-2 rounded h-32" />
          <input type="text" placeholder="@yourinstagram" className="w-full border p-2 rounded" />
          <button className="w-full bg-purple-600 text-white py-2 rounded">
            Submit My Story
          </button>
        </form>
      </div>
    </section>
  );
}
