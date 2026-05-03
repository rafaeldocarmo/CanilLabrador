import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { routes } from "@/lib/routes";
import { siteConfig } from "@/lib/site-config";

export function AboutSection() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-brown">
              Nossa história
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Nossa <span className="text-brown italic">História</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-black/60">
              {siteConfig.about}
            </p>
            <div className="mt-8 flex flex-wrap gap-8">
              <div>
                <p className="font-display text-3xl font-bold text-brown">
                  Área Verde
                </p>
                <p className="mt-1 text-sm text-black/50">Ambiente Privilegiado</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-brown">Amor</p>
                <p className="mt-1 text-sm text-black/50">Principal Virtude</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-brown">100%</p>
                <p className="mt-1 text-sm text-black/50">Cuidado Veterinário</p>
              </div>
            </div>
            <Link
              href={routes.breed}
              className="mt-8 inline-flex items-center gap-2 font-semibold text-brown transition-all hover:gap-3"
            >
              Conheça mais sobre a raça
              <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>

          <ScrollReveal className="reveal-d1 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="img-placeholder relative flex aspect-[3/4] items-center justify-center overflow-hidden rounded-2xl ">
                <Image
                  src="/images/story1.png"
                  alt=""
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="img-placeholder relative mt-8 flex aspect-[3/4] items-center justify-center overflow-hidden rounded-2xl">
                <Image
                  src="/images/story2.png"
                  alt=""
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-2xl border-2 border-brown/20" />
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-2xl border-2 border-brown/20" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
