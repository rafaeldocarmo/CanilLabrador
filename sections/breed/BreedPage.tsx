import Link from "next/link";
import {
  Activity,
  Clock,
  Palette,
  Ruler,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { cn } from "@/lib/cn";
import { routes } from "@/lib/routes";
import Image from "next/image";

const temperament = [
  { emoji: "🐾", label: "Amigável" },
  { emoji: "🧠", label: "Inteligente" },
  { emoji: "⚡", label: "Ativo" },
  { emoji: "🤝", label: "Leal" },
  { emoji: "👶", label: "Dócil" },
  { emoji: "🎾", label: "Brincalhão" },
];

export function BreedPage() {
  return (
    <>
      <section className="bg-beige pb-16 pt-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-brown">
            Sobre a Raça
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold text-black sm:text-5xl lg:text-6xl">
            O Labrador
            <br />
            <span className="text-brown italic">Retriever</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-black/55">
            Uma das raças mais populares do mundo, conhecida por seu temperamento
            amigável, inteligência excepcional e lealdade inquestionável. O
            Labrador Retriever é verdadeiramente um animal para se apaixonar.
          </p>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <ScrollReveal>
              <span className="text-sm font-semibold uppercase tracking-widest text-brown">
                Características Físicas
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold text-black sm:text-4xl">
                Anatomia da <span className="text-brown italic">Raça</span>
              </h2>
            </ScrollReveal>
          </div>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ScrollReveal className="relative flex justify-center">
              <Image 
                src="/images/breed-anatomy.png"
                alt="Anatomia da Raça"
                width={500}
                height={400}
                className="w-full h-full object-cover rounded-2xl"
              />
            </ScrollReveal>
            <ScrollReveal className="reveal-d1 space-y-4">
              <div className="flex items-start gap-4 rounded-2xl bg-beige-light p-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brown/10">
                  <Ruler className="h-5 w-5 text-brown" />
                </div>
                <div>
                  <h4 className="font-bold text-black">Tamanho</h4>
                  <p className="text-sm text-black/55">
                    Machos: 57–62 cm | Fêmeas: 55–60 cm
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl bg-beige-light p-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brown/10">
                  <Activity className="h-5 w-5 text-brown" />
                </div>
                <div>
                  <h4 className="font-bold text-black">Peso</h4>
                  <p className="text-sm text-black/55">
                    Machos: 29–36 kg | Fêmeas: 25–32 kg
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl bg-beige-light p-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brown/10">
                  <Palette className="h-5 w-5 text-brown" />
                </div>
                <div>
                  <h4 className="font-bold text-black">Cores</h4>
                  <p className="text-sm text-black/55">
                    Amarelo, Preto e Chocolate — pelagem dupla densa e
                    resistente à água
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl bg-beige-light p-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brown/10">
                  <Clock className="h-5 w-5 text-brown" />
                </div>
                <div>
                  <h4 className="font-bold text-black">Longevidade</h4>
                  <p className="text-sm text-black/55">
                    10–14 anos com cuidados adequados e nutrição de qualidade
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-beige-light py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <ScrollReveal>
              <span className="text-sm font-semibold uppercase tracking-widest text-brown">
                Personalidade
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold text-black sm:text-4xl">
                Traços de <span className="text-brown italic">Temperamento</span>
              </h2>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {temperament.map((t, i) => (
              <ScrollReveal
                key={t.label}
                className={cn(
                  "card-hover rounded-2xl border border-beige-dark/15 bg-cream p-5 text-center",
                  i === 1 && "reveal-d1",
                  i === 2 && "reveal-d2",
                  i === 3 && "reveal-d3",
                  i === 4 && "reveal-d4",
                )}
              >
                <div className="mb-3 text-3xl">{t.emoji}</div>
                <p className="text-sm font-bold text-black">{t.label}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <ScrollReveal>
              <span className="text-sm font-semibold uppercase tracking-widest text-brown">
                Cuidados Essenciais
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold text-black sm:text-4xl">
                Cuidando do seu <span className="text-brown italic">Labrador</span>
              </h2>
            </ScrollReveal>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            <ScrollReveal className="reveal-d1 rounded-3xl border border-beige-dark/15 bg-white p-8">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100">
                <span className="text-2xl">🥩</span>
              </div>
              <h3 className="font-display text-xl font-bold text-black">Nutrição</h3>
              <p className="mt-3 text-sm leading-relaxed text-black/55">
                Dieta rica em proteína de alta qualidade, adequada para sua idade
                e nível de atividade. Labradores têm tendência ao sobrepeso, então
                o controle de porções é essencial. Sempre disponha água fresca.
              </p>
            </ScrollReveal>
            <ScrollReveal className="reveal-d2 rounded-3xl border border-beige-dark/15 bg-white p-8">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">
                <span className="text-2xl">🏃</span>
              </div>
              <h3 className="font-display text-xl font-bold text-black">Exercício</h3>
              <p className="mt-3 text-sm leading-relaxed text-black/55">
                No mínimo 1 a 2 horas de exercício diário, incluindo passeios,
                nado e brincadeiras. Estimulação mental através de treinamento e
                brinquedos é igualmente importante para esta raça inteligente.
              </p>
            </ScrollReveal>
            <ScrollReveal className="reveal-d3 rounded-3xl border border-beige-dark/15 bg-white p-8">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="font-display text-xl font-bold text-black">Saúde</h3>
              <p className="mt-3 text-sm leading-relaxed text-black/55">
                Consultas veterinárias regulares, vacinações e cuidados
                preventivos. Fique atento a condições específicas da raça como
                displasia de quadril e problemas oculares. Cuidados dentários e
                banho também são essenciais.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-beige-light py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <ScrollReveal>
              <span className="text-sm font-semibold uppercase tracking-widest text-brown">
                Cores e Variedades
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold text-black sm:text-4xl">
                Labradores <span className="text-brown italic">Lindos</span>
              </h2>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
            <ScrollReveal>
              <div
                className="flex aspect-square flex-col items-center justify-center gap-3 rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, #F5E6A3, #D4A85A)",
                }}
              >
                <span className="font-display font-bold text-brown/50">Amarelo</span>
              </div>
            </ScrollReveal>
            <ScrollReveal className="reveal-d1">
              <div
                className="flex aspect-square flex-col items-center justify-center gap-3 rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, #3D3D3D, #1A1A1A)",
                }}
              >
                <span className="font-display font-bold text-white/40">Preto</span>
              </div>
            </ScrollReveal>
            <ScrollReveal className="reveal-d2 col-span-2 lg:col-span-1">
              <div
                className="flex aspect-square flex-col items-center justify-center gap-3 rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, #8B6B4A, #5C3D2E)",
                }}
              >
                <span className="font-display font-bold text-white/40">
                  Chocolate
                </span>
              </div>
            </ScrollReveal>
          </div>
          <div className="mt-12 text-center">
            <Link
              href={routes.dogs}
              className="inline-flex items-center gap-2 font-semibold text-brown hover:gap-3"
            >
              Conheça nossos cães
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
