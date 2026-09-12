import {
  Hero,
  Idea,
  PhotoStatement,
  Paths,
  Opportunities,
  People,
  ResearchShow,
  FinalCta,
} from "@/components/home";

export default function Home() {
  return (
    <div>
      <Hero />
      <Idea />
      <PhotoStatement />
      <Paths />
      <Opportunities />
      <People />
      <ResearchShow />
      <FinalCta />
    </div>
  );
}