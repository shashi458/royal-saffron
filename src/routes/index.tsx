import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Scissors, Sparkles, Heart, Flower2, Hand, Star, ArrowRight } from "lucide-react";

import heroSalon from "@/assets/hero-salon.jpg";
import { salon, services, testimonials } from "@/data/site";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

const iconMap = { scissors: Scissors, sparkles: Sparkles, heart: Heart, flower: Flower2, hand: Hand };

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Royal Saffron — Beauty Parlour & Salon" },
      {
        name: "description",
        content:
          "The Royal Saffron Beauty Parlour & Salon — hair, makeup, bridal, skin care and nails. 500+ happy clients, 4.9 rating. Book your appointment today.",
      },
      { property: "og:title", content: "The Royal Saffron — Beauty Parlour & Salon" },
      {
        property: "og:description",
        content:
          "A boutique parlour for hair, makeup, bridal, skin care and nails. Unhurried appointments, warm chairs, and a finish that feels like you.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <span className="animate-fade-up inline-block rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Beauty Parlour & Salon
          </span>
          <h1 className="animate-fade-up-delayed mt-6 font-display text-5xl font-medium leading-[1.05] tracking-tight md:text-6xl">
            Where your <em className="italic text-blush">best self</em> is simply revealed.
          </h1>
          <p className="animate-fade-up-slow mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            A warm, light-filled parlour for hair, makeup, bridal, skin and nails.
            Unhurried care, honest prices, and a glow that follows you home.
          </p>
          <div className="animate-fade-up-slow mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-md transition-opacity hover:opacity-90"
            >
              Book an Appointment
            </Link>
            <Link
              to="/services"
              className="rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              View Services
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Star className="size-4 fill-gold text-gold" />
              4.9 · 500+ happy clients
            </span>
            <span className="h-4 w-px bg-border" />
            <span>{salon.hours}</span>
          </div>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-[2.5rem] border border-border bg-card p-3 shadow-xl">
            <img
              src={heroSalon}
              alt="Stylist styling a client's hair in a warm, elegant salon"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full rounded-[2rem] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 rounded-3xl border border-border bg-card/90 px-6 py-4 shadow-lg backdrop-blur md:-left-8">
            <p className="font-display text-2xl font-semibold">10+ years</p>
            <p className="text-xs text-muted-foreground">of trusted beauty care</p>
          </div>
        </div>
      </section>

      {/* Client satisfaction band */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-6 rounded-[2.5rem] border border-border bg-card p-8 shadow-sm sm:grid-cols-3 md:p-10">
          <div>
            <p className="font-display text-4xl font-semibold text-blush">100%</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Satisfaction first — if you're not happy, we make it right.
            </p>
          </div>
          <div>
            <p className="font-display text-4xl font-semibold text-gold">4.9★</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Average rating from 500+ verified client visits.
            </p>
          </div>
          <div>
            <p className="font-display text-4xl font-semibold text-blush">7 days</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Free touch-up window on every colour and styling service.
            </p>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blush">
              Our menu
            </p>
            <h2 className="mt-2 font-display text-4xl font-medium tracking-tight md:text-5xl">
              Services, <em className="italic text-gold">curated</em> for you
            </h2>
          </div>
          <Link
            to="/services"
            className="hidden items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-blush sm:flex"
          >
            See all services <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap];
            return (
              <Link
                key={s.name}
                to="/services"
                className="group rounded-3xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="grid size-12 place-items-center rounded-2xl bg-accent text-accent-foreground transition-transform group-hover:scale-105">
                  {Icon && <Icon className="size-6" />}
                </div>
                <h3 className="mt-5 font-display text-2xl font-medium">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <div className="mt-5 flex items-center justify-between text-sm font-semibold">
                  <span>{s.price}</span>
                  <span className="font-normal text-muted-foreground">{s.time}</span>
                </div>
              </Link>
            );
          })}
          <div className="flex flex-col justify-between rounded-3xl bg-primary p-7 text-primary-foreground shadow-md">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
                This month
              </p>
              <h3 className="mt-3 font-display text-2xl font-medium">
                Bridal Season Package
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80">
                Trial, day-of hair & makeup, and a pre-wedding glow facial — one calm
                package, one price.
              </p>
            </div>
            <Link
              to="/contact"
              className="mt-6 inline-block w-fit rounded-full bg-primary-foreground px-6 py-2.5 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
            >
              Claim the offer
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-[2.5rem] border border-border bg-card p-8 shadow-sm md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blush">
            Kind words
          </p>
          <h2 className="mt-2 font-display text-4xl font-medium tracking-tight">
            What our clients say
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.slice(0, 3).map((t) => (
              <blockquote
                key={t.name}
                className="flex flex-col rounded-3xl border border-border bg-background p-6"
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

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-[2.5rem] bg-primary p-8 text-center text-primary-foreground shadow-xl md:p-14">
          <h2 className="font-display text-4xl font-medium tracking-tight md:text-5xl">
            Ready to feel <em className="italic">royal</em>?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/80">
            Call or WhatsApp us — we'll help you pick the right service and hold your slot.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-full bg-primary-foreground px-8 py-3.5 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
          >
            Book an Appointment
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
