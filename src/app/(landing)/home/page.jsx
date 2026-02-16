import GameCarousel from "@/components/Carousel";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import KeyNumbers from "@/components/KeyNumbers";
import Navbar from "@/components/NavBar";
import Projects from "@/components/Projects";
import Reminder from "@/components/Reminder";
import Services from "@/components/Services";
import FeaturedModels from "@/components/FeaturedModels";
import TestimonialSection from "@/components/Testimonials";
import TiltedMarquee from "@/components/TiltedMarquee";
import TechStack from "@/components/TechStack";
import Filler from "@/components/Filler";
import TeamMembers from "@/components/TeamMembers";
import VRSection from "@/components/VRSection";

export default function HomePage() {
  return (
    <div className="bg-[#0f1012]">
      <Navbar />
      <HeroSection />
      <KeyNumbers />
      <Services />
      <FeaturedModels />
      <VRSection />
      {/* <GameCarousel /> */}
      {/* <TiltedMarquee /> */}
      <TechStack />
      <Projects />
      <Reminder />
      <TeamMembers />
      <TestimonialSection />
      <ContactUs />
      <Footer />
    </div>
  );
}

