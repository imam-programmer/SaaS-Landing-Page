import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { LogosStrip } from "@/components/sections/LogosStrip";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogosStrip />
        <Features />
        <HowItWorks />

        {/* Temporary placeholders, we'll replace these in later steps */}
        {["pricing", "testimonials", "faq"].map((id) => (
          <section
            key={id}
            id={id}
            className="flex h-[60vh] items-center justify-center border-t border-slate-100 text-2xl font-semibold capitalize text-slate-400"
          >
            {id}
          </section>
        ))}
      </main>
    </>
  );
}