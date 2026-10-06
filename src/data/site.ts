import galleryBridal from "@/assets/gallery-bridal.jpg";
import galleryHair from "@/assets/gallery-hair.jpg";
import galleryFacial from "@/assets/gallery-facial.jpg";
import galleryNails from "@/assets/gallery-nails.jpg";

export const salon = {
  name: "The Royal Saffron",
  tagline: "Beauty Parlour & Salon",
  phoneDisplay: "+91 90000 00000",
  phoneHref: "tel:+919000000000",
  whatsappHref: "https://wa.me/919000000000",
  instagram: "@theroyalsaffron",
  address: "24 Rose Lane, Near City Market, Kolkata 700001",
  hours: "Open all days · 10:00 AM – 8:00 PM",
};

export const services = [
  {
    icon: "scissors",
    name: "Hair & Styling",
    desc: "Precision cuts, colouring, balayage, keratin and blowouts by senior stylists.",
    price: "from ₹499",
    time: "45–120 min",
  },
  {
    icon: "sparkles",
    name: "Makeup",
    desc: "Party, engagement and HD makeup looks built for camera and candlelight.",
    price: "from ₹1,499",
    time: "45–60 min",
  },
  {
    icon: "heart",
    name: "Bridal Packages",
    desc: "Complete bridal artistry with trial session, draping and on-site touch-ups.",
    price: "from ₹9,999",
    time: "full day",
  },
  {
    icon: "flower",
    name: "Skin & Facials",
    desc: "Glow facials, clean-ups, de-tan and hydra treatments tailored to your skin.",
    price: "from ₹799",
    time: "50 min",
  },
  {
    icon: "hand",
    name: "Nails & Brows",
    desc: "Gel manicures, nail art, threading and brow shaping in a spotless studio.",
    price: "from ₹299",
    time: "30–60 min",
  },
];

export const gallery = [
  { src: galleryBridal, alt: "Bridal makeup look", label: "Bridal" },
  { src: galleryHair, alt: "Copper balayage blowout", label: "Hair" },
  { src: galleryFacial, alt: "Relaxing facial treatment", label: "Skin care" },
  { src: galleryNails, alt: "Nude gel manicure", label: "Nails" },
];

export const testimonials = [
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
  {
    quote:
      "I came in with a photo from Pinterest and left with something better. They truly listen here.",
    name: "Anjali D.",
    tag: "Makeup client",
  },
  {
    quote:
      "My gel nails lasted three weeks without a single chip. Spotless studio, gentle hands, fair price.",
    name: "Sneha M.",
    tag: "Nails client",
  },
  {
    quote:
      "They reshaped my brows and my whole face looked softer. I will not trust anyone else now.",
    name: "Farah A.",
    tag: "Brows client",
  },
];
