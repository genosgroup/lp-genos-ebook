import { preload } from "react-dom";
import About from "@/components/About";
import BeforeAfter from "@/components/BeforeAfter";
import Clients from "@/components/Clients";
import Deliverables from "@/components/Deliverables";
import Footer from "@/components/Footer";
import ForYou from "@/components/ForYou";
import Founders from "@/components/Founders";
import Guarantee from "@/components/Guarantee";
import Hero from "@/components/Hero";
import Offer from "@/components/Offer";
import PageEffects from "@/components/PageEffects";
import Pillars from "@/components/Pillars";
import PopupProvider from "@/components/Popups";
import TopBar from "@/components/TopBar";
import VideoSection from "@/components/VideoSection";
import WhyCheap from "@/components/WhyCheap";
import { image } from "@/lib/site";

export default function Ebook() {
  preload(image("header-book-01.jpg"), { as: "image", fetchPriority: "high" });

  return (
    <PopupProvider>
      <PageEffects />
      <main>
        <TopBar />
        <Hero />
        <VideoSection />
        <Pillars />
        <Clients />
        <BeforeAfter />
        <Deliverables />
        <Offer />
        <WhyCheap />
        <ForYou />
        <Guarantee />
        <About />
        <Founders />
      </main>
      <Footer />
    </PopupProvider>
  );
}
