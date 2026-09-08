import IntroCurtain from "@/components/intro-curtain";
import Hero from "@/components/hero";
import Pills from "@/components/pills";
import Statement from "@/components/statement";
import Areas from "@/components/areas";
import Activity from "@/components/activity";
import Process from "@/components/process";
import Profile from "@/components/profile";
import Community from "@/components/community";
import FinalCta from "@/components/final-cta";

export default function Home() {
  return (
    <div>
      <IntroCurtain />
      <main>
        <Hero />
        <Pills />
        <Statement />
        <Areas />
        <Activity />
        <Process />
        <Profile />
        <Community />
        <FinalCta />
      </main>
    </div>
  );
}