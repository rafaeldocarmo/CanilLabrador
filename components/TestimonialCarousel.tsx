"use client";

import { useCallback, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { testimonials } from "@/lib/data/testimonials";
import { cn } from "@/lib/cn";

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const count = testimonials.length;

  const move = useCallback(
    (dir: number) => {
      setIndex((i) => (i + dir + count) % count);
    },
    [count],
  );

  const goTo = useCallback((i: number) => setIndex(i), []);

  return (
    <section className="relative overflow-hidden bg-brown py-20 sm:py-28">
      <div className="absolute inset-0 opacity-5" aria-hidden>
        <svg className="h-full w-full" viewBox="0 0 400 400">
          <pattern
            id="paws"
            x="0"
            y="0"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M40 10c-2 0-3.5 2-3.5 5s1.5 5 3.5 5 3.5-2 3.5-5-1.5-5-3.5-5zm-9 4c-1.5 0-2.5 1.5-2.5 3.5s1 3.5 2.5 3.5 2.5-1.5 2.5-3.5-1-3.5-2.5-3.5zm18 0c-1.5 0-2.5 1.5-2.5 3.5s1 3.5 2.5 3.5 2.5-1.5 2.5-3.5-1-3.5-2.5-3.5zM40 22c-5 0-9 3.5-9 8s2 5 9 5 9 0 9-5-4-8-9-8z"
              fill="white"
            />
          </pattern>
          <rect width="400" height="400" fill="url(#paws)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <ScrollReveal>
          <span className="text-sm font-semibold uppercase tracking-widest text-white/60">
            Depoimentos
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Famílias <span className="italic">Felizes</span>
          </h2>
        </ScrollReveal>

        <div className="relative mt-12 overflow-hidden">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((t) => (
              <div key={t.id} className="carousel-slide px-4">
                <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur sm:p-10">
                  <div className="mb-4 flex justify-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-amber-300 text-amber-300"
                        aria-hidden
                      />
                    ))}
                  </div>
                  <p className="text-lg italic leading-relaxed text-white/90">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="mt-6 font-semibold text-white">— {t.author}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-3">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20"
              onClick={() => move(-1)}
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  className={cn(
                    "h-2.5 rounded-full bg-white/30 transition-all",
                    i === index ? "w-6 bg-white" : "w-2.5",
                  )}
                  onClick={() => goTo(i)}
                  aria-label={`Depoimento ${i + 1}`}
                  aria-current={i === index}
                />
              ))}
            </div>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20"
              onClick={() => move(1)}
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
