"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Is there a free plan?",
    answer:
      "Yes. The Starter plan is free forever for up to 5 team members and 3 active projects. You can upgrade whenever your team grows.",
  },
  {
    question: "How does the 14-day free trial work?",
    answer:
      "You get full access to every Pro feature for 14 days. No credit card is required, and your workspace switches to the free plan automatically if you don't upgrade.",
  },
  {
    question: "Can I import data from other tools?",
    answer:
      "Yes. You can import tasks and projects from CSV files, Trello, and Notion in a few clicks. Your boards are ready to use right after the import.",
  },
  {
    question: "Can I change or cancel my plan later?",
    answer:
      "Absolutely. You can upgrade, downgrade, or cancel at any time from your billing settings. Changes apply at the start of your next billing cycle.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Your data is encrypted in transit and at rest. Business plans add SSO, role-based access, and audit logs for teams with stricter security requirements.",
  },
  {
    question: "Do you offer discounts for startups or non-profits?",
    answer:
      "We do. Contact our team and we'll set up a discounted plan for eligible startups, students, and non-profit organizations.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="faq" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          badge="FAQ"
          title="Frequently asked questions"
          description="Can't find what you're looking for? Our team is happy to help."
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            const buttonId = `${baseId}-button-${i}`;
            const panelId = `${baseId}-panel-${i}`;

            return (
              <div
                key={faq.question}
                className={cn(
                  "rounded-2xl border bg-white transition-colors duration-300",
                  isOpen
                    ? "border-brand-100 shadow-lg shadow-brand-600/5"
                    : "border-slate-200 hover:border-slate-300"
                )}
              >
                <h3>
                  <button
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 rounded-2xl px-6 py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
                  >
                    <span className="text-base font-semibold text-slate-900">
                      {faq.question}
                    </span>
                    <span
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300",
                        isOpen
                          ? "rotate-45 bg-brand-600 text-white"
                          : "bg-slate-100 text-slate-600"
                      )}
                    >
                      <Plus size={16} />
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm leading-relaxed text-slate-600">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-slate-600">
          Still have questions?{" "}
          <a
            href="#"
            className="font-semibold text-brand-600 hover:text-brand-700"
          >
            Talk to our team
          </a>
        </p>
      </Container>
    </section>
  );
}