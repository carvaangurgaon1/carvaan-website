import "./globals.css";  
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Carvaan - Travel Together, Earn Together 🚐✨",
  description: "India’s fastest-growing travel community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main style={{ minHeight: "80vh", padding: "2rem" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
