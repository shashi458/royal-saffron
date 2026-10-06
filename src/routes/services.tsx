import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Scissors, Sparkles, Heart, Flower2, Hand, Star } from "lucide-react";

import { services, testimonials } from "@/data/site";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

const iconMap = { scissors: Scissors, sparkles: Sparkles, heart: Heart, flower: Flower2, hand: Hand };

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Prices — The Royal Saffron" },
      {
        name: "description",
        content:
          "Full service menu and prices at The Royal Saffron — hair, makeup, bridal packages, facials, nails and brows. Transparent pricing, senior stylists.",
      },
      { property: "og:title", content: "Services & Prices — The Royal Saffron" },
      {
        property: "og:description",
        content:
          "Full service menu and prices — hair, makeup, bridal packages, facials, nails and brows at The Royal Saffron.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blush">Our menu</p>
        <h1 className="mt-2 font-display text-5xl font-medium tracking-tight md:text-6xl">
          Every service, <em className="italic text-gold">honest</em> prices
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          No hidden charges, no pressure to upsell. Your stylist explains everything
          before the chair — and we only proceed when you're comfortable.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap];
            return (
              <div
                key={s.name}
                className="group rounded-3xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="grid size-12 place-items-center rounded-2xl bg-accent text-accent-foreground transition-transform group-hover:scale-105">
                  {Icon && <Icon className="size-6" />}
                </div>
                <h2 className="mt-5 font-display text-2xl font-medium">{s.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <div className="mt-5 flex items-center justify-between text-sm font-semibold">
                  <span>{s.price}</span>
                  <span className="font-normal text-muted-foreground">{s.time}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-[2.5rem] bg-primary p-8 text-primary-foreground shadow-md md:p-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
                This month
              </p>
              <h2 className="mt-2 font-display text-3xl font-medium">Bridal Season Package</h2>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-primary-foreground/80">
                Trial, day-of hair & makeup, and a pre-wedding glow facial — one calm
                package, one price. Includes a free touch-up before the ceremony.
              </p>
            </div>
            <Link
              to="/contact"
              className="rounded-full bg-primary-foreground px-7 py-3.5 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
            >
              Claim the offer
            </Link>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="font-display text-3xl font-medium tracking-tight">
            Loved by our clients
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {testimonials.slice(3, 6).map((t) => (
              <blockquote
                key={t.name}
                className="flex flex-col rounded-3xl border border-border bg-card p-6"
              >
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  "{t.quote}"
                </p>
                <footer className="mt-5">
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.tag}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
