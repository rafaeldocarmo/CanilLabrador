"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react";
import type { DogDetailModalData } from "@/lib/reproducer-ui";
import { placeholderGradientForId } from "@/lib/reproducer-ui";
import { cn } from "@/lib/cn";

type DogModalProps = {
  detail: DogDetailModalData | null;
  onClose: () => void;
};

export function DogModal({ detail, onClose }: DogModalProps) {
  const [slide, setSlide] = useState(0);

  const slideCount = detail
    ? Math.max(1, detail.imageUrls.length || 1)
    : 0;

  useEffect(() => {
    if (detail) {
      setSlide(0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [detail]);

  useEffect(() => {
    if (!detail) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [detail, onClose]);

  const move = useCallback(
    (dir: number) => {
      setSlide((s) => (s + dir + slideCount) % slideCount);
    },
    [slideCount],
  );

  if (!detail) return null;

  const hasPhotos = detail.imageUrls.length > 0;

  return (
    <div
      className="fixed inset-0 z-[100]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dog-modal-title"
    >
      <button
        type="button"
        className="modal-overlay absolute inset-0 cursor-default"
        aria-label="Fechar janela"
        onClick={onClose}
      />
      <div className="relative z-10 flex min-h-full items-center justify-center p-4">
        <div className="anim-scale-in max-h-[85%] w-full max-w-2xl overflow-auto rounded-3xl bg-cream shadow-2xl">
          <div className="sticky top-0 z-10 flex items-center justify-between rounded-t-3xl border-b border-beige-dark/15 bg-cream/95 px-6 py-4 backdrop-blur">
            <h3
              id="dog-modal-title"
              className="font-display text-xl font-bold text-black"
            >
              {detail.nome}
            </h3>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-beige transition-all hover:bg-beige-dark/30"
              onClick={onClose}
              aria-label="Fechar"
            >
              <X className="h-5 w-5 text-black/60" />
            </button>
          </div>

          <div className="relative overflow-hidden">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${slide * 100}%)` }}
            >
              {hasPhotos ? (
                detail.imageUrls.map((src, i) => (
                  <div key={`${src}-${i}`} className="carousel-slide">
                    <div className="relative aspect-[16/10] w-full bg-beige-light">
                      <Image
                        src={src}
                        alt={i === 0 ? detail.nome : `${detail.nome} — foto ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 672px"
                      />
                    </div>
                  </div>
                ))
              ) : (
                <div className="carousel-slide">
                  <div
                    className="img-placeholder relative flex aspect-[16/10] items-center justify-center"
                    style={{
                      background: placeholderGradientForId(detail.nome),
                    }}
                  >
                    <Image
                      src="/images/dog-silhouette.svg"
                      alt=""
                      width={128}
                      height={128}
                      className="opacity-40"
                    />
                  </div>
                </div>
              )}
            </div>
            {slideCount > 1 ? (
              <>
                <button
                  type="button"
                  className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-lg transition-all hover:bg-white"
                  onClick={() => move(-1)}
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-lg transition-all hover:bg-white"
                  onClick={() => move(1)}
                  aria-label="Próxima imagem"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
                  {Array.from({ length: slideCount }).map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      className={cn(
                        "h-2 w-2 rounded-full transition-all",
                        i === slide ? "bg-brown" : "bg-brown/30",
                      )}
                      onClick={() => setSlide(i)}
                      aria-label={`Imagem ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            ) : null}
          </div>

          <div className="space-y-4 p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span
                className={cn(
                  "rounded-full px-3 py-1 text-xs font-bold",
                  detail.isDam ? "bg-pink-100 text-pink-700" : "bg-blue-100 text-blue-700",
                )}
              >
                {detail.roleLabel}
              </span>
              <span className="text-sm text-black/50">
                {detail.ageText} · {detail.colorLine}
              </span>
            </div>
            <p className="leading-relaxed text-black/65">{detail.description}</p>
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-xl bg-beige-light p-3 text-center">
                <p className="text-xs text-black/40">RG</p>
                <p className="text-sm font-bold leading-tight text-black">{detail.statRg}</p>
              </div>
              <div className="rounded-xl bg-beige-light p-3 text-center">
                <p className="text-xs text-black/40">Microchip</p>
                <p className="text-[10px] font-bold leading-tight text-black">
                  {detail.statMicrochip}
                </p>
              </div>
              <div className="rounded-xl bg-beige-light p-3 text-center">
                <p className="text-xs text-black/40">Nascimento</p>
                <p className="text-[10px] font-bold leading-tight text-black">
                  {detail.statBirth}
                </p>
              </div>
            </div>
            {detail.laudoUrl ? (
              <a
                href={detail.laudoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brown underline-offset-2 hover:underline"
              >
                <ExternalLink className="h-4 w-4" />
                Ver laudo de displasia
              </a>
            ) : null}
            {detail.traitTags.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {detail.traitTags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-brown/10 px-3 py-1 text-xs font-medium text-brown"
                  >
                    {t}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
