"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Zap,
  Users,
  BarChart3,
  Bell,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const features = [
  {
    icon: LayoutDashboard,
    title: "Flexible boards",
    description:
      "Switch between Kanban, list, and timeline views without losing context.",
  },
  {
    icon: Zap,
    title: "Smart automations",
    description:
      "Automate repetitive work like status updates, assignments, and reminders.",
  },
  {
    icon: Users,
    title: "Real-time collaboration",
    description:
      "Comment, mention teammates, and edit together with instant updates.",
  },
  {
    icon: BarChart3,
    title: "Insightful reports",
    description:
      "Track velocity, workload, and deadlines with dashboards that build themselves.",
  },
  {
    icon: Bell,
    title: "Notifications that matter",
    description:
      "Get alerted only about what needs your attention, nothing more.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-grade security",
    description:
      "SSO, role-based access, and audit logs to keep your data protected.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          badge="Features"
          title="Everything your team needs to stay in flow"
          description="Powerful enough for large teams, simple enough that everyone actually uses it."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-100 hover:shadow-xl hover:shadow-brand-600/5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                <feature.icon size={22} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}