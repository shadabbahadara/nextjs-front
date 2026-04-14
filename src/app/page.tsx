import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import RoomsSection from "@/components/RoomsSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import DiningSection from "@/components/DiningSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WelcomeSection />
      <RoomsSection />
      <ExperiencesSection />
      <DiningSection />
      <TestimonialsSection />
      <GallerySection />
      <Footer />
    </>
  );
}
