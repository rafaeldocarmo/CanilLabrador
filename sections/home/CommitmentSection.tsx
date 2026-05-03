import { Award, Dna, Heart, Phone } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const items = [
  {
    icon: Heart,
    title: "Bem-estar animal",
    body: "Cada cão vive em ambiente familiar, com amor, espaço e acompanhamento veterinário de excelência.",
  },
  {
    icon: Award,
    title: "Linhagem comprovada",
    body: "Linhagens campeãs com pedigree documentado ao longo de várias gerações.",
  },
  {
    icon: Phone,
    title: "Suporte contínuo",
    body: "Orientação para a vida toda — desde o cuidado com o filhote até dicas de adestramento e muito mais.",
  },
  {
    icon: Dna,
    title: "Qualidade genética",
    body: "Exames de saúde abrangentes, incluindo quadril, cotovelo, olhos e coração.",
  },
];

export function CommitmentSection() {
  return (
    <section className="bg-beige-light py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brown">
            Por que nos escolher
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-black sm:text-4xl">
            Nosso <span className="text-brown italic">compromisso</span>
          </h2>
        </ScrollReveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const delayClass =
              i === 0
                ? ""
                : i === 1
                  ? "reveal-d1"
                  : i === 2
                    ? "reveal-d2"
                    : "reveal-d3";
            const Icon = item.icon;
            return (
              <ScrollReveal
                key={item.title}
                className={`card-hover rounded-3xl border border-beige-dark/20 bg-cream p-8 text-center ${delayClass}`}
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-brown/10">
                  <Icon className="h-7 w-7 text-brown" aria-hidden />
                </div>
                <h3 className="font-display text-xl font-bold text-black">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-black/55">
                  {item.body}
                </p>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
