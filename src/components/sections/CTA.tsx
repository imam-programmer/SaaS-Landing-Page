"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="px-4 pb-20 sm:px-6 sm:pb-28">
      <Container className="px-0 sm:px-0 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-16 text-center sm:px-12 sm:py-20"
        >
          {/* Background glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-brand-500/40 blur-3xl" />
            <div className="absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-violet-500/30 blur-3xl" />
          </div>

          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Ready to bring your team into flow?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-slate-300 sm:text-lg">
              Join 2,000+ teams shipping faster with FlowDesk. Start your free
              trial today, no credit card required.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button className="w-full bg-white text-slate-900 shadow-none hover:bg-slate-100 sm:w-auto">
                Start free trial <ArrowRight size={16} />
              </Button>
              <Button
                variant="secondary"
                className="w-full border-slate-700 bg-transparent text-white hover:bg-white/10 sm:w-auto"
              >
                Talk to sales
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}