
import About from "@/components/About";
import Hero from "@/components/Hero";
import ProcessSection from "@/components/ProcessSection";
import ServiceSection from "@/components/Service";
import Team from "@/components/Team";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <ServiceSection />
      <About />
      <ProcessSection />
      <Team/>
    </div>
  );
}
