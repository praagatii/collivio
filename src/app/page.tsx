import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Intro from "@/components/intro";
import Areas from "@/components/areas";
import Process from "@/components/process";
import Profile from "@/components/profile";
import Community from "@/components/community";
import FinalCta from "@/components/final-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Navigation />
      <main>
        <Hero />
        <Intro />
        <Areas />
        <Process />
        <Profile />
        <Community />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}