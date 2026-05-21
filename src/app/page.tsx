import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TheWork from "@/components/TheWork";
import Tutoring from "@/components/Tutoring";
import JoinMission from "@/components/JoinMission";
import People from "@/components/People";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <TheWork />
      <Tutoring />
      <JoinMission />
      <People />
      <Footer />
    </>
  );
}
