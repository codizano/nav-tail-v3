/* "use client";
import { QueryClient, QueryClientProvider } from "react-query"; */
import Hero from "@components/HeroEbook";
import Navbar from "@components/NavbarEbook";
import Blogs from "@components/Blog";
import Footer from "@components/Footer";
import EmailForm from "@components/EmailForm";

//const queryClient = new QueryClient();

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
