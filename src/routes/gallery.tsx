import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

import { gallery } from "@/data/site";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — The Royal Saffron" },
      {
        name: "description",
        content:
          "Recent looks from the chair at The Royal Saffron — bridal, hair colour, skin care and nail art. Real work, real clients.",
      },
      { property: "og:title", content: "Gallery — The Royal Saffron" },
      {
        property: "og:description",
        content:
          "Recent looks from the chair — bridal, hair colour, skin care and nail art at The Royal Saffron.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blush">Our work</p>
        <h1 className="mt-2 font-display text-5xl font-medium tracking-tight md:text-6xl">
          Recent looks from the chair
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          Every client who sat with us left a little taller. Bring us your inspiration
          photos — we'll tell you honestly what will suit you.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
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

        <div className="mt-14 text-center">
          <p className="text-muted-foreground">See something you love?</p>
          <Link
            to="/contact"
            className="mt-4 inline-block rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-md transition-opacity hover:opacity-90"
          >
            Book your look
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
