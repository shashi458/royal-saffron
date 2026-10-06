import { createFileRoute } from "@tanstack/react-router";
import {
  Scissors,
  Sparkles,
  Heart,
  Flower2,
  Hand,
  Star,
  MapPin,
  Phone,
  Clock,
  Instagram,
} from "lucide-react";

import heroSalon from "@/assets/hero-salon.jpg";
import galleryBridal from "@/assets/gallery-bridal.jpg";
import galleryHair from "@/assets/gallery-hair.jpg";
import galleryFacial from "@/assets/gallery-facial.jpg";
import galleryNails from "@/assets/gallery-nails.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Glow & Grace — Beauty Parlour & Salon" },
      {
        name: "description",
        content:
          "Glow & Grace Beauty Parlour & Salon — hair, makeup, bridal, skin care and nails. Book your appointment today.",
      },
      { property: "og:title", content: "Glow & Grace — Beauty Parlour & Salon" },
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

const services = [
  {
    icon: Scissors,
    name: "Hair & Styling",
    desc: "Precision cuts, colouring, balayage, keratin and blowouts by senior stylists.",
    price: "from ₹499",
    time: "45–120 min",
  },
  {
    icon: Sparkles,
    name: "Makeup",
    desc: "Party, engagement and HD makeup looks built for camera and candlelight.",
    price: "from ₹1,499",
    time: "45–60 min",
  },
  {
    icon: Heart,
    name: "Bridal Packages",
    desc: "Complete bridal artistry with trial session, draping and on-site touch-ups.",
    price: "from ₹9,999",
    time: "full day",
  },
  {
    icon: Flower2,
    name: "Skin & Facials",
    desc: "Glow facials, clean-ups, de-tan and hydra treatments tailored to your skin.",
    price: "from ₹799",
    time: "50 min",
  },
  {
    icon: Hand,
    name: "Nails & Brows",
    desc: "Gel manicures, nail art, threading and brow shaping in a spotless studio.",
    price: "from ₹299",
    time: "30–60 min",
  },
];

const gallery = [
  { src: galleryBridal, alt: "Bridal makeup look", label: "Bridal" },
  { src: galleryHair, alt: "Copper balayage blowout", label: "Hair" },
  { src: galleryFacial, alt: "Relaxing facial treatment", label: "Skin care" },
  { src: galleryNails, alt: "Nude gel manicure", label: "Nails" },
];

const testimonials = [
  {
    quote:
      "They did my bridal look and I barely recognised the glow in the photos. The trial felt like a conversation, not a sale.",
    name: "Priya R.",
    tag: "Bridal client",
  },
  {
    quote:
      "The only place my colour actually lasts a whole season. Calm, unhurried, and they remember exactly what I asked.",
    name: "Meera S.",
    tag: "Hair client",
  },
  {
    quote:
      "The glow facial left me luminous for days. I booked my next visit before I'd even left the chair.",
    name: "Rhea K.",
    tag: "Skin care client",
  },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#" className="font-display text-2xl font-semibold tracking-tight">
            Glow <span className="text-blush">&</span> Grace
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#services" className="transition-colors hover:text-foreground">
              Services
            </a>
            <a href="#gallery" className="transition-colors hover:text-foreground">
              Gallery
            </a>
            <a href="#reviews" className="transition-colors hover:text-foreground">
              Reviews
            </a>
            <a href="#contact" className="transition-colors hover:text-foreground">
              Contact
            </a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-opacity hover:opacity-90"
          >
            Book Now
          </a>
        </div>
      </header>

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
            <a
              href="#contact"
              className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-md transition-opacity hover:opacity-90"
            >
              Book an Appointment
            </a>
            <a
              href="#services"
              className="rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              View Services
            </a>
          </div>
          <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Star className="size-4 fill-gold text-gold" />
              4.9 · 500+ happy clients
            </span>
            <span className="h-4 w-px bg-border" />
            <span>Open all days · 10am–8pm</span>
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

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blush">
              Our menu
            </p>
            <h2 className="mt-2 font-display text-4xl font-medium tracking-tight md:text-5xl">
              Services, <em className="italic text-gold">curated</em> for you
            </h2>
          </div>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.name}
              className="group rounded-3xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="grid size-12 place-items-center rounded-2xl bg-accent text-accent-foreground transition-transform group-hover:scale-105">
                <s.icon className="size-6" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-medium">{s.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <div className="mt-5 flex items-center justify-between text-sm font-semibold">
                <span>{s.price}</span>
                <span className="font-normal text-muted-foreground">{s.time}</span>
              </div>
            </div>
          ))}
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
            <a
              href="#contact"
              className="mt-6 inline-block w-fit rounded-full bg-primary-foreground px-6 py-2.5 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
            >
              Claim the offer
            </a>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blush">
          Our work
        </p>
        <h2 className="mt-2 font-display text-4xl font-medium tracking-tight md:text-5xl">
          Recent looks from the chair
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {gallery.map((g) => (
            <figure
              key={g.label}
              className="group relative overflow-hidden rounded-3xl border border-border shadow-sm"
            >
              <img
                src={g.src}
                alt={g.alt}
                width={800}
                height={1008}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-3 bottom-3 rounded-2xl bg-background/80 px-4 py-2 text-sm font-semibold backdrop-blur">
                {g.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16">
        <div className="rounded-[2.5rem] border border-border bg-card p-8 shadow-sm md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blush">
            Kind words
          </p>
          <h2 className="mt-2 font-display text-4xl font-medium tracking-tight">
            What our clients say
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
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

      {/* Contact / Booking */}
      <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16">
        <div className="grid gap-10 rounded-[2.5rem] bg-primary p-8 text-primary-foreground shadow-xl md:grid-cols-2 md:p-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
              Reserve your chair
            </p>
            <h2 className="mt-3 font-display text-4xl font-medium tracking-tight md:text-5xl">
              Book your appointment
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/80">
              Walk-ins are welcome, but our senior stylists fill fast. Call or message us
              and we'll hold your slot.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:+919000000000"
                className="rounded-full bg-primary-foreground px-7 py-3.5 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
              >
                Call the Salon
              </a>
              <a
                href="https://wa.me/919000000000"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-primary-foreground/40 px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-primary-foreground/10"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
          <div className="grid content-center gap-5 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-primary-foreground/70" />
              <p>
                24 Rose Lane, Near City Market
                <br />
                Kolkata 700001
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 size-5 shrink-0 text-primary-foreground/70" />
              <p>Open all days · 10:00 AM – 8:00 PM</p>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 size-5 shrink-0 text-primary-foreground/70" />
              <p>+91 90000 00000</p>
            </div>
            <div className="flex items-start gap-3">
              <Instagram className="mt-0.5 size-5 shrink-0 text-primary-foreground/70" />
              <p>@glowandgrace.salon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
          <p className="font-display text-lg font-semibold text-foreground">
            Glow <span className="text-blush">&</span> Grace
          </p>
          <p>© 2026 Glow & Grace Beauty Parlour & Salon</p>
          <div className="flex gap-6">
            <a href="#services" className="transition-colors hover:text-foreground">
              Services
            </a>
            <a href="#gallery" className="transition-colors hover:text-foreground">
              Gallery
            </a>
            <a href="#contact" className="transition-colors hover:text-foreground">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
