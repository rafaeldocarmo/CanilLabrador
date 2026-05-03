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
    <section className="relative min-h-0 w-full overflow-x-clip pb-6 pt-2 sm:min-h-[62vh] sm:pb-10 sm:pt-6 md:min-h-[65vh] lg:min-h-0 lg:py-6 xl:min-h-[72vh] xl:py-0 2xl:min-h-[80vh]">
      <div className="absolute inset-0 bg-gradient-to-br from-beige via-beige-light to-beige-dark" />
      <div
        className="pointer-events-none absolute right-6 top-14 h-48 w-48 rounded-full bg-brown/5 blur-3xl sm:right-10 sm:top-20 sm:h-64 sm:w-64"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-12 left-6 h-56 w-56 rounded-full bg-brown/3 blur-3xl sm:bottom-20 sm:left-10 sm:h-80 sm:w-80"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-4 sm:px-6 sm:pb-12 sm:pt-10 lg:px-8 lg:pb-8 lg:pt-8 xl:pb-16 xl:pt-16">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-8 lg:gap-x-10 xl:gap-x-14">
          <div className="min-w-0 text-center lg:max-w-xl lg:text-left xl:max-w-none">
            <div className="anim-fade-up mb-4 inline-flex items-center gap-1.5 rounded-full bg-brown/10 px-2.5 py-1 text-[11px] font-medium text-brown sm:mb-5 sm:gap-2 sm:px-3 sm:py-1.5 sm:text-xs md:text-sm">
              <LogoMark className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4" />
              {siteConfig.established}
            </div>
            <h1 className="anim-fade-up-d1 font-display text-[1.65rem] font-bold leading-[1.15] tracking-tight text-black min-[400px]:text-[1.85rem] sm:text-4xl md:text-[2.125rem] md:leading-tight lg:text-4xl xl:text-5xl 2xl:text-6xl">
              {siteConfig.hero.headlineLine1}
              <br />
              <span className="text-brown italic">
                {siteConfig.hero.headlineLine2}
              </span>
            </h1>
            <p className="anim-fade-up-d2 mx-auto mt-3 max-w-[22rem] text-[0.9375rem] font-light leading-relaxed text-black/60 sm:mt-5 sm:max-w-lg sm:text-base lg:mx-0 lg:mt-4 lg:max-w-md lg:text-sm xl:mt-5 xl:text-base">
              {siteConfig.hero.subheadline}
            </p>
            <div className="anim-fade-up-d3 mx-auto mt-5 flex w-full max-w-[22rem] flex-col justify-center gap-2.5 sm:mt-7 sm:max-w-lg sm:flex-row sm:gap-3 lg:mx-0 lg:mt-6 lg:max-w-none lg:justify-start xl:mt-8 [&>a]:min-h-11 [&>a]:sm:min-h-0">
              <Link
                href={routes.contact}
                className="group inline-flex w-full min-w-0 items-center justify-center gap-1.5 rounded-full bg-brown px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-brown/20 transition-all hover:-translate-y-0.5 hover:bg-brown-dark hover:shadow-lg hover:shadow-brown/25 sm:w-auto sm:gap-2 sm:px-6 sm:py-3 sm:text-sm xl:px-7 xl:py-3.5 xl:text-base"
              >
                <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden />
                Fale no WhatsApp
              </Link>
              <Link
                href={routes.litters}
                className="group inline-flex w-full min-w-0 items-center justify-center gap-1.5 rounded-full border-2 border-brown/20 bg-white/80 px-5 py-2.5 text-xs font-semibold text-brown transition-all hover:border-brown/40 hover:bg-white sm:w-auto sm:gap-2 sm:px-6 sm:py-3 sm:text-sm xl:px-7 xl:py-3.5 xl:text-base"
              >
                Ver nossos filhotes
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full min-w-0 max-w-[26rem] shrink-0 sm:max-w-lg lg:max-w-[28rem]">
            <div className="relative mx-auto w-full max-w-[20rem] sm:max-w-[20rem] lg:max-w-none">
              <div className="absolute inset-0 scale-105 rotate-3 rounded-[1.35rem] bg-brown/10 sm:rounded-[1.65rem] xl:rounded-[2rem]" />
              <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-[1.25rem] bg-beige/40 sm:rounded-[1.5rem] xl:rounded-[2rem]">
                <Image
                  src="/images/hero-novo.png"
                  alt=""
                  width={1024}
                  height={1024}
                  sizes="(max-width: 480px) 90vw, (max-width: 1024px) 50vw, 448px"
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>

            <div className="relative z-10 mx-auto mt-7 flex w-full max-w-[20rem] flex-row items-stretch justify-center gap-2 sm:mt-5 sm:max-w-none sm:gap-3 lg:contents lg:mt-0">
              <div className="anim-fade-up-d3 flex min-w-0 flex-1 items-center gap-1.5 rounded-xl bg-white p-2 shadow-md sm:gap-2 sm:rounded-2xl sm:p-2.5 sm:shadow-lg lg:absolute lg:mt-0 lg:min-w-0 lg:w-auto lg:flex-none lg:max-w-none lg:-left-12 lg:top-8 xl:-left-[100px]">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 sm:h-9 sm:w-9">
                  <ShieldCheck className="h-4 w-4 text-green-600 sm:h-5 sm:w-5" aria-hidden />
                </div>
                <div className="min-w-0 text-left lg:max-w-none">
                  <p className="text-[10px] font-bold leading-tight text-black sm:text-xs">
                    Exames de saúde
                  </p>
                  <p className="text-[10px] leading-tight text-black/50 sm:text-xs">
                    Todos os pais certificados
                  </p>
                </div>
              </div>

              <div className="anim-fade-up-d4 flex min-w-0 flex-1 items-center gap-1.5 rounded-xl bg-white p-2 shadow-md sm:gap-2 sm:rounded-2xl sm:p-2.5 sm:shadow-lg lg:absolute lg:mt-0 lg:min-w-0 lg:w-auto lg:flex-none lg:max-w-none lg:-right-12 lg:bottom-12 xl:-right-[100px]">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 sm:h-9 sm:w-9">
                  <Heart className="h-4 w-4 text-amber-600 sm:h-5 sm:w-5" aria-hidden />
                </div>
                <div className="min-w-0 text-left lg:max-w-none">
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
      </div>

      <div className="absolute bottom-0 left-0 right-0 leading-[0]">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          className="block w-full translate-y-px text-cream"
          aria-hidden
        >
          <path
            d="M0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 L0 60 Z"
            className="fill-current"
          />
        </svg>
      </div>
    </section>
  );
}
