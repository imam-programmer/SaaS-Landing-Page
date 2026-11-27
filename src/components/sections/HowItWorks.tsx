"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FolderPlus, UserPlus, Rocket, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: FolderPlus,
    title: "Create your workspace",
    description:
      "Sign up in seconds and import tasks from spreadsheets or other tools.",
  },
  {
    icon: UserPlus,
    title: "Invite your team",
    description:
      "Add teammates, assign roles, and set up projects with ready-made templates.",
  },
  {
    icon: Rocket,
    title: "Ship with confidence",
    description:
      "Track progress in real time and let automations handle the busywork.",
  },
];

export function HowItWorks() {
  const [active, setActive] = useState(0);

  return (
    <section id="how-it-works" className="bg-slate-50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          badge="How it works"
          title="Up and running in three simple steps"
          description="No training sessions, no long setup. Your team can start working today."
        />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Steps */}
          <div className="space-y-4">
            {steps.map((step, i) => (
              <button
                key={step.title}
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                className={cn(
                  "flex w-full gap-4 rounded-2xl border p-5 text-left transition-all duration-300",
                  active === i
                    ? "border-brand-100 bg-white shadow-lg shadow-brand-600/5"
                    : "border-transparent hover:bg-white/60"
                )}
              >
                <span
                  className={cn(
                    "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors",
                    active === i
                      ? "bg-brand-600 text-white"
                      : "bg-slate-200 text-slate-500"
                  )}
                >
                  <step.icon size={22} />
                </span>
                <span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                    Step {i + 1}
                  </span>
                  <span className="mt-1 block text-lg font-semibold text-slate-900">
                    {step.title}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </span>
                </span>
              </button>
            ))}
          </div>

          {/* Visual panel */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-brand-600/5 sm:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="min-h-[18rem]"
              >
                {active === 0 && <WorkspaceVisual />}
                {active === 1 && <InviteVisual />}
                {active === 2 && <ProgressVisual />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- Visual 1: create workspace ---------- */
function WorkspaceVisual() {
  return (
    <div>
      <p className="text-sm font-semibold text-slate-900">Create workspace</p>
      <div className="mt-5 space-y-4">
        <div>
          <p className="text-xs font-medium text-slate-500">Workspace name</p>
          <div className="mt-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-800">
            Acme Product Team
          </div>
        </div>
        <div>
          <p className="text-xs font-medium text-slate-500">Import from</p>
          <div className="mt-1.5 grid grid-cols-3 gap-2">
            {["CSV file", "Trello", "Notion"].map((s, i) => (
              <div
                key={s}
                className={cn(
                  "rounded-lg border px-3 py-2.5 text-center text-xs font-medium",
                  i === 0
                    ? "border-brand-500 bg-brand-50 text-brand-700"
                    : "border-slate-200 text-slate-500"
                )}
              >
                {s}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg bg-brand-600 py-2.5 text-center text-sm font-semibold text-white">
          Create workspace
        </div>
      </div>
    </div>
  );
}

/* ---------- Visual 2: invite team ---------- */
const members = [
  { name: "Sara Ahmed", role: "Admin", color: "bg-pink-500" },
  { name: "Daniel Lee", role: "Designer", color: "bg-amber-500" },
  { name: "Maya Patel", role: "Developer", color: "bg-emerald-500" },
  { name: "Tom Becker", role: "Developer", color: "bg-sky-500" },
];

function InviteVisual() {
  return (
    <div>
      <p className="text-sm font-semibold text-slate-900">Team members</p>
      <ul className="mt-5 space-y-3">
        {members.map((m) => (
          <li
            key={m.name}
            className="flex items-center justify-between rounded-xl border border-slate-100 p-3"
          >
            <div className="flex items-center gap-3">
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-white ${m.color}`}
              >
                {m.name[0]}
              </span>
              <span className="text-sm font-medium text-slate-800">{m.name}</span>
            </div>
            <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">
              {m.role}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Visual 3: progress ---------- */
const progress = [
  { label: "Website redesign", value: 82 },
  { label: "Mobile app v2", value: 56 },
  { label: "API integration", value: 94 },
];

function ProgressVisual() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-slate-900">Project progress</p>
        <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
          <Check size={12} /> On track
        </span>
      </div>
      <div className="mt-6 space-y-5">
        {progress.map((p) => (
          <div key={p.label}>
            <div className="flex justify-between text-sm">
              <span className="font-medium text-slate-700">{p.label}</span>
              <span className="text-slate-500">{p.value}%</span>
            </div>
            <div className="mt-2 h-2 rounded-full bg-slate-100">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${p.value}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="h-full rounded-full bg-brand-600"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}