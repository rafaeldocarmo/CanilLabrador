"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";
import {
  galleryItems,
  type GalleryCategory,
} from "@/lib/data/gallery";
import { cn } from "@/lib/cn";

const filters: { id: GalleryCategory | "all"; label: string }[] = [
  { id: "all", label: "Todas" },
  { id: "puppies", label: "Filhotes" },
  { id: "adults", label: "Adultos" },
  { id: "family", label: "Família" },
];

export function GalleryClient() {
  const [filter, setFilter] = useState<GalleryCategory | "all">("all");
  const [lightbox, setLightbox] = useState<{
    bg: string;
    label: string;
  } | null>(null);

  const items = useMemo(() => {
    if (filter === "all") return galleryItems;
    return galleryItems.filter((g) => g.cat === filter);
  }, [filter]);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  useEffect(() => {
    if (lightbox) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  const open = useCallback((bg: string, label: string) => {
    setLightbox({ bg, label });
  }, []);

  return (
    <>
      <section className="bg-beige pb-4">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-2 px-4 sm:px-6 lg:px-8">
          {filters.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => setFilter(id)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-all",
                filter === id
                  ? "bg-brown text-white"
                  : "bg-brown/10 text-brown hover:bg-brown/20",
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      <section className="bg-cream py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {items.map((item, i) => {
              const aspect = i % 3 === 0 ? "aspect-[3/4]" : "aspect-square";
              return (
                <button
                  key={item.id}
                  type="button"
                  className={cn(
                    "flex cursor-pointer items-center justify-center overflow-hidden rounded-2xl transition-all hover:scale-[1.02] hover:shadow-lg",
                    aspect,
                  )}
                  style={{ background: item.bg }}
                  onClick={() => open(item.bg, item.label)}
                  aria-label={`Abrir imagem da galeria ${item.label}`}
                >
                  <span className="text-5xl opacity-40" aria-hidden>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          className="lightbox fixed inset-0 z-[100] flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Visualização ampliada"
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            aria-label="Fechar"
            onClick={() => setLightbox(null)}
          />
          <button
            type="button"
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-white/20"
            onClick={() => setLightbox(null)}
            aria-label="Fechar"
          >
            <X className="h-6 w-6 text-white" />
          </button>
          <div
            className="img-placeholder relative z-10 mx-4 flex aspect-[4/3] w-full max-w-3xl items-center justify-center rounded-2xl"
            style={{ background: lightbox.bg }}
          >
            <span className="text-8xl opacity-30" aria-hidden>
              {lightbox.label}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
