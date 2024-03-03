import Hero from "@components/Hero";
import { Navbar } from "@components/Navbar";
import Blogs from "@components/Blog/Blogs";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Blogs />
    </div>
  );
}
