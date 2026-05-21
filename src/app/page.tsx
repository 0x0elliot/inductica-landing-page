import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TheWork from "@/components/TheWork";
import Tutoring from "@/components/Tutoring";
import JoinMission from "@/components/JoinMission";
import People from "@/components/People";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-[#0a0a0f]">
      <Navbar />
      <Hero />
      <About />
      <TheWork />
      <Tutoring />
      <JoinMission />
      <People />
      <Footer />
    </div>
  );
}
