import Link from "next/link";
import {
  ArrowRight,
  Heart,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { LogoMark } from "@/components/icons/LogoMark";
import { routes } from "@/lib/routes";
import { siteConfig } from "@/lib/site-config";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-[68vh] overflow-hidden md:min-h-[65vh] lg:min-h-0 lg:py-6 xl:min-h-[72vh] xl:py-0 2xl:min-h-[80vh]">
      <div className="absolute inset-0 bg-gradient-to-br from-beige via-beige-light to-beige-dark" />
      <div className="absolute right-6 top-14 h-48 w-48 rounded-full bg-brown/5 blur-3xl sm:right-10 sm:top-20 sm:h-64 sm:w-64" />
      <div className="absolute bottom-12 left-6 h-56 w-56 rounded-full bg-brown/3 blur-3xl sm:bottom-20 sm:left-10 sm:h-80 sm:w-80" />

      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-10 sm:px-6 sm:pb-12 sm:pt-12 lg:px-8 lg:pb-8 lg:pt-8 xl:pb-16 xl:pt-16">
        <div className="flex justify-center items-center gap-6 sm:gap-7 lg:grid-cols-2 md: gap-0">
          <div className="text-center lg:text-left">
            <div className="anim-fade-up mb-4 inline-flex items-center gap-1.5 rounded-full bg-brown/10 px-2.5 py-1 text-[11px] font-medium text-brown sm:mb-5 sm:gap-2 sm:px-3 sm:py-1.5 sm:text-xs md:text-sm">
              <LogoMark className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4" />
              {siteConfig.established}
            </div>
            <h1 className="anim-fade-up-d1 font-display text-3xl font-bold leading-tight text-black sm:text-4xl md:text-[2.125rem] md:leading-tight lg:text-4xl xl:text-5xl 2xl:text-6xl">
              {siteConfig.hero.headlineLine1}
              <br />
              <span className="text-brown italic">
                {siteConfig.hero.headlineLine2}
              </span>
            </h1>
            <p className="anim-fade-up-d2 mx-auto mt-4 max-w-md text-sm font-light leading-relaxed text-black/60 sm:mt-5 sm:max-w-lg sm:text-base lg:mx-0 lg:mt-4 lg:max-w-md lg:text-sm xl:mt-5 xl:text-base">
              {siteConfig.hero.subheadline}
            </p>
            <div className="anim-fade-up-d3 mt-6 flex flex-col justify-center md:justify-start gap-2.5 sm:mt-7 sm:flex-row sm:gap-3 lg:mt-6 xl:mt-8">
              <Link
                href={routes.contact}
                className="group inline-flex items-center justify-center gap-1.5 rounded-full bg-brown px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-brown/20 transition-all hover:-translate-y-0.5 hover:bg-brown-dark hover:shadow-lg hover:shadow-brown/25 sm:gap-2 sm:px-6 sm:py-3 sm:text-sm xl:px-7 xl:py-3.5 xl:text-base"
              >
                <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden />
                Fale no WhatsApp
              </Link>
              <Link
                href={routes.litters}
                className="group inline-flex items-center justify-center gap-1.5 rounded-full border-2 border-brown/20 bg-white/80 px-5 py-2.5 text-xs font-semibold text-brown transition-all hover:border-brown/40 hover:bg-white sm:gap-2 sm:px-6 sm:py-3 sm:text-sm xl:px-7 xl:py-3.5 xl:text-base"
              >
                Ver nossos filhotes
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[13rem] sm:max-w-[14.5rem] lg:max-w-[18rem]">
            <div className="absolute inset-0 scale-105 rotate-3 rounded-[1.35rem] bg-brown/10 sm:rounded-[1.65rem] xl:rounded-[2rem]" />
            <div className="img-placeholder relative flex aspect-[2/3] items-end justify-center overflow-hidden rounded-[1.25rem] sm:rounded-[1.5rem] xl:rounded-[2rem]">
              <Image
                src="/images/hero-labrador.png"
                alt=""
                width={640}
                height={960}
                sizes="(max-width: 1024px) 56vw, 240px"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="anim-fade-up-d3 absolute -left-2 top-6 flex max-w-[11rem] items-center gap-2 rounded-xl bg-white p-2 shadow-md sm:-left-[150px] sm:top-8 sm:max-w-none sm:gap-2.5 sm:rounded-2xl sm:p-2.5 sm:shadow-lg">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 sm:h-9 sm:w-9">
                <ShieldCheck className="h-4 w-4 text-green-600 sm:h-5 sm:w-5" aria-hidden />
              </div>
              <div className="min-w-0 text-left">
                <p className="text-[10px] font-bold leading-tight text-black sm:text-xs">
                  Exames de saúde
                </p>
                <p className="text-[10px] leading-tight text-black/50 sm:text-xs">
                  Todos os pais certificados
                </p>
              </div>
            </div>

            <div className="anim-fade-up-d4 absolute -right-2 bottom-12 flex max-w-[11rem] items-center gap-2 rounded-xl bg-white p-2 shadow-md sm:-right-[150px] sm:bottom-14 sm:max-w-none sm:gap-2.5 sm:rounded-2xl sm:p-2.5 sm:shadow-lg lg:bottom-12">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 sm:h-9 sm:w-9">
                <Heart className="h-4 w-4 text-amber-600 sm:h-5 sm:w-5" aria-hidden />
              </div>
              <div className="min-w-0 text-left">
                <p className="text-[10px] font-bold leading-tight text-black sm:text-xs">
                  200+ famílias
                </p>
                <p className="text-[10px] leading-tight text-black/50 sm:text-xs">
                  Lares felizes para sempre
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full" aria-hidden>
          <path
            d="M0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 L0 60 Z"
            fill="#FFFDF8"
          />
        </svg>
      </div>
    </section>
  );
}
