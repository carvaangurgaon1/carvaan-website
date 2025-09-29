export default function OfficeLocation() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Office 🏢</h2>
        <p className="mb-4">Prefer old-school? Drop by for coffee at our HQ.</p>
        <p className="mb-2 font-semibold">Carvaan HQ</p>
        <p className="mb-2">MG Road, Gurgaon, Haryana, India</p>
        <p className="mb-6">Operating Hours: Mon – Sat, 10 AM – 6 PM</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.37002019463!2d77.07238177539143!3d28.618441375669224"
          width="100%"
          height="300"
          allowFullScreen
          loading="lazy"
          className="rounded shadow"
        ></iframe>
      </div>
    </section>
  );
}
