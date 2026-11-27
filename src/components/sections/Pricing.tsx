"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Billing = "monthly" | "yearly";

const plans = [
  {
    name: "Starter",
    description: "For individuals and small teams getting started.",
    monthly: 0,
    yearly: 0,
    cta: "Get started free",
    popular: false,
    features: [
      "Up to 5 team members",
      "3 active projects",
      "Kanban and list views",
      "Basic reports",
      "Community support",
    ],
  },
  {
    name: "Pro",
    description: "For growing teams that need more power and control.",
    monthly: 12,
    yearly: 10,
    cta: "Start free trial",
    popular: true,
    features: [
      "Unlimited team members",
      "Unlimited projects",
      "Timeline and automations",
      "Advanced reports",
      "Priority email support",
    ],
  },
  {
    name: "Business",
    description: "For organizations with advanced security needs.",
    monthly: 24,
    yearly: 20,
    cta: "Contact sales",
    popular: false,
    features: [
      "Everything in Pro",
      "SSO and role-based access",
      "Audit logs",
      "Custom integrations",
      "Dedicated success manager",
    ],
  },
];

export function Pricing() {
  const [billing, setBilling] = useState<Billing>("yearly");

  return (
    <section id="pricing" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          badge="Pricing"
          title="Simple pricing that scales with your team"
          description="Start free and upgrade when you're ready. No hidden fees."
        />

        {/* Billing toggle */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <div
            role="group"
            aria-label="Billing period"
            className="relative inline-flex rounded-full border border-slate-200 bg-slate-100 p-1"
          >
            {(["monthly", "yearly"] as const).map((option) => (
              <button
                key={option}
                onClick={() => setBilling(option)}
                aria-pressed={billing === option}
                className={cn(
                  "relative z-10 rounded-full px-5 py-2 text-sm font-semibold capitalize transition-colors",
                  billing === option
                    ? "text-slate-900"
                    : "text-slate-500 hover:text-slate-700"
                )}
              >
                {billing === option && (
                  <motion.span
                    layoutId="billing-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-white shadow-sm"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                {option}
              </button>
            ))}
          </div>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            Save 20%
          </span>
        </div>

        {/* Plans */}
        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => {
            const price = billing === "monthly" ? plan.monthly : plan.yearly;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={cn(
                  "relative flex flex-col rounded-2xl border p-8",
                  plan.popular
                    ? "border-slate-900 bg-slate-900 text-white shadow-2xl shadow-brand-600/20 lg:-translate-y-4"
                    : "border-slate-200 bg-white"
                )}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
                    Most popular
                  </span>
                )}

                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p
                  className={cn(
                    "mt-2 text-sm",
                    plan.popular ? "text-slate-300" : "text-slate-600"
                  )}
                >
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mt-6 flex items-end gap-1">
                  <div className="relative h-12 overflow-hidden">
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.span
                        key={`${plan.name}-${billing}`}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="block text-5xl font-bold tracking-tight"
                      >
                        ${price}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  <span
                    className={cn(
                      "mb-1.5 text-sm",
                      plan.popular ? "text-slate-400" : "text-slate-500"
                    )}
                  >
                    /user/month
                  </span>
                </div>

                <p
                  className={cn(
                    "mt-1 h-5 text-xs",
                    plan.popular ? "text-slate-400" : "text-slate-500"
                  )}
                >
                  {price > 0 && billing === "yearly"
                    ? `Billed $${price * 12} per user yearly`
                    : price > 0
                    ? "Billed monthly"
                    : "Free forever"}
                </p>

                <Button
                  variant={plan.popular ? "primary" : "secondary"}
                  className={cn(
                    "mt-6 w-full",
                    plan.popular &&
                      "bg-white text-slate-900 shadow-none hover:bg-slate-100"
                  )}
                >
                  {plan.cta}
                </Button>

                <ul className="mt-8 space-y-3 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span
                        className={cn(
                          "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                          plan.popular
                            ? "bg-brand-500/20 text-brand-400"
                            : "bg-brand-50 text-brand-600"
                        )}
                      >
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span
                        className={plan.popular ? "text-slate-200" : "text-slate-700"}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}