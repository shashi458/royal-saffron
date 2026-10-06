import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { HeartHandshake, ShieldCheck, Sparkles, Star } from "lucide-react";

import { salon } from "@/data/site";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — The Royal Saffron" },
      {
        name: "description",
        content:
          "The Royal Saffron's story — 10+ years of trusted beauty care, senior stylists, and a client-satisfaction promise behind every appointment.",
      },
      { property: "og:title", content: "About Us — The Royal Saffron" },
      {
        property: "og:description",
        content:
          "10+ years of trusted beauty care, senior stylists, and a client-satisfaction promise behind every appointment.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const promises = [
  {
    icon: HeartHandshake,
    title: "Client satisfaction, always",
    desc: "If you walk out anything less than delighted, tell us — we'll fix it or refund it. No debates, no fine print.",
  },
  {
    icon: ShieldCheck,
    title: "Honest consultation",
    desc: "We recommend only what your hair and skin actually need. You'll never be sold a service you didn't ask for.",
  },
  {
    icon: Sparkles,
    title: "Senior stylists only",
    desc: "Every appointment is handled by an experienced senior stylist — never handed off to a trainee.",
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blush">Our story</p>
        <h1 className="mt-2 font-display text-5xl font-medium tracking-tight md:text-6xl">
          A parlour built on <em className="italic text-gold">trust</em>
        </h1>
        <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            {salon.name} began with a simple belief: a beauty appointment should feel
            like the calmest hour of your week. For over 10 years, we've kept our chairs
            warm, our tools spotless, and our advice honest.
          </p>
          <p>
            Client satisfaction is not a slogan here — it's the whole business. We'd
            rather lose a sale than rush a service, and we'd rather redo a haircut for
            free than let you leave unhappy. That's why most of our clients come to us
            through word of mouth.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {promises.map((p) => (
            <div
              key={p.title}
              className="rounded-3xl border border-border bg-card p-7 shadow-sm"
            >
              <div className="grid size-12 place-items-center rounded-2xl bg-accent text-accent-foreground">
                <p.icon className="size-6" />
              </div>
              <h2 className="mt-5 font-display text-2xl font-medium">{p.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-[2.5rem] border border-border bg-card p-8 shadow-sm md:flex-row md:items-center md:p-12">
          <div>
            <p className="flex items-center gap-2 font-display text-4xl font-semibold">
              4.9 <Star className="size-8 fill-gold text-gold" />
            </p>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              Average rating across 500+ client visits. Come see why — your first
              consultation is always free.
            </p>
          </div>
          <Link
            to="/contact"
            className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-md transition-opacity hover:opacity-90"
          >
            Book an Appointment
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
