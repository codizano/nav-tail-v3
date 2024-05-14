/* "use client";
import { QueryClient, QueryClientProvider } from "react-query"; */
import Hero2 from "@components/Hero2";
import Navbar from "@components/Navbar";
import Blogs from "@components/Blog";
import Footer from "@components/Footer";
import EmailForm from "@components/EmailForm";

//const queryClient = new QueryClient();

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero2 />
      <Blogs />
      <EmailForm />
      <Footer />
    </div>
  );
}
