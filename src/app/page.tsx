import Hero from "@components/Hero";
import Navbar from "@components/Navbar";
import Blogs from "@components/Blog";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Blogs />
      <Footer />
    </div>
  );
}
