/* "use client";
import { QueryClient, QueryClientProvider } from "react-query"; */

import Navbar from "@components/NavbarEbook";
import Hero from "@components/HeroEbook2";
import Services from "@components/Services";
//import Blogs from "@components/Blog";
import Footer from "@components/Footer";
import EmailForm from "@components/EmailForm";
import TargetAudience from "@components/TargetAudience";
import ProductFeatures from "@components/ProductFeatures";

//const queryClient = new QueryClient();

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <ProductFeatures />
      <TargetAudience />
      {/*  <Blogs /> */}
      <EmailForm />
      <Footer />
    </div>
  );
}
