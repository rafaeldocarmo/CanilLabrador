"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { DogModal } from "@/components/DogModal";
import { PageIntro } from "@/components/PageIntro";
import { cn } from "@/lib/cn";
import {
  placeholderGradientForId,
  reproducerDescription,
  reproducerToModalDetail,
  reproducerTraitTags,
  type DogDetailModalData,
} from "@/lib/reproducer-ui";
import { ageLabelFromBirth } from "@/lib/reproducer-ui";
import type { ReproducerForUi } from "@/lib/sanity/types";

function DogSilhouette({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M40 8c-3 0-5 3-5 7s2 7 5 7 5-3 5-7-2-7-5-7zm-13 6c-2.5 0-4 2-4 5s1.5 5 4 5 4-2 4-5-1.5-5-4-5zm26 0c-2.5 0-4 2-4 5s1.5 5 4 5 4-2 4-5-1.5-5-4-5zM40 25c-8 0-15 6-15 14 0 6 3 10 7 12 2 1 5 2 8 2s6-1 8-2c4-2 7-6 7-12 0-8-7-14-15-14z" />
    </svg>
  );
}

function DogCard({
  dog,
  role,
  onOpen,
}: {
  dog: ReproducerForUi;
  role: "dam" | "sire";
  onOpen: (dog: ReproducerForUi, role: "dam" | "sire") => void;
}) {
  const cover = dog.imageUrls[0];
  const bg = !cover ? placeholderGradientForId(dog._id) : undefined;
  const age = ageLabelFromBirth(dog.dataNascimento) || "—";
  const traits = reproducerTraitTags(dog).slice(0, 3);

  return (
    <button
      type="button"
      className="card-hover w-full cursor-pointer overflow-hidden rounded-3xl border border-beige-dark/15 bg-cream text-left"
      onClick={() => onOpen(dog, role)}
    >
      <div className="flex flex-col md:flex-row">
        <div
          className="img-placeholder relative flex aspect-square items-center justify-center overflow-hidden md:w-2/5 md:aspect-auto md:min-h-[220px]"
          style={bg ? { background: bg } : undefined}
        >
          {cover ? (
            <Image
              src={cover}
              alt={dog.nome}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
              priority={false}
            />
          ) : (
            <DogSilhouette className="h-28 w-28 text-brown/15" />
          )}
        </div>
        <div className="flex flex-col justify-center p-6 sm:p-8 md:w-3/5">
          <div className="mb-2 flex items-center gap-2">
            <span
              className={cn(
                "rounded-full px-3 py-1 text-xs font-bold",
                role === "dam" ? "bg-pink-100 text-pink-700" : "bg-blue-100 text-blue-700",
              )}
            >
              {role === "dam" ? "♀ Matriz" : "♂ Reprodutor"}
            </span>
            <span className="text-xs text-black/40">{age}</span>
          </div>
          <h3 className="font-display text-2xl font-bold text-black">{dog.nome}</h3>
          <p className="mt-2 leading-relaxed text-black/55">{reproducerDescription(dog)}</p>
          {traits.length > 0 ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {traits.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-brown/5 px-3 py-1 text-xs font-medium text-brown"
                >
                  {t}
                </span>
              ))}
            </div>
          ) : null}
          <p className="mt-4 flex items-center gap-1 text-sm font-semibold text-brown">
            Ver perfil completo <ArrowRight className="h-4 w-4" />
          </p>
        </div>
      </div>
    </button>
  );
}

type DogsPageClientProps = {
  matrizes: ReproducerForUi[];
  padreadores: ReproducerForUi[];
};

export function DogsPageClient({ matrizes, padreadores }: DogsPageClientProps) {
  const [tab, setTab] = useState<"dams" | "sires">("dams");
  const [modalDetail, setModalDetail] = useState<DogDetailModalData | null>(null);

  const list = tab === "dams" ? matrizes : padreadores;
  const role = tab === "dams" ? "dam" : "sire";

  return (
    <>
      <PageIntro
        eyebrow="Conheça nossos cães"
        title={
          <>
            Matrizes & <span className="text-brown italic">Reprodutores</span>
          </>
        }
        description="Nossos cães de criação, cuidadosamente escolhidos — campeões em temperamento, saúde e beleza."
      />

      <section className="bg-beige pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex justify-center gap-4">
            <button
              type="button"
              onClick={() => setTab("dams")}
              className={cn(
                "border-b-2 px-8 py-3 font-semibold transition-all",
                tab === "dams"
                  ? "tab-active border-brown text-brown"
                  : "border-transparent text-black/40 hover:text-brown",
              )}
            >
              Matrizes
            </button>
            <button
              type="button"
              onClick={() => setTab("sires")}
              className={cn(
                "border-b-2 px-8 py-3 font-semibold transition-all",
                tab === "sires"
                  ? "tab-active border-brown text-brown"
                  : "border-transparent text-black/40 hover:text-brown",
              )}
            >
              Reprodutores
            </button>
          </div>

          {list.length === 0 ? (
            <p className="rounded-2xl border border-beige-dark/15 bg-cream px-6 py-10 text-center text-black/55">
              {tab === "dams"
                ? "Nenhuma matriz cadastrada no CMS ainda. Adicione documentos do tipo “Matriz” no Sanity Studio."
                : "Nenhum padreador cadastrado no CMS ainda. Adicione documentos do tipo “Padreador” no Sanity Studio."}
            </p>
          ) : (
            <div className="space-y-6">
              {list.map((dog) => (
                <DogCard
                  key={dog._id}
                  dog={dog}
                  role={role}
                  onOpen={(d, r) => setModalDetail(reproducerToModalDetail(d, r))}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <DogModal detail={modalDetail} onClose={() => setModalDetail(null)} />
    </>
  );
}
