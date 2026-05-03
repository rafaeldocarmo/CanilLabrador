import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { routes } from "@/lib/routes";

const litters = [
  {
    title: "Ninhada Primavera",
    meta: "Luna × Duke — 7 filhotes",
    date: "Nasc. jan. 2025",
    badge: "Disponível",
    badgeClass: "bg-green-100 text-green-700",
    image: "/images/home1.png",
  },
  {
    title: "Ninhada Outono",
    meta: "Bella × Max — 5 filhotes",
    date: "Nasc. nov. 2024",
    badge: "2 restantes",
    badgeClass: "bg-amber-100 text-amber-700",
    image: "/images/home2.png",
  },
  {
    title: "Ninhada Primavera II",
    meta: "Daisy × Charlie — previsto",
    date: "Prev. mar. 2025",
    badge: "Em breve",
    badgeClass: "bg-blue-100 text-blue-700",
    image: "/images/home3.png",
  },
] as const;

export function LittersPreviewSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center">
          <ScrollReveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-brown">
              Ninhadas atuais
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-black sm:text-4xl">
              Filhotes <span className="text-brown italic">disponíveis</span>
            </h2>
          </ScrollReveal>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {litters.map((l, i) => (
            <ScrollReveal
              key={l.title}
              className={
                i === 0 ? "" : i === 1 ? "reveal-d1" : "reveal-d2"
              }
            >
              <Link
                href={routes.litters}
                className="card-hover block cursor-pointer overflow-hidden rounded-3xl border border-beige-dark/15 bg-white"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-beige/40">
                  <Image
                    src={l.image}
                    alt={l.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${l.badgeClass}`}
                    >
                      {l.badge}
                    </span>
                    <span className="text-xs text-black/40">{l.date}</span>
                  </div>
                  <h3 className="mt-3 font-display text-xl font-bold text-black">
                    {l.title}
                  </h3>
                  <p className="mt-1 text-sm text-black/50">{l.meta}</p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
