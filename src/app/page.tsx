
import Hero from "@/components/Hero";
import ProcessSection from "@/components/ProcessSection";
import ServiceSection from "@/components/Service";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <ServiceSection/>
      <ProcessSection/>
    </div>
  );
}
