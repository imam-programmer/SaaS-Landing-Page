"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const stats = [
  { value: "2,000+", label: "Active teams" },
  { value: "4.9/5", label: "Average rating" },
  { value: "35%", label: "Faster delivery" },
  { value: "99.9%", label: "Uptime" },
];

const testimonials = [
  {
    quote:
      "We moved our whole product team to FlowDesk in a weekend. Standups are shorter because everyone can already see what's happening.",
    name: "Sara Ahmed",
    role: "Head of Product, Northwind",
    color: "bg-pink-500",
    rating: 5,
  },
  {
    quote:
      "The automations alone save us hours every week. Status updates used to be a chore, and now they just happen.",
    name: "Daniel Lee",
    role: "Engineering Manager, Lumen",
    color: "bg-amber-500",
    rating: 5,
  },
  {
    quote:
      "Clean, fast, and easy for non-technical teammates to pick up. Our designers and marketers adopted it without any training.",
    name: "Maya Patel",
    role: "Design Lead, Brightside",
    color: "bg-emerald-500",
    rating: 5,
  },
  {
    quote:
      "The reports give me a clear view of workload across teams. I can spot bottlenecks before they turn into missed deadlines.",
    name: "Tom Becker",
    role: "COO, Fieldwork",
    color: "bg-sky-500",
    rating: 5,
  },
  {
    quote:
      "Switching from spreadsheets was painless. The import tool brought over all of our tasks and the board looked right immediately.",
    name: "Aisha Rahman",
    role: "Operations Lead, Kitepath",
    color: "bg-violet-500",
    rating: 4,
  },
  {
    quote:
      "Support replied within minutes when we had a question about roles. That level of care is rare for a tool this size.",
    name: "Lucas Moreau",
    role: "CTO, Ember Labs",
    color: "bg-rose-500",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          badge="Testimonials"
          title="Loved by teams who ship"
          description="Here's what people say after switching to FlowDesk."
        />

        
{/* Stats */}
<dl className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
  {stats.map((stat) => (
    <div
      key={stat.label}
      className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 text-center"
    >
      <dt className="order-2 text-sm text-slate-500">{stat.label}</dt>
      <dd className="order-1 text-3xl font-bold tracking-tight text-slate-900">
        {stat.value}
      </dd>
    </div>
  ))}
</dl>

        {/* Review cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 transition-shadow duration-300 hover:shadow-xl hover:shadow-brand-600/5"
            >
              <div>
                <div
                  className="flex gap-0.5"
                  role="img"
                  aria-label={`${t.rating} out of 5 stars`}
                >
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      size={16}
                      className={
                        s < t.rating
                          ? "fill-amber-400 text-amber-400"
                          : "fill-slate-200 text-slate-200"
                      }
                    />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-slate-700">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white ${t.color}`}
                >
                  {t.name[0]}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-slate-900">
                    {t.name}
                  </span>
                  <span className="block text-xs text-slate-500">{t.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  );
}