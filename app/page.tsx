import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Capabilities } from "@/components/sections/Capabilities";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { OperatingPrinciples } from "@/components/sections/OperatingPrinciples";
import { ServiceRecord } from "@/components/sections/ServiceRecord";

export default function Home() {
  return (
    <div className="relative overflow-x-clip bg-background">
      <div className="page-noise pointer-events-none fixed inset-0 z-0" />
      <Header />
      <main className="relative z-10">
        <Hero />
        <ServiceRecord />
        <Capabilities />
        <Experience />
        <OperatingPrinciples />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
