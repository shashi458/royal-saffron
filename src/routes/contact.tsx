import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Clock, Phone, Instagram, Star } from "lucide-react";

import { salon, testimonials } from "@/data/site";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book an Appointment — The Royal Saffron" },
      {
        name: "description",
        content:
          "Book your appointment at The Royal Saffron — call or WhatsApp us. Open all days, 10 AM to 8 PM. Walk-ins welcome.",
      },
      { property: "og:title", content: "Book an Appointment — The Royal Saffron" },
      {
        property: "og:description",
        content:
          "Call or WhatsApp The Royal Saffron to book your slot. Open all days, 10 AM to 8 PM.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blush">
          Reserve your chair
        </p>
        <h1 className="mt-2 font-display text-5xl font-medium tracking-tight md:text-6xl">
          Book your appointment
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          Walk-ins are welcome, but our senior stylists fill fast. Call or message us
          and we'll hold your slot.
        </p>

        <div className="mt-12 grid gap-10 rounded-[2.5rem] bg-primary p-8 text-primary-foreground shadow-xl md:p-14">
          <div className="flex flex-wrap gap-4">
            <a
              href={salon.phoneHref}
              className="rounded-full bg-primary-foreground px-7 py-3.5 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
            >
              Call the Salon
            </a>
            <a
              href={salon.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-primary-foreground/40 px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-primary-foreground/10"
            >
              WhatsApp Us
            </a>
          </div>
          <div className="grid content-start gap-5 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-primary-foreground/70" />
              <p>24 Rose Lane, Near City Market
                <br />
                Kolkata 700001</p>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 size-5 shrink-0 text-primary-foreground/70" />
              <p>{salon.hours}</p>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 size-5 shrink-0 text-primary-foreground/70" />
              <p>{salon.phoneDisplay}</p>
            </div>
            <div className="flex items-start gap-3">
              <Instagram className="mt-0.5 size-5 shrink-0 text-primary-foreground/70" />
              <p>{salon.instagram}</p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="font-display text-3xl font-medium tracking-tight">
            Why clients keep coming back
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {testimonials.slice(0, 3).map((t) => (
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
