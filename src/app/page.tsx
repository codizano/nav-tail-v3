import Hero from "@components/Hero";
import Navbar from "@components/Navbar";
import Blogs from "@components/Blog";
import Footer from "@components/Footer";
import EmailForm from "@components/EmailForm";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Blogs />
      <EmailForm />
      <Footer />
    </div>
  );
}
