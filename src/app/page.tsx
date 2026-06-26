import prisma from "@/lib/prisma";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SpecialPrograms from "@/components/SpecialPrograms";
import DestinationCarousel from "@/components/DestinationCarousel";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import TravelPathBackground from "@/components/TravelPathBackground";
import Steps from "@/components/Steps";
import Mockup from "@/components/Mockup";
import FAQ from "@/components/FAQ";
import SocialProof from "@/components/SocialProof";
import Testimonial from "@/components/Testimonial";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export const revalidate = 0; // Fetch fresh data on every request

export default async function Home() {
  const destinations = await prisma.destination.findMany({
    orderBy: { createdAt: "desc" }
  });

  const programs = await prisma.program.findMany({
    orderBy: { createdAt: "desc" }
  });

  const galleryItems = await prisma.galleryItem.findMany({
    orderBy: { createdAt: "desc" }
  });

  return (
    <main className="min-h-screen bg-bg selection:bg-primary selection:text-white">
      <Navbar />
      <Hero destinations={destinations} />
      <SpecialPrograms programs={programs} />
      <DestinationCarousel destinations={destinations} />
      {/* Travel Path Animated Background Zone */}
      <div className="relative overflow-hidden bg-white">
        <TravelPathBackground />
        <Stats />
        <Features />
      </div>
      <Steps />
      <Mockup />
      <FAQ />
      <SocialProof />
      <Gallery items={galleryItems} />
      <Testimonial />
      <Footer />
    </main>
  );
}
