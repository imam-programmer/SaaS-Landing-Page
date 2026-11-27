"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

// Reusable fade-up animation
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[28rem] w-[44rem] -translate-x-1/2 rounded-full bg-brand-400/25 blur-3xl" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-violet-300/20 blur-3xl" />
      </div>

      <Container className="text-center">
        <motion.div {...fadeUp(0)} className="flex justify-center">
          <Badge>
            <Sparkles size={14} />
            New: AI-powered sprint planning
          </Badge>
        </motion.div>

        <motion.h1
          {...fadeUp(0.1)}
          className="mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl sm:leading-[1.05]"
        >
          Ship projects faster with{" "}
          <span className="text-brand-600">less chaos</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="mx-auto mt-6 max-w-2xl text-base text-slate-600 sm:text-lg"
        >
          FlowDesk brings tasks, timelines, and team conversations into one
          workspace, so everyone knows what to do next.
        </motion.p>

        <motion.div
          {...fadeUp(0.3)}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button className="w-full sm:w-auto">
            Start free trial <ArrowRight size={16} />
          </Button>
          <Button variant="secondary" className="w-full sm:w-auto">
            <Play size={14} className="fill-current" /> Watch demo
          </Button>
        </motion.div>

        <motion.ul
          {...fadeUp(0.4)}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500"
        >
          {["No credit card required", "14-day free trial", "Cancel anytime"].map(
            (item) => (
              <li key={item} className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-brand-600" />
                {item}
              </li>
            )
          )}
        </motion.ul>

        <motion.div {...fadeUp(0.5)} className="mt-16">
          <DashboardMockup />
        </motion.div>
      </Container>
    </section>
  );
}

/* ---------- Product mockup built with plain Tailwind ---------- */

const columns = [
  {
    title: "To do",
    dot: "bg-slate-400",
    cards: [
      { t: "Design onboarding flow", tag: "Design", c: "bg-pink-100 text-pink-700" },
      { t: "Write API docs", tag: "Docs", c: "bg-amber-100 text-amber-700" },
    ],
  },
  {
    title: "In progress",
    dot: "bg-brand-500",
    cards: [
      { t: "Build billing page", tag: "Frontend", c: "bg-brand-100 text-brand-700" },
      { t: "Set up CI pipeline", tag: "DevOps", c: "bg-emerald-100 text-emerald-700" },
      { t: "User interviews", tag: "Research", c: "bg-sky-100 text-sky-700" },
    ],
  },
  {
    title: "Done",
    dot: "bg-emerald-500",
    cards: [
      { t: "Launch landing page", tag: "Marketing", c: "bg-violet-100 text-violet-700" },
      { t: "Database migration", tag: "Backend", c: "bg-slate-200 text-slate-700" },
    ],
  },
];

function DashboardMockup() {
  return (
    <div className="relative mx-auto max-w-5xl">
      {/* Floating card, hidden on small screens */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-4 top-24 z-10 hidden rounded-xl border border-slate-200 bg-white p-3 text-left shadow-xl lg:block"
      >
        <p className="text-xs text-slate-500">Sprint progress</p>
        <p className="text-xl font-bold text-slate-900">78%</p>
        <div className="mt-2 h-1.5 w-28 rounded-full bg-slate-100">
          <div className="h-full w-[78%] rounded-full bg-brand-600" />
        </div>
      </motion.div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-brand-600/10">
        {/* Window bar */}
        <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
          <span className="ml-4 hidden rounded-md bg-white px-3 py-1 text-xs text-slate-400 sm:block">
            app.flowdesk.com/board
          </span>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <aside className="hidden w-48 shrink-0 border-r border-slate-100 p-4 text-left md:block">
            <div className="space-y-2">
              {["Dashboard", "Board", "Timeline", "Reports", "Team"].map((item, i) => (
                <div
                  key={item}
                  className={`rounded-lg px-3 py-2 text-sm font-medium ${
                    i === 1 ? "bg-brand-50 text-brand-700" : "text-slate-500"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </aside>

          {/* Board */}
          <div className="grid flex-1 gap-4 bg-slate-50/50 p-4 text-left sm:grid-cols-3 sm:p-6">
            {columns.map((col) => (
              <div key={col.title}>
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <span className={`h-2 w-2 rounded-full ${col.dot}`} />
                  {col.title}
                  <span className="text-xs font-normal text-slate-400">
                    {col.cards.length}
                  </span>
                </div>
                <div className="space-y-3">
                  {col.cards.map((card) => (
                    <div
                      key={card.t}
                      className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm"
                    >
                      <p className="text-sm font-medium text-slate-800">{card.t}</p>
                      <span
                        className={`mt-2 inline-block rounded-md px-2 py-0.5 text-[11px] font-semibold ${card.c}`}
                      >
                        {card.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}