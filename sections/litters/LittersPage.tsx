import Image from "next/image";
import Link from "next/link";
import { Car, ClipboardList, MessageCircle, Scan, Syringe } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { routes } from "@/lib/routes";
import { ageLabelFromBirth, placeholderGradientForId } from "@/lib/reproducer-ui";
import type { FilhoteForUi, LitterGroupForUi } from "@/lib/sanity/types";

const info = [
  {
    icon: ClipboardList,
    title: "Reserva",
    body: "Um sinal não reembolsável garante seu filhote. Orientamos você em cada etapa do processo de escolha.",
  },
  {
    icon: Car,
    title: "Retirada",
    body: "Os filhotes vão para casa com 8 semanas, kit de saúde completo, material inicial e orientações de cuidado.",
  },
  {
    icon: Scan,
    title: "Microchip",
    body: "Todos os filhotes são microchipados antes de irem para o novo lar, para identificação e segurança.",
  },
  {
    icon: Syringe,
    title: "Vacinação",
    body: "Primeiras vacinas e vermifugação feitas no cronograma. Histórico veterinário completo entregue.",
  },
];

function ParentCard({
  label,
  labelClass,
  dog,
}: {
  label: string;
  labelClass: string;
  dog: LitterGroupForUi["matriz"];
}) {
  const img = dog?.imageUrls?.[0];
  const bg = !img && dog?._id ? placeholderGradientForId(dog._id) : undefined;
  const age = dog ? ageLabelFromBirth(dog.dataNascimento) : "";
  const subtitle = [dog?.cor, age].filter(Boolean).join(" · ") || "—";

  return (
    <div className="flex items-center gap-4 rounded-2xl bg-beige-light p-4">
      <div
        className="relative flex h-20 w-20 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl"
        style={bg ? { background: bg } : { background: "linear-gradient(135deg, #E8DFD0, #D4C4A8)" }}
      >
        {img && dog ? (
          <Image src={img} alt={dog.nome} fill className="object-cover" sizes="80px" />
        ) : (
          <Image
            src="/images/dog-silhouette.svg"
            alt=""
            width={40}
            height={40}
            className="opacity-40"
          />
        )}
      </div>
      <div>
        <span className={`text-xs font-bold ${labelClass}`}>{label}</span>
        <h4 className="font-display font-bold text-black">{dog?.nome ?? "—"}</h4>
        <p className="text-xs text-black/50">{subtitle}</p>
      </div>
    </div>
  );
}

type LittersPageProps = {
  litters: LitterGroupForUi[];
};

export function LittersPage({ litters }: LittersPageProps) {
  return (
    <>
      <section className="bg-beige pb-10 pt-28 text-center sm:pt-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-brown">
            Ninhadas e filhotes
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold text-black sm:text-5xl">
            Nossos <span className="text-brown italic">filhotes</span>
          </h1>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {litters.length === 0 ? (
            <ScrollReveal className="rounded-3xl border border-beige-dark/15 bg-white p-8 text-center text-black/55 sm:p-12">
              <p className="font-display text-lg font-semibold text-black">
                Nenhuma ninhada no site ainda
              </p>
              <p className="mt-2 text-sm">
                Cadastre filhotes no Sanity Studio (tipo “Filhote”) e vincule matriz e padreador.
                Eles aparecerão aqui agrupados automaticamente por casal.
              </p>
            </ScrollReveal>
          ) : (
            <div className="space-y-16">
              {litters.map((litter, litterIndex) => {
                const mName = litter.matriz?.nome ?? "Matriz";
                const pName = litter.padreador?.nome ?? "Padreador";
                const title = `Ninhada — ${mName} × ${pName}`;
                const count = litter.filhotes.length;

                return (
                  <div key={litter.key}>
                    <ScrollReveal className="mb-8 rounded-3xl border border-beige-dark/15 bg-white p-6 sm:p-10">
                      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                            {count} filhote{count !== 1 ? "s" : ""}
                          </span>
                          <h2 className="mt-2 font-display text-2xl font-bold text-black sm:text-3xl">
                            {title}
                          </h2>
                          <p className="mt-1 text-sm text-black/50">
                            Dados vindos do CMS — matriz e padreador desta ninhada
                          </p>
                        </div>
                      </div>
                      <div className="grid gap-6 sm:grid-cols-2">
                        <ParentCard
                          label="♀ Matriz"
                          labelClass="text-pink-600"
                          dog={litter.matriz}
                        />
                        <ParentCard
                          label="♂ Reprodutor"
                          labelClass="text-blue-600"
                          dog={litter.padreador}
                        />
                      </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                      {litter.filhotes.map((p: FilhoteForUi, i: number) => {
                        const cover = p.imageUrls[0];
                        const bg =
                          !cover && p._id ? placeholderGradientForId(p._id) : undefined;
                        const delayClass =
                          i % 4 === 1
                            ? "reveal-d1"
                            : i % 4 === 2
                              ? "reveal-d2"
                              : i % 4 === 3
                                ? "reveal-d3"
                                : "";

                        return (
                          <ScrollReveal
                            key={p._id}
                            className={litterIndex === 0 ? delayClass : ""}
                          >
                            <div className="card-hover overflow-hidden rounded-2xl border border-beige-dark/15 bg-white">
                              <div
                                className="relative flex aspect-square items-center justify-center overflow-hidden"
                                style={
                                  bg
                                    ? { background: bg }
                                    : {
                                        background:
                                          "linear-gradient(135deg, #F0DFC0, #D4C4A8)",
                                      }
                                }
                              >
                                {cover ? (
                                  <Image
                                    src={cover}
                                    alt={p.nome}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                  />
                                ) : (
                                  <span className="text-4xl" aria-hidden>
                                    🐶
                                  </span>
                                )}
                              </div>
                              <div className="p-4">
                                <h4 className="text-sm font-bold text-black">{p.nome}</h4>
                                {p.numeroFinalMicrochip ? (
                                  <p className="mt-1 text-xs text-black/50">
                                    Chip (final): {p.numeroFinalMicrochip}
                                  </p>
                                ) : (
                                  <p className="mt-1 text-xs text-black/40">Chip —</p>
                                )}
                              </div>
                            </div>
                          </ScrollReveal>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="bg-beige-light py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="reveal mb-10 text-center font-display text-2xl font-bold text-black sm:text-3xl">
            Informações <span className="text-brown italic">importantes</span>
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {info.map((item, i) => {
              const Icon = item.icon;
              const delay =
                i === 0 ? "" : i === 1 ? "reveal-d1" : i === 2 ? "reveal-d2" : "reveal-d3";
              return (
                <ScrollReveal
                  key={item.title}
                  className={`rounded-2xl border border-beige-dark/15 bg-cream p-6 ${delay}`}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brown/10">
                    <Icon className="h-6 w-6 text-brown" />
                  </div>
                  <h3 className="font-bold text-black">{item.title}</h3>
                  <p className="mt-2 text-sm text-black/55">{item.body}</p>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-brown py-16 text-center">
        <div className="mx-auto max-w-xl px-4">
          <h2 className="font-display text-3xl font-bold text-white">
            Interessado em um filhote?
          </h2>
          <p className="mt-4 text-white/70">
            Entre em contato para saber sobre disponibilidade, valores e nosso processo de adoção.
          </p>
          <Link
            href={routes.contact}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-brown shadow-lg transition-all hover:-translate-y-0.5 hover:bg-beige"
          >
            <MessageCircle className="h-5 w-5" />
            Fale no WhatsApp
          </Link>
        </div>
      </section>
    </>
  );
}
